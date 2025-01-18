"use client";
import { SunMoon } from "lucide-react";
import { GlassEffectWrapper } from "./GlassEffectWrapper";
import { NavBtn } from "./Nav";
import { useEffect, useState } from "react";

function DarkModeToggle() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return (
        localStorage.getItem("theme") ||
        (window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light")
      );
    }
    return "light"; // Default for SSR
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.classList.toggle("dark", theme === "dark");
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <GlassEffectWrapper>
      <NavBtn onClick={toggleTheme}>
        <SunMoon className="text-grau-0 dark:text-zinc-100 hover:text-grau-3 dark:hover:text-grau-5" />
      </NavBtn>
    </GlassEffectWrapper>
  );
}

export { DarkModeToggle };
