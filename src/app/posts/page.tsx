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

  // 필터링된 게시물 데이터
  const filteredPosts =
    activeFilter === "all"
      ? postsData
      : postsData.filter((post) => post.category === activeFilter);

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
              <Link
                href={`/storage/${post.id}`}
                key={post.id}
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
              </Link>
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
            <button className="rounded-full border border-[#C4B8A8] bg-white px-8 py-3 text-sm text-[#5C4D42] transition-all duration-300 hover:border-[#8B7355] hover:bg-[#F5F0E8] font-(family-name:--font-gowun-dodum)">
              더 보기
            </button>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="py-8 text-center">
        <p className="text-xs text-[#9B8B7A] font-(family-name:--font-gowun-dodum)">
          © 2026 꿈 기록장. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
