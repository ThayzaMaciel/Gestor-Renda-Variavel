import { mysqlTable, varchar, int, float } from 'drizzle-orm/mysql-core';

export const usersTable = mysqlTable('users', {
  id: int('id').primaryKey().autoincrement(),
  name: varchar('name', { length: 255 }).notNull(),
  email: varchar('email', { length: 255}).notNull(),
  commission_percentage: float('percentual_corretagem').notNull()
})