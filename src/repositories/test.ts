import connection from "../database/database.js";

async function test() {
  const response = await connection.query(`SELECT * FROM status;`);
  return response;
}

export { test };
