module.exports = class Data1690791054011 {
    name = 'Data1690791054011'

    async up(db) {
        await db.query(`CREATE TABLE "staking_reward" ("id" character varying NOT NULL, "account" text NOT NULL, "amount" numeric NOT NULL, "updated_at_block" integer NOT NULL, CONSTRAINT "PK_63b6754f195dbb71232f598485b" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_b7d08bee0ea26a31a90058161d" ON "staking_reward" ("account") `)
        await db.query(`ALTER TABLE "history_element" ADD "data_to" text`)
        await db.query(`ALTER TABLE "history_element" ADD "data_from" text`)
    }

    async down(db) {
        await db.query(`DROP TABLE "staking_reward"`)
        await db.query(`DROP INDEX "public"."IDX_b7d08bee0ea26a31a90058161d"`)
        await db.query(`ALTER TABLE "history_element" DROP COLUMN "data_to"`)
        await db.query(`ALTER TABLE "history_element" DROP COLUMN "data_from"`)
    }
}
