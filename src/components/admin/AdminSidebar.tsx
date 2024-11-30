import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  BarChart,
  BookOpen,
  GraduationCap,
  Users,
  Settings,
  HelpCircle,
  ChevronLeft,
  Plus,
  UserCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface AdminSidebarProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const menuItems = [
  { icon: BarChart, label: 'Dashboard', href: '/admin' },
  { icon: BookOpen, label: 'Courses', href: '/admin/courses' },
  { icon: Users, label: 'Users', href: '/admin/users' },
  { icon: Settings, label: 'Settings', href: '/admin/settings' },
  { icon: HelpCircle, label: 'Help', href: '/admin/help' },
];

export default function AdminSidebar({ open, onOpenChange }: AdminSidebarProps) {
  return (
    <aside className={cn(
      "fixed inset-y-0 left-0 z-50 flex flex-col bg-white border-r transition-all duration-300",
      open ? "w-64" : "w-20"
    )}>
      {/* Header */}
      <div className="h-16 flex items-center justify-between px-4 border-b">
        <div className="flex items-center">
          <GraduationCap className={cn(
            "h-8 w-8 text-primary transition-all duration-300",
            open ? "mr-3" : "mr-0"
          )} />
          <span className={cn(
            "font-bold text-xl transition-all duration-300",
            open ? "opacity-100" : "opacity-0 w-0"
          )}>
            Admin
          </span>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="hidden lg:flex"
          onClick={() => onOpenChange(!open)}
        >
          <ChevronLeft className={cn(
            "h-4 w-4 transition-transform duration-300",
            !open && "rotate-180"
          )} />
        </Button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto p-2">
        <div className="mb-4">
          <Button
            className={cn(
              "w-full justify-start bg-primary/10 text-primary hover:bg-primary/20",
              !open && "justify-center"
            )}
          >
            <Plus className="h-4 w-4 mr-2" />
            {open && "New Course"}
          </Button>
        </div>

        <div className="space-y-1">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className={cn(
                "flex items-center px-3 py-2 text-gray-600 rounded-lg hover:bg-gray-100 transition-colors",
                !open && "justify-center"
              )}
            >
              <item.icon className="h-5 w-5" />
              {open && (
                <span className="ml-3 text-sm font-medium">{item.label}</span>
              )}
            </Link>
          ))}
        </div>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t">
        <div className={cn(
          "flex items-center",
          !open && "justify-center"
        )}>
          <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
            <UserCircle className="h-4 w-4 text-primary" />
          </div>
          {open && (
            <div className="ml-3">
              <p className="text-sm font-medium">Admin User</p>
              <p className="text-xs text-muted-foreground">admin@example.com</p>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}