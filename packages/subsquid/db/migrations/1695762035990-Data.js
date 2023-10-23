module.exports = class Data1695762035990 {
    name = 'Data1695762035990'

    async up(db) {
        await db.query(`ALTER TABLE "staking_era" ALTER COLUMN "end_block" DROP NOT NULL`)
    }

    async down(db) {
        await db.query(`ALTER TABLE "staking_era" ALTER COLUMN "end_block" SET NOT NULL`)
    }
}
