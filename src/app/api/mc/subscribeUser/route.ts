import { NextRequest, NextResponse } from "next/server";
import mailchimp from "@mailchimp/mailchimp_marketing";
import { createHash } from "node:crypto";

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_API_SERVER,
});

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { firstName, lastName, email } = body;
  if (!email) {
    return NextResponse.json({ error: "Email is required." }, { status: 400 });
  }
  const audienceId = process.env.MAILCHIMP_AUDIENCE_ID;
  if (!audienceId) {
    return NextResponse.json({ error: "Audience required." }, { status: 400 });
  }
  try {
    // Check if the email exists:
    const emailHash = createHash("md5").update(email).digest("hex");
    const isEmailExisting = await mailchimp.lists
      .getListMember(audienceId, emailHash)
      .then((r) => {
        const isSubscribed = r?.status === "subscribed";
        return isSubscribed;
      })
      .catch(() => false);
    if (isEmailExisting) {
      return NextResponse.json(
        { error: "Email already subscribed." },
        { status: 400 }
      );
    }
    // If the email doesn't exist, subscribe:
    const data = await mailchimp.lists.addListMember(audienceId, {
      email_address: email,
      status: "subscribed",
      merge_fields: {
        FNAME: firstName ?? "",
        LNAME: lastName ?? "",
      },
    });
    return NextResponse.json({ data });
  } catch (error: unknown) {
    let errorMessage = "";
    if (error instanceof Error) {
      errorMessage = error?.message;
    } else {
      errorMessage = errorMessage ?? error?.toString();
    }
    console.error(errorMessage);
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}
