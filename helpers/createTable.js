const { getPool } = require("./createPool")

function createTable() {
    return new Promise(async (resolve, reject) => {
        const sqlQuery = `
            CREATE TABLE IF NOT EXISTS
                url_shortener (
                    short_url varchar(50) NOT NULL,
                    url varchar(255) NOT NULL,
                    PRIMARY KEY (short_url)
                )
        `;

        let conn;
        try {
            conn = await getPool();
            await conn.query(sqlQuery);
            resolve(); 
        } catch (error) {
            console.error("Error creating table:", error);
            reject(error); 
        }
    });
}

module.exports = createTable;