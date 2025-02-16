import { ReactNode } from "react";

interface MenuItemProps {
  href: string;
  icon: ReactNode;
  name: string;
  isActive: boolean;
}

export default function MenuItem({
  href,
  icon,
  name,
  isActive,
}: MenuItemProps) {
  return (
    <a
      href={href}
      className={`text-sky-600 hover:text-white dark:text-white flex items-center p-2 rounded ${
        isActive ? "bg-gray-700" : "hover:bg-sky-600 dark:hover:bg-slate-950 dark:bg-gray-900"
      }`}
    >
      {icon}
      {name}
    </a>
  );
}
