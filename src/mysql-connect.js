import mysql from "mysql2/promise";

const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Dg@2024",
    database: "portfolio"
});

export {connection};