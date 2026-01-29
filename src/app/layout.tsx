import type { Metadata } from "next";
import { Song_Myung, Gowun_Dodum } from "next/font/google";
import { Providers } from "@/components/providers/Providers";
import "./globals.css";

// 메인 타이틀용 - 예술적인 느낌
const songMyung = Song_Myung({
  variable: "--font-song-myung",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

// 버튼 및 본문용 - 가독성과 부드러움
const gowunDodum = Gowun_Dodum({
  variable: "--font-gowun-dodum",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "DreamCatch - 당신의 무의식이 예술이 되는 순간",
  description: "AI가 당신의 꿈을 예술 작품으로 변환해드립니다",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${songMyung.variable} ${gowunDodum.variable} font-sans antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
