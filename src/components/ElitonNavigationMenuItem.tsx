import React from 'react';

interface NavigationItemProps {
  label: string;
  hasIcon: boolean;
  iconSrc?: string;
  link?: string;
}

const NavigationItem: React.FC<NavigationItemProps> = ({ label, hasIcon, iconSrc,link }) => (
  <div className="flex justify-end gap-2 items-center px-4 w-full min-h-[48px]">
    {link ? (
      <a href={link} className="self-stretch my-auto">{label}</a>
    ) : (
      <div className="self-stretch my-auto">{label}</div>
    )}
    {hasIcon && (
      iconSrc ? (
        <img loading="lazy" src={iconSrc} alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
      ) : (
        <div className="flex shrink-0 self-stretch my-auto w-6 h-6" />
      )
    )}
  </div>
);

export default NavigationItem;