import { NextResponse } from 'next/server';

export async function middleware(req) {
  const session = true;
  // You could also check for any property on the session object,
  // like role === "admin" or name === "John Doe", etc.
  if (!session) return NextResponse.redirect('/');

  // If user is authenticated, continue.
  return NextResponse.next();
}

// import type { NextFetchEvent, NextRequest } from 'next/server'

// export function middleware(req: NextRequest, ev: NextFetchEvent) {
//   return new Response('Hello, world!')
// }
