import { useState } from "react";
import { Space, Button, Drawer, Radio, List, Tabs, Collapse, ConfigProvider, Modal } from "antd";
import { Panel } from "rc-collapse";
import { DownOutlined, CaretDownFilled, CloseOutlined } from "@ant-design/icons";

type Option = {
  name: string;
  srcImg: string;
  srcThumb: string;
  price: number;
  info?: { title: string; value: string }[];
  dependencies?: { tran: string; san: string };
};

const Elevatorcustom: React.FC = () => {
  const cabinContent = [
    {
      title: "Dòng sản phẩm Eli-01",
      image: "/images/thang-1.jpg",
      features: [
        {
          title: "Động cơ",
          value: "Đức",
          img: "https://cdn.builder.io/api/v1/image/assets/098ebfbb07384cf89eeedb3d40701deb/2a60b7cb42e12b9e68064adf768c18ebe1d8edf36adbe0349de9a3135661ede0?apiKey=098ebfbb07384cf89eeedb3d40701deb&",
        },
        {
          title: "Tải trọng",
          value: "650 kg",
          img: "https://cdn.builder.io/api/v1/image/assets/098ebfbb07384cf89eeedb3d40701deb/713057722b75c9b61fb824e15d2ba4945f3f07320b491f48365b1575ed3400f5?apiKey=098ebfbb07384cf89eeedb3d40701deb&",
        },
        {
          title: "Hố thang",
          value: "600-1200mm",
          img: "https://cdn.builder.io/api/v1/image/assets/098ebfbb07384cf89eeedb3d40701deb/24bcda635fb38af49eab143f97c56c7e383363a33b9f95a86fe0d3a7b59eea6c?apiKey=098ebfbb07384cf89eeedb3d40701deb&",
        },
        {
          title: "Số điểm dừng",
          value: "04",
          img: "https://cdn.builder.io/api/v1/image/assets/098ebfbb07384cf89eeedb3d40701deb/24d1c136ccc3cbfd3acd7bb3e4abcf282d7268b240eb4e782b43884ae235eff0?apiKey=098ebfbb07384cf89eeedb3d40701deb&",
        },
      ],
      price: 550000000,
      link: "/san-pham/chi-tiet",
      tuychon: [
        {
          title: "Nội thất",
          content: [
            {
              title: "Trần",
              options: [
                {
                  name: "Trần 1",
                  srcImg: "/images/thang-1-tran-1.png",
                  srcThumb: "/images/thang-1-tran-1-thumb.jpg",
                  price: 3000000,
                  info: [
                    {
                      title: "Chất liệu",
                      value: "Gỗ MDF",
                    },
                    {
                      title: "Hoàn thiện",
                      value: "Sơn đỏ mờ",
                    },
                    {
                      title: "Đèn trần",
                      value: "Led âm, 16W",
                    },
                  ],
                },
                {
                  name: "Trần 2",
                  srcImg: "/images/thang-1-tran-2.png",
                  srcThumb: "/images/thang-1-tran-2-thumb.jpg",
                  price: 2000000,
                  info: [
                    {
                      title: "Chất liệu",
                      value: "Gỗ MDF",
                    },
                    {
                      title: "Hoàn thiện",
                      value: "Sơn đỏ mờ",
                    },
                    {
                      title: "Đèn trần",
                      value: "Led âm, 16W",
                    },
                  ],
                },
              ],
            },
            {
              title: "Sàn",
              options: [
                {
                  name: "Sàn 1",
                  srcImg: "/images/thang-1-san-1.png",
                  srcThumb: "/images/thang-1-san-1-thumb.jpg",
                  price: 3000000,
                  info: [
                    {
                      title: "Chất liệu",
                      value: "Gỗ MDF",
                    },
                    {
                      title: "Hoàn thiện",
                      value: "Sơn đỏ mờ",
                    },
                    {
                      title: "Đèn trần",
                      value: "Led âm, 16W",
                    },
                  ],
                },
                {
                  name: "Sàn 2",
                  srcImg: "/images/thang-1-san-2.png",
                  srcThumb: "/images/thang-1-san-2-thumb.jpg",
                  price: 4000000,
                  info: [
                    {
                      title: "Chất liệu",
                      value: "Gỗ MDF",
                    },
                    {
                      title: "Hoàn thiện",
                      value: "Sơn đỏ mờ",
                    },
                    {
                      title: "Đèn trần",
                      value: "Led âm, 16W",
                    },
                  ],
                },
              ],
            },
            {
              title: "Vách",
              options: [
                {
                  name: "Mặc đinh",
                  srcImg: "/images/mac-dinh.png",
                  srcThumb: "/images/thang-1-tran-1-thumb.jpg",
                  price: 500000,
                  info: [
                    {
                      title: "Chất liệu",
                      value: "Gỗ MDF",
                    },
                    {
                      title: "Hoàn thiện",
                      value: "Sơn đỏ mờ",
                    },
                    {
                      title: "Đèn trần",
                      value: "Led âm, 16W",
                    },
                  ],
                },
                {
                  name: "Vách 1 san 1 trần 1",
                  srcImg: "/images/thang-1-vach-1-san-1-tran-1.png",
                  srcThumb: "/images/thang-1-vach-1-san-1-tran-1-thumb.jpg",
                  price: 5000000,
                  dependencies: { tran: "Trần 1", san: "Sàn 1" },
                  info: [
                    {
                      title: "Chất liệu",
                      value: "Gỗ MDF",
                    },
                    {
                      title: "Hoàn thiện",
                      value: "Sơn đỏ mờ",
                    },
                    {
                      title: "Đèn trần",
                      value: "Led âm, 16W",
                    },
                  ],
                },
                {
                  name: "Vách 2 san 1 trần 2",
                  srcImg: "/images/thang-1-vach-1-san-1-tran-2.png",
                  srcThumb: "/images/thang-1-vach-1-san-1-tran-2-thumb.jpg",
                  price: 5000000,
                  dependencies: { tran: "Trần 2", san: "Sàn 1" },
                  info: [
                    {
                      title: "Chất liệu",
                      value: "Gỗ MDF",
                    },
                    {
                      title: "Hoàn thiện",
                      value: "Sơn đỏ mờ",
                    },
                    {
                      title: "Đèn trần",
                      value: "Led âm, 16W",
                    },
                  ],
                },
                {
                  name: "Vách 3 san 2 trần 1",
                  srcImg: "/images/thang-1-vach-1-san-2-tran-1.png",
                  srcThumb: "/images/thang-1-vach-1-san-2-tran-1-thumb.jpg",
                  price: 5000000,
                  dependencies: { tran: "Trần 1", san: "Sàn 2" },
                  info: [
                    {
                      title: "Chất liệu",
                      value: "Gỗ MDF",
                    },
                    {
                      title: "Hoàn thiện",
                      value: "Sơn đỏ mờ",
                    },
                    {
                      title: "Đèn trần",
                      value: "Led âm, 16W",
                    },
                  ],
                },
                {
                  name: "Vách 4 san 2 trần 2",
                  srcImg: "/images/thang-1-vach-1-san-2-tran-2.png",
                  srcThumb: "/images/thang-1-vach-1-san-2-tran-2-thumb.jpg",
                  price: 5000000,
                  dependencies: { tran: "Trần 2", san: "Sàn 2" },
                  info: [
                    {
                      title: "Chất liệu",
                      value: "Gỗ MDF",
                    },
                    {
                      title: "Hoàn thiện",
                      value: "Sơn đỏ mờ",
                    },
                    {
                      title: "Đèn trần",
                      value: "Led âm, 16W",
                    },
                  ],
                },
                {
                  name: "Vách 5 san 1 trần 1",
                  srcImg: "/images/thang-1-vach-2-san-1-tran-1.png",
                  srcThumb: "/images/thang-1-vach-2-san-1-tran-1-thumb.jpg",
                  price: 5000000,
                  dependencies: { tran: "Trần 1", san: "Sàn 1" },
                  info: [
                    {
                      title: "Chất liệu",
                      value: "Gỗ MDF",
                    },
                    {
                      title: "Hoàn thiện",
                      value: "Sơn đỏ mờ",
                    },
                    {
                      title: "Đèn trần",
                      value: "Led âm, 16W",
                    },
                  ],
                },
                {
                  name: "Vách 6 san 1 trần 2",
                  srcImg: "/images/thang-1-vach-2-san-1-tran-2.png",
                  srcThumb: "/images/thang-1-vach-2-san-1-tran-2-thumb.jpg",
                  price: 5000000,
                  dependencies: { tran: "Trần 2", san: "Sàn 1" },
                  info: [
                    {
                      title: "Chất liệu",
                      value: "Gỗ MDF",
                    },
                    {
                      title: "Hoàn thiện",
                      value: "Sơn đỏ mờ",
                    },
                    {
                      title: "Đèn trần",
                      value: "Led âm, 16W",
                    },
                  ],
                },
                {
                  name: "Vách 7 san 2 trần 1",
                  srcImg: "/images/thang-1-vach-2-san-2-tran-1.png",
                  srcThumb: "/images/thang-1-vach-2-san-2-tran-1-thumb.jpg",
                  price: 5000000,
                  dependencies: { tran: "Trần 1", san: "Sàn 2" },
                  info: [
                    {
                      title: "Chất liệu",
                      value: "Gỗ MDF",
                    },
                    {
                      title: "Hoàn thiện",
                      value: "Sơn đỏ mờ",
                    },
                    {
                      title: "Đèn trần",
                      value: "Led âm, 16W",
                    },
                  ],
                },
                {
                  name: "Vách 8 san 2 trần 2",
                  srcImg: "/images/thang-1-vach-2-san-2-tran-2.png",
                  srcThumb: "/images/thang-1-vach-2-san-2-tran-2-thumb.jpg",
                  price: 5000000,
                  dependencies: { tran: "Trần 2", san: "Sàn 2" },
                  info: [
                    {
                      title: "Chất liệu",
                      value: "Gỗ MDF",
                    },
                    {
                      title: "Hoàn thiện",
                      value: "Sơn đỏ mờ",
                    },
                    {
                      title: "Đèn trần",
                      value: "Led âm, 16W",
                    },
                  ],
                },
              ],
            },
            {
              title: "Tay vịn",
              options: [
                {
                  name: "Mặc đinh",
                  srcImg: "/images/mac-dinh.png",
                  srcThumb: "/images/thang-1-tran-1-thumb.jpg",
                  price: 500000,
                  info: [
                    {
                      title: "Chất liệu",
                      value: "Gỗ MDF",
                    },
                    {
                      title: "Hoàn thiện",
                      value: "Sơn đỏ mờ",
                    },
                    {
                      title: "Đèn trần",
                      value: "Led âm, 16W",
                    },
                  ],
                },
                {
                  name: "Tay vịn tròn",
                  srcImg: "/images/thang-1-tay-nam-1.png",
                  srcThumb: "/images/thang-1-tay-nam-1-thumb.jpg",
                  price: 5000000,
                  info: [
                    {
                      title: "Chất liệu",
                      value: "Gỗ MDF",
                    },
                    {
                      title: "Hoàn thiện",
                      value: "Sơn đỏ mờ",
                    },
                    {
                      title: "Đèn trần",
                      value: "Led âm, 16W",
                    },
                  ],
                },
                {
                  name: "Tay vịn dẹt",
                  srcImg: "/images/thang-1-tay-nam-2.png",
                  srcThumb: "/images/thang-1-tay-nam-2-thumb.jpg",
                  price: 6000000,
                  info: [
                    {
                      title: "Chất liệu",
                      value: "Gỗ MDF",
                    },
                    {
                      title: "Hoàn thiện",
                      value: "Sơn đỏ mờ",
                    },
                    {
                      title: "Đèn trần",
                      value: "Led âm, 16W",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    
   
  ];

  const initialSelectedOptions = cabinContent[0].tuychon
    .flatMap((tuychon) => tuychon.content)
    .reduce((acc: { [key: string]: string }, content) => {
      acc[content.title] = content.options[0].name;
      return acc;
    }, {});

  const [selectedOptions, setSelectedOptions] = useState<{ [key: string]: string }>(initialSelectedOptions);

  const handleOptionChange = (category: string, option: string) => {
    setSelectedOptions({ ...selectedOptions, [category]: option });
    let updatedSelectedOptions = { ...selectedOptions, [category]: option };

    if (category === "Trần" || category === "Sàn") {
      updatedSelectedOptions = { ...updatedSelectedOptions, Vách: "Mặc đinh" };
    }

    setSelectedOptions(updatedSelectedOptions);
  };

  const [open, setOpen] = useState(false);

  const handleValueChange = (category: string, value: string) => {
    setSelectedValues({ ...selectedValues, [category]: value });
  };

  const handleProductChange = (item: any) => {
    // Implement the logic to handle product change
    setSelectedOptions(initialSelectedOptions);
    setProductModalVisible(false);
  };
  const [selectedContent, setSelectedContent] = useState<Option | null>(null);
  const [productModalVisible, setProductModalVisible] = useState(false);
  const [selectedValues, setSelectedValues] = useState<{ [key: string]: string }>({});


  const showDrawer = (content: Option) => {
    setSelectedContent(content);
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
    setSelectedContent(null);
  };

  const calculateTotalPrice = () => {
    let totalPrice = cabinContent[0].price;
    for (const category in selectedOptions) {
      const option = cabinContent[0].tuychon[0].content
        .find((c) => c.title === category)
        ?.options.find((o) => o.name === selectedOptions[category]);
      totalPrice += option?.price || 0;
    }
    return totalPrice;
  };

  const renderOptionList = (category: string, options: Option[], content: any) => {
    const selectedTran = selectedOptions["Trần"] || null;
    const selectedSan = selectedOptions["Sàn"] || null;

    const filteredOptions = options.filter((option) => {
      return (
        !option.dependencies ||
        (option.dependencies.tran === selectedTran && option.dependencies.san === selectedSan)
      );
    });

    return (
      <Radio.Group
        onChange={(e) => handleOptionChange(category, e.target.value)}
        value={selectedOptions[category]}
        optionType="default"
        className="w-full px-3 py-1 bg-black rounded-b-lg"
      >
        <List
          dataSource={filteredOptions}
          renderItem={(opt: Option, idx) => (
            <List.Item style={{ paddingTop: 0, paddingBottom: 0 }} className="bg-white rounded-lg my-3 ">
              <List.Item.Meta
                avatar={
                  <div className="flex items-center justify-between w-full gap" 
                  >
                    <img src={opt.srcThumb} alt={opt.name} className="w-12 h-12 object-cover rounded-l-md" />
                    <h5 className="ml-2  text-black">{`Option ${idx + 1}`}</h5>
                    <div 
                    className="ml-2 px-3 font-light py-1 text-white rounded-full"
                      style={{ backgroundColor: idx === 0 ? "black" : (opt.price - options[0].price) > 0 ? "#ef4444" : "#22c55e" }}>
                      
                        {idx === 0 ? "Mặc định" : (
                            <div className="text-sm">
                            {opt.price - options[0].price > 0
                              ? `+ ${Math.abs(opt.price - options[0].price).toLocaleString("vi-VN")}`
                              : (
                                <>
                                  <CaretDownFilled /> {Math.abs(opt.price - options[0].price).toLocaleString("vi-VN")}
                                </>
                              )}
                            </div>
                        )}
                    </div>
                
                  </div>
                }
                title={
                    <Radio.Button
                    key={opt.name}
                    value={opt.name}
                    className="flex items-center justify-start flex-row-reverse  bg-white rounded-lg"
                    >
                   
                    <div className="flex flex-row items-center justify-between w-full h-11">                      
                  
                    <div className="pr-2 text-nowrap" onClick={() => showDrawer(opt)}>Chi tiết</div>
                    
                    </div>
                    </Radio.Button>
                }
              />
            </List.Item>
          )}
        />
      </Radio.Group>
    );
  };

  return (
    <div>
      <div className="relative w-full ">
        <div className="aspect-w-4 aspect-h-5">
          <img src="/images/thang-1.jpg" className="absolute rounded-md" alt="Cabin" />
          {cabinContent[0].tuychon.map((tuychon) =>
            tuychon.content.map((content) =>
              content.options.map(
                (option) =>
                  option.name === selectedOptions[content.title] && (
                    <img key={option.name} src={option.srcImg} className="absolute rounded-md" alt="Cabin" />
                  )
              )
            )
          )}
        </div>

        <div className="absolute top-5 p-1 bg-yellow-400 w-[70px] h-[30px] rounded-r-md pr-1 ">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/098ebfbb07384cf89eeedb3d40701deb/64cf6a5f616cddb727f9e2b2f18cd9d4696a7fcb968f067c94c82c48a977feec?apiKey=098ebfbb07384cf89eeedb3d40701deb&"
              className=" aspect-[2.81] w-[55px]"
            />

          </div>
  
          <div className="absolute top-4 right-2 w-24">
            <div className="flex flex-col">
              <div className="flex gap-1 items-center px-2 py-1 text-xs font-medium leading-loose text-black bg-white rounded">
                <div onClick={() => setProductModalVisible(true)}>Đổi mẫu</div>
               

                <Modal
                  title="Chọn Dòng sản phẩm"
                  visible={productModalVisible}
                  onCancel={() => setProductModalVisible(false)}
                  footer={null}
                >
                  <Radio.Group onChange={(e) => handleProductChange(e.target.value)} 
                  optionType="button"
                  className="w-full">
                  <List
                    dataSource={cabinContent}
                    renderItem={(item) => (
                    <List.Item>
                      <List.Item.Meta
                      title={
                        <Radio value={item.title} className="w-full">
                        {item.title}
                        </Radio>
                      }
                      />
                    </List.Item>
                    )}
                  />
                  </Radio.Group>
                </Modal>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/098ebfbb07384cf89eeedb3d40701deb/d6bbb3e1e418a19b01fa4a7db6dfcbd716e1bcb4e763a19e2b9398185f6d3943?apiKey=098ebfbb07384cf89eeedb3d40701deb&"
                  className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
                />
              </div>
              <div className="flex gap-2.5 justify-center items-center self-end mt-3 w-10 h-10 rounded-lg bg-black bg-opacity-50 min-h-[40px]">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/098ebfbb07384cf89eeedb3d40701deb/0f19be22d9b6a8cd75fab594e888b3c09bdefff1fa237f32414e16a1ea04877e?apiKey=098ebfbb07384cf89eeedb3d40701deb&"
                  className="object-contain self-stretch my-auto w-6 aspect-square"
                />
              </div>
            </div>
          </div>

        <div className="w-full absolute bottom-0 bg-black bg-opacity-50 ">
          <Collapse
            accordion
            bordered={false}
            expandIconPosition="end"
            expandIcon={({ isActive }) => <DownOutlined style={{ color: "white" }} rotate={isActive ? 0 : -90} />}
          >
            {cabinContent.map((cabin, index) => (
              <Panel
              header={
                <div className="text-white flex justify-between">
                <div>{cabin.title}</div>
                <div className="px-2 rounded-full bg-red-500">{calculateTotalPrice().toLocaleString("vi-VN")} </div>
                </div>
              }
              key={index}
              >
              <div className="flex flex-col py-1 w-full text-xs leading-none text-white">
                {cabin.features.map((feature, idx) => (
                <div className="flex gap-2 items-center mt-1 w-full" key={idx}>
                  <img
                  loading="lazy"
                  src={feature.img}
                  className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
                  />
                  <div className="self-stretch my-auto">
                  {feature.title}: {feature.value}
                  </div>
                </div>
                ))}
              </div>
              </Panel>
            ))}
          </Collapse>
        </div>
      </div>

      <div>
        <ConfigProvider
          theme={{
            components: {
              Tabs: {
                cardBg: "#e5e7eb",

                itemSelectedColor: "#000",
                itemHoverColor: "red",

               
              },
                
            },
          }}
        >
          <Tabs
            defaultActiveKey="1"
            tabBarGutter={2}
            animated={true}
            style={{ marginTop: 16,  }}
            tabBarStyle={{ marginBottom: 0, padding: 0,   }}
            type="card"
          >
            {cabinContent[0].tuychon
              .flatMap((tuychon) => tuychon.content)
              .map((content) => (
                <Tabs.TabPane key={content.title} tab={content.title}>
                  {renderOptionList(content.title, content.options, content)}
                </Tabs.TabPane>
              ))}
          </Tabs>
        </ConfigProvider>

        <Drawer
          title={
          <div className=" flex justify-between  " >

          <div className="">

Chi tiết             
           
        </div>
        <Space>
              <div onClick={onClose} > <CloseOutlined className="text-white"/></div>
         </Space>
            </div>
            }
          placement="bottom"
          closable={false}
          onClose={onClose}
          open={open}
         height={300}
          headerStyle={{
            backgroundColor: 'black',  
            color: '#fff',              
           
          }}
          bodyStyle={{
            padding: 0,            
          }}
        >
          <div className="relative">
            <div className=" p-4 flex justify-between items-center border-b-2 border-solid border-gray-200 bg-gray-50">
          <h2 className="text-lg font-light">{selectedContent?.name}</h2>
          <p className="gap-2.5 self-stretch px-3 py-1 my-auto text-lg text-black font-bold " role="text" aria-live="polite">
            <Button type="primary" danger className="ml-4">
            {selectedContent?.price.toLocaleString("vi-VN")}
            <abbr title="đồng">đ</abbr>
            </Button>
          </p>
            </div>

            <div className=" px-4 py-4 flex justify-between items-center w-full ">
            <img src={selectedContent?.srcThumb} alt={selectedContent?.name} className="w-24 h-24 object-cover rounded-md  " />
            <div className=" px-4 w-full" >

                {selectedContent?.info && (

                <div className="w-full ">
                  {selectedContent.info.map((infoItem, idx) => (
                  <div key={idx} className="flex justify-between w-full text-neutral-500 font-light text-md">
                  <div >
                    {infoItem.title}
                  </div>
                  <div>
                     {infoItem.value}
                  </div>
                  </div>
                  ))}
                </div>
                
              )}
             
          </div>
            </div>


              
             
              
              
            
            

        
          </div>
        </Drawer> 
       
      </div>




    </div>
  );
};

export default Elevatorcustom;
