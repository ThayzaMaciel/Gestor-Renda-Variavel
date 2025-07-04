import 'dotenv/config';
import { drizzle } from 'drizzle-orm/mysql2';

import { usersTable } from '@/config/db/schema/user.js'
import { assetsTable } from '@/config/db/schema/assets.js';

  
export const db = drizzle(process.env.DATABASE_URL!);


async function test() {
    await db.insert(usersTable).values({
        name: 'Thayza',
        email: 'thayz@example.com',
        commission_percentage: 5.5,
    });
    await db.insert(assetsTable).values({
        code: 'PETR3',
        name: 'Petrobras ON',
    })

    const users = await db.select().from(usersTable);
    const assets = await db.select().from(assetsTable)
    console.log(users);
    console.log(assets);
}

test();