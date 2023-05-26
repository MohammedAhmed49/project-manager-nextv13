"use client";
import clsx from "clsx";
import { Icon } from "next/dist/lib/metadata/types/metadata-types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";
import { Settings, User, Grid, Calendar } from "react-feather";

const icons: any = { Settings, User, Grid, Calendar };

interface IProps {
  link: {
    icon: string;
    link: string;
  };
}

const SidebarLink: FC<IProps> = ({ link }) => {
  const pathname = usePathname();
  let isActive = pathname === link.link;

  // We made it that way because we can't pass Icon as functional component from server component to client component
  // because funcational components are not serializable so we passed it as a string
  const Icon = icons[link.icon];
  return (
    <Link href={link.link} className="w-full flex justify-center items-center">
      <Icon
        size={40}
        className={clsx(
          "stroke-gray-400 hover:stroke-violet-600 transition duration-200 ease-in-out",
          isActive && "stroke-violet-600"
        )}
      />
    </Link>
  );
};

export default SidebarLink;
