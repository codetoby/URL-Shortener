const { getPool } = require("../helpers/createPool");
const Shortener = require("../helpers/short.helpers");


describe("Tests for Shortener Class", () => {

    const url = "https://google.com"
    let id;

    test("generateId", async () => {
        id = await Shortener.generateId(url)
        expect(id).toHaveLength(8)
    })

    test("getRedirect", async () => {
        const redirectUrl = await Shortener.getRedirect(id)
        expect(redirectUrl).toEqual(url);
    })

    test("isValid", async () => {
        const isValid = await Shortener.isValid(id);
        expect(isValid).toBe(true);
    })

    afterAll(async () => {
        let conn = await getPool();
        await conn.query("DELETE FROM url_shortener WHERE short_url = ?", [id])
    });


})