import { NextRequest, NextResponse } from "next/server";
import { getDeviations } from "../../../lib";

export async function GET(req: NextRequest) {
  try {
    const sizeData = req.nextUrl.searchParams.get("size");
    const holeTolerance = req.nextUrl.searchParams.get("holeTolerance");
    const holeGrade = req.nextUrl.searchParams.get("holeGrade");
    const shaftTolerance = req.nextUrl.searchParams.get("shaftTolerance");
    const shaftGrade = req.nextUrl.searchParams.get("shaftGrade");
    if (
      !(sizeData && holeTolerance && holeGrade && shaftTolerance && shaftGrade)
    ) {
      throw new Error("Missing params");
    }

    const size = +sizeData;
    const data = {
      hole: getDeviations(size, "hole", holeTolerance, holeGrade),

      shaft: getDeviations(size, "shaft", shaftTolerance, shaftGrade),
    };
    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Failed to fetch deviations" },
      { status: 500 }
    );
  }
}
