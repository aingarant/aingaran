import { Client } from "pg";

const pgdb = new Client({
  host: "my.database-server.com",
  port: 5334,
  user: "database-user",
  password: "secretpassword!!",
});

pgdb.connect();

export default pgdb;
