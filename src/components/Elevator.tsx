import React, { useState } from 'react';
import { Radio, Button, Modal, Card, Space, List, Avatar, Badge } from 'antd';
import { CheckCircleFilled, DownloadOutlined, SettingOutlined } from '@ant-design/icons';
import { Carousel } from 'antd';


const tranGiaOptions = [
  { value: 'a1', label: 'Mẫu Trần Giả 1', imgSrc: '/images/mau-1-anh-1.jpg' },
  { value: 'a2', label: 'Mẫu Trần Giả 2', imgSrc: '/images/mau-2-anh-1.jpg' },
  { value: 'a3', label: 'Mẫu Trần Giả 3', imgSrc: '/images/mau-3-anh-1.jpg' },
  { value: 'a4', label: 'Mẫu Trần Giả 4', imgSrc: '/images/mau-4-anh-1.jpg' },
  { value: 'a5', label: 'Mẫu Trần Giả 5', imgSrc: '/images/mau-5-anh-1.jpg' },
  { value: 'a6', label: 'Mẫu Trần Giả 6', imgSrc: '/images/mau-6-anh-1.jpg' },
  { value: 'a7', label: 'Mẫu Trần Giả 7', imgSrc: '/images/mau-7-anh-1.jpg' },
  { value: 'a8', label: 'Mẫu Trần Giả 8', imgSrc: '/images/mau-8-anh-1.jpg' },
  { value: 'a9', label: 'Mẫu Trần Giả 9', imgSrc: '/images/mau-9-anh-1.jpg' },
  { value: 'a10', label: 'Mẫu Trần Giả 10', imgSrc: '/images/mau-10-anh-1.jpg' },
  { value: 'a11', label: 'Mẫu Trần Giả 11', imgSrc: '/images/mau-11-anh-1.jpg' },
];

const tayVinOptions = [
  { value: 'b1', label: 'Mẫu Tay Vịn 1', imgSrc: '/images/mau-1-anh-1.jpg' },
  { value: 'b2', label: 'Mẫu Tay Vịn 2', imgSrc: '/images/mau-2-anh-1.jpg' },
  { value: 'b3', label: 'Mẫu Tay Vịn 3', imgSrc: '/images/mau-3-anh-1.jpg' },
  { value: 'b4', label: 'Mẫu Tay Vịn 4', imgSrc: '/images/mau-4-anh-1.jpg' },
  { value: 'b5', label: 'Mẫu Tay Vịn 5', imgSrc: '/images/mau-5-anh-1.jpg' },
  { value: 'b6', label: 'Mẫu Tay Vịn 6', imgSrc: '/images/mau-6-anh-1.jpg' },
  { value: 'b7', label: 'Mẫu Tay Vịn 7', imgSrc: '/images/mau-7-anh-1.jpg' },
  { value: 'b8', label: 'Mẫu Tay Vịn 8', imgSrc: '/images/mau-8-anh-1.jpg' },
  { value: 'b9', label: 'Mẫu Tay Vịn 9', imgSrc: '/images/mau-9-anh-1.jpg' },
  { value: 'b10', label: 'Mẫu Tay Vịn 10', imgSrc: '/images/mau-10-anh-1.jpg' },
  { value: 'b11', label: 'Mẫu Tay Vịn 11', imgSrc: '/images/mau-11-anh-1.jpg' },
];

const bangGoiOptions = [
  { value: 'c1', label: 'Bảng Gọi 1', imgSrc: '/images/mau-1-anh-1.jpg' },
  { value: 'c2', label: 'Bảng Gọi 2', imgSrc: '/images/mau-2-anh-1.jpg' },
  { value: 'c3', label: 'Bảng Gọi 3', imgSrc: '/images/mau-3-anh-1.jpg' },
  { value: 'c4', label: 'Bảng Gọi 4', imgSrc: '/images/mau-4-anh-1.jpg' },
  { value: 'c5', label: 'Bảng Gọi 5', imgSrc: '/images/mau-5-anh-1.jpg' },
  { value: 'c6', label: 'Bảng Gọi 6', imgSrc: '/images/mau-6-anh-1.jpg' },
  { value: 'c7', label: 'Bảng Gọi 7', imgSrc: '/images/mau-7-anh-1.jpg' },
  { value: 'c8', label: 'Bảng Gọi 8', imgSrc: '/images/mau-8-anh-1.jpg' },
  { value: 'c9', label: 'Bảng Gọi 9', imgSrc: '/images/mau-9-anh-1.jpg' },
  { value: 'c10', label: 'Bảng Gọi 10', imgSrc: '/images/mau-10-anh-1.jpg' },
  { value: 'c11', label: 'Bảng Gọi 11', imgSrc: '/images/mau-11-anh-1.jpg' },
];

const sanOptions = [
  { value: 'd1', label: 'Sàn 1', imgSrc: '/images/mau-1-anh-1.jpg' },
  { value: 'd2', label: 'Sàn 2', imgSrc: '/images/mau-2-anh-1.jpg' },
  { value: 'd3', label: 'Sàn 3', imgSrc: '/images/mau-3-anh-1.jpg' },
  { value: 'd4', label: 'Sàn 4', imgSrc: '/images/mau-4-anh-1.jpg' },
  { value: 'd5', label: 'Sàn 5', imgSrc: '/images/mau-5-anh-1.jpg' },
  { value: 'd6', label: 'Sàn 6', imgSrc: '/images/mau-6-anh-1.jpg' },
  { value: 'd7', label: 'Sàn 7', imgSrc: '/images/mau-7-anh-1.jpg' },
  { value: 'd8', label: 'Sàn 8', imgSrc: '/images/mau-8-anh-1.jpg' },
  { value: 'd9', label: 'Sàn 9', imgSrc: '/images/mau-9-anh-1.jpg' },
  { value: 'd10', label: 'Sàn 10', imgSrc: '/images/mau-10-anh-1.jpg' },
  { value: 'd11', label: 'Sàn 11', imgSrc: '/images/mau-11-anh-1.jpg' },
];

const cuaOptions = [
  { value: 'e1', label: 'Cửa 1', imgSrc: '/images/mau-1-anh-1.jpg' },
  { value: 'e2', label: 'Cửa 2', imgSrc: '/images/mau-2-anh-1.jpg' },
  { value: 'e3', label: 'Cửa 3', imgSrc: '/images/mau-3-anh-1.jpg' },
  { value: 'e4', label: 'Cửa 4', imgSrc: '/images/mau-4-anh-1.jpg' },
  { value: 'e5', label: 'Cửa 5', imgSrc: '/images/mau-5-anh-1.jpg' },
  { value: 'e6', label: 'Cửa 6', imgSrc: '/images/mau-6-anh-1.jpg' },
  { value: 'e7', label: 'Cửa 7', imgSrc: '/images/mau-7-anh-1.jpg' },
  { value: 'e8', label: 'Cửa 8', imgSrc: '/images/mau-8-anh-1.jpg' },
  { value: 'e9', label: 'Cửa 9', imgSrc: '/images/mau-9-anh-1.jpg' },
  { value: 'e10', label: 'Cửa 10', imgSrc: '/images/mau-10-anh-1.jpg' },
  { value: 'e11', label: 'Cửa 11', imgSrc: '/images/mau-11-anh-1.jpg' },
];

const Elevator: React.FC = () => {
  const [selectedOptions, setSelectedOptions] = useState({
    tranGia: tranGiaOptions[0].value,
    tayVin: tayVinOptions[0].value,
    bangGoi: bangGoiOptions[0].value,
    san: sanOptions[0].value,
    cua: cuaOptions[0].value
  });

 

  const handleOptionChange = (category: string, value: string) => {
    setSelectedOptions(prevState => ({
      ...prevState,
      [category]: value
    }));
  };

  const [isTranGiaModalVisible, setIsTranGiaModalVisible] = useState(false);
  const [isTayVinModalVisible, setIsTayVinModalVisible] = useState(false);
  const [isBangGoiModalVisible, setIsBangGoiModalVisible] = useState(false);
  const [isSanModalVisible, setIsSanModalVisible] = useState(false);
  const [isCuaModalVisible, setIsCuaModalVisible] = useState(false);

const showTranGiaModal = () => {
  setIsTranGiaModalVisible(true);
};

const showTayVinModal = () => {
  setIsTayVinModalVisible(true);
};

const showBangGoiModal = () => {
  setIsBangGoiModalVisible(true);
};

const showSanModal = () => {
  setIsSanModalVisible(true);
};

const showCuaModal = () => {
  setIsCuaModalVisible(true);
};

const handleTranGiaOk = () => {
  setIsTranGiaModalVisible(false);
};

const handleTayVinOk = () => {
  setIsTayVinModalVisible(false);
};

const handleBangGoiOk = () => {
  setIsBangGoiModalVisible(false);
};

const handleSanOk = () => {
  setIsSanModalVisible(false);
};

const handleCuaOk = () => {
  setIsCuaModalVisible(false);
};

const handleTranGiaCancel = () => {
  setIsTranGiaModalVisible(false);
};

const handleTayVinCancel = () => {
  setIsTayVinModalVisible(false);
};

const handleBangGoiCancel = () => {
  setIsBangGoiModalVisible(false);
};

const handleSanCancel = () => {
  setIsSanModalVisible(false);
};

const handleCuaCancel = () => {
  setIsCuaModalVisible(false);
};

  return (
    <div className="relative bg-amber-100 p-0 aspect-w-20 aspect-h-16 ">
      <div className="sticky top-0 z-10 flex justify-between items-center bg-white p-4 shadow-md">
        <div>
          <label htmlFor="elevatorSelect" className="mr-2"></label>
          <select id="elevatorSelect" className="p-2 border rounded">
        <option value="elevator1">Hệ thang Eli-01</option>
        <option value="elevator2">Hệ thang Eli-02</option>
        <option value="elevator3">Hệ thang Eli-03</option>
          </select>
        </div>
        <div>
          <span className="text-lg font-semibold">Trọn gói: 120 triệu</span>
        </div>
      </div>



      <Modal title="Lựa Chọn Trần" visible={isTranGiaModalVisible} onOk={handleTranGiaOk} onCancel={handleTranGiaCancel}>
      <div className="max-h-[450px] overflow-y-scroll">
        <Radio.Group onChange={e => handleOptionChange('tranGia', e.target.value)} value={selectedOptions.tranGia} className="w-[98%]">
        <List
          grid={{ gutter: 16, column: 1 }}
          dataSource={tranGiaOptions}
          renderItem={option => (
          <List.Item>
            <Radio.Button key={option.value} value={option.value} className="w-full p-1.5 h-full">
            <div className="flex items-center">
              <Badge count={selectedOptions.tranGia === option.value ? <CheckCircleFilled style={{ color: 'orange' }} /> : 0} offset={[-15, 15]}>
              <Avatar src={option.imgSrc} alt={option.label} size={100} shape="square" />
              </Badge>
              <p className="pl-1.5">{option.label}</p>
            </div>
            </Radio.Button>
          </List.Item>
          )}
        />
        </Radio.Group>
      </div>
      </Modal>

      <Modal title="Lựa Chọn Tay vịn" visible={isTayVinModalVisible} onOk={handleTayVinOk} onCancel={handleTayVinCancel}>
      <div className="max-h-[450px] overflow-y-scroll">
        <Radio.Group onChange={e => handleOptionChange('tayVin', e.target.value)} value={selectedOptions.tayVin} className="w-[98%]">
        <List
          grid={{ gutter: 16, column: 1 }}
          dataSource={tayVinOptions}
          renderItem={option => (
          <List.Item>
            <Radio.Button key={option.value} value={option.value} className="w-full p-1.5 h-full">
            <div className="flex items-center">
              <Badge count={selectedOptions.tayVin === option.value ? <CheckCircleFilled style={{ color: 'orange' }} /> : 0} offset={[-15, 15]}>
              <Avatar src={option.imgSrc} alt={option.label} size={100} shape="square" />
              </Badge>
              <p className="pl-1.5">{option.label}</p>
            </div>
            </Radio.Button>
          </List.Item>
          )}
        />
        </Radio.Group>
      </div>
      </Modal>

      <Modal title="Lựa Chọn Bảng Gọi" visible={isBangGoiModalVisible} onOk={handleBangGoiOk} onCancel={handleBangGoiCancel}>
      <div className="max-h-[450px] overflow-y-scroll">
        <Radio.Group onChange={e => handleOptionChange('bangGoi', e.target.value)} value={selectedOptions.bangGoi} className="w-[98%]">
        <List
          grid={{ gutter: 16, column: 1 }}
          dataSource={bangGoiOptions}
          renderItem={option => (
          <List.Item>
            <Radio.Button key={option.value} value={option.value} className="w-full p-1.5 h-full">
            <div className="flex items-center">
              <Badge count={selectedOptions.bangGoi === option.value ? <CheckCircleFilled style={{ color: 'orange' }} /> : 0} offset={[-15, 15]}>
              <Avatar src={option.imgSrc} alt={option.label} size={100} shape="square" />
              </Badge>
              <p className="pl-1.5">{option.label}</p>
            </div>
            </Radio.Button>
          </List.Item>
          )}
        />
        </Radio.Group>
      </div>
      </Modal>

      <Modal title="Lựa Chọn Sàn" visible={isSanModalVisible} onOk={handleSanOk} onCancel={handleSanCancel}>
      <div className="max-h-[450px] overflow-y-scroll">
        <Radio.Group onChange={e => handleOptionChange('san', e.target.value)} value={selectedOptions.san} className="w-[98%]">
        <List
          grid={{ gutter: 16, column: 1 }}
          dataSource={sanOptions}
          renderItem={option => (
          <List.Item>
            <Radio.Button key={option.value} value={option.value} className="w-full p-1.5 h-full">
            <div className="flex items-center">
              <Badge count={selectedOptions.san === option.value ? <CheckCircleFilled style={{ color: 'orange' }} /> : 0} offset={[-15, 15]}>
              <Avatar src={option.imgSrc} alt={option.label} size={100} shape="square" />
              </Badge>
              <p className="pl-1.5">{option.label}</p>
            </div>
            </Radio.Button>
          </List.Item>
          )}
        />
        </Radio.Group>
      </div>
      </Modal>

      <Modal title="Lựa Chọn Cửa" visible={isCuaModalVisible} onOk={handleCuaOk} onCancel={handleCuaCancel}>
      <div className="max-h-[450px] overflow-y-scroll">
        <Radio.Group onChange={e => handleOptionChange('cua', e.target.value)} value={selectedOptions.cua} className="w-[98%]">
        <List
          grid={{ gutter: 16, column: 1 }}
          dataSource={cuaOptions}
          renderItem={option => (
            <List.Item>
            <Radio.Button key={option.value} value={option.value} className="w-full p-1.5 h-full">
            <div className="flex items-center">
              <Badge count={selectedOptions.cua === option.value ? <CheckCircleFilled style={{ color: 'orange' }} /> : 0} offset={[-15, 15]}>
              <Avatar src={option.imgSrc} alt={option.label} size={100} shape="square" />
              </Badge>
              <p className="pl-1.5">{option.label}</p>
            </div>
            </Radio.Button>
          </List.Item>
            )}
          />
        </Radio.Group>
      </div>
    </Modal>


      <div className='m-4'>
        {tranGiaOptions.map((tranGiaOption, index) => (
          selectedOptions.tranGia === tranGiaOption.value &&
          selectedOptions.tayVin === 'b1' &&
          selectedOptions.bangGoi === 'c1' &&
          selectedOptions.san === 'd1' &&
          selectedOptions.cua === 'e1' && (
        <Card key={index}>
          {tranGiaOption.value === 'a1' ? (
            <Carousel arrows infinite draggable>
          {[...Array(6)].map((_, i) => (
            <div key={i}>
              <img src={`/images/mau-1-anh-${i + 1}.jpg`} alt="Special Product" />
            </div>
          ))}
            </Carousel>
          ) : (
            <img src={tranGiaOption.imgSrc} alt="Special Product" />
          )}
        </Card>
          )
        ))}
      </div>


<div className="m-4 rounded-md px-4 bg-white">
  <List
          itemLayout="horizontal"
          dataSource={[
            {imgSrc: '/images/mau-1-anh-1.jpg' ,price:'1500000',title:'Trần', label: 'Chọn', onClick: showTranGiaModal },
            {imgSrc: '/images/mau-1-anh-1.jpg' ,price:'1500000',title:'Tay vịn', label: 'Chọn', onClick: showTayVinModal },
            {imgSrc: '/images/mau-1-anh-1.jpg' ,price:'1500000',title:'Bảng Gọi', label: 'Chọn', onClick: showBangGoiModal },
            {imgSrc: '/images/mau-1-anh-1.jpg' ,price:'1500000',title:'Sàn', label: 'Chọn', onClick: showSanModal },
            {imgSrc: '/images/mau-1-anh-1.jpg' ,price:'1500000',title:'Cửa', label: 'Chọn', onClick: showCuaModal },
          ]}
          renderItem={item => (
              <List.Item onClick={item.onClick}>
              <div className="flex items-center justify-between w-full ">
                <div className="flex items-center">
                <Avatar src={item.imgSrc} alt={item.title} />
                <p className="pl-2">{item.title}</p>
                
                </div>
                <div className="flex items-center gap-2">
                <p className="pl-2">{Number(item.price).toLocaleString()} đ</p>
                <Button type="primary" onClick={item.onClick} className="bg-amber-400 w-8 ml-2">
                  <SettingOutlined />
                </Button>
                </div>
           
              </div>
              </List.Item>
          )}
        />

      <div className="flex justify-center py-4">
      <Button type="primary" className="w-full bg-amber-400 flex items-center justify-center h-10">
  <DownloadOutlined  className="mr-2" />
  Tải báo giá
</Button>
      </div>

</div>



    </div>

  );
};

export default Elevator;