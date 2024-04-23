// lib/db.ts
// import postgres from '@vercel/postgres';
import { sql } from "@vercel/postgres";

// const sql = postgres();

export async function createTables(): Promise<void> {
  try {
    await sql`CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      username VARCHAR(255) UNIQUE NOT NULL,
      password VARCHAR(255) NOT NULL,
      email VARCHAR(255) UNIQUE NOT NULL,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );`;
    console.log("Table created: users");
  } catch (error) {
    console.error("Error creating tables:", error);
    throw new Error('Failed to create tables');
  }
}

export default sql;
