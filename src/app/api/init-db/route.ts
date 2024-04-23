// pages/api/init-db.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { createTables } from '../../../../lib/db';
import { NextResponse } from 'next/server';

export async function GET(
  req: NextApiRequest,
  res: NextApiResponse
){
    try {
      // await createTables();
      return NextResponse.json({"Database": "Created"}, { status: 201})
    } catch (error: any ) {
      console.error("Database initialization failed:", error);
      return new NextResponse('ServerError', { status: 500 })
    }
}
