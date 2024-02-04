import { addFeedback } from "@/lib/firebase/firestore";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    if ((data.rating < 0 || data.rating > 5) && data.comment.trim() === "") {
      return NextResponse.json(
        { success: false, message: "Invalid Input" },
        { status: 400 },
      );
    }

    const result = await addFeedback({
      rating: data.rating,
      comment: data.comment,
    });

    return NextResponse.json({
      success: true,
      message: "Added new feedback",
      data: result,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Couldn't add new feedback" },
      { status: 500 },
    );
  }
}
