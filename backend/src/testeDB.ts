import { sql } from 'drizzle-orm';
import { db } from './config/db/connection';

async function testDrizzleQuery() {
  try {
    const result = await db.execute(sql`SELECT 1 + 1 AS result`);
    console.log('✅ Conexão bem-sucedida! Resultado:', result);
  } catch (error) {
    console.error('❌ Erro ao executar query com Drizzle:', error);
  }
}

testDrizzleQuery()