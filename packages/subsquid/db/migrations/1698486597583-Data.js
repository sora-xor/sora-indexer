module.exports = class Data1698486597583 {
    name = 'Data1698486597583'

    async up(db) {
        await db.query(`ALTER TABLE "history_element" ADD "name" text NOT NULL`)
        await db.query(`ALTER TABLE "staking_reward" ADD "payee_type" character varying(10) NOT NULL`)
        await db.query(`ALTER TABLE "history_element" DROP COLUMN "block_height"`)
        await db.query(`ALTER TABLE "history_element" ADD "block_height" integer NOT NULL`)
    }

    async down(db) {
        await db.query(`ALTER TABLE "history_element" DROP COLUMN "name"`)
        await db.query(`ALTER TABLE "staking_reward" DROP COLUMN "payee_type"`)
        await db.query(`ALTER TABLE "history_element" ADD "block_height" numeric NOT NULL`)
        await db.query(`ALTER TABLE "history_element" DROP COLUMN "block_height"`)
    }
}
