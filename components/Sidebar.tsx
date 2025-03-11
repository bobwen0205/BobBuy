import React, { FC } from "react";
import { motion } from "motion/react";
import Logo from "./Logo";
import { X } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import SocailMedia from "./SocailMedia";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import { CATEGORIES_QUERYResult } from "@/sanity.types";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  categories: CATEGORIES_QUERYResult;
}

const Sidebar: FC<SidebarProps> = ({ isOpen, onClose, categories }) => {
  const pathname = usePathname();
  const sidebarRef = useOutsideClick<HTMLDivElement>(onClose);
  return (
    <div
      className={`fixed inset-y-0 left-0 z-50 bg-darkColor/50 shadow-xl hoverEffect cursor-auto w-full ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        ref={sidebarRef}
        className="min-w-72 max-w-96 bg-darkColor text-white/70 h-full p-10 border-r border-r-white flex flex-col gap-6"
      >
        <div className="flex justify-between items-center">
          <button onClick={onClose}>
            <Logo className="text-white">BobBuy</Logo>
          </button>
          <button className="hover:text-red-500 hoverEffect" onClick={onClose}>
            <X />
          </button>
        </div>
        <div className="flex flex-col gap-3.5 text-base capitalize font-semibold tracking-wide">
          {categories?.map((category) => (
            <Link
              onClick={onClose}
              key={category?.title}
              href={`/category/${category?.slug?.current}`}
              className={`hover:text-white hoverEffect w-24 ${
                pathname === `/category/${category?.slug?.current}` &&
                "text-red-600"
              }`}
            >
              {category?.title}
            </Link>
          ))}
        </div>
        <SocailMedia />
      </motion.div>
    </div>
  );
};

export default Sidebar;
