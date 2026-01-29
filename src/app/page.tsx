import Link from "next/link";
import Image from "next/image";
import CursorEffect from "@/components/CursorEffect";

// 갤러리 이미지 데이터 (실제로는 생성된 꿈 이미지들이 표시됨)
const galleryImages = [
  {
    id: 1,
    src: "/frame/frame1.jpg",
    title: "심해의 여정",
  },
  {
    id: 2,
    src: "/frame/frame2.jpg",
    title: "숲속의 고요",
  },
  {
    id: 3,
    src: "/frame/frame3.jpg",
    title: "구름 위의 산책",
  },
  {
    id: 4,
    src: "/frame/frame4.png",
    title: "추상적 자아",
  },
  {
    id: 5,
    src: "/frame/frame5.jpg",
    title: "밤하늘의 속삭임",
  },
  {
    id: 6,
    src: "/frame/frame6.png",
    title: "새벽의 기억",
  },
  {
    id: 7,
    src: "/frame/frame7.png",
    title: "황금빛 초원",
  },
  {
    id: 8,
    src: "/frame/frame8.png",
    title: "잊혀진 정원",
  },
  {
    id: 9,
    src: "/frame/frame9.png",
    title: "시간의 흐름",
  },
  {
    id: 10,
    src: "/frame/frame10.png",
    title: "꿈의 경계",
  },
];

export default function Home() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Cursor Effect */}
      <CursorEffect />

      {/* Background Image with Ripple Effect */}
      <div
        className="absolute z-0"
        style={{
          filter: "url(#background-ripple)",
          top: "-5%",
          left: "-5%",
          width: "110%",
          height: "110%",
        }}
      >
        <Image
          src="/background/back4.png"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex h-full flex-col">
        {/* Header */}
        <header className="absolute top-0 left-0 animate-[logoReveal_1.2s_ease-out]">
          <Image
            src="/logov2.png"
            alt="DreamCatch Logo"
            width={280}
            height={100}
            className="h-20 w-auto object-contain drop-shadow-md md:h-24 lg:h-28"
            style={{ objectFit: "contain" }}
            priority
          />
        </header>

        {/* Main Content */}
        <main className="flex flex-1 flex-col items-center justify-center min-h-screen">
          {/* Hero Section */}
          <div className="pt-16 mb-4 text-center md:mb-6 h-full flex items-center justify-center flex-col">
            <h1 className="mb-6 font-(family-name:--font-song-myung) text-3xl font-normal leading-normal tracking-wide text-[#5C4D42] md:mb-8 md:text-4xl lg:text-5xl animate-[softFadeIn_1.5s_ease-out_0.5s_both]">
              당신의 무의식이
              <br />
              <span className="text-[#7A6B5E]">예술</span>이 되는 순간
            </h1>

            {/* CTA Button */}
            <Link
              href="/auth"
              className="inline-block rounded-full bg-[#8B7355] px-8 py-3.5 text-base font-normal tracking-wide text-white shadow-lg shadow-[#8B7355]/30 transition-all duration-300 hover:bg-[#7A6548] hover:shadow-xl hover:scale-105 md:px-10 md:py-4 md:text-lg animate-[softFadeIn_1.5s_ease-out_1.2s_both] font-(family-name:--font-gowun-dodum)"
            >
              로그인하고 내 꿈 기록하기
            </Link>
          </div>

          {/* Gallery Section - Infinite Scroll */}
          <div className="relative w-full pt-2 md:pt-6 h-full flex items-end pb-8 md:pb-12 overflow-hidden">
            <div className="flex items-center animate-[infiniteScroll_40s_linear_infinite] gap-8 md:gap-10 lg:gap-12">
              {/* 원본 이미지들 */}
              {galleryImages.map((image) => (
                <div
                  key={image.id}
                  className="relative shrink-0 transition-all duration-500 ease-out hover:-translate-y-2 hover:scale-[1.02]"
                >
                  {/* Frame Container */}
                  <div className="relative h-50 w-36 md:h-64 md:w-52 lg:h-72 lg:w-60 flex items-center justify-center bg-[#f4ebdf] rounded-2xl">
                    {/* 내부 이미지 (액자 뒤에 배치) */}
                    <div className="relative h-[80%] w-[70%] overflow-hidden rounded">
                      <Image
                        src={image.src}
                        alt={image.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    {/* 액자 프레임 이미지 (위에 오버레이) */}
                    <div className="absolute bg-transparent top-[-1%] left[-1%] rounded-xl overflow-hidden scale-105 w-full h-full">
                      <Image
                        src="/frame/frame_layoutv3.png"
                        alt="Frame"
                        fill
                        className="object-cotain z-10 pointer-events-none bg-transparent"
                      />
                    </div>
                  </div>
                  {/* Soft Shadow */}
                  <div className="absolute -bottom-4 left-1/2 h-4 w-4/5 -translate-x-1/2 rounded-[50%] bg-[#5C4D42]/15 blur-lg" />
                </div>
              ))}
              {/* 무한 스크롤을 위한 복제본 */}
              {galleryImages.map((image) => (
                <div
                  key={`clone-${image.id}`}
                  className="relative shrink-0 transition-all duration-500 ease-out hover:-translate-y-2 hover:scale-[1.02]"
                >
                  {/* Frame Container */}
                  <div className="relative h-50 w-36 md:h-64 md:w-52 lg:h-72 lg:w-60 flex items-center justify-center bg-[#f4ebdf] rounded-2xl">
                    {/* 내부 이미지 (액자 뒤에 배치) */}
                    <div className="relative h-[80%] w-[70%] overflow-hidden rounded">
                      <Image
                        src={image.src}
                        alt={image.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    {/* 액자 프레임 이미지 (위에 오버레이) */}
                    <div className="absolute bg-transparent top-[-1%] left[-1%] rounded-xl overflow-hidden scale-105 w-full h-full">
                      <Image
                        src="/frame/frame_layoutv3.png"
                        alt="Frame"
                        fill
                        className="object-cotain z-10 pointer-events-none bg-transparent"
                      />
                    </div>
                  </div>
                  {/* Soft Shadow */}
                  <div className="absolute -bottom-4 left-1/2 h-4 w-4/5 -translate-x-1/2 rounded-[50%] bg-[#5C4D42]/15 blur-lg" />
                </div>
              ))}
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="py-4 text-center animate-[fadeIn_1s_ease-out_1.5s_both]">
          <p className="text-[10px] font-light uppercase tracking-[0.2em] text-[#9B8B7A]">
            © 2026 DreamCatch. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}
