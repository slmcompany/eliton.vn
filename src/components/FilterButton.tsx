import React from 'react';

interface FilterButtonProps {
  label: string;
  isSelected: boolean;
}

const FilterButton: React.FC<FilterButtonProps> = ({ label, isSelected }) => {
  const baseClasses = "gap-2.5 self-stretch px-3 py-1 border border-black border-solid";
  const selectedClasses = "text-white bg-black";
  const unselectedClasses = "text-black";

  return (
    <button
      className={`${baseClasses} ${isSelected ? selectedClasses : unselectedClasses}`}
      aria-pressed={isSelected}
    >
      {label}
    </button>
  );
};

export default FilterButton;