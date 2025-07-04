import { db } from "../index.js";
import { quotesTable } from "../config/db/schema/quotes.js";
import { eq } from "drizzle-orm";

type QuoteInput = {
    asset_id: number;
    unit_price: number;
    timestamp: Date
}

export class QuotesRepository {
  create(quotes: QuoteInput) {
    return db.insert(quotesTable).values({
        ...quotes,
        unit_price: quotes.unit_price.toString()
    });
  }

  async getLatestByAsset(asset_id: number) {
    const [quote] = await db
      .select()
      .from(quotesTable)
      .where(eq(quotesTable.asset_id, asset_id))
      .orderBy(quotesTable.timestamp)
      .limit(1);

    return quote;
  }
}
