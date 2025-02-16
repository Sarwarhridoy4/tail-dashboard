import { ReactNode } from "react";

interface MenuItemProps {
  href: string;
  icon: ReactNode;
  name: string;
  isActive: boolean;
}

export default function MenuItem({ href, icon, name, isActive }: MenuItemProps) {
  return (
    <a
      href={href}
      className={`flex items-center p-2 rounded ${
        isActive ? "bg-gray-700" : "hover:bg-gray-700"
      }`}
    >
      {icon}
      {name}
    </a>
  );
} 