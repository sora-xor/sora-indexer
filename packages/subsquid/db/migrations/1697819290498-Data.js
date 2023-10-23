module.exports = class Data1697819290498 {
    name = 'Data1697819290498'

    async up(db) {
        await db.query(`ALTER TABLE "staking_era" DROP COLUMN "start_block"`)
        await db.query(`ALTER TABLE "staking_era" DROP COLUMN "end_block"`)
        await db.query(`ALTER TABLE "staking_era" ADD "start" numeric NOT NULL`)
        await db.query(`CREATE INDEX "IDX_3b3f79997b32e6465ce1bd3617" ON "staking_era" ("start") `)
    }

    async down(db) {
        await db.query(`ALTER TABLE "staking_era" ADD "start_block" numeric NOT NULL`)
        await db.query(`ALTER TABLE "staking_era" ADD "end_block" numeric`)
        await db.query(`ALTER TABLE "staking_era" DROP COLUMN "start"`)
        await db.query(`DROP INDEX "public"."IDX_3b3f79997b32e6465ce1bd3617"`)
    }
}
