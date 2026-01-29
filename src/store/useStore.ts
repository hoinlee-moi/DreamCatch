import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

// 기본 앱 상태 인터페이스
interface AppState {
  // UI 상태
  isLoading: boolean;
  isSidebarOpen: boolean;
  theme: "light" | "dark" | "system";

  // 액션
  setLoading: (loading: boolean) => void;
  toggleSidebar: () => void;
  setTheme: (theme: "light" | "dark" | "system") => void;
}

// Zustand 스토어 생성
export const useAppStore = create<AppState>()(
  devtools(
    persist(
      (set) => ({
        // 초기 상태
        isLoading: false,
        isSidebarOpen: true,
        theme: "system",

        // 액션 정의
        setLoading: (loading) => set({ isLoading: loading }),
        toggleSidebar: () =>
          set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
        setTheme: (theme) => set({ theme }),
      }),
      {
        name: "app-storage", // localStorage 키
        partialize: (state) => ({
          theme: state.theme,
          isSidebarOpen: state.isSidebarOpen,
        }),
      },
    ),
    { name: "AppStore" },
  ),
);

// 사용자 상태 인터페이스 (예시)
interface UserState {
  user: {
    id: string;
    name: string;
    email: string;
  } | null;
  setUser: (user: UserState["user"]) => void;
  clearUser: () => void;
}

export const useUserStore = create<UserState>()(
  devtools(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
      clearUser: () => set({ user: null }),
    }),
    { name: "UserStore" },
  ),
);
