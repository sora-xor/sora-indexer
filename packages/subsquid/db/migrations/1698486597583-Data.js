module.exports = class Data1698486597583 {
    name = 'Data1698486597583'

    async up(db) {
        // Adding 'name' field with a temporary value
        await db.query(`ALTER TABLE "history_element" ADD "name" text DEFAULT 'temp'`)

        // Updating 'name' field using 'module' and 'method' values
        await db.query(`UPDATE "history_element" SET "name" = "module" || '.' || "method"`)

        // Changing the default value and setting NOT NULL
        await db.query(`ALTER TABLE "history_element" ALTER COLUMN "name" DROP DEFAULT`)
        await db.query(`ALTER TABLE "history_element" ALTER COLUMN "name" SET NOT NULL`)
        await db.query(`ALTER TABLE "staking_reward" ADD "payee_type" character varying(10) NOT NULL`)
        await db.query(`ALTER TABLE "history_element" ALTER COLUMN "block_height" SET NOT NULL`)
    }

    async down(db) {
        // Removing 'name' field
        await db.query(`ALTER TABLE "history_element" DROP COLUMN "name"`)
        await db.query(`ALTER TABLE "staking_reward" DROP COLUMN "payee_type"`)
    }
}
