module.exports = class Data1697709363456 {
    name = 'Data1697709363456'

    async up(db) {
        await db.query(`DROP INDEX "public"."IDX_b7d08bee0ea26a31a90058161d"`)
        await db.query(`ALTER TABLE "staking_reward" DROP COLUMN "account"`)
        await db.query(`ALTER TABLE "staking_staker" ADD "payee_type" character varying(10) NOT NULL`)
        await db.query(`ALTER TABLE "staking_staker" ADD "payee" text`)
        await db.query(`ALTER TABLE "staking_staker" ADD "controller" text`)
        await db.query(`ALTER TABLE "staking_reward" ADD "payee" text`)
        await db.query(`ALTER TABLE "staking_reward" DROP COLUMN "amount"`)
        await db.query(`ALTER TABLE "staking_reward" ADD "amount" text NOT NULL`)
        await db.query(`CREATE INDEX "IDX_e5cbe66faacd0f02162b36158e" ON "staking_reward" ("payee") `)
    }

    async down(db) {
        await db.query(`CREATE INDEX "IDX_b7d08bee0ea26a31a90058161d" ON "staking_reward" ("account") `)
        await db.query(`ALTER TABLE "staking_reward" ADD "account" text NOT NULL`)
        await db.query(`ALTER TABLE "staking_staker" DROP COLUMN "payee_type"`)
        await db.query(`ALTER TABLE "staking_staker" DROP COLUMN "payee"`)
        await db.query(`ALTER TABLE "staking_staker" DROP COLUMN "controller"`)
        await db.query(`ALTER TABLE "staking_reward" DROP COLUMN "payee"`)
        await db.query(`ALTER TABLE "staking_reward" ADD "amount" numeric NOT NULL`)
        await db.query(`ALTER TABLE "staking_reward" DROP COLUMN "amount"`)
        await db.query(`DROP INDEX "public"."IDX_e5cbe66faacd0f02162b36158e"`)
    }
}
