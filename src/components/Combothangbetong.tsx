import { Button, Collapse, Divider, Carousel } from "antd";
const { Panel } = Collapse;
import { DownOutlined } from "@ant-design/icons";

const combodata = [

  
  {
    title: "Dragon Fly",
    sku: "Eli-01",
    desc: "Inox - Classic",

    imgsrc: "/images/combo/eli01/eli01-3.png",
    imggallery: [
      { src: "/images/combo/eli01/eli01-1.png" },
      { src: "/images/combo/eli01/eli01-2.png" },
    ],
    info: [
      {
        title: "Kích thước",
        value: "1.500 × 1.500mm",
        icon: "/images/dimention2.svg",
      },
      {
        title: "Hố Pit",
        value: "≥ 700mm",
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4c7c40d282f31d9d67c88cb7e7f69abdcc6dc2c4db8f2f84f2b18a8ccf663c7d?apiKey=098ebfbb07384cf89eeedb3d40701deb&",
      },
      {
        title: "Số điểm dừng",
        value: "05 Tầng",
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/aec5fc756728cf2478076797ee251460cf16d267ebd7bb05f677a2124906cf15?apiKey=098ebfbb07384cf89eeedb3d40701deb&",
      },
      {
        title: "Tải trọng",
        value: "450 Kg",
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/6ce19b65f45d1470fa8d852a023495bc6c61938fbd5c5eb4764d723b5a902e12?apiKey=098ebfbb07384cf89eeedb3d40701deb&",
      },
      {
        title: "Động cơ",
        value: "Torin Drive",
        icon: "/images/engine-eliton.svg",
      },
      {
        title: "Tủ điện",
        value: "Fuji - NICE ",
        icon: "/images/tu-dien-eliton.svg",
      },
    ],
    price: 320000000,
    btnlink: "/san-pham/eli01",
  },
  {
    title: "Dragon Fly - Y",
    sku: "Eli-02",
    desc: "Minions-Y",

    imgsrc: "/images/combo/eli02/eli02-3.png",
    imggallery: [
      { src: "/images/combo/eli02/eli02-1.png" },
      { src: "/images/combo/eli02/eli02-2.png" },
    ],
    info: [
      {
        title: "kích thước",
        value: "1.500 × 1.500mm",
        icon: "/images/dimention2.svg",
      },
      {
        title: "Hố Pit",
        value: "≥ 700mm",
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4c7c40d282f31d9d67c88cb7e7f69abdcc6dc2c4db8f2f84f2b18a8ccf663c7d?apiKey=098ebfbb07384cf89eeedb3d40701deb&",
      },
      {
        title: "Số điểm dừng",
        value: "05 Tầng",
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/aec5fc756728cf2478076797ee251460cf16d267ebd7bb05f677a2124906cf15?apiKey=098ebfbb07384cf89eeedb3d40701deb&",
      },
      {
        title: "Tải trọng",
        value: "450 Kg",
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/6ce19b65f45d1470fa8d852a023495bc6c61938fbd5c5eb4764d723b5a902e12?apiKey=098ebfbb07384cf89eeedb3d40701deb&",
      },
      {
        title: "Động cơ",
        value: "Torin Drive",
        icon: "/images/engine-eliton.svg",
      },
      {
        title: "Tủ điện",
        value: "Fuji - NICE ",
        icon: "/images/tu-dien-eliton.svg",
      },
    ],
    price: 333000000,
    btnlink: "/san-pham/eli02",
  },
  
  {
    title: "Minions",
    sku: "Eli-03",
    desc: "Inox - Classic",

    imgsrc: "/images/combo/eli03/eli03-3.png",
    imggallery: [{ src: "/images/cabin-C03.jpeg" }],
    info: [
      {
        title: "kích thước",
        value: "1.500 × 1.500mm",
        icon: "/images/dimention2.svg",
      },
      {
        title: "Hố Pit",
        value: "≥ 700mm",
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4c7c40d282f31d9d67c88cb7e7f69abdcc6dc2c4db8f2f84f2b18a8ccf663c7d?apiKey=098ebfbb07384cf89eeedb3d40701deb&",
      },
      {
        title: "Số điểm dừng",
        value: "05 Tầng",
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/aec5fc756728cf2478076797ee251460cf16d267ebd7bb05f677a2124906cf15?apiKey=098ebfbb07384cf89eeedb3d40701deb&",
      },
      {
        title: "Tải trọng",
        value: "450 Kg",
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/6ce19b65f45d1470fa8d852a023495bc6c61938fbd5c5eb4764d723b5a902e12?apiKey=098ebfbb07384cf89eeedb3d40701deb&",
      },
      {
        title: "Động cơ",
        value: "Torin Drive",
        icon: "/images/engine-eliton.svg",
      },
      {
        title: "Tủ điện",
        value: "Fuji - NICE ",
        icon: "/images/tu-dien-eliton.svg",
      },
    ],
    price: 325000000,
    btnlink: "/san-pham/eli03",
  },
  {
    title: "Minions - Y",
    sku: "Eli-04",

    desc: "Inox - Classic",

    imgsrc: "/images/combo/eli04/eli04-3.png",
    imggallery: [{ src: "/images/cabin-C16.jpeg" }],
    info: [
      {
        title: "kích thước",
        value: "1.500 × 1.500mm",
        icon: "/images/dimention2.svg",
      },
      {
        title: "Hố Pit",
        value: "≥ 700mm",
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4c7c40d282f31d9d67c88cb7e7f69abdcc6dc2c4db8f2f84f2b18a8ccf663c7d?apiKey=098ebfbb07384cf89eeedb3d40701deb&",
      },
      {
        title: "Số điểm dừng",
        value: "05 Tầng",
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/aec5fc756728cf2478076797ee251460cf16d267ebd7bb05f677a2124906cf15?apiKey=098ebfbb07384cf89eeedb3d40701deb&",
      },
      {
        title: "Tải trọng",
        value: "450 Kg",
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/6ce19b65f45d1470fa8d852a023495bc6c61938fbd5c5eb4764d723b5a902e12?apiKey=098ebfbb07384cf89eeedb3d40701deb&",
      },
      {
        title: "Động cơ",
        value: "Torin Drive",
        icon: "/images/engine-eliton.svg",
      },
      {
        title: "Tủ điện",
        value: "Fuji - NICE ",
        icon: "/images/tu-dien-eliton.svg",
      },
    ],
    price: 337000000,
    btnlink: "/san-pham/eli04",
  },

  {
    title: "Hippo",
    sku: "Eli-05",

    desc: "Inox - Classic",

    imgsrc: "/images/combo/eli05/eli05-3.png",
    imggallery: [{ src: "/images/cabin-C16.jpeg" }],
    info: [
      {
        title: "kích thước",
        value: "1.500 × 1.500mm",
        icon: "/images/dimention2.svg",
      },
      {
        title: "Hố Pit",
        value: "≥ 700mm",
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4c7c40d282f31d9d67c88cb7e7f69abdcc6dc2c4db8f2f84f2b18a8ccf663c7d?apiKey=098ebfbb07384cf89eeedb3d40701deb&",
      },
      {
        title: "Số điểm dừng",
        value: "05 Tầng",
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/aec5fc756728cf2478076797ee251460cf16d267ebd7bb05f677a2124906cf15?apiKey=098ebfbb07384cf89eeedb3d40701deb&",
      },
      {
        title: "Tải trọng",
        value: "450 Kg",
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/6ce19b65f45d1470fa8d852a023495bc6c61938fbd5c5eb4764d723b5a902e12?apiKey=098ebfbb07384cf89eeedb3d40701deb&",
      },
      {
        title: "Động cơ",
        value: "Torin Drive",
        icon: "/images/engine-eliton.svg",
      },
      {
        title: "Tủ điện",
        value: "Fuji - NICE ",
        icon: "/images/tu-dien-eliton.svg",
      },
    ],
    price: 325000000,
    btnlink: "/san-pham/eli05",
  },
  {
    title: "Hippo - Y",
    sku: "Eli-06",

    desc: "Inox - Classic",

    imgsrc: "/images/combo/eli06/eli06-3.png",
    imggallery: [{ src: "/images/cabin-C16.jpeg" }],
    info: [
      {
        title: "kích thước",
        value: "1.500 × 1.500mm",
        icon: "/images/dimention2.svg",
      },
      {
        title: "Hố Pit",
        value: "≥ 700mm",
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4c7c40d282f31d9d67c88cb7e7f69abdcc6dc2c4db8f2f84f2b18a8ccf663c7d?apiKey=098ebfbb07384cf89eeedb3d40701deb&",
      },
      {
        title: "Số điểm dừng",
        value: "05 Tầng",
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/aec5fc756728cf2478076797ee251460cf16d267ebd7bb05f677a2124906cf15?apiKey=098ebfbb07384cf89eeedb3d40701deb&",
      },
      {
        title: "Tải trọng",
        value: "450 Kg",
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/6ce19b65f45d1470fa8d852a023495bc6c61938fbd5c5eb4764d723b5a902e12?apiKey=098ebfbb07384cf89eeedb3d40701deb&",
      },
      {
        title: "Động cơ",
        value: "Torin Drive",
        icon: "/images/engine-eliton.svg",
      },
      {
        title: "Tủ điện",
        value: "Fuji - NICE ",
        icon: "/images/tu-dien-eliton.svg",
      },
    ],
    price: 337000000,
    btnlink: "/san-pham/eli06",
  },
];

export default function Combocard() {
  return (
    <div className="flex flex-col pt-10">
      <div className="w-full px-4 lg:px-10">
        <div className="flex flex-nowrap lg:grid lg:grid-cols-3 lg:gap-6 overflow-x-auto lg:overflow-visible gap-6 pb-10 snap-x snap-mandatory">
          {combodata.map((item, index) => (
            <div
              key={index}
              className="bg-black rounded-xl shadow-lg snap-always snap-center hover:scale-105 transition-transform duration-300 flex-none w-[350px] lg:w-full"
            >
              <div
                className="flex overflow-hidden flex-col w-[350px] lg:w-full pb-16 pt-4 bg-black rounded-t-xl relative"
              >
                <img
                  loading="lazy"
                  srcSet={item.imgsrc}
                  className="rounded-t-md bg-black object-contain h-[400px] w-full mx-auto"
                  alt={item.title}
                  width={350}
                  height={400}
                />

                <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/90 to-transparent rounded-t-xl">
                  <Collapse
                    accordion
                    expandIconPosition="end"
                    bordered={false}
                    expandIcon={({ isActive }) => (
                      <div className="text-white flex justify-between gap-2">
                        <span className="text-yellow-400 text-xs">
                          {isActive ? "Thu gọn" : "Xem chi tiết"}
                        </span>
                        <DownOutlined
                          rotate={isActive ? 0 : -90}
                          style={{ color: "white" }}
                        />
                      </div>
                    )}
                    className="site-collapse-custom-collapse"
                  >
                    <Panel
                      header={
                        <h2 className="text-sm font-medium text-white">
                          Thông số sản phẩm
                        </h2>
                      }
                      key="1"
                    >
                      {item.info.map((infoItem, idx) => (
                        <div
                          key={idx}
                          className="flex items-center justify-between text-white py-2.5 border-b border-gray-100/20 hover:bg-white/10 transition-colors px-2 rounded"
                        >
                          <div className="flex items-center">
                            <img
                              src={infoItem.icon}
                              alt={infoItem.title}
                              className="w-5 h-5 mr-3"
                              style={{ filter: "invert(1)" }}
                              width={20}
                              height={20}
                            />
                            <div className="font-medium text-sm">
                              {infoItem.title}
                            </div>
                          </div>

                          <div className="text-sm font-medium">{infoItem.value}</div>
                        </div>
                      ))}
                    </Panel>
                  </Collapse>
                </div>
              </div>
              <div className="px-6 pt-4 flex justify-between items-center">
                <div>
                  <h2 className="text-xl font-bold text-white">{item.title}</h2>
                </div>
                <Button className="bg-slate-800 hover:bg-slate-700 rounded-full text-white border-none text-xs px-4">
                  {item.sku}
                </Button>
              </div>
              <div className="px-6 py-6 flex items-center justify-between">
              <div className="text-white text-left">
                  <div className="text-white/70 text-sm">Giá niêm yết:</div>
                  <div className="text-yellow-400 text-xl font-bold">
                    {item.price.toLocaleString('vi-VN')} đ
                  </div>
                </div>
                <Button
                  type="text"
                  className="py-2 px-6 rounded-lg border border-white/30 hover:bg-white/10 transition-colors flex items-center gap-2"
                  href={item.btnlink}
                >
                  <h3 className="text-white text-sm font-medium">Tìm hiểu</h3>
                  <img
                    src="/images/akar-icons_link-out.svg"
                    alt="arrow-right"
                    className="w-4 h-4"
                    width={16}
                    height={16}
                  />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
