import connection from "../database/database.js";

async function createAccount(name: string, email: string, password: string) {
  const response = await connection.query(
    `
    INSERT INTO users (name, email, password) VALUES ($1, $2, $3)
    `,
    [name, email, password]
  );
  return response.rows;
}

async function hasUserWithEmail(email: string) {
  const response = await connection.query(
    `
        SELECT * FROM users WHERE email = $1;
    `,
    [email]
  );
  return response.rows;
}

async function createSession(userid: number, token: string) {
  const response = await connection.query(
    `
    INSERT INTO sessions ("userid", token) VALUES ($1, $2)
    `,
    [userid, token]
  );
  return response;
}

async function selectSpecifyToken(userid: number) {
  const response = await connection.query(
    `
    SELECT * FROM sessions WHERE userid = $1 AND "active" = true;
    `,
    [userid]
  );
  return response.rows;
}

async function updateToken(token: string, userid: number) {
  const response = await connection.query(
    `UPDATE sessions SET token=$1 WHERE userid = $2`,
    [token, userid]
  );
  return response;
}

export {
  createAccount,
  hasUserWithEmail,
  createSession,
  selectSpecifyToken,
  updateToken,
};
