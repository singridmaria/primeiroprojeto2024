import mysql from "mysql2/promise";

const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Dg@2024",
    database: "portfolio",
    insecureAuth: true,
    authPlugins: {
      mysql_clear_password: () => () => {
        return Buffer.from(password + '\0')
      }
    }
});

export {connection};