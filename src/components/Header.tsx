import { useState, useEffect } from "react";
import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/react";
import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/outline";
import ElitonNavigationMenu from "../components/ElitonNavigationMenu.tsx";

const navigation = [
  { name: "Trang chủ", href: "/" },
  { name: "Thiết bị", href: "/thiet-bi" },
  { name: "Về chúng tôi", href: "/gioi-thieu" },
];

const mobilenavigation = [
  {
    heading: "Menu chính",
    submenu: [
      {
        title: "Trang chủ",
        link: "/",
        icon: "/images/icon-home.svg",
      },
      {
        title: "Thiết bị",
        link: "/thiet-bi",
        icon: "/images/icon-briefcase.svg",
      },
      {
        title: "Về chúng tôi", 
        link: "/gioi-thieu",
        icon: "/images/icon-info.svg",
      },
    ],
  }
];

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("up");

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`md:relative xs:relative relative top-0 w-full isolate z-10 md:bg-black bg-black bg-clip-padding border-b-4backdrop-filter bg-opacity-100 backdrop-blur-sm transition-transform duration-300 
       
      `}
    >
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-3 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Eliton</span>
            <img
              alt=""
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b40efdc805bad545e1df62628f24223b940bf9444833c8f04fd03e99b86416d6?apiKey=098ebfbb07384cf89eeedb3d40701deb&"
              className="lg:h-5 h-8 w-auto"
            />
          </a>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars2Icon aria-hidden="true" className="h-6 w-6 text-white" />
          </button>
        </div>

        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-white"
            >
              {item.name}
            </a>
          ))}
        </PopoverGroup>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {/* <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Đăng nhập <span aria-hidden="true">&rarr;</span>
          </a> */}
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-gray-100 p-3 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">SoLarMax</span>
              <img
                alt=""
                src="/images/eliton-logo.png"
                className="h-8 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>

          <ElitonNavigationMenu />
        </DialogPanel>
      </Dialog>
    </header>
  );
}
