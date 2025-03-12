import { useState } from "react";
import { List, Modal, Button, Radio,  } from "antd";
import {
  EditOutlined, DownloadOutlined
} from '@ant-design/icons';

interface ProductDetail {
  title: string;
  description?: string;
  mainImg?: string;
  galleryImages?: { src: string }[];
  
  info?: {
    title: string;
    value?: string | null;
    icon: string;
    options?: { title: string; price: number; default?: boolean; img?: string; desc?: string | null }[];
  }[];
  price?: string;
}

interface ProductPageProps {
  productDetails: ProductDetail;
}

const ProductPage = ({ productDetails }: ProductPageProps) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<{
    [key: string]: string;
  }>({});
  const [currentInfoItem, setCurrentInfoItem] = useState<
    (ProductDetail["info"] extends (infer U)[] ? U : never) | null
  >(null);
  const [tempSelectedOption, setTempSelectedOption] = useState<string>("");

  const showModal = (infoItem: NonNullable<ProductDetail["info"]>[number]) => {
    if (infoItem.options) {
      setCurrentInfoItem(
        infoItem as ProductDetail["info"] extends (infer U)[] ? U : never,
      );
      setIsModalVisible(true);
    }
  };

  const handleOk = () => {
    if (currentInfoItem && tempSelectedOption) {
      setSelectedOptions((prev) => ({
        ...prev,
        [(currentInfoItem as { title: string }).title]: tempSelectedOption
      }));
    }
    setIsModalVisible(false);
    setTempSelectedOption("");
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setTempSelectedOption("");
  };

  const handleOptionChange = (infoTitle: string, optionTitle: string) => {
    setTempSelectedOption(optionTitle);
  };

  return (
    <div className="sm:hidden block">
      <div className="bg-white">
        <div>
          <div>
            

            <div className="px-4">
              <div className="flex justify-between py-6">
                <h4 className="font-bold text-xl ">{productDetails.title}</h4>
              </div>
              <div className="flex w-full">
              <div className="w-full">
              <p className="text-[10px]">Giá tham khảo</p>
              <p className="text-lg font-bold text-black">
                {new Intl.NumberFormat("vi-VN", {
                  style: "currency",
                  currency: "VND",
                }).format(
                  parseInt(productDetails.price || "0") +
                    Object.keys(selectedOptions).reduce((total, key) => {
                      const option = productDetails.info
                        ?.find((info) => info.title === key)
                        ?.options?.find(
                          (option) => option.title === selectedOptions[key],
                        );
                      return total + (option?.price || 0);
                    }, 0),
                )}
              </p>
              </div>
                <button
                  className="bg-yellow-400 hover:bg-sky-500 hover:text-white text-black rounded-lg h-11 py-3 px-4 text-[10px] font-bold flex items-center gap-2 text-nowrap transition-all duration-300 hover:scale-105 focus:ring-2 focus:ring-sky-600 focus:outline-none"
                  onClick={() => window.location.href = 'https://zalo.me/0988663387'}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
                  </svg>
                  Chat Zalo
                </button>
             </div>
            </div>
          </div>
        </div>

        <div className="shadow-lg  pt-4 mt-6  bg-black">
          <div className="px-4">
          <Radio.Group
            onChange={(e) => setSelectedOptions(e.target.value)}
            value={selectedOptions}
            optionType="default"
            
            className="w-full bg-black rounded-b-lg"
          >
            <List
              header={
          <div className="flex justify-between">
            <div className="text-white font-bold text-sm uppercase">Tuỳ chọn</div>
            <button
              className="rounded-md border-spacing-1 text-black px-4 py-2 border-black hover:bg-yellow-500 bg-white flex items-center gap-1 transition-all duration-300 hover:scale-105 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
              onClick={() => setSelectedOptions({})}
            >
              <p className="text-xs">Chọn lại</p>
              <div>
                <img
                  className="w-3 h-3"
                  src="/images/chon-lai-icon.svg"
                  alt="refresh"
                />
              </div>
            </button>
          </div>
              }
              
              dataSource={productDetails.info}
              renderItem={(infoItem) => (
          <List.Item style={{ paddingTop: 0, paddingBottom: 0 }}  className="rounded-lg my-3 bg-white">
            <List.Item.Meta
              avatar={
                <div className="flex items-center justify-between w-48 gap-2 bg-white rounded-md ">
            <div className="w-12 h-12 flex flex-col items-center justify-center rounded-l-md bg-yellow-400">
              <img className="w-6 h-6 object-contain" src={infoItem.icon} alt={infoItem.title} />
            </div>
            <div className=" w-full">
              <strong className="text-left text-nowrap">{infoItem.title}:</strong>
              <div className="flex flex-row items-center w-full bg-white">
                <div className=" text-nowrap text-black">
                  {selectedOptions[infoItem.title] ||
              infoItem.options?.find((option) => option.default)?.title ||
              infoItem.value}
                </div>
              </div>
            </div>
                </div>
              }
              description={
                infoItem.options ? (
            <div className="flex flex-row justify-end items-center gap-2 pr-2">
              <div className="flex ">
                {selectedOptions[infoItem.title] &&
                  infoItem.options.find(
              (option) =>
                option.title === selectedOptions[infoItem.title],
                  )?.price !== 0 && (
              <Button
                onClick={() => showModal(infoItem)}
                type="primary"
                className="rounded-full w-30 mt-2 py-1 w-28 px-3 text-[10px] "
                style={{
                  backgroundColor:
                    infoItem.options?.find(
                (option) =>
                  option.title === selectedOptions[infoItem.title],
                    )?.price! > 0
                ? "#EB2427"
                : "#34C759",
                  borderColor:
                    infoItem.options?.find(
                (option) =>
                  option.title === selectedOptions[infoItem.title],
                    )?.price! > 0
                ? "#EB2427"
                : "#34C759",
                  fontStyle:
                    (infoItem.options?.find(
                (option) =>
                  option.title === selectedOptions[infoItem.title],
                    )?.price || 0) > 0
                ? ""
                : "italic",
                }}
              >
                {infoItem.options?.find(
                  (option) =>
                    option.title === selectedOptions[infoItem.title],
                )?.price! > 0
                  ? "+ "
                  : "-"}
                {new Intl.NumberFormat("vi-VN", {
                  style: "currency",
                  currency: "VND",
                }).format(
                  Math.abs(
                    infoItem.options?.find(
                (option) =>
                  option.title === selectedOptions[infoItem.title],
                    )?.price! || 0,
                  ),
                )}

                <div className=" text-black py-3 ">
                  <EditOutlined className="text-xs text-white" />
                </div>
              </Button>
                  )}
              </div>
              {infoItem.options.find(
                (option) =>
                  option.title === selectedOptions[infoItem.title],
              )?.price === 0 && (
                <button
                  onClick={() => showModal(infoItem)}
                  className="bg-black hover:bg-yellow-400 hover:text-black text-white rounded-full w-28 mt-2 py-2 px-4 flex items-center justify-center gap-1 transition-all duration-300 hover:scale-105 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                >
                  <span className="text-white hover:text-black text-[10px]">
                    Mặc định
                  </span>
                  <EditOutlined className="text-xs text-white hover:text-black" />
                </button>
              )}
              {!selectedOptions[infoItem.title] && (
                <button
                  onClick={() => showModal(infoItem)}
                  className="bg-black hover:bg-yellow-400 hover:text-black text-white rounded-full w-28 mt-2 py-2 px-4 flex items-center justify-center gap-1 transition-all duration-300 hover:scale-105 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                >
                  <span className="text-white hover:text-black text-[10px]">
                    Mặc định
                  </span>
                  <EditOutlined className="text-xs text-white hover:text-black" />
                </button>
              )}
            </div>
                ) : (
            <div className="flex flex-row justify-end items-center gap-2 pr-2">
              <div className=" text-black">
                {/* {infoItem.value} */}
              </div>
            </div>
                )
              }
            />
          </List.Item>
              )}
            />
          </Radio.Group>
          </div>
          <div className=" flex justify-center">
            <img
              src="/images/so-do-thang-3d.png"
              alt="New Inserted Image"
              className="h-auto w-auto "
            />
          </div>
        </div>


        <Modal
          title={
            <div className="flex "> 
              <div className="capitalize">tuỳ  </div>&nbsp;chọn&nbsp; <div className="lowercase"> {currentInfoItem ? (currentInfoItem as NonNullable<ProductDetail["info"]>[number]).title : ''}</div>
            </div>
          }
          open={isModalVisible}
          closable={false}
          footer={null}
        >
          {currentInfoItem && (
             <Radio.Group
             value={tempSelectedOption}
             optionType="default"
             className="w-full"
             
             
           >
            <List
              dataSource={
                (currentInfoItem as NonNullable<ProductDetail["info"]>[number])
                  .options
              }
              renderItem={(
                option: { title: string; price: number; default?: boolean; img?: string ;desc ?: string | null},
                optionIndex,
              ) => (
                <List.Item key={optionIndex}
                className="w-full">
                  <Radio.Group
                  className="w-full"
                    buttonStyle="solid"
                    onChange={() =>
                      handleOptionChange(
                        (
                          currentInfoItem as NonNullable<
                            ProductDetail["info"]
                          >[number]
                        ).title,
                        option.title,
                      )
                    }
                    value={
                      tempSelectedOption
                    }
                  >
<div>
                  <div className="flex justify-between w-full items-center">
                  <Radio
                    value={option.title}
                    checked={tempSelectedOption === option.title}
                    className="hover:opacity-80 focus:ring-2 focus:ring-yellow-400 focus:outline-none transition-all duration-300"
                  >
                    
                      <div className="flex justify-between w-full">
                        <div> {option.title}</div>
                      </div>
                    </Radio>
                    {option.default && (
                      <Button
                        className="rounded-full w-32 transition-all duration-300 hover:opacity-90 hover:scale-105 focus:ring-2 focus:ring-opacity-50"
                        type="primary"
                        style={{ backgroundColor: "black", borderColor: "black" }}
                        onClick={() =>
                          handleOptionChange(
                            (
                              currentInfoItem as NonNullable<
                                ProductDetail["info"]
                              >[number]
                            ).title,
                            option.title,
                          )
                        }
                      >
                        Mặc định
                      </Button>
                    )}
                    {option.price < 0 && (
                      <Button
                        className="rounded-full w-32 transition-all duration-300 hover:opacity-90 hover:scale-105 focus:ring-2 focus:ring-opacity-50"
                        type="primary"
                        style={{ backgroundColor: "green", borderColor: "green" }}
                      >
                        <em>- </em>{" "}
                        {new Intl.NumberFormat("vi-VN", {
                          style: "currency",
                          currency: "VND",
                        }).format(-option.price)}
                      </Button>
                    )}
                    {option.price > 0 && (
                      <Button
                        className="rounded-full w-32 transition-all duration-300 hover:opacity-90 hover:scale-105 focus:ring-2 focus:ring-opacity-50"
                        type="primary"
                        style={{ backgroundColor: "red", borderColor: "red" }}
                      >
                        +{" "}
                        {new Intl.NumberFormat("vi-VN", {
                          style: "currency",
                          currency: "VND",
                        }).format(option.price)}
                      </Button>
                    )}
                   
                  </div>
                    {option.img && (
                    <div className="flex justify-between w-full">
                      {/* <img
                      className="w-20 h-auto"
                      src={option.img}
                      alt={option.title}
                      />
                     */}
                    </div>
                    )}
                  </div>          
                  </Radio.Group>
                
                </List.Item>
              )}
            />
          </Radio.Group>
          )}
          <div className="flex justify-end gap-2 mt-4">
            <button
              onClick={handleCancel}
              className="rounded-full w-32 px-4 py-2 border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 transition-all duration-300 hover:scale-105 focus:ring-2 focus:ring-gray-300 focus:outline-none"
            >
              Hủy
            </button>
            <button
              onClick={handleOk}
              className="rounded-full w-32 px-4 py-2 bg-yellow-400 text-black hover:bg-yellow-500 transition-all duration-300 hover:scale-105 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
            >
              Xác nhận
            </button>
          </div>
        </Modal>


        
      </div>
      
      <div className="">
          <img
            src={productDetails.mainImg}
            alt="Product Image"
            className="w-full h-auto"
          />
        </div>

        <div className="  bg-white">
        <div className="shadow-lg rounded-xl pb-6">
          <div className="flex p-4 justify-between bg-black text-white">
            <div className="text-yellow-400 uppercase text-sm">Thông số kỹ thuật</div>
            <div>
              <img
                alt="Technical Specs"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b40efdc805bad545e1df62628f24223b940bf9444833c8f04fd03e99b86416d6?apiKey=098ebfbb07384cf89eeedb3d40701deb&"
                className="lg:h-8 h-4 w-auto md:invisible"
              />
            </div>
          </div>
          <div className="bg-white rounded-b-xl">
            <img
              src="/images/chitietthang1.png"
              alt="Product Specifications 1"
              className="w-full h-auto"
            />
          </div>
          <div className="bg-white rounded-b-xl">
            <img
              src="/images/chitietthang2.png"
              alt="Product Specifications 2"
              className="w-full h-auto"
            />
          </div>
          <div className="bg-white rounded-b-xl pt-2">
            <img
              src="/images/chitietthang3.png"
              alt="Product Specifications 3"
              className="w-full h-auto"
            />
          </div>
        </div>
       

        </div>
    </div>
  );
};

export default ProductPage;
