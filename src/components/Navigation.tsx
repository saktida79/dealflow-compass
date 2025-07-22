import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { 
  Home, 
  Briefcase, 
  Users, 
  Calculator, 
  FileText, 
  BarChart3,
  GitMerge,
  Settings,
  Menu,
  X
} from "lucide-react";

const Navigation = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: "Dashboard", href: "/", icon: Home },
    { name: "Deals", href: "/deals", icon: Briefcase },
    { name: "Clients", href: "/clients", icon: Users },
    { name: "Financial Analysis", href: "/financial", icon: Calculator },
    { name: "Documents", href: "/documents", icon: FileText },
    { name: "Integration", href: "/integration", icon: GitMerge },
    { name: "Analytics", href: "/analytics", icon: BarChart3 },
    { name: "Settings", href: "/settings", icon: Settings },
  ];

  return (
    <>
      {/* Mobile menu button */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
        >
          {isMobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </Button>
      </div>

      {/* Sidebar Navigation */}
      <nav className={cn(
        "fixed left-0 top-0 h-screen w-64 bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-card/50 border-r border-border/50 z-40 transform transition-transform duration-200 ease-in-out",
        isMobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
      )}>
        <div className="p-6">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center">
              <Briefcase className="h-5 w-5 text-white" />
            </div>
            M&A Pro
          </Link>
        </div>

        <div className="px-4 space-y-2">
          {navigationItems.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsMobileOpen(false)}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
              >
                <item.icon className="h-4 w-4" />
                {item.name}
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Mobile overlay */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-30 md:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}
    </>
  );
};

export default Navigation;