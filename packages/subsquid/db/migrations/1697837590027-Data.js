module.exports = class Data1697837590027 {
    name = 'Data1697837590027'

    async up(db) {
        await db.query(`ALTER TABLE "history_element" ADD "type" character varying(5) NOT NULL`)
        await db.query(`ALTER TABLE "history_element" ALTER COLUMN "network_fee" DROP NOT NULL`)
    }

    async down(db) {
        await db.query(`ALTER TABLE "history_element" DROP COLUMN "type"`)
        await db.query(`ALTER TABLE "history_element" ALTER COLUMN "network_fee" SET NOT NULL`)
    }
}
