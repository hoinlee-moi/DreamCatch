import { auth } from "@/lib/auth";

export default auth((req) => {
  // 인증 미들웨어 로직
  // req.auth에서 현재 세션 정보 접근 가능
});

// 미들웨어가 실행될 경로 설정
export const config = {
  matcher: [
    // 보호할 경로 패턴
    "/dashboard/:path*",
    "/api/protected/:path*",
    // 정적 파일 및 API 제외
    "/((?!api/auth|_next/static|_next/image|favicon.ico).*)",
  ],
};
