import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export type Product = {
  id: string;
  name: string;
  price: number;
  description?: string;
};

export async function GET() {
  const products = await prisma.product.findMany();
  return NextResponse.json(products);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  
  if (!body.name || body.price === undefined) {
    return NextResponse.json({ error: "Name and price are required" }, { status: 400 });
  }
  
  const newProduct = await prisma.product.create({
    data: {
      name: body.name,
      price: body.price,
      description: body.description,
    }
  });
  
  return NextResponse.json(newProduct, { status: 201 });
}