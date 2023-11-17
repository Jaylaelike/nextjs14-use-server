"use server";

import { revalidatePath } from "next/cache";

export const createFrom =  async function(formData: FormData) {
  console.log(formData.get("name"));

  const name = formData.get("name");
  const mysql = require("mysql2/promise.js");

  // create the connection to database
  const connection = await mysql.createConnection({
    host: "192.168.1.198",
    user: "root",
    database: "test",
    password: "1234",
    port: 33061,
  });

  const [rows, fields] = await connection.execute(
    `INSERT INTO mytable (name) VALUES (?)`,
    [name]
  );
  console.log(rows);

  revalidatePath("/");
}
