"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// 감정 타입 정의
type EmotionType = "all" | "happy" | "fear" | "strange";

// 필터 버튼 데이터
const filterButtons: { id: EmotionType; label: string; labelEn: string }[] = [
  { id: "all", label: "전체", labelEn: "All" },
  { id: "happy", label: "행복", labelEn: "Happy" },
  { id: "fear", label: "공포", labelEn: "Fear" },
  { id: "strange", label: "기묘함", labelEn: "Strange" },
];

// 더미 꿈 상세 데이터
const dreamDetailData: Record<
  number,
  {
    title: string;
    subtitle: string;
    description: string;
    location: string;
    emotionTags: string[];
  }
> = {
  1: {
    title: "나의 고요한 밤의 기록",
    subtitle: "달빛 아래 속삭임",
    description:
      "지난밤의 꿈은 마치 오래된 서점의 한 페이지처럼 펼쳐졌습니다. 따뜻한 차 한 잔의 향기와 함께, 잊혀진 기억들이 부드럽게 떠올랐습니다. 알 수 없는 장소였지만, 마음은 평온했고 모든 것이 제자리에 있는 듯한 느낌을 받았습니다.",
    location: "미지의 숲",
    emotionTags: ["평온함", "향수", "신비로움"],
  },
  2: {
    title: "구름 위의 산책",
    subtitle: "하늘과 맞닿은 순간",
    description:
      "푹신한 구름 위를 걷는 꿈이었습니다. 발밑의 구름은 솜사탕처럼 부드러웠고, 하늘은 끝없이 펼쳐져 있었습니다.",
    location: "하늘 위",
    emotionTags: ["자유로움", "행복", "평화"],
  },
  3: {
    title: "빛의 방",
    subtitle: "기하학적 고요함",
    description:
      "하얀 빛으로 가득 찬 방에서 깨어났습니다. 모든 것이 순수하고 깨끗했으며, 시간이 멈춤 듯한 평화로움이 감돌았습니다.",
    location: "빛의 공간",
    emotionTags: ["평온함", "깨달음", "순수"],
  },
};

// 더미 꿈 데이터
const dreamData = [
  {
    id: 1,
    src: "/frame/frame1.jpg",
    date: "2023.11.15",
    emotion: "happy" as EmotionType,
    emotionLabel: "행복",
  },
  {
    id: 2,
    src: "/frame/frame2.jpg",
    date: "2023.11.15",
    emotion: "happy" as EmotionType,
    emotionLabel: "행복",
  },
  {
    id: 3,
    src: "/frame/frame3.jpg",
    date: "2023.11.14",
    emotion: "happy" as EmotionType,
    emotionLabel: "행복",
  },
  {
    id: 4,
    src: "/frame/frame4.png",
    date: "2023.11.23",
    emotion: "happy" as EmotionType,
    emotionLabel: "행복",
  },
  {
    id: 5,
    src: "/frame/frame5.jpg",
    date: "2023.11.06",
    emotion: "strange" as EmotionType,
    emotionLabel: "기묘함",
  },
  {
    id: 6,
    src: "/frame/frame6.png",
    date: "2023.11.15",
    emotion: "happy" as EmotionType,
    emotionLabel: "행복",
  },
  {
    id: 7,
    src: "/frame/frame7.png",
    date: "2023.11.23",
    emotion: "strange" as EmotionType,
    emotionLabel: "기묘함",
  },
  {
    id: 8,
    src: "/frame/frame8.png",
    date: "2023.11.27",
    emotion: "happy" as EmotionType,
    emotionLabel: "행복",
  },
  {
    id: 9,
    src: "/frame/frame9.png",
    date: "2023.11.29",
    emotion: "strange" as EmotionType,
    emotionLabel: "기묘함",
  },
  {
    id: 10,
    src: "/frame/frame10.png",
    date: "2023.11.21",
    emotion: "strange" as EmotionType,
    emotionLabel: "기묘함",
  },
];

// 카드 회전 각도 배열 (랜덤한 느낌을 위해)
const rotations = [
  "-rotate-2",
  "rotate-1",
  "-rotate-1",
  "rotate-2",
  "-rotate-1",
  "rotate-1",
  "-rotate-2",
  "rotate-2",
  "-rotate-1",
  "rotate-1",
];

export default function StoragePage() {
  const [activeFilter, setActiveFilter] = useState<EmotionType>("all");
  const [selectedDream, setSelectedDream] = useState<number | null>(null);

  // 필터링된 꿈 데이터
  const filteredDreams =
    activeFilter === "all"
      ? dreamData
      : dreamData.filter((dream) => dream.emotion === activeFilter);

  // 선택된 꿈 데이터
  const selectedDreamData = selectedDream
    ? dreamData.find((d) => d.id === selectedDream)
    : null;
  const selectedDreamDetail = selectedDream
    ? dreamDetailData[selectedDream] || {
        title: "꿈의 기록",
        subtitle: "잊혀진 이야기",
        description: "이 꿈의 상세 내용이 아직 기록되지 않았습니다.",
        location: "알 수 없음",
        emotionTags: ["미분류"],
      }
    : null;

  // 모달 닫기
  const closeModal = () => {
    setSelectedDream(null);
  };

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/background/back4.png"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        {/* 배경 오버레이 - 가독성을 위해 */}
        <div className="absolute inset-0 bg-[#F5F0E8]/30" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 px-6 py-12 md:px-12 lg:px-20">
        {/* Header with Logo and Navigation */}
        <header className="flex items-center justify-between mb-8">
          {/* Logo */}
          <Link href="/" className="z-20">
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
              className="text-sm text-[#8B7355] font-medium transition-colors md:text-base font-(family-name:--font-gowun-dodum)"
            >
              내 기록
            </Link>
            <Link
              href="/posts"
              className="text-sm text-[#5C4D42] transition-colors hover:text-[#8B7355] md:text-base font-(family-name:--font-gowun-dodum)"
            >
              게시물
            </Link>
            {/* Profile Button */}
            <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-[#D4C8B8] hover:border-[#8B7355] transition-all hover:shadow-md cursor-pointer">
              <Image
                src="/frame/frame1.jpg"
                alt="Profile"
                fill
                className="object-cover"
              />
            </div>
          </nav>
        </header>

        {/* Page Title */}
        <div className="mb-8 text-center">
          <h1 className="font-(family-name:--font-song-myung) text-4xl font-normal tracking-wide text-[#5C4D42] md:text-5xl lg:text-6xl">
            꿈 보관소
          </h1>
        </div>

        {/* Filter Buttons */}
        <div className="mb-10 flex flex-wrap items-center justify-center gap-3 md:gap-4">
          {filterButtons.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`rounded-full border px-5 py-2 text-sm font-medium transition-all duration-300 md:px-6 md:py-2.5 md:text-base font-(family-name:--font-gowun-dodum)
                ${
                  activeFilter === filter.id
                    ? "border-[#8B7355] bg-[#8B7355] text-white shadow-md"
                    : "border-[#C4B8A8] bg-white/80 text-[#5C4D42] hover:border-[#8B7355] hover:bg-[#F5F0E8]"
                }
              `}
            >
              {filter.label} ({filter.labelEn})
            </button>
          ))}
        </div>

        {/* Dream Cards Grid */}
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 md:gap-8">
            {filteredDreams.map((dream, index) => (
              <div
                key={dream.id}
                onClick={() => setSelectedDream(dream.id)}
                className={`group cursor-pointer transition-all duration-300 hover:z-10 hover:scale-105 ${rotations[index % rotations.length]}`}
              >
                {/* Card */}
                <div className="overflow-hidden rounded-lg bg-white p-3 shadow-lg transition-shadow duration-300 group-hover:shadow-xl md:p-4">
                  {/* Image Container */}
                  <div className="relative aspect-square w-full overflow-hidden rounded-md bg-[#E8E0D5]">
                    <Image
                      src={dream.src}
                      alt={`Dream ${dream.id}`}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  {/* Card Info */}
                  <div className="mt-3 flex items-center justify-between">
                    {/* Date */}
                    <span className="text-xs text-[#7A6B5E] md:text-sm font-(family-name:--font-gowun-dodum)">
                      {dream.date}
                    </span>

                    {/* Emotion Tag */}
                    <span className="rounded-md bg-[#F5F0E8] px-2 py-1 text-xs text-[#5C4D42] md:text-sm font-(family-name:--font-gowun-dodum)">
                      {dream.emotionLabel}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Empty State - 필터 결과가 없을 때 */}
        {filteredDreams.length === 0 && (
          <div className="mt-20 text-center">
            <p className="text-lg text-[#7A6B5E] font-(family-name:--font-gowun-dodum)">
              해당 감정의 꿈이 아직 없습니다.
            </p>
          </div>
        )}
      </div>

      {/* Modal */}
      {selectedDream && selectedDreamData && selectedDreamDetail && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
          onClick={closeModal}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

          {/* Modal Content */}
          <div
            className="relative z-10 w-full max-w-5xl max-h-[90vh] overflow-hidden rounded-3xl bg-white shadow-2xl animate-[modalFadeIn_0.3s_ease-out]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-[#5C4D42] hover:bg-white hover:shadow-md transition-all cursor-pointer"
            >
              ✕
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 h-full max-h-[90vh]">
              {/* Left: Image Section */}
              <div className="flex flex-col items-center justify-center bg-[#E8E2D9] p-6 md:p-10">
                {/* Frame with Image */}
                <div className="relative w-full max-w-sm">
                  <div className="relative aspect-square w-full overflow-hidden rounded-lg border-8 border-[#D4C8B8] bg-white p-3 shadow-md">
                    <Image
                      src={selectedDreamData.src}
                      alt={selectedDreamDetail.title}
                      fill
                      className="object-cover p-2"
                    />
                  </div>
                </div>
                {/* Caption */}
                <p className="mt-4 text-center text-sm text-[#7A6B5E] font-(family-name:--font-gowun-dodum)">
                  꿈의 조각들 - {selectedDreamData.date}
                </p>
              </div>

              {/* Right: Content Section */}
              <div className="flex flex-col justify-center p-6 md:p-10 overflow-y-auto max-h-[50vh] md:max-h-[90vh]">
                {/* Title */}
                <h1 className="mb-2 font-(family-name:--font-song-myung) text-2xl font-normal text-[#5C4D42] md:text-3xl">
                  {selectedDreamDetail.title}
                </h1>

                {/* Subtitle */}
                <h2 className="mb-4 text-base font-medium text-[#7A6B5E] md:text-lg font-(family-name:--font-gowun-dodum)">
                  {selectedDreamDetail.subtitle}
                </h2>

                {/* Description */}
                <p className="mb-5 text-sm leading-relaxed text-[#5C4D42] font-(family-name:--font-gowun-dodum) md:text-base">
                  {selectedDreamDetail.description}
                </p>

                {/* Date & Location */}
                <div className="mb-4 flex flex-wrap items-center gap-4 text-sm text-[#7A6B5E] font-(family-name:--font-gowun-dodum)">
                  <span className="flex items-center gap-1">
                    📅 날짜: {selectedDreamData.date}
                  </span>
                  <span className="text-[#C4B8A8]">|</span>
                  <span className="flex items-center gap-1">
                    📍 장소: {selectedDreamDetail.location}
                  </span>
                </div>

                {/* Emotion Tags */}
                <div className="mb-5">
                  <p className="mb-2 text-sm font-medium text-[#5C4D42] font-(family-name:--font-gowun-dodum)">
                    감정 태그
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {selectedDreamDetail.emotionTags.map((tag, index) => (
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
                <div className="flex flex-wrap items-center gap-3">
                  {/* Lock Button */}
                  <button className="flex h-11 w-11 items-center justify-center rounded-full border border-[#C4B8A8] bg-white text-[#7A6B5E] transition-colors hover:bg-[#F5F0E8] cursor-pointer">
                    🔒
                  </button>

                  {/* Share Button */}
                  <button className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[#8B7355] px-5 py-2.5 text-white transition-colors hover:bg-[#7A6548] font-(family-name:--font-gowun-dodum) cursor-pointer">
                    <span>↗</span>
                    공유하기
                  </button>

                  {/* Download Button */}
                  <button className="flex flex-1 items-center justify-center gap-2 rounded-full border border-[#C4B8A8] bg-white px-5 py-2.5 text-[#5C4D42] transition-colors hover:bg-[#F5F0E8] font-(family-name:--font-gowun-dodum) cursor-pointer">
                    <span>↓</span>
                    다운로드
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal Animation Styles */}
      <style jsx global>{`
        @keyframes modalFadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
}
