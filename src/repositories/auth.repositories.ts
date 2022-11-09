import connection from "../database/database.js";

async function createAccount() {
  const response = await connection.query(`
    INSERT INTO users (name, email, password) VALUES ('teste', 'teste@gmail.com', '123')
    `);
  return response;
}

async function hasUserWithEmail(email: string) {
  const response = await connection.query(
    `
        SELECT * FROM users WHERE email = $1;
    `,
    [email]
  );
  return response;
}

export { createAccount, hasUserWithEmail };
