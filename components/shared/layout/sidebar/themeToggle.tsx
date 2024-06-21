import React, { useEffect } from "react";
import { useLayout } from "@/store/layout";
import { Button } from "@/components/ui/button";
import { Sun, Moon } from "lucide-react";

function ThemeToggle() {
  // initial variables
  const { theme, toggleTheme } = useLayout();

  //   lifecycle
  useEffect(() => {
    const method = theme === "dark" ? "add" : "remove";
    document.documentElement.classList[method]("dark");
    document.body.classList[method]("bg-light");
  }, [theme]);

  return (
    <Button
      variant="outline"
      size="icon"
      className="rounded-full"
      onClick={toggleTheme}
    >
      {theme === "dark" ? <Sun size={24} /> : <Moon size={24} />}
    </Button>
  );
}

export default ThemeToggle;
