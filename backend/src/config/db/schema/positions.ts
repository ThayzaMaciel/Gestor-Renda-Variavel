import { mysqlTable, int, decimal } from 'drizzle-orm/mysql-core';

export const positionTable = mysqlTable('position', {
    id: int('id').primaryKey().autoincrement(),
    user_id: int('user_id').notNull(),
    asset_id: int('asset_id').notNull(),
    quantity: decimal('quantity').notNull(),
    average_price: decimal('average_price', { precision: 10, scale: 2 }).notNull(),
    pnl: decimal('pnl', { precision: 10, scale: 2 }).notNull(),
});