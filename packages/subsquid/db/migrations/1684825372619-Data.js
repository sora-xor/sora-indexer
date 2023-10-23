module.exports = class Data1684825372619 {
    name = 'Data1684825372619'

    async up(db) {
        await db.query(`ALTER TABLE "network_stats" ADD "updated_at_block" integer NOT NULL`)
        await db.query(`ALTER TABLE "network_snapshot" ADD "updated_at_block" integer NOT NULL`)
        await db.query(`ALTER TABLE "asset_snapshot" ADD "updated_at_block" integer NOT NULL`)
        await db.query(`ALTER TABLE "pool_xyk" ADD "updated_at_block" integer NOT NULL`)
        await db.query(`ALTER TABLE "asset" ADD "updated_at_block" integer NOT NULL`)
        await db.query(`ALTER TABLE "history_element_call" ADD "updated_at_block" integer NOT NULL`)
        await db.query(`ALTER TABLE "history_element" ADD "updated_at_block" integer NOT NULL`)
        await db.query(`ALTER TABLE "account" ADD "updated_at_block" integer NOT NULL`)
        await db.query(`ALTER TABLE "referrer_reward" ADD "updated_at_block" integer NOT NULL`)
    }

    async down(db) {
        await db.query(`ALTER TABLE "network_stats" DROP COLUMN "updated_at_block"`)
        await db.query(`ALTER TABLE "network_snapshot" DROP COLUMN "updated_at_block"`)
        await db.query(`ALTER TABLE "asset_snapshot" DROP COLUMN "updated_at_block"`)
        await db.query(`ALTER TABLE "pool_xyk" DROP COLUMN "updated_at_block"`)
        await db.query(`ALTER TABLE "asset" DROP COLUMN "updated_at_block"`)
        await db.query(`ALTER TABLE "history_element_call" DROP COLUMN "updated_at_block"`)
        await db.query(`ALTER TABLE "history_element" DROP COLUMN "updated_at_block"`)
        await db.query(`ALTER TABLE "account" DROP COLUMN "updated_at_block"`)
        await db.query(`ALTER TABLE "referrer_reward" DROP COLUMN "updated_at_block"`)
    }
}
