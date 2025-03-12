import React from 'react';
import { Carousel } from 'antd';

interface SlideContent {
  image: string;
  title: string;
  description: string;
}

const slideContents: SlideContent[] = [
  {
    image: "/images/Eliton_facebook_cover.png",
    title: "\nTận Dụng Nắng, Kiến Tạo Tương Lai",
    description: "Chúng tôi giúp bạn khai thác nguồn năng lượng vô tận từ mặt trời, mang lại hiệu quả kinh tế và môi trường bền vững."
  },
 
 
];

const Slider: React.FC = () => {
  return (
    <div className="bg-black hidden sm:block">
      <div className="mx-auto">
        <Carousel
          autoplay
          effect="fade"
          autoplaySpeed={3000}
          pauseOnHover
          dots={{ className: 'custom-dots' }}
          className="h-[700px]"
        >
          {slideContents.map((slide, index) => (
            <div key={index}>
              <div className="relative">
                <img
                  className="w-full h-[700px] object-cover"
                  src={slide.image}
                  alt=""
                />
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Slider;