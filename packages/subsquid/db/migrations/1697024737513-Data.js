module.exports = class Data1697024737513 {
    name = 'Data1697024737513'

    async up(db) {
        await db.query(`ALTER TABLE "staking_reward" RENAME COLUMN "updated_at_block" TO "era_id"`)
        await db.query(`ALTER TABLE "staking_reward" DROP COLUMN "era_id"`)
        await db.query(`ALTER TABLE "staking_reward" ADD "era_id" character varying`)
        await db.query(`CREATE INDEX "IDX_81b13a2ea753cf5360e42bd901" ON "staking_reward" ("era_id") `)
        await db.query(`ALTER TABLE "staking_reward" ADD CONSTRAINT "FK_81b13a2ea753cf5360e42bd901f" FOREIGN KEY ("era_id") REFERENCES "staking_era"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    }

    async down(db) {
        await db.query(`ALTER TABLE "staking_reward" RENAME COLUMN "era_id" TO "updated_at_block"`)
        await db.query(`ALTER TABLE "staking_reward" ADD "era_id" integer NOT NULL`)
        await db.query(`ALTER TABLE "staking_reward" DROP COLUMN "era_id"`)
        await db.query(`DROP INDEX "public"."IDX_81b13a2ea753cf5360e42bd901"`)
        await db.query(`ALTER TABLE "staking_reward" DROP CONSTRAINT "FK_81b13a2ea753cf5360e42bd901f"`)
    }
}
