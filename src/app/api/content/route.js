// src/app/api/hello/route.js

import clientPromise from "@/lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db('cpa');
    const collection = db.collection('apps');

    const data = await collection.find({}).toArray();

    return Response.json({ success: true, data });
  } catch (error) {
    return Response.json({ success: false, error: error.message }, { status: 500 });
  }
}
