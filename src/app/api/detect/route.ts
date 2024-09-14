// app/api/detect/route.js (or app/api/detect/route.ts for TypeScript)
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request:NextRequest) {
  const { search } = await request.json();
   

  console.log(process.env.API_KEY)
  try {
    const response = await fetch(process.env.REQUEST_URL as string, {
      method: 'POST',
      headers: {
        'x-api-key': process.env.API_KEY as string,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ search }),
    });

    const data = await response.json();
    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json({ error: 'Error fetching data' }, { status: 500 });
  }
}

