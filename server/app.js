const { Pool } = require("pg");
const { v4: uuidv4 } = require("uuid");

var accountValues = Array(3);

async function retryTxn(n, max, client, operation, callback) {
  const backoffInterval = 100; // millis
  const maxTries = 5;
  let tries = 0;

  while (true) {
    await client.query('BEGIN;');

    tries++;

    try {
      const result = await operation(client, callback);
      await client.query('COMMIT;');
      return result;
    } catch (err) {
      await client.query('ROLLBACK;');

      if (err.code !== '40001' || tries == maxTries) {
        throw err;
      } else {
        console.log('Transaction failed. Retrying.');
        console.log(err.message);
        await new Promise(r => setTimeout(r, tries * backoffInterval));
      }
    }
  }
}

async function initTable(client, callback) {
  let i = 0;
  while (i < accountValues.length) {
    accountValues[i] = await uuidv4();
    i++;
  }

  const insertStatement =
    "INSERT INTO nios_courses (id, title) VALUES ($1, 1000), ($2, 250), ($3, 0);";
  await client.query(insertStatement, accountValues, callback);

  const selectBalanceStatement = "SELECT id, title, url FROM nios_courses;";
  await client.query(selectBalanceStatement, callback);
}

async function insertContents(client, callback) {
  const title = accountValues[0];
  const url = accountValues[1];

  const insertNIOSCourses =
    "INSERT INTO `event_teams`(`title`, `url`) VALUES ('" + title + "','" + url + "')";
  const updateFromValues = [1, 100];
  await client.query(insertNIOSCourses, updateFromValues, callback);

  const selectBalanceStatement = "SELECT id, title, url FROM nios_courses;";
  await client.query(selectBalanceStatement, callback);
}
async function deleteCourses(client, callback) {
  const deleteStatement = "DELETE FROM nios_courses WHERE id = $1;";
  await client.query(deleteStatement, [accountValues[2]], callback);

  const selectBalanceStatement = "SELECT id, title, url FROM nios_courses;";
  await client.query(selectBalanceStatement, callback);
}

// Run the transactions in the connection pool
(async () => {
  const connectionString = process.env.DATABASE_URL;
  const pool = new Pool({
    connectionString,
    application_name: "$ docs_simplecrud_node-postgres",
  });
  const client = await pool.connect();

  // Callback
  function cb(err, res) {
    if (err) throw err;

    if (res.rows.length > 0) {
      console.log("New nios courses:");
      res.rows.forEach((row) => {
        console.log(row);
      });
    }
  }

  console.log("Initializing nios_courses table...");
  await retryTxn(0, 15, client, initTable, cb);

  console.log("Inserting scrapped contents from nios...");
  await retryTxn(0, 15, client, insertContents, cb);

  console.log("Deleting a row...");
  await retryTxn(0, 15, client, deleteCourses, cb);

  process.exit();
})().catch((err) => console.log(err.stack));
