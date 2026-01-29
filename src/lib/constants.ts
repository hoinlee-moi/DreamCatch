// 상수 정의 파일

export const APP_NAME = "Dream Project";
export const APP_DESCRIPTION = "Next.js 16 프로젝트";

// API 엔드포인트
export const API_ROUTES = {
  AUTH: "/api/auth",
} as const;

// 라우트 경로
export const ROUTES = {
  HOME: "/",
  DASHBOARD: "/dashboard",
  AUTH: {
    SIGNIN: "/auth/signin",
    SIGNOUT: "/auth/signout",
    ERROR: "/auth/error",
  },
} as const;

// 테마 설정
export const THEMES = {
  LIGHT: "light",
  DARK: "dark",
  SYSTEM: "system",
} as const;
