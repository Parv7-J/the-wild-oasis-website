// import { NextResponse } from "next/server";
// export function middleware(request) {
//   return NextResponse.redirect(new URL("/", request.url));
// }

// export const middleware = await auth();

import { auth } from "./app/_lib/auth";

export const middleware = auth;

export const config = {
  matcher: ["/account"],
};
