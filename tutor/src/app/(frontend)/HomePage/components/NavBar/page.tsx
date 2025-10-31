'use client'

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-white text-black font-semibold text-base z-50 p-5 shadow-sm  sticky top-0">
      <NavigationMenu>
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">

          {/* 🔹 LOGO bên trái */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/images/Logo-tutor.png"
                alt="Logo"
                width={120}
                height={120}
                className="object-contain"
              />
            </Link>
          </div>

          {/* 🔹 MENU căn giữa */}
          <div className="flex-1 flex justify-center">
            <NavigationMenuList className="flex items-center space-x-8">

              {/* GIỚI THIỆU */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-black hover:text-red-600">
                  Giới thiệu
                </NavigationMenuTrigger>
                <NavigationMenuContent className="absolute top-7 mt-2 bg-white border border-gray-200 shadow-md rounded-lg z-50 min-w-[220px]">
                  <ul className="flex flex-col p-3 space-y-2">
                    <li><Link href="/pages/About/Overview" className="hover:text-red-600">Tổng quan</Link></li>
                    <li><Link href="/pages/About/Teachers" className="hover:text-red-600">Đội ngũ giáo viên</Link></li>
                    <li><Link href="/pages/About/Achievements" className="hover:text-red-600">Bảng vàng thành tích</Link></li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* THƯƠNG HIỆU ĐÀO TẠO */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-black hover:text-red-600">
                  Thương hiệu đào tạo
                </NavigationMenuTrigger>
                <NavigationMenuContent className="absolute top-7 mt-2 bg-white border border-gray-200 shadow-md rounded-lg z-50 min-w-[220px]">
                  <ul className="flex flex-col p-3 space-y-2">
                    <li><Link href="/pages/Programs/IELTS" className="hover:text-red-600">Chương trình IELTS</Link></li>
                    <li><Link href="/pages/Programs/TOEIC" className="hover:text-red-600">Luyện thi TOEIC</Link></li>
                    <li><Link href="/pages/Programs/Communication" className="hover:text-red-600">Tiếng Anh giao tiếp</Link></li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* KHÓA HỌC */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-black hover:text-red-600">
                  Khóa học
                </NavigationMenuTrigger>
                <NavigationMenuContent className="absolute top-7 mt-2 bg-white border border-gray-200 shadow-md rounded-lg z-50 min-w-[220px]">
                  <ul className="flex flex-col p-3 space-y-2">
                    <li><Link href="/pages/Courses/Online" className="hover:text-red-600">Học online</Link></li>
                    <li><Link href="/pages/Courses/Offline" className="hover:text-red-600">Học trực tiếp tại trung tâm</Link></li>
                    <li><Link href="/pages/Courses/Corporate" className="hover:text-red-600">Tiếng Anh doanh nghiệp</Link></li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* TIN TỨC */}
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/pages/News" className="hover:text-red-600">
                    Tin tức
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* TÀI LIỆU HỌC TẬP */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-black hover:text-red-600">
                  E-learning
                </NavigationMenuTrigger>
                <NavigationMenuContent className="absolute top-7 mt-2 bg-white border border-gray-200 shadow-md rounded-lg z-50 min-w-[230px]">
                  <ul className="flex flex-col p-3 space-y-2">
                    <li><Link href="/LoginPage" className="hover:text-red-600">Thi luyện test</Link></li>
                    <li><Link href="/TopicPage" className="hover:text-red-600">Từ vựng</Link></li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* LIÊN HỆ */}
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/pages/Contact" className="hover:text-red-600">
                    Liên hệ
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

            </NavigationMenuList>
          </div>
        </div>
      </NavigationMenu>
    </nav>
  );
}
