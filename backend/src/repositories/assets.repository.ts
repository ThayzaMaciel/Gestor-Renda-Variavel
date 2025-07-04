import { db } from "@/index.js";
import { assetsTable  } from "@/config/db/schema/assets.js";
import { eq } from "drizzle-orm";

export class AssetsRepository {
    create(asset: { name: string, code: string}) {
        return db.insert(assetsTable).values(asset);
    }

    findByCode(code: string) {
        return db.select().from(assetsTable).where(eq(assetsTable.code, code));
    }

    listAll() {
        return db.select().from(assetsTable);
    }
}