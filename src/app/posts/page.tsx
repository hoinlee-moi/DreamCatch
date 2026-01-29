"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// 카테고리 타입 정의
type CategoryType = "all" | "popular" | "recent" | "following";

// 필터 버튼 데이터
const filterButtons: { id: CategoryType; label: string }[] = [
  { id: "all", label: "전체" },
  { id: "popular", label: "인기" },
  { id: "recent", label: "최신" },
  { id: "following", label: "팔로잉" },
];

// 게시물 상세 데이터
const postDetailData: Record<
  number,
  {
    subtitle: string;
    description: string;
    location: string;
    emotionTags: string[];
  }
> = {
  1: {
    subtitle: "달빛 아래 속삭임",
    description:
      "지난밤의 꿈은 마치 오래된 서점의 한 페이지처럼 펼쳐졌습니다. 따뜻한 차 한 잔의 향기와 함께, 잊혀진 기억들이 부드럽게 떠올랐습니다.",
    location: "미지의 숲",
    emotionTags: ["평온함", "향수", "신비로움"],
  },
  2: {
    subtitle: "하늘과 맞닿은 순간",
    description:
      "푹신한 구름 위를 걷는 꿈이었습니다. 발밑의 구름은 솜사탕처럼 부드러웠고, 하늘은 끝없이 펼쳐져 있었습니다.",
    location: "하늘 위",
    emotionTags: ["자유로움", "행복", "평화"],
  },
  3: {
    subtitle: "기하학적 고요함",
    description:
      "하얀 빛으로 가득 찬 방에서 깨어났습니다. 모든 것이 순수하고 깨끗했으며, 시간이 멈춤 듯한 평화로움이 감돌았습니다.",
    location: "빛의 공간",
    emotionTags: ["평온함", "깨달음", "순수"],
  },
  4: {
    subtitle: "끊임없는 모래 속에서",
    description:
      "뜨거운 사막 한가운데에서 오아시스를 발견했습니다. 시원한 물소리와 파란 야자수 그늘이 저를 반겼습니다.",
    location: "사막의 오아시스",
    emotionTags: ["희망", "발견", "휘식"],
  },
  5: {
    subtitle: "별들의 노래",
    description:
      "밤하늘의 별들이 속삭이는 꿈이었습니다. 각각의 별이 다른 이야기를 들려주었습니다.",
    location: "밤하늘",
    emotionTags: ["경이로움", "신비", "평화"],
  },
};

// 더미 게시물 데이터
const postsData = [
  {
    id: 1,
    src: "/frame/frame1.jpg",
    title: "나의 고요한 밤의 기록",
    author: "꿈꾸는사람",
    date: "2023.11.15",
    likes: 128,
    comments: 24,
    category: "popular" as CategoryType,
  },
  {
    id: 2,
    src: "/frame/frame2.jpg",
    title: "구름 위의 산책",
    author: "하늘여행자",
    date: "2023.11.14",
    likes: 95,
    comments: 18,
    category: "recent" as CategoryType,
  },
  {
    id: 3,
    src: "/frame/frame3.jpg",
    title: "빛의 방에서",
    author: "빛의수호자",
    date: "2023.11.13",
    likes: 76,
    comments: 12,
    category: "recent" as CategoryType,
  },
  {
    id: 4,
    src: "/frame/frame4.png",
    title: "사막의 오아시스",
    author: "모래바람",
    date: "2023.11.12",
    likes: 203,
    comments: 45,
    category: "popular" as CategoryType,
  },
  {
    id: 5,
    src: "/frame/frame5.jpg",
    title: "밤하늘의 속삭임",
    author: "별지기",
    date: "2023.11.11",
    likes: 167,
    comments: 31,
    category: "popular" as CategoryType,
  },
  {
    id: 6,
    src: "/frame/frame6.png",
    title: "새벽의 기억",
    author: "아침이슬",
    date: "2023.11.10",
    likes: 54,
    comments: 8,
    category: "recent" as CategoryType,
  },
  {
    id: 7,
    src: "/frame/frame7.png",
    title: "황금빛 초원",
    author: "들꽃향기",
    date: "2023.11.09",
    likes: 89,
    comments: 15,
    category: "following" as CategoryType,
  },
  {
    id: 8,
    src: "/frame/frame8.png",
    title: "잊혀진 정원",
    author: "정원사",
    date: "2023.11.08",
    likes: 142,
    comments: 27,
    category: "popular" as CategoryType,
  },
  {
    id: 9,
    src: "/frame/frame9.png",
    title: "시간의 흐름",
    author: "시간여행자",
    date: "2023.11.07",
    likes: 68,
    comments: 11,
    category: "following" as CategoryType,
  },
  {
    id: 10,
    src: "/frame/frame10.png",
    title: "꿈의 경계",
    author: "경계인",
    date: "2023.11.06",
    likes: 91,
    comments: 19,
    category: "recent" as CategoryType,
  },
];

export default function PostsPage() {
  const [activeFilter, setActiveFilter] = useState<CategoryType>("all");
  const [selectedPost, setSelectedPost] = useState<number | null>(null);

  // 필터링된 게시물 데이터
  const filteredPosts =
    activeFilter === "all"
      ? postsData
      : postsData.filter((post) => post.category === activeFilter);

  // 선택된 게시물 데이터
  const selectedPostData = selectedPost
    ? postsData.find((p) => p.id === selectedPost)
    : null;
  const selectedPostDetail = selectedPost
    ? postDetailData[selectedPost] || {
        subtitle: "꿈의 이야기",
        description: "이 꿈의 상세 내용이 아직 기록되지 않았습니다.",
        location: "알 수 없음",
        emotionTags: ["미분류"],
      }
    : null;

  // 모달 닫기
  const closeModal = () => {
    setSelectedPost(null);
  };

  return (
    <div className="min-h-screen w-full bg-[#F5F0E8]">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 md:px-12 lg:px-20">
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
            className="text-sm text-[#8B7355] font-medium transition-colors md:text-base font-(family-name:--font-gowun-dodum)"
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

      {/* Main Content */}
      <main className="px-6 py-8 md:px-12 lg:px-20">
        {/* Page Title */}
        <div className="mb-8 text-center">
          <h1 className="font-(family-name:--font-song-myung) text-4xl font-normal tracking-wide text-[#5C4D42] md:text-5xl">
            꿈 갤러리
          </h1>
          <p className="mt-3 text-sm text-[#7A6B5E] font-(family-name:--font-gowun-dodum) md:text-base">
            다른 사람들의 꿈 이야기를 둘러보세요
          </p>
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
              {filter.label}
            </button>
          ))}
        </div>

        {/* Posts Grid */}
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-8">
            {filteredPosts.map((post) => (
              <div
                key={post.id}
                onClick={() => setSelectedPost(post.id)}
                className="group cursor-pointer transition-all duration-300 hover:scale-[1.02]"
              >
                {/* Card */}
                <div className="overflow-hidden rounded-2xl bg-white shadow-md transition-shadow duration-300 group-hover:shadow-xl">
                  {/* Image Container */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#E8E0D5]">
                    <Image
                      src={post.src}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>

                  {/* Card Content */}
                  <div className="p-4">
                    {/* Title */}
                    <h3 className="mb-2 text-base font-medium text-[#5C4D42] line-clamp-1 font-(family-name:--font-gowun-dodum) md:text-lg">
                      {post.title}
                    </h3>

                    {/* Author & Date */}
                    <div className="mb-3 flex items-center justify-between text-xs text-[#9B8B7A] font-(family-name:--font-gowun-dodum)">
                      <span className="flex items-center gap-1">
                        <span className="h-5 w-5 rounded-full bg-[#E8E0D5] flex items-center justify-center text-[10px]">
                          👤
                        </span>
                        {post.author}
                      </span>
                      <span>{post.date}</span>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center gap-4 text-xs text-[#7A6B5E] font-(family-name:--font-gowun-dodum)">
                      <span className="flex items-center gap-1">
                        ❤️ {post.likes}
                      </span>
                      <span className="flex items-center gap-1">
                        💬 {post.comments}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <div className="mt-20 text-center">
            <p className="text-lg text-[#7A6B5E] font-(family-name:--font-gowun-dodum)">
              해당 카테고리의 게시물이 없습니다.
            </p>
          </div>
        )}

        {/* Load More Button */}
        {filteredPosts.length > 0 && (
          <div className="mt-12 text-center">
            <button className="rounded-full border border-[#C4B8A8] bg-white px-8 py-3 text-sm text-[#5C4D42] transition-all duration-300 hover:border-[#8B7355] hover:bg-[#F5F0E8] font-(family-name:--font-gowun-dodum) cursor-pointer">
              더 보기
            </button>
          </div>
        )}
      </main>

      {/* Modal */}
      {selectedPost && selectedPostData && selectedPostDetail && (
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
                      src={selectedPostData.src}
                      alt={selectedPostData.title}
                      fill
                      className="object-cover p-2"
                    />
                  </div>
                </div>
                {/* Caption */}
                <p className="mt-4 text-center text-sm text-[#7A6B5E] font-(family-name:--font-gowun-dodum)">
                  꿈의 조각들 - {selectedPostData.date}
                </p>
              </div>

              {/* Right: Content Section */}
              <div className="flex flex-col justify-center p-6 md:p-10 overflow-y-auto max-h-[50vh] md:max-h-[90vh]">
                {/* Title */}
                <h1 className="mb-2 font-(family-name:--font-song-myung) text-2xl font-normal text-[#5C4D42] md:text-3xl">
                  {selectedPostData.title}
                </h1>

                {/* Subtitle */}
                <h2 className="mb-4 text-base font-medium text-[#7A6B5E] md:text-lg font-(family-name:--font-gowun-dodum)">
                  {selectedPostDetail.subtitle}
                </h2>

                {/* Author */}
                <div className="mb-4 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#E8E0D5] flex items-center justify-center text-sm">
                    👤
                  </div>
                  <span className="text-sm text-[#5C4D42] font-(family-name:--font-gowun-dodum)">
                    {selectedPostData.author}
                  </span>
                </div>

                {/* Description */}
                <p className="mb-5 text-sm leading-relaxed text-[#5C4D42] font-(family-name:--font-gowun-dodum) md:text-base">
                  {selectedPostDetail.description}
                </p>

                {/* Date & Location */}
                <div className="mb-4 flex flex-wrap items-center gap-4 text-sm text-[#7A6B5E] font-(family-name:--font-gowun-dodum)">
                  <span className="flex items-center gap-1">
                    📅 날짜: {selectedPostData.date}
                  </span>
                  <span className="text-[#C4B8A8]">|</span>
                  <span className="flex items-center gap-1">
                    📍 장소: {selectedPostDetail.location}
                  </span>
                </div>

                {/* Emotion Tags */}
                <div className="mb-5">
                  <p className="mb-2 text-sm font-medium text-[#5C4D42] font-(family-name:--font-gowun-dodum)">
                    감정 태그
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {selectedPostDetail.emotionTags.map((tag, index) => (
                      <span
                        key={index}
                        className="rounded-full bg-[#8B7355] px-4 py-1.5 text-sm text-white font-(family-name:--font-gowun-dodum)"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div className="mb-5 flex items-center gap-6 text-sm text-[#7A6B5E] font-(family-name:--font-gowun-dodum)">
                  <span className="flex items-center gap-1">
                    ❤️ {selectedPostData.likes} 좋아요
                  </span>
                  <span className="flex items-center gap-1">
                    💬 {selectedPostData.comments} 댓글
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-3">
                  {/* Like Button */}
                  <button className="flex h-11 w-11 items-center justify-center rounded-full border border-[#C4B8A8] bg-white text-[#7A6B5E] transition-colors hover:bg-[#F5F0E8] cursor-pointer">
                    ❤️
                  </button>

                  {/* Share Button */}
                  <button className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[#8B7355] px-5 py-2.5 text-white transition-colors hover:bg-[#7A6548] font-(family-name:--font-gowun-dodum) cursor-pointer">
                    <span>↗</span>
                    공유하기
                  </button>

                  {/* Save Button */}
                  <button className="flex flex-1 items-center justify-center gap-2 rounded-full border border-[#C4B8A8] bg-white px-5 py-2.5 text-[#5C4D42] transition-colors hover:bg-[#F5F0E8] font-(family-name:--font-gowun-dodum) cursor-pointer">
                    <span>💾</span>
                    저장하기
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

      {/* Footer */}
      <footer className="py-8 text-center">
        <p className="text-xs text-[#9B8B7A] font-(family-name:--font-gowun-dodum)">
          © 2026 꿈 기록장. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
