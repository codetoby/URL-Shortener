const crypto = require('crypto');
const { getPool } = require("./createPool");
const { log } = require('console');

class Shortener {
    static connPool;

    static async createConnectionPool() {
        if (!this.connPool) {
            this.connPool = await getPool();
        }
        return this.connPool;
    }

    static async generateId(url) {
        const conn = await this.createConnectionPool();

        const check = await conn.query("SELECT short_url FROM url_shortener WHERE url = ?", [url])
        if (check.length === 1) {
            return check[0].short_url
        }

        const hash = crypto.createHash('sha256');
        hash.update(url);
        const fullHash = hash.digest('hex');
        const id = fullHash.slice(0, 8);
        await conn.query("INSERT INTO url_shortener (short_url, url) VALUES(?, ?)", [id, url]);
        return id;
    }

    static async getRedirect(id) {
        const conn = await this.createConnectionPool();
        const [rows] = await conn.query("SELECT url FROM url_shortener WHERE short_url = ?", [id]);

        return rows.url;
    }

    static async isValid(id) {
        const conn = await this.createConnectionPool();
        const [result] = await conn.query("SELECT COUNT(*) as count FROM url_shortener WHERE short_url = ?", [id]);
        ret
        
        return result.count === 1n;
    }
}


module.exports = Shortener