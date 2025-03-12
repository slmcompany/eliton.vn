import React, { useState } from "react";
import ThreeSixtyViewerProps from "../components/Image360.tsx";
import { Modal , Button, Drawer, Radio, List,  Avatar, Tabs, Collapse } from "antd";
import {

  DownOutlined,
} from "@ant-design/icons";

const { Panel } = Collapse;

const cabinData = {
  tran: [
    { name: "Mẫu trần 1", srcImg: "/images/thang-1-tran-1.png", srcThumb:  "/images/thang-1-tran-1-thumb.jpg" , price: 1200000 },
    { name: "Mẫu trần 2", srcImg: "/images/thang-1-tran-2.png", srcThumb:  "/images/thang-1-tran-2-thumb.jpg" , price: 1200000 },
  ],
  tayvin: [
    {
      name: "Mẫu tay vịn tròn",
      srcImg: "/images/thang-1-tay-nam-1.png",
      srcThumb:  "/images/thang-1-tay-nam-1-thumb.jpg" ,
      price: 50,
    },
    {
      name: "Mẫu tay vịn dẹt",
      srcImg: "/images/thang-1-tay-nam-2.png",
      srcThumb:  "/images/thang-1-tay-nam-2-thumb.jpg" ,
      price: 60,
    },
  ],
  san: [
    { name: "Mẫu sàn 1", srcImg: "/images/thang-1-san-1.png",srcThumb:  "/images/thang-1-san-1-thumb.jpg" , price: 80 },
    { name: "Mẫu sàn 2", srcImg: "/images/thang-1-san-2.png",srcThumb:  "/images/thang-1-san-2-thumb.jpg" , price: 80 }

  ],
};





const OptionDrawer: React.FC<{
  visible: boolean;
  onClose: () => void;
  data: { name: string; srcImg: string; srcThumb: string; price: number }[];
  onChange: (value: string) => void;
  selectedValue: string | undefined;
}> = ({ visible, onClose, data, onChange, selectedValue }) => (
  
  
  <Drawer
    title=
    {
       <div className=" top-0 w-100 flex justify-between items-center   ">
          <p className="" role="text">Tổng chi phí</p>
          <p className="gap-2.5 self-stretch px-3 py-1 my-auto text-md text-black font-bold " role="text" aria-live="polite">
            <abbr title="đồng">đ</abbr> 550,000,000 
          </p>
         </div>
    }
    placement="bottom"
    onClose={onClose}
    visible={visible}
    className="relative"
  >
    


    <Radio.Group
      onChange={(e) => onChange(e.target.value)}
      value={selectedValue}
      className=""
    >
      <List
        grid={{ gutter: 16, column: 1 }}
        dataSource={data}
        renderItem={(option) => (
          <List.Item>
            <Radio.Button
              key={option.name}
              value={option.name}
              className="w-full p-1.5 h-full"
            >
              <div className="flex items-start">
              <Avatar
                    src={option.srcThumb}
                    alt={option.name}
                    size={100}
                    shape="square"
                  />
             
             
                <div className="flex flex-col px-2 w-2/3">
                  
                    <dl className="flex flex-col mt-2 w-full text-xs " role="list">
                        <div className="flex gap-10 justify-between items-center w-full pb-2">
                            <dt className="self-stretch my-auto text-sm font-bold text-nowrap">{option.name}</dt>
                            <dd className="self-stretch my-auto">
                              <div className="bg-red-500 text-white px-3 py-1 rounded-full">
                                {option.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                              </div>
                              </dd>
                       
                        </div>
                        <div className="flex gap-10 justify-between items-center w-full">
                            <dt className="self-stretch my-auto">Chất liệu</dt>
                            <dd className="self-stretch my-auto">Gỗ MDF</dd>
                        </div>
                        <div className="flex gap-10 justify-between items-center mt-1 w-full">
                            <dt className="self-stretch my-auto">Hoàn thiện</dt>
                            <dd className="self-stretch my-auto">Sơn đỏ mờ</dd>
                        </div>
                        <div className="flex gap-10 justify-between items-center mt-1 w-full">
                            <dt className="self-stretch my-auto">Đèn trần</dt>
                            <dd className="self-stretch my-auto">Led âm, 16W</dd>
                        </div>
                    </dl>
                </div>
              
               
             
               

              </div>
            </Radio.Button>
          </List.Item>
        )}
      />
    </Radio.Group>
  </Drawer>
);

const Elevatorcustom: React.FC = () => {
  const [selectedTran, setSelectedTran] = useState<string | undefined>(
    undefined
  );
  const [selectedTayvin, setSelectedTayvin] = useState<string | undefined>(
    undefined
  );
  const [selectedSan, setSelectedSan] = useState<string | undefined>(undefined);
  const [drawerVisible, setDrawerVisible] = useState<boolean>(false);
  const [drawerData, setDrawerData] = useState<
    { name: string; srcImg: string; srcThumb: string; price: number }[]
  >([]);
  const [drawerOnChange, setDrawerOnChange] = useState<(value: string) => void>(
    () => {}
  );

  const handleTranChange = (value: string) => {
    setSelectedTran(value);
  };
  const handleTayvinChange = (value: string) => {
    setSelectedTayvin(value);
  };
  const handleSanChange = (value: string) => {
    setSelectedSan(value);
  };

  const clearSelection = (type: string) => {
    if (type === "tran") setSelectedTran(undefined);
    if (type === "tayvin") setSelectedTayvin(undefined);
    if (type === "san") setSelectedSan(undefined);
  };

  const openDrawer = (
      data: { name: string; srcImg: string ; srcThumb: string; price: number }[],
      onChange: (value: string) => void
    ) => {
      setDrawerData(data);
      setDrawerOnChange(() => onChange);
      setDrawerVisible(true);
    };

  const optionData = [
    {
      placeholder: "Trần",
      data: cabinData.tran,
      onChange: handleTranChange,
      clearType: "tran",
      selectedValue: selectedTran,
    },
    {
      placeholder: "Tay vịn",
      data: cabinData.tayvin,
      onChange: handleTayvinChange,
      clearType: "tayvin",
      selectedValue: selectedTayvin,
    },
    {
      placeholder: "Sàn",
      data: cabinData.san,
      onChange: handleSanChange,
      clearType: "san",
      selectedValue: selectedSan,
    },
  ]

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };


  return (
    <>
      <div className="relative w-full ">
        <div className="aspect-w-4 aspect-h-5">
          <img
            src="/images/thang-1.jpg"
            className="absolute rounded-md"
            alt="Cabin"
          />
          {selectedTran && (
            <img
              src={
                cabinData.tran.find((tran) => tran.name === selectedTran)?.srcImg
              }
              alt={selectedTran}
              className="absolute rounded-md"
            />
          )}
          {selectedTayvin && (
            <img
              src={
                cabinData.tayvin.find((tayvin) => tayvin.name === selectedTayvin)
                  ?.srcImg
              }
              alt={selectedTayvin}
              className="absolute rounded-md"
            />
          )}
          {selectedSan && (
            <img
              src={cabinData.san.find((san) => san.name === selectedSan)?.srcImg}
              alt={selectedSan}
              className="absolute rounded-md"
            />
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
                    <div >Đổi mẫu</div>
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
                      onClick={showModal}
                    />
                    
                 
        <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        >
        <ThreeSixtyViewerProps imageURL="images/mau-thang-2-360.jpg" />
        </Modal>

                  </div>
                </div>
              </div>
            




<div className="w-full absolute bottom-0 bg-black bg-opacity-50 ">
  <Collapse 
  accordion bordered={false} 
  expandIconPosition='end'     
  expandIcon={({ isActive }) => <DownOutlined style={{color: 'white'}} rotate={isActive ? 0 : -90} />} >
        <Panel header={<div className="text-white">Thang máy Eli-01</div>} key="1">

      <div className="flex flex-col py-1 w-full text-xs leading-none text-white">
        <div className="flex gap-2 items-center w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/098ebfbb07384cf89eeedb3d40701deb/2a60b7cb42e12b9e68064adf768c18ebe1d8edf36adbe0349de9a3135661ede0?apiKey=098ebfbb07384cf89eeedb3d40701deb&"
            className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
          />
          <div className="self-stretch my-auto">Động cơ: Đức</div>
        </div>
        <div className="flex gap-2 items-center mt-1 w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/098ebfbb07384cf89eeedb3d40701deb/713057722b75c9b61fb824e15d2ba4945f3f07320b491f48365b1575ed3400f5?apiKey=098ebfbb07384cf89eeedb3d40701deb&"
            className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
          />
          <div className="self-stretch my-auto">Tải trọng: 650 kg</div>
        </div>
        <div className="flex gap-2 items-center mt-1 w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/098ebfbb07384cf89eeedb3d40701deb/24bcda635fb38af49eab143f97c56c7e383363a33b9f95a86fe0d3a7b59eea6c?apiKey=098ebfbb07384cf89eeedb3d40701deb&"
            className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
          />
          <div className="self-stretch my-auto">Hố thang: 600-1200mm</div>
        </div>
        <div className="flex gap-2 items-center mt-1 w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/098ebfbb07384cf89eeedb3d40701deb/24d1c136ccc3cbfd3acd7bb3e4abcf282d7268b240eb4e782b43884ae235eff0?apiKey=098ebfbb07384cf89eeedb3d40701deb&"
            className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
          />
          <div className="self-stretch my-auto">Số điểm dừng: 04</div>
        </div>
      </div>
    </Panel>
  </Collapse>
</div>


      </div>

      

    

<div className="flex justify-between items-center mt-4 w-full font-semibold bg-white rounded-lg">
          <div className="flex flex-1 shrink gap-5 justify-between items-center self-stretch px-4 py-3 my-auto basis-0 min-w-[240px]">
            <div className="self-stretch my-auto text-xs leading-4 text-black text-opacity-60">
              Giá bán <br />
              tham khảo
            </div>
            <div className="">
              <span className="text-black underline">đ</span>550.000.000
            </div>
          </div>
          <div className="justify-center items-center rounded-lg bg-[var(] pr-4">
            <div className="flex gap-1 justify-center items-center self-stretch my-auto">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/098ebfbb07384cf89eeedb3d40701deb/4af9715fa1737cccb55675b9ea72c06f7f7edee568bb8815753a3afe53e12780?apiKey=098ebfbb07384cf89eeedb3d40701deb&"
                className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
              />
                <a href="/san-pham/chi-tiet" className="self-stretch my-auto">Phương án</a>
            </div>
          </div>
        </div>
        <div className="flex overflow-hidden flex-col mt-4 w-full font-medium rounded-lg ">
            <Tabs defaultActiveKey="1" centered type="card">
              <Tabs.TabPane tab="NỘI THẤT" key="1">
                <div className=" flex flex-wrap justify-between " >
                  {optionData.map((select, index) => (
                                                <div className="w-1/2 p-1 "  onClick={() => openDrawer(select.data, select.onChange)} >
                                                  <div className="flex overflow-hidden flex-1 shrink items-center self-stretch my-auto bg-white rounded-lg basis-0">
                                                    <div className="flex shrink-0 self-stretch my-auto w-10 h-10 bg-stone-500">
                                                    </div>
                                                    <div className="flex flex-1 shrink gap-10 justify-between items-center self-stretch px-3 my-auto basis-0">
                                                          {select.placeholder}
                                                      <img
                                                        loading="lazy"
                                                        src="https://cdn.builder.io/api/v1/image/assets/098ebfbb07384cf89eeedb3d40701deb/714d297595b8048aff8feeee3b0c6a01a0d045a34f17d8feff1bb195b5a382dd?apiKey=098ebfbb07384cf89eeedb3d40701deb&"
                                                        className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
                                                      />
                                                    </div>
                                                  </div>
                                                </div>
                  ))}
                </div>
              </Tabs.TabPane>
              <Tabs.TabPane tab="NGOẠI THẤT" key="2">
              <div className="self-stretch rounded-lg bg-[var(]">      
                  <div className="bg-[var(]">
                <div className="flex gap-5 items-center w-full whitespace-nowrap">
                  <div className="flex overflow-hidden flex-1 shrink items-center self-stretch my-auto bg-white rounded-lg basis-0">
                    <div className="flex shrink-0 self-stretch my-auto w-10 h-10 bg-stone-500" />
                    <div className="flex flex-1 shrink gap-10 justify-between items-center self-stretch px-3 my-auto basis-0">
                      <div className="self-stretch my-auto">Cửa</div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/098ebfbb07384cf89eeedb3d40701deb/714d297595b8048aff8feeee3b0c6a01a0d045a34f17d8feff1bb195b5a382dd?apiKey=098ebfbb07384cf89eeedb3d40701deb&"
                        className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
                      />
                    </div>
                  </div>
                  <div className="flex overflow-hidden flex-1 shrink items-center self-stretch my-auto bg-white rounded-lg basis-0">
                    <div className="flex shrink-0 self-stretch my-auto w-10 h-10 bg-stone-500" />
                    <div className="flex flex-1 shrink gap-10 justify-between items-center self-stretch px-3 my-auto basis-0">
                      <div className="self-stretch my-auto">Khung cửa</div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/098ebfbb07384cf89eeedb3d40701deb/714d297595b8048aff8feeee3b0c6a01a0d045a34f17d8feff1bb195b5a382dd?apiKey=098ebfbb07384cf89eeedb3d40701deb&"
                        className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
                      />
                    </div>
                  </div>
                </div>
              
              
              </div>
    
                  </div> 
              </Tabs.TabPane>
       
            </Tabs>
        </div>

      <OptionDrawer
        visible={drawerVisible}
        onClose={() => setDrawerVisible(false)}
        data={drawerData}
        onChange={(value) => {
          drawerOnChange(value);
        }}
        selectedValue={
          drawerData.find(
            (item) =>
              item.name === selectedTran ||
              item.name === selectedTayvin ||
              item.name === selectedSan
          )?.name
        }
      />

   
    </>
  );
};

export default Elevatorcustom;
