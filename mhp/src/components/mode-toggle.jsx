import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  // Function to toggle between light and dark theme
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Button variant="" size="icon*2" onClick={toggleTheme}>
      {theme === "dark" ? (
        <Sun className="h-[20px] w-[10px]" />
      ) : (
        <Moon className="h-[20px] w-[10px]" />
      )}
    </Button>
  );
}
