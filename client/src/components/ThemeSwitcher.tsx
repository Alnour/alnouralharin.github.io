import { useEffect, useState } from "react";
import { Palette, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";

const themes = [
  { id: "default", label: "Manuscript", color: "hsl(220 90% 45%)" },
  { id: "swiss", label: "Swiss Grid", color: "hsl(0 85% 50%)" },
  { id: "lab", label: "Lab Notebook", color: "hsl(220 90% 45%)" },
  { id: "midnight", label: "Midnight Dark", color: "hsl(215 90% 55%)" },
  { id: "sunset", label: "Sunset Warm", color: "hsl(25 95% 53%)" },
  { id: "forest", label: "Forest Green", color: "hsl(150 55% 35%)" },
  { id: "ocean", label: "Ocean Breeze", color: "hsl(185 70% 40%)" },
  { id: "lavender", label: "Lavender Dreams", color: "hsl(270 60% 55%)" },
  { id: "neon", label: "Neon Cyber", color: "hsl(320 100% 60%)" },
  { id: "rosegold", label: "Rose Gold", color: "hsl(350 55% 55%)" },
  { id: "arctic", label: "Arctic Frost", color: "hsl(210 50% 50%)" },
  { id: "terracotta", label: "Terracotta", color: "hsl(15 65% 48%)" },
  { id: "noir", label: "Noir Contrast", color: "hsl(0 0% 10%)" },
];

export function ThemeSwitcher() {
  const [theme, setTheme] = useState<string>(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("app-theme") || "default";
    }
    return "default";
  });

  useEffect(() => {
    const root = window.document.documentElement;
    root.removeAttribute("data-theme");
    if (theme !== "default") {
      root.setAttribute("data-theme", theme);
    }
    localStorage.setItem("app-theme", theme);
  }, [theme]);


  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="w-9 h-9 border-border bg-transparent hover:bg-muted text-foreground"
          data-testid="button-theme-switcher"
        >
          <Palette className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-52 max-h-80 overflow-y-auto">
        <DropdownMenuLabel className="text-xs text-muted-foreground">Choose Theme</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {themes.map((t) => (
          <DropdownMenuItem
            key={t.id}
            onClick={() => setTheme(t.id)}
            className="flex items-center gap-2 cursor-pointer"
            data-testid={`menu-theme-${t.id}`}
          >
            <span
              className="w-3 h-3 rounded-full shrink-0 border border-border"
              style={{ backgroundColor: t.color }}
            />
            <span className="flex-1">{t.label}</span>
            {theme === t.id && <Check className="h-4 w-4 text-primary shrink-0" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
