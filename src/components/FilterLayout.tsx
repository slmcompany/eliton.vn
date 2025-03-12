import React from 'react';
import FilterSection from '../components/FilterSection.tsx';
import FilterButton from '../components/FilterButton.tsx';
import type { FilterSectionProps } from '../components/FilterSection.tsx';

interface FilterLayoutProps {
  onClose: () => void;
}

const FilterLayout: React.FC<FilterLayoutProps> = ({ onClose }) => {
  const filterSections: FilterSectionProps[] = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/098ebfbb07384cf89eeedb3d40701deb/3eeb9df574feb267ee378fe29ac9f5c34283d23812d33f156682eb18578b2df6?apiKey=098ebfbb07384cf89eeedb3d40701deb&",
      title: "Sắp xếp theo",
      options: ["Gần đây nhất", "Cũ nhất"],
      selectedIndex: 0
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/098ebfbb07384cf89eeedb3d40701deb/8885606bd2f9a485b07506dfba16c188d0e82553bb2701eded8dba0677bba3b3?apiKey=098ebfbb07384cf89eeedb3d40701deb&",
      title: "Dòng sản phẩm",
      options: ["Eli - 01", "Eli - 02", "Eli - 03", "Eli - 04", "Eli - 05"],
      selectedIndex: 2
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/098ebfbb07384cf89eeedb3d40701deb/e0299c0947320fdfe33930a2514a68b6eba4a712a5ef63fca224efa56c68e09e?apiKey=098ebfbb07384cf89eeedb3d40701deb&",
      title: "Hố thang",
      options: ["0 - 300 mm", "300 - 600 mm", "600 - 1200 mm"],
      selectedIndex: 2
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/098ebfbb07384cf89eeedb3d40701deb/bbaabbc0644846de150fef6a247cdfde774865365df90bbd46aae77d5c9ae337?apiKey=098ebfbb07384cf89eeedb3d40701deb&",
      title: "Số điểm dừng",
      options: ["1", "2", "3", "4", "5"],
      selectedIndex: 4
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/098ebfbb07384cf89eeedb3d40701deb/b04e72b88eff91c039910c33651716f5991486ed8c5f0add4a110c87fad4952b?apiKey=098ebfbb07384cf89eeedb3d40701deb&",
      title: "Tải trọng",
      options: ["350 kg", "450 kg", "630 kg", "800 kg", "1000 kg"],
      selectedIndex: 2
    }
  ];

  return (
    <div className="flex overflow-hidden flex-col bg-white ">
      <header className="flex gap-2 items-center px-4 py-3 w-full text-lg font-semibold leading-loose text-white bg-black">
        <h1 className="self-stretch my-auto">Đóng bộ lọc</h1>
        <button onClick={onClose} aria-label="Close filters">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/098ebfbb07384cf89eeedb3d40701deb/22d5eaefd402e3438e24bf8a10630f9ba2d71432785db7c8a41d80d7f86abdc8?apiKey=098ebfbb07384cf89eeedb3d40701deb&" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
        </button>
      </header>
      {/* <section className="flex flex-col self-center mt-10 max-w-full w-[358px]">
        {filterSections.map((section, index) => (
          <FilterSection key={index} {...section} />
        ))}
      </section> */}
    </div>
  );
};

export default FilterLayout;