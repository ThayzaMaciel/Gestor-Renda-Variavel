import { mysqlTable, int, varchar } from 'drizzle-orm/mysql-core';

export const assetsTable = mysqlTable('assets', {
    id: int('id').primaryKey().autoincrement(),
    code: varchar('code', { length: 10 }).notNull(),
    name: varchar('name', { length: 255 }).notNull(),
})