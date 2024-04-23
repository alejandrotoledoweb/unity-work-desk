// pages/api/init-db.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { createTables } from '../../../../lib/db';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  req: NextRequest,
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
