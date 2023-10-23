module.exports = class Data1686205138864 {
    name = 'Data1686205138864'

    async up(db) {
        await db.query(`ALTER TABLE "history_element" ADD "call_names" text array NOT NULL`)
    }

    async down(db) {
        await db.query(`ALTER TABLE "history_element" DROP COLUMN "call_names"`)
    }
}
