import connectToDB from "@/database";
import Education from "@/models/Education";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function PUT(req) {
  try {
    await connectToDB();

    const extractData = await req.json();
    const {
      _id,
      degree,
      college,
      year
    } = extractData;

    const updateData = await Education.findOneAndUpdate(
      {
        _id: _id,
      },
      { degree,
        college,
        year },
      { new: true }
    );

    if (updateData) {
      return NextResponse.json({
        success: true,
        message: "updated successfully",
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Something went wrong !Please try again",
      });
    }
  } catch (e) {
    console.log(e);
    return NextResponse.json({
      success: false,
      message: "Something went wrong !Please try again",
    });
  }
}
