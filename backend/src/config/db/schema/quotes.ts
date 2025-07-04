import { mysqlTable, int, decimal, datetime } from 'drizzle-orm/mysql-core';

export const quotesTable = mysqlTable('quotes', {
    id: int('id').primaryKey().autoincrement(),
    asset_id: int('asset_id').notNull(),
    unit_price: decimal('unit_price', { precision: 10, scale: 2 }).notNull(),
    timestamp: datetime('timestamp').notNull()
});