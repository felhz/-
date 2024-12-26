import { NextRequest, NextResponse } from 'next/server'
 
 
export async function middleware(req: NextRequest) {
    const pathname= req.nextUrl.pathname
 
  if(  pathname.includes('/api/')){
    const response = NextResponse.next()
    return response
  }
}