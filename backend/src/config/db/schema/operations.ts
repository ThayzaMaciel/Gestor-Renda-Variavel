import { mysqlTable, int, decimal, varchar, datetime } from 'drizzle-orm/mysql-core';

export const operationsTable = mysqlTable('operations', { 
    id: int('id').primaryKey().autoincrement(),
    user_id: int('user_id').notNull(),
    asset_id: int('asset_id').notNull(), 
    operation_type: varchar('operation_type', { length: 50 }).notNull(),
    quantity: decimal('quantity', { precision: 10, scale: 2 }).notNull(),
    unit_price: decimal('price_per_unit', { precision: 10, scale: 2 }).notNull(),
    brokerageFee: decimal('brakerage_free', { precision: 5, scale: 4 }).notNull(),
    timestamp: datetime('timestamp').notNull()
})