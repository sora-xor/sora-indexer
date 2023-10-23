module.exports = class Data1697491054518 {
    name = 'Data1697491054518'

    async up(db) {
        await db.query(`ALTER TABLE "asset" ADD "liquidity_usd" text`)
        await db.query(`ALTER TABLE "asset" ADD "price_change_day" text`)
        await db.query(`ALTER TABLE "asset" ADD "price_change_week" text`)
        await db.query(`ALTER TABLE "asset" ADD "volume_day_usd" text`)
        await db.query(`ALTER TABLE "asset" ADD "volume_week_usd" text`)
        await db.query(`ALTER TABLE "asset" ADD "velocity" integer`)
    }

    async down(db) {
        await db.query(`ALTER TABLE "asset" DROP COLUMN "liquidity_usd"`)
        await db.query(`ALTER TABLE "asset" DROP COLUMN "price_change_day"`)
        await db.query(`ALTER TABLE "asset" DROP COLUMN "price_change_week"`)
        await db.query(`ALTER TABLE "asset" DROP COLUMN "volume_day_usd"`)
        await db.query(`ALTER TABLE "asset" DROP COLUMN "volume_week_usd"`)
        await db.query(`ALTER TABLE "asset" DROP COLUMN "velocity"`)
    }
}
