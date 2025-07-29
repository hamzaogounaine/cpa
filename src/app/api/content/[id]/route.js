// src/app/api/hello/route.js

import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export async function GET(_, { params }) {
    const id = params.id;
  try {
    const client = await clientPromise;
    const db = client.db('cpa');
    const collection = db.collection('apps');

    const data = await collection.findOne({ _id: new ObjectId(id) });

    return Response.json({ success: true, data });
  } catch (error) {
    return Response.json({ success: false, error: error.message }, { status: 500 });
  }
}
