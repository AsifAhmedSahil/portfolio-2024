import connectToDB from "@/database";
import Experience from "@/models/Experience";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function DELETE(req) {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
  
    try {
      await connectToDB();
      const deletedEducation = await Experience.findByIdAndDelete(id);
  
      if (!deletedEducation) {
        return NextResponse.json({
          success: false,
          message: "Experience entry not found",
        });
      }
  
      return NextResponse.json({
        success: true,
        message: "Experience deleted successfully",
      });
    } catch (e) {
      console.log(e);
      return NextResponse.json({
        success: false,
        message: "Something went wrong! Please try again",
      });
    }
  }