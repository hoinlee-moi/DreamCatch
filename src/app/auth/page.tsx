"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AuthPage() {
  const router = useRouter();
  const [isFlipped, setIsFlipped] = useState(false);
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [signupForm, setSignupForm] = useState({
    nickname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 로그인 로직 처리 (미구현 상태 - 바로 posts로 이동)
    console.log("Login:", loginForm);
    router.push("/posts");
  };

  const handleSignupSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 회원가입 로직 처리
    if (signupForm.password !== signupForm.confirmPassword) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }
    console.log("Signup:", signupForm);
  };

  return (
    <div className="min-h-screen w-full bg-[#F5F0E8] relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-[#E8E0D5] rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-[#D4C8B8] rounded-full blur-3xl opacity-40" />
        <div className="absolute top-1/2 left-1/3 w-40 h-40 bg-[#C4B8A8] rounded-full blur-2xl opacity-30" />
      </div>

      {/* Logo */}
      <Link href="/" className="absolute top-0 left-0 z-20">
        <Image
          src="/logov2.png"
          alt="DreamCatch Logo"
          width={280}
          height={100}
          className="h-20 w-auto object-contain drop-shadow-md md:h-24 lg:h-28"
          priority
        />
      </Link>

      {/* Main Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 py-20">
        {/* Card Container */}
        <div
          className="relative w-full max-w-md h-[520px]"
          style={{ perspective: "1000px" }}
        >
          {/* Flip Card */}
          <div
            className={`relative w-full h-full transition-transform duration-700 ease-in-out`}
            style={{
              transformStyle: "preserve-3d",
              transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
            }}
          >
            {/* Front - Login Form */}
            <div
              className="absolute inset-0 w-full h-full"
              style={{ backfaceVisibility: "hidden" }}
            >
              <div className="w-full h-full rounded-3xl bg-white/90 backdrop-blur-sm p-8 shadow-xl">
                {/* Header */}
                <div className="mb-8 text-center">
                  <h1 className="font-(family-name:--font-song-myung) text-3xl font-normal text-[#5C4D42] mb-2">
                    로그인
                  </h1>
                  <p className="text-sm text-[#9B8B7A] font-(family-name:--font-gowun-dodum)">
                    꿈의 세계로 돌아오신 것을 환영합니다
                  </p>
                </div>

                {/* Login Form */}
                <form onSubmit={handleLoginSubmit} className="space-y-5">
                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-[#5C4D42] mb-2 font-(family-name:--font-gowun-dodum)">
                      이메일
                    </label>
                    <input
                      type="email"
                      value={loginForm.email}
                      onChange={(e) =>
                        setLoginForm({ ...loginForm, email: e.target.value })
                      }
                      placeholder="example@email.com"
                      className="w-full px-4 py-3 rounded-xl border border-[#D4C8B8] bg-[#FDFCFA] text-[#5C4D42] placeholder-[#C4B8A8] focus:outline-none focus:border-[#8B7355] focus:ring-2 focus:ring-[#8B7355]/20 transition-all font-(family-name:--font-gowun-dodum)"
                    />
                  </div>

                  {/* Password */}
                  <div>
                    <label className="block text-sm font-medium text-[#5C4D42] mb-2 font-(family-name:--font-gowun-dodum)">
                      비밀번호
                    </label>
                    <input
                      type="password"
                      value={loginForm.password}
                      onChange={(e) =>
                        setLoginForm({ ...loginForm, password: e.target.value })
                      }
                      placeholder="••••••••"
                      className="w-full px-4 py-3 rounded-xl border border-[#D4C8B8] bg-[#FDFCFA] text-[#5C4D42] placeholder-[#C4B8A8] focus:outline-none focus:border-[#8B7355] focus:ring-2 focus:ring-[#8B7355]/20 transition-all font-(family-name:--font-gowun-dodum)"
                    />
                  </div>

                  {/* Forgot Password */}
                  <div className="text-right">
                    <button
                      type="button"
                      className="text-xs text-[#9B8B7A] hover:text-[#8B7355] transition-colors font-(family-name:--font-gowun-dodum)"
                    >
                      비밀번호를 잊으셨나요?
                    </button>
                  </div>

                  {/* Login Button */}
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-[#8B7355] text-white font-medium transition-all duration-300 hover:bg-[#7A6548] hover:shadow-lg hover:shadow-[#8B7355]/30 cursor-pointer font-(family-name:--font-gowun-dodum)"
                  >
                    로그인
                  </button>
                </form>

                {/* Divider */}
                <div className="my-6 flex items-center gap-4">
                  <div className="flex-1 h-px bg-[#E8E0D5]" />
                  <span className="text-xs text-[#C4B8A8] font-(family-name:--font-gowun-dodum)">
                    또는
                  </span>
                  <div className="flex-1 h-px bg-[#E8E0D5]" />
                </div>

                {/* Social Login */}
                <div className="flex justify-center gap-4 mb-6">
                  <button className="w-12 h-12 rounded-full border border-[#E8E0D5] bg-white flex items-center justify-center hover:border-[#8B7355] hover:shadow-md transition-all">
                    <span className="text-xl">🌐</span>
                  </button>
                  <button className="w-12 h-12 rounded-full border border-[#E8E0D5] bg-white flex items-center justify-center hover:border-[#8B7355] hover:shadow-md transition-all">
                    <span className="text-xl">🍎</span>
                  </button>
                </div>

                {/* Sign Up Link */}
                <p className="text-center text-sm text-[#7A6B5E] font-(family-name:--font-gowun-dodum)">
                  아직 계정이 없으신가요?{" "}
                  <button
                    type="button"
                    onClick={() => setIsFlipped(true)}
                    className="text-[#8B7355] font-medium hover:underline"
                  >
                    회원가입
                  </button>
                </p>
              </div>
            </div>

            {/* Back - Signup Form */}
            <div
              className="absolute inset-0 w-full h-full"
              style={{
                backfaceVisibility: "hidden",
                transform: "rotateY(180deg)",
              }}
            >
              <div className="w-full h-full rounded-3xl bg-white/90 backdrop-blur-sm p-8 shadow-xl">
                {/* Header */}
                <div className="mb-6 text-center">
                  <h1 className="font-(family-name:--font-song-myung) text-3xl font-normal text-[#5C4D42] mb-2">
                    회원가입
                  </h1>
                  <p className="text-sm text-[#9B8B7A] font-(family-name:--font-gowun-dodum)">
                    꿈을 기록할 준비가 되셨나요?
                  </p>
                </div>

                {/* Signup Form */}
                <form onSubmit={handleSignupSubmit} className="space-y-4">
                  {/* Nickname */}
                  <div>
                    <label className="block text-sm font-medium text-[#5C4D42] mb-1.5 font-(family-name:--font-gowun-dodum)">
                      닉네임
                    </label>
                    <input
                      type="text"
                      value={signupForm.nickname}
                      onChange={(e) =>
                        setSignupForm({
                          ...signupForm,
                          nickname: e.target.value,
                        })
                      }
                      placeholder="꿈꾸는사람"
                      className="w-full px-4 py-2.5 rounded-xl border border-[#D4C8B8] bg-[#FDFCFA] text-[#5C4D42] placeholder-[#C4B8A8] focus:outline-none focus:border-[#8B7355] focus:ring-2 focus:ring-[#8B7355]/20 transition-all text-sm font-(family-name:--font-gowun-dodum)"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-[#5C4D42] mb-1.5 font-(family-name:--font-gowun-dodum)">
                      이메일
                    </label>
                    <input
                      type="email"
                      value={signupForm.email}
                      onChange={(e) =>
                        setSignupForm({ ...signupForm, email: e.target.value })
                      }
                      placeholder="example@email.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-[#D4C8B8] bg-[#FDFCFA] text-[#5C4D42] placeholder-[#C4B8A8] focus:outline-none focus:border-[#8B7355] focus:ring-2 focus:ring-[#8B7355]/20 transition-all text-sm font-(family-name:--font-gowun-dodum)"
                    />
                  </div>

                  {/* Password */}
                  <div>
                    <label className="block text-sm font-medium text-[#5C4D42] mb-1.5 font-(family-name:--font-gowun-dodum)">
                      비밀번호
                    </label>
                    <input
                      type="password"
                      value={signupForm.password}
                      onChange={(e) =>
                        setSignupForm({
                          ...signupForm,
                          password: e.target.value,
                        })
                      }
                      placeholder="8자 이상 입력해주세요"
                      className="w-full px-4 py-2.5 rounded-xl border border-[#D4C8B8] bg-[#FDFCFA] text-[#5C4D42] placeholder-[#C4B8A8] focus:outline-none focus:border-[#8B7355] focus:ring-2 focus:ring-[#8B7355]/20 transition-all text-sm font-(family-name:--font-gowun-dodum)"
                    />
                  </div>

                  {/* Confirm Password */}
                  <div>
                    <label className="block text-sm font-medium text-[#5C4D42] mb-1.5 font-(family-name:--font-gowun-dodum)">
                      비밀번호 확인
                    </label>
                    <input
                      type="password"
                      value={signupForm.confirmPassword}
                      onChange={(e) =>
                        setSignupForm({
                          ...signupForm,
                          confirmPassword: e.target.value,
                        })
                      }
                      placeholder="비밀번호를 다시 입력해주세요"
                      className="w-full px-4 py-2.5 rounded-xl border border-[#D4C8B8] bg-[#FDFCFA] text-[#5C4D42] placeholder-[#C4B8A8] focus:outline-none focus:border-[#8B7355] focus:ring-2 focus:ring-[#8B7355]/20 transition-all text-sm font-(family-name:--font-gowun-dodum)"
                    />
                  </div>

                  {/* Terms */}
                  <div className="flex items-start gap-2">
                    <input
                      type="checkbox"
                      id="terms"
                      className="mt-1 w-4 h-4 rounded border-[#D4C8B8] text-[#8B7355] focus:ring-[#8B7355]"
                    />
                    <label
                      htmlFor="terms"
                      className="text-xs text-[#7A6B5E] font-(family-name:--font-gowun-dodum)"
                    >
                      <span className="text-[#8B7355] hover:underline cursor-pointer">
                        이용약관
                      </span>{" "}
                      및{" "}
                      <span className="text-[#8B7355] hover:underline cursor-pointer">
                        개인정보처리방침
                      </span>
                      에 동의합니다
                    </label>
                  </div>

                  {/* Signup Button */}
                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-[#8B7355] text-white font-medium transition-all duration-300 hover:bg-[#7A6548] hover:shadow-lg hover:shadow-[#8B7355]/30 font-(family-name:--font-gowun-dodum)"
                  >
                    회원가입
                  </button>
                </form>

                {/* Login Link */}
                <p className="mt-4 text-center text-sm text-[#7A6B5E] font-(family-name:--font-gowun-dodum)">
                  이미 계정이 있으신가요?{" "}
                  <button
                    type="button"
                    onClick={() => setIsFlipped(false)}
                    className="text-[#8B7355] font-medium hover:underline"
                  >
                    로그인
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-0 left-0 right-0 py-4 text-center z-10">
        <p className="text-xs text-[#9B8B7A] font-(family-name:--font-gowun-dodum)">
          © 2026 꿈 기록장. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
