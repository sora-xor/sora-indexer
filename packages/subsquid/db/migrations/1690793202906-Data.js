module.exports = class Data1690793202906 {
    name = 'Data1690793202906'

    async up(db) {
        await db.query(`CREATE INDEX "IDX_8c8b662ca41ca4d3af055c3a8d" ON "history_element" ("data_to") `)
        await db.query(`CREATE INDEX "IDX_d6296b368ab6f659bdc412d2cf" ON "history_element" ("data_from") `)
    }

    async down(db) {
        await db.query(`DROP INDEX "public"."IDX_8c8b662ca41ca4d3af055c3a8d"`)
        await db.query(`DROP INDEX "public"."IDX_d6296b368ab6f659bdc412d2cf"`)
    }
}
