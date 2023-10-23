module.exports = class Data1684727999212 {
    name = 'Data1684727999212'

    async up(db) {
        await db.query(`ALTER TABLE "history_element_call" ALTER COLUMN "module" SET NOT NULL`)
        await db.query(`ALTER TABLE "history_element_call" ALTER COLUMN "method" SET NOT NULL`)
        await db.query(`ALTER TABLE "history_element_call" ALTER COLUMN "data" SET NOT NULL`)
    }

    async down(db) {
        await db.query(`ALTER TABLE "history_element_call" ALTER COLUMN "module" DROP NOT NULL`)
        await db.query(`ALTER TABLE "history_element_call" ALTER COLUMN "method" DROP NOT NULL`)
        await db.query(`ALTER TABLE "history_element_call" ALTER COLUMN "data" DROP NOT NULL`)
    }
}
