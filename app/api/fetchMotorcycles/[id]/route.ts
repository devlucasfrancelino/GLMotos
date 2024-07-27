import connectMongoDB from "@/src/database";
import Motorcycle from "@/types/schemas";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { NextRequest, NextResponse } from "next/server"

export async function PUT(request: NextRequest, { params }: { params: Params }) {
  const { id } = params;
  const { model, make, year, price, color, KM, modelCode, makeCode, fipeYear, photo1, photo2, photo3 } = await request.json();
  await connectMongoDB();
  await Motorcycle.findByIdAndUpdate(id, {model,make, year, price, color, KM, modelCode, makeCode, fipeYear, photo1, photo2, photo3});
  return NextResponse.json({message : "Topico atualizado"}, { status : 200})
}