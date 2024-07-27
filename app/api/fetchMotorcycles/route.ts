import connectMongoDB from "@/src/database";
import Motorcycle from "@/types/schemas";
import { NextRequest, NextResponse } from "next/server"

export async function POST(request:NextRequest) {
  const {model, make, year, price, color, KM, modelCode, makeCode, fipeYear, photo1, photo2, photo3} = await request.json();
  await connectMongoDB();
  await Motorcycle.create({model, make, year, price, color, KM, modelCode, makeCode, fipeYear, photo1, photo2, photo3});
  return NextResponse.json({message: "Criado!"}, {status : 201})
}

export async function GET(request: NextRequest) {
  await connectMongoDB();

  const searchParams = request.nextUrl.searchParams;

  const model = searchParams.get("model");
  const color = searchParams.get("color");
  const KM = searchParams.get("KM");

  const query: any = {};
  if (model) query.model = model;
  if (color) query.color = color;
  if (KM) query.KM = KM;


  const Motorcycles = await Motorcycle.find(query);
  return NextResponse.json(Motorcycles);
}

export async function DELETE(request:NextRequest) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Motorcycle.findByIdAndDelete(id);
  return NextResponse.json({message: "Deletado"}, {status : 200})
}