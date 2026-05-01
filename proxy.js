import { NextResponse } from "next/server";

// Auth is now handled client-side via sessionStorage Bearer tokens.
// The server middleware cannot access sessionStorage, so route protection
// is enforced inside each protected layout/page component instead.
export async function proxy(req) {
  return NextResponse.next();
}

export const config = {
  matcher: [],
};
