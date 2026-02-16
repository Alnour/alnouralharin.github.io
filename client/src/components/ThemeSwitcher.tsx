import { useEffect, useState } from "react";
import { Moon, Sun, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ThemeSwitcher() {
  const [theme, setTheme] = useState<string>("default");

  useEffect(() => {
    const root = window.document.documentElement;
    root.removeAttribute("data-theme");
    if (theme !== "default") {
      root.setAttribute("data-theme", theme);
    }
  }, [theme]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="w-9 h-9 border-white/10 bg-transparent hover:bg-white/5">
          {theme === "default" && <Moon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />}
          {theme === "paper" && <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />}
          {theme === "cyber" && <Terminal className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("default")}>
          <Moon className="mr-2 h-4 w-4" />
          <span>Deep Layers</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("paper")}>
          <Sun className="mr-2 h-4 w-4" />
          <span>Paper & Ink</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("cyber")}>
          <Terminal className="mr-2 h-4 w-4" />
          <span>Cyber-Analog</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}