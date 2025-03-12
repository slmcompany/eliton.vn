import { useState } from "react";
import { List, Modal, Button, Radio } from "antd";
import { EditOutlined } from '@ant-design/icons';
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";

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

const PCDetailCombo = ({ productDetails }: ProductPageProps) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<{
    [key: string]: string;
  }>({});
  const [currentInfoItem, setCurrentInfoItem] = useState<{
    title: string;
    value?: string;
    icon: string;
    options?: { title: string; price: number; default?: boolean; img?: string; desc?: string | null }[];
  } | null>(null);
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
    <div className="hidden sm:block bg-white">
      <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
          {/* Image gallery - thêm sticky và background đen */}
          <div className="bg-black p-6 rounded-lg sticky top-24">
            <TabGroup className="flex flex-col-reverse">
              {/* Image selector */}
              <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
                <TabList className="grid grid-cols-4 gap-6">
                  {productDetails.galleryImages?.map((image, index) => (
                    <Tab
                      key={index}
                      className="group relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-4"
                    >
                      <span className="absolute inset-0 overflow-hidden rounded-md">
                        <img src={image.src} alt="" className="h-full w-full object-cover object-center" />
                      </span>
                      <span
                        className="pointer-events-none absolute inset-0 rounded-md ring-2 ring-transparent ring-offset-2 group-data-[selected]:ring-yellow-500"
                        aria-hidden="true"
                      />
                    </Tab>
                  ))}
                </TabList>
              </div>

              <TabPanels className="bg-black rounded-lg">
                {productDetails.galleryImages?.map((image, index) => (
                  <TabPanel key={index} className="bg-black">
                    <div className="relative w-full pt-[100%]">
                      <img
                        src={image.src}
                        alt={`Product image ${index + 1}`}
                        className="absolute inset-0 w-full h-full object-contain sm:rounded-lg"
                      />
                    </div>
                  </TabPanel>
                ))}
              </TabPanels>
            </TabGroup>
          </div>

          {/* Product info - thêm sticky và shadow */}
          <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0 sticky top-24">
            <div className="bg-gray-200 p-4 rounded-lg shadow-xl">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900">{productDetails.title}</h1>

              <div className="mt-3">
                <h2 className="sr-only">Product information</h2>
                <p className="text-3xl tracking-tight text-gray-900">
                  {new Intl.NumberFormat("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  }).format(
                    parseInt(productDetails.price || "0") +
                    Object.keys(selectedOptions).reduce((total, key) => {
                      const option = productDetails.info
                        ?.find((info) => info.title === key)
                        ?.options?.find(
                          (option) => option.title === selectedOptions[key]
                        );
                      return total + (option?.price || 0);
                    }, 0)
                  )}
                </p>
              </div>

              {/* Product description */}
              <div className="mt-6">
                <h3 className="sr-only">Description</h3>
                <div className="space-y-6 text-base text-gray-700">
                  {productDetails.description}
                </div>
              </div>

              {/* Product options */}
              <div className="mt-6 p-6 bg-black rounded-t-lg border border-gray-200">
                <div className="flex justify-between mb-4">
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

                {productDetails.info?.map((infoItem) => (
                  <div key={infoItem.title} className="mt-4 first:mt-0">
                    <div className="flex items-center justify-between bg-white rounded-lg shadow-sm">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 flex flex-col items-center justify-center rounded-l-md bg-yellow-400">
                          <img src={infoItem.icon} alt="" className="w-6 h-6 object-contain" />
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-black">{infoItem.title}:</h3>
                          <p className="text-sm text-black">
                            {selectedOptions[infoItem.title] ||
                              infoItem.options?.find((option) => option.default)?.title ||
                              infoItem.value}
                          </p>
                        </div>
                      </div>
                      {infoItem.options && (
                        <div className="flex flex-row justify-center pr-2 pb-2 items-center gap-2">
                          {selectedOptions[infoItem.title] &&
                            infoItem.options.find(
                              (option) => option.title === selectedOptions[infoItem.title]
                            )?.price !== 0 && (
                              <Button
                                onClick={() => showModal(infoItem)}
                                type="primary"
                                className="rounded-full w-30 mt-2 py-1 w-28 px-3 text-[10px]"
                                style={{
                                  backgroundColor:
                                    infoItem.options?.find(
                                      (option) => option.title === selectedOptions[infoItem.title]
                                    )?.price! > 0
                                      ? "#EB2427"
                                      : "#34C759",
                                  borderColor:
                                    infoItem.options?.find(
                                      (option) => option.title === selectedOptions[infoItem.title]
                                    )?.price! > 0
                                      ? "#EB2427"
                                      : "#34C759",
                                  fontStyle:
                                    (infoItem.options?.find(
                                      (option) => option.title === selectedOptions[infoItem.title]
                                    )?.price || 0) > 0
                                      ? ""
                                      : "italic",
                                }}
                              >
                                {infoItem.options?.find(
                                  (option) => option.title === selectedOptions[infoItem.title]
                                )?.price! > 0
                                  ? "+ "
                                  : "- "}
                                {new Intl.NumberFormat("vi-VN", {
                                  style: "currency",
                                  currency: "VND",
                                }).format(
                                  Math.abs(
                                    infoItem.options?.find(
                                      (option) => option.title === selectedOptions[infoItem.title]
                                    )?.price! || 0
                                  )
                                )}
                                <EditOutlined className="text-xs text-white ml-1" />
                              </Button>
                          )}
                          {(!selectedOptions[infoItem.title] || 
                            infoItem.options.find(
                              (option) => option.title === selectedOptions[infoItem.title]
                            )?.price === 0) && (
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
                      )}
                    </div>
                  </div>
                ))}

                {/* Di chuyển phần hình ảnh xuống đây */}
                <div className="flex justify-center">
                  <img
                    src="/images/so-do-thang-3d.png"
                    alt="New Inserted Image"
                    className="h-auto w-auto"
                  />
                </div>
              </div>

              <div className="">
                <img
                  src={productDetails.mainImg}
                  alt="Product Image"
                  className="w-full h-auto"
                />
              </div>

              <div className="bg-white">
                <div className="shadow-lg rounded-xl pb-6">
                  <div className="flex p-4 justify-between bg-black text-white">
                    <div className="text-yellow-400 uppercase text-sm">Thông số kỹ thuật</div>
                    
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

              {/* Modal for options */}
              <Modal
                title={
                  <div className="flex"> 
                    <div className="capitalize">tuỳ  </div>&nbsp;chọn&nbsp; 
                    <div className="lowercase">
                      {currentInfoItem ? currentInfoItem.title : ''}
                    </div>
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
                      dataSource={currentInfoItem.options}
                      renderItem={(option, optionIndex) => (
                        <List.Item key={optionIndex} className="w-full">
                          <Radio.Group
                            className="w-full"
                            buttonStyle="solid"
                            onChange={() => handleOptionChange(currentInfoItem.title, option.title)}
                            value={tempSelectedOption}
                          >
                            <div className="hover:bg-gray-50 p-2 rounded-lg transition-all duration-300">
                              <div className="flex justify-between w-full items-center">
                                <Radio
                                  value={option.title}
                                  checked={tempSelectedOption === option.title}
                                  className="hover:opacity-80 focus:ring-2 focus:ring-yellow-400 focus:outline-none transition-all duration-300 w-full"
                                >
                                  <div className="flex justify-between w-full">
                                    <div className="font-medium">{option.title}</div>
                                  </div>
                                </Radio>
                                {option.default && (
                                  <Button
                                    className="rounded-full w-32 transition-all duration-300 hover:opacity-90 hover:scale-105 focus:ring-2 focus:ring-opacity-50"
                                    type="primary"
                                    style={{ backgroundColor: "black", borderColor: "black" }}
                                    onClick={() => handleOptionChange(currentInfoItem.title, option.title)}
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
                                    <em>- </em>
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
                                    + {new Intl.NumberFormat("vi-VN", {
                                      style: "currency",
                                      currency: "VND",
                                    }).format(option.price)}
                                  </Button>
                                )}
                              </div>
                              {option.img && (
                                <div className="flex justify-between w-full">
                                  {/* <img className="w-20 h-auto" src={option.img} alt={option.title} /> */}
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default PCDetailCombo;
