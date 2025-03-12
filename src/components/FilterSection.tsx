import React from 'react';
import FilterButton from '../components/FilterButton.tsx';

export interface FilterSectionProps {
  icon: string;
  title: string;
  options: string[];
  selectedIndex: number;
}

const FilterSection: React.FC<FilterSectionProps> = ({ icon, title, options, selectedIndex }) => {
  return (
    <div className="flex flex-col justify-center mt-8 w-full leading-none">
      <div className="flex gap-2 items-center w-full text-sm uppercase text-zinc-500 text-opacity-50">
        <img loading="lazy" src={icon} alt="" className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square" />
        <h2 className="gap-2 self-stretch my-auto">{title}</h2>
      </div>
      <div className="flex gap-1.5 items-start mt-4 w-full text-lg font-medium">
        {options.map((option, index) => (
          <FilterButton key={index} label={option} isSelected={index === selectedIndex} />
        ))}
      </div>
    </div>
  );
};

export default FilterSection;