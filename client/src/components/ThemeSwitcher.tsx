import { useEffect, useState } from "react";
import { Book, Grid, Beaker } from "lucide-react";
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
        <Button variant="outline" size="icon" className="w-9 h-9 border-border bg-transparent hover:bg-muted text-foreground">
          {theme === "default" && <Book className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />}
          {theme === "swiss" && <Grid className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />}
          {theme === "lab" && <Beaker className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("default")}>
          <Book className="mr-2 h-4 w-4" />
          <span>Manuscript (Classic)</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("swiss")}>
          <Grid className="mr-2 h-4 w-4" />
          <span>Swiss Grid (Modern)</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("lab")}>
          <Beaker className="mr-2 h-4 w-4" />
          <span>Lab Notebook (Tech)</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}