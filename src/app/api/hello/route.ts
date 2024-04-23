import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

type ResponseData = {
  message: string;
};

export async function GET(
  req: NextRequest,
  res: NextApiResponse<ResponseData>
) {
  // if (req.method === "GET") {
    return NextResponse.json({ message: "Hello from Next.js!" });
  // } else {
  //   res.status(405).end(); // Method Not Allowed
  // }
}
