import { db } from "../index.js";
import { operationsTable } from "../config/db/schema/operations.js";
import { eq } from "drizzle-orm";



export class OperationsRepository {
    create(operation: {
        id: number; 
        user_id: number;
        operation_type: string;
        quantity: string;
        unit_price: string;
        brokerageFee: string;
        timestamp: Date;
    }) {
        return db.insert(operationsTable).values(operation)
    }
}