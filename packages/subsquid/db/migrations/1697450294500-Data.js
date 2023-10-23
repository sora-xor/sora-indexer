module.exports = class Data1697450294500 {
    name = 'Data1697450294500'

    async up(db) {
        await db.query(`ALTER TABLE "asset_snapshot" DROP CONSTRAINT "FK_fc1d8b36eaafcc1250f7af6cd07"`)
        await db.query(`ALTER TABLE "asset_snapshot" ALTER COLUMN "asset_id" SET NOT NULL`)
        await db.query(`ALTER TABLE "asset_snapshot" ADD CONSTRAINT "FK_fc1d8b36eaafcc1250f7af6cd07" FOREIGN KEY ("asset_id") REFERENCES "asset"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    }

    async down(db) {
        await db.query(`ALTER TABLE "asset_snapshot" ADD CONSTRAINT "FK_fc1d8b36eaafcc1250f7af6cd07" FOREIGN KEY ("asset_id") REFERENCES "asset"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "asset_snapshot" ALTER COLUMN "asset_id" DROP NOT NULL`)
        await db.query(`ALTER TABLE "asset_snapshot" DROP CONSTRAINT "FK_fc1d8b36eaafcc1250f7af6cd07"`)
    }
}
