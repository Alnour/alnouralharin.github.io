import { useEffect, useState } from "react";
import { PenTool, FileText, Leaf } from "lucide-react";
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
          {theme === "default" && <PenTool className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />}
          {theme === "blueprint" && <FileText className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />}
          {theme === "botanical" && <Leaf className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("default")}>
          <PenTool className="mr-2 h-4 w-4" />
          <span>Paper & Ink</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("blueprint")}>
          <FileText className="mr-2 h-4 w-4" />
          <span>Blueprint</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("botanical")}>
          <Leaf className="mr-2 h-4 w-4" />
          <span>Botanical</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}