module.exports = class Data1697190503092 {
    name = 'Data1697190503092'

    async up(db) {
        await db.query(`ALTER TABLE "staking_reward" ADD "timestamp" integer NOT NULL`)
    }

    async down(db) {
        await db.query(`ALTER TABLE "staking_reward" DROP COLUMN "timestamp"`)
    }
}
