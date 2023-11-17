"use server";
import mysql from "mysql2/promise";

export const fetchData = async function () {
  // create the connection to database
  const connection = await mysql.createConnection({
    host: "192.168.1.198",
    user: "root",
    database: "test",
    password: "1234",
    port: 33061,
  });

  // execute a SELECT query to fetch the data
  const [rows, fields] = await connection.execute(
    `SELECT * FROM mytable ORDER BY id DESC`
  );

  // return the fetched data

  console.log(rows);

  return rows;
};
