import { NextRequest } from "next/server";

export function middleware( request: NextRequest) {
	console.log('미들웨어 작동중')
}