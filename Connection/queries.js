const { Client } = require("pg");

const client = new Client({
  user: "demo",
  host: "127.0.0.1",
  database: "shiba",
  password: "shiba",
  port: 5432,
});

client.connect();
