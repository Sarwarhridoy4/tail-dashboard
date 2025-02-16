import { HomeIcon, ChartBarIcon, CogIcon } from "@heroicons/react/24/outline";
import { menuList } from "../app/menuList";
import MenuItem from "./MenuItem";
import Image from "next/image";

const iconComponents: Record<string, React.ReactElement> = {
  HomeIcon: <HomeIcon className="h-5 w-5 mr-2" />,
  ChartBarIcon: <ChartBarIcon className="h-5 w-5 mr-2" />,
  CogIcon: <CogIcon className="h-5 w-5 mr-2" />,
};

export default function Sidebar({ isOpen }: { isOpen: boolean }) {
  return (
    <aside
      className={`bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 flex flex-col p-4 transition-transform duration-300 h-full absolute top-0 left-0 ${
        isOpen ? "translate-x-0" : "-translate-x-64"
      }`}
      style={{ width: "16rem" }}
    >
      <div className="mb-8 flex items-center justify-center">
        <Image
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          className="dark:invert"
        />
      </div>
      <nav className="flex flex-col gap-4">
        {menuList.map((item) => (
          <MenuItem
            key={item.name}
            href={item.href}
            icon={iconComponents[item.icon]}
            name={item.name}
            isActive={window.location.pathname === item.href}
          />
        ))}
      </nav>
    </aside>
  );
} 