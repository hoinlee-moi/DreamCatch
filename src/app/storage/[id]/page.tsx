"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

// 더미 꿈 상세 데이터 (실제로는 API나 DB에서 가져옴)
const dreamDetailData: Record<
  string,
  {
    id: number;
    src: string;
    title: string;
    subtitle: string;
    description: string;
    date: string;
    location: string;
    emotionTags: string[];
  }
> = {
  "1": {
    id: 1,
    src: "/frame/frame1.jpg",
    title: "나의 고요한 밤의 기록",
    subtitle: "달빛 아래 속삭임",
    description:
      "지난밤의 꿈은 마치 오래된 서점의 한 페이지처럼 펼쳐졌습니다. 따뜻한 차 한 잔의 향기와 함께, 잊혀진 기억들이 부드럽게 떠올랐습니다. 알 수 없는 장소였지만, 마음은 평온했고 모든 것이 제자리에 있는 듯한 느낌을 받았습니다.",
    date: "2023.10.26",
    location: "미지의 숲",
    emotionTags: ["평온함", "향수", "신비로움"],
  },
  "2": {
    id: 2,
    src: "/frame/frame2.jpg",
    title: "구름 위의 산책",
    subtitle: "하늘과 맞닿은 순간",
    description:
      "푹신한 구름 위를 걷는 꿈이었습니다. 발밑의 구름은 솜사탕처럼 부드러웠고, 하늘은 끝없이 펼쳐져 있었습니다. 바람이 귓가를 스치며 속삭이는 소리가 들렸습니다.",
    date: "2023.11.15",
    location: "하늘 위",
    emotionTags: ["자유로움", "행복", "평화"],
  },
  "3": {
    id: 3,
    src: "/frame/frame3.jpg",
    title: "빛의 방",
    subtitle: "기하학적 고요함",
    description:
      "하얀 빛으로 가득 찬 방에서 깨어났습니다. 모든 것이 순수하고 깨끗했으며, 시간이 멈춘 듯한 평화로움이 감돌았습니다.",
    date: "2023.11.14",
    location: "빛의 공간",
    emotionTags: ["평온함", "깨달음", "순수"],
  },
};

export default function DreamDetailPage() {
  const params = useParams();
  const id = params.id as string;

  // 해당 ID의 꿈 데이터 가져오기 (없으면 기본값)
  const dream = dreamDetailData[id] || {
    id: Number(id),
    src: `/frame/frame${id}.jpg`,
    title: "꿈의 기록",
    subtitle: "잊혀진 이야기",
    description: "이 꿈의 상세 내용이 아직 기록되지 않았습니다.",
    date: "2023.11.01",
    location: "알 수 없음",
    emotionTags: ["미분류"],
  };

  return (
    <div className="h-screen w-full bg-[#F5F0E8] overflow-hidden flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-3 md:px-12 lg:px-20">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/logov2.png"
            alt="DreamCatch Logo"
            width={280}
            height={100}
            className="h-20 w-auto object-contain drop-shadow-md md:h-24 lg:h-28"
            priority
          />
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-6 md:gap-8">
          <Link
            href="/"
            className="text-sm text-[#5C4D42] transition-colors hover:text-[#8B7355] md:text-base font-(family-name:--font-gowun-dodum)"
          >
            홈
          </Link>
          <Link
            href="/storage"
            className="text-sm text-[#5C4D42] transition-colors hover:text-[#8B7355] md:text-base font-(family-name:--font-gowun-dodum)"
          >
            내 기록
          </Link>
          <Link
            href="/posts"
            className="text-sm text-[#5C4D42] transition-colors hover:text-[#8B7355] md:text-base font-(family-name:--font-gowun-dodum)"
          >
            게시물
          </Link>
          <Link
            href="/auth"
            className="text-sm text-[#5C4D42] transition-colors hover:text-[#8B7355] md:text-base font-(family-name:--font-gowun-dodum)"
          >
            로그인
          </Link>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-6 py-4 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl h-full overflow-hidden rounded-3xl bg-white shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 h-full">
            {/* Left: Image Section */}
            <div className="flex flex-col items-center justify-center bg-[#E8E2D9] p-6 md:p-8">
              {/* Frame with Image */}
              <div className="relative w-full max-w-sm">
                <div className="relative aspect-square w-full overflow-hidden rounded-lg border-8 border-[#D4C8B8] bg-white p-3 shadow-md">
                  <Image
                    src={dream.src}
                    alt={dream.title}
                    fill
                    className="object-cover p-2"
                  />
                </div>
              </div>
              {/* Caption */}
              <p className="mt-4 text-center text-sm text-[#7A6B5E] font-(family-name:--font-gowun-dodum)">
                꿈의 조각들 -{" "}
                {dream.date
                  .replace(/\./g, "년 ")
                  .replace(/년 (\d+)$/, "월 $1일")}
              </p>
            </div>

            {/* Right: Content Section */}
            <div className="flex flex-col justify-center p-6 md:p-8">
              {/* Title */}
              <h1 className="mb-2 font-(family-name:--font-song-myung) text-2xl font-normal text-[#5C4D42] md:text-3xl">
                {dream.title}
              </h1>

              {/* Subtitle */}
              <h2 className="mb-4 text-base font-medium text-[#7A6B5E] md:text-lg font-(family-name:--font-gowun-dodum)">
                {dream.subtitle}
              </h2>

              {/* Description */}
              <p className="mb-5 text-sm leading-relaxed text-[#5C4D42] font-(family-name:--font-gowun-dodum) md:text-base">
                {dream.description}
              </p>

              {/* Date & Location */}
              <div className="mb-4 flex flex-wrap items-center gap-4 text-sm text-[#7A6B5E] font-(family-name:--font-gowun-dodum)">
                <span className="flex items-center gap-1">
                  📅 날짜: {dream.date}
                </span>
                <span className="text-[#C4B8A8]">|</span>
                <span className="flex items-center gap-1">
                  📍 장소: {dream.location}
                </span>
              </div>

              {/* Emotion Tags */}
              <div className="mb-5">
                <p className="mb-2 text-sm font-medium text-[#5C4D42] font-(family-name:--font-gowun-dodum)">
                  감정 태그
                </p>
                <div className="flex flex-wrap gap-2">
                  {dream.emotionTags.map((tag, index) => (
                    <span
                      key={index}
                      className="rounded-full bg-[#8B7355] px-4 py-1.5 text-sm text-white font-(family-name:--font-gowun-dodum)"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                {/* Lock Button */}
                <button className="flex h-12 w-12 items-center justify-center rounded-full border border-[#C4B8A8] bg-white text-[#7A6B5E] transition-colors hover:bg-[#F5F0E8]">
                  🔒
                </button>

                {/* Share Button */}
                <button className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[#8B7355] px-6 py-3 text-white transition-colors hover:bg-[#7A6548] font-(family-name:--font-gowun-dodum)">
                  <span>↗</span>
                  공유하기
                </button>

                {/* Download Button */}
                <button className="flex flex-1 items-center justify-center gap-2 rounded-full border border-[#C4B8A8] bg-white px-6 py-3 text-[#5C4D42] transition-colors hover:bg-[#F5F0E8] font-(family-name:--font-gowun-dodum)">
                  <span>↓</span>
                  다운로드
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-3 text-center">
        <p className="text-xs text-[#9B8B7A] font-(family-name:--font-gowun-dodum)">
          © 2023 꿈 기록장. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
