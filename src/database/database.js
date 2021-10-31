import pg from "pg";

const { Pool } = pg;

console.log(process.env.DB_DATABASE);

const connection = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

export default connection;
