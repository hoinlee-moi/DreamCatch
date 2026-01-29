import { DefaultSession } from "next-auth";

// next-auth 타입 확장
declare module "next-auth" {
  interface Session {
    user: {
      id: string;
    } & DefaultSession["user"];
  }

  interface User {
    id: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id?: string;
  }
}
