import React from "react";
import NavigationItem from "../components/ElitonNavigationMenuItem.tsx";

const navigationItems = [
  { label: "Trang chủ", link: "/", hasIcon: true },
  // { label: 'Combo sản phẩm', link:"/thiet-bi", hasIcon: true, iconSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/05719b0bc8adf147a0e97f780bea0ba2d2f701cac417ada50303bc5f38458fc4?placeholderIfAbsent=true&apiKey=098ebfbb07384cf89eeedb3d40701deb' },
  { label: "Thiết bị", link: "/thiet-bi", hasIcon: true },
  // { label: "Hiểu đúng mua đúng", link: "/", hasIcon: true },
  { label: "Về chúng tôi", link: "/gioi-thieu", hasIcon: true },
];

const NavigationMenu: React.FC = () => (
  <nav className="flex overflow-hidden flex-col pt-10 pb-96 w-full ">
    {navigationItems.map((item, index) => (
      <NavigationItem
        key={index}
        label={item.label}
        link={item.link}
        hasIcon={item.hasIcon}
        // iconSrc={item.iconSrc}
      />
    ))}
  </nav>
);

export default NavigationMenu;
