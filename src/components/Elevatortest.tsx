import React, { useState } from 'react';
import Elevatorcustom from '../components/Elevatorcustom.tsx';
import { Select, Card, List } from 'antd';

interface ComboOption {
  value: string;
  price: number;
}

interface ComboData {
  [key: string]: {
    [key: string]: ComboOption[];
  };
}

const comboData: ComboData = {
    'Hố thang 500': {
      '1 Tầng': [{ value: '350', price: 1000000 }, { value: '450', price: 1200000 }, { value: '630', price: 1500000 }, { value: '800', price: 1800000 }, { value: '1000', price: 2000000 }],
      '2 Tầng': [{ value: '350', price: 1100000 }, { value: '450', price: 1300000 }, { value: '630', price: 1600000 }, { value: '800', price: 1900000 }, { value: '1000', price: 2100000 }],
      '3 Tầng': [{ value: '350', price: 1200000 }, { value: '450', price: 1400000 }, { value: '630', price: 1700000 }, { value: '800', price: 2000000 }, { value: '1000', price: 2200000 }],
      '4 Tầng': [{ value: '350', price: 1300000 }, { value: '450', price: 1500000 }, { value: '630', price: 1800000 }, { value: '800', price: 2100000 }, { value: '1000', price: 2300000 }],
      '5 Tầng': [{ value: '350', price: 1400000 }, { value: '450', price: 1600000 }, { value: '630', price: 1900000 }, { value: '800', price: 2200000 }, { value: '1000', price: 2400000 }]
    },
    'Hố thang 800': {
      '1 Tầng': [{ value: '350', price: 1500000 }, { value: '450', price: 1700000 }, { value: '630', price: 2000000 }, { value: '800', price: 2300000 }, { value: '1000', price: 2500000 }],
      '2 Tầng': [{ value: '350', price: 1600000 }, { value: '450', price: 1800000 }, { value: '630', price: 2100000 }, { value: '800', price: 2400000 }, { value: '1000', price: 2600000 }],
      '3 Tầng': [{ value: '350', price: 1700000 }, { value: '450', price: 1900000 }, { value: '630', price: 2200000 }, { value: '800', price: 2500000 }, { value: '1000', price: 2700000 }],
      '4 Tầng': [{ value: '350', price: 1800000 }, { value: '450', price: 2000000 }, { value: '630', price: 2300000 }, { value: '800', price: 2600000 }, { value: '1000', price: 2800000 }],
      '5 Tầng': [{ value: '350', price: 1900000 }, { value: '450', price: 2100000 }, { value: '630', price: 2400000 }, { value: '800', price: 2700000 }, { value: '1000', price: 2900000 }]
    },
    'Hố thang 1000': {
      '1 Tầng': [{ value: '350', price: 2000000 }, { value: '450', price: 2200000 }, { value: '630', price: 2500000 }, { value: '800', price: 2800000 }, { value: '1000', price: 3000000 }],
      '2 Tầng': [{ value: '350', price: 2100000 }, { value: '450', price: 2300000 }, { value: '630', price: 2600000 }, { value: '800', price: 2900000 }, { value: '1000', price: 3100000 }],
      '3 Tầng': [{ value: '350', price: 2200000 }, { value: '450', price: 2400000 }, { value: '630', price: 2700000 }, { value: '800', price: 3000000 }, { value: '1000', price: 3200000 }],
      '4 Tầng': [{ value: '350', price: 2300000 }, { value: '450', price: 2500000 }, { value: '630', price: 2800000 }, { value: '800', price: 3100000 }, { value: '1000', price: 3300000 }],
      '5 Tầng': [{ value: '350', price: 2400000 }, { value: '450', price: 2600000 }, { value: '630', price: 2900000 }, { value: '800', price: 3200000 }, { value: '1000', price: 3400000 }]
    }
    }
  ;

const Elevatortest: React.FC = () => {
  const [selectedHoThang, setSelectedHoThang] = useState<string>('0');
  const [selectedSoTang, setSelectedSoTang] = useState<string>('0');
  const [selectedTaiTrong, setSelectedTaiTrong] = useState<string>('0');
  const [soTangOptions, setSoTangOptions] = useState<string[]>([]);
  const [taiTrongOptions, setTaiTrongOptions] = useState<string[]>([]);

  const handleHoThangChange = (value: string) => {
    setSelectedHoThang(value);
    setSelectedSoTang('0');
    setSelectedTaiTrong('0');
    setTaiTrongOptions([]);
    setSoTangOptions(Object.keys(comboData[value] || {}));
  };

  const handleSoTangChange = (value: string) => {
    setSelectedSoTang(value);
    setSelectedTaiTrong('0');
    setTaiTrongOptions((comboData[selectedHoThang][value] || []).map(option => option.value));
  };

  const handleTaiTrongChange = (value: string) => {
    setSelectedTaiTrong(value);
  };

  return (
    <div className="bg-white p-0 relative aspect-[20/16]">

    <div className="bg-amber-400 sticky top-0 py-2 transform z-50 flex justify-between w-full px-4 ">
      <Select
        onChange={(value) => console.log('Combo option selected:', value)}
        className="w-40"
        placeholder="Chọn Combo"
      >
        <Select.Option value="combo1">E01</Select.Option>
        <Select.Option value="combo2">E02</Select.Option>
        <Select.Option value="combo3">E03</Select.Option>
      </Select>
      <div className="flex items-center">
        <span className="text-lg ">Tổng giá trị: </span>
      <span className="text-lg  ml-2">
      100000
      </span>
      </div>
    </div>

      <div className="pt-4 flex space-x-4 w-full px-4">
        <Select
          onChange={handleHoThangChange}
          value={selectedHoThang}
          className="w-40"
          placeholder="Hố Thang"
        >
          <Select.Option value="0">Hố Thang</Select.Option>
          {Object.keys(comboData).map(hoThang => (
          <Select.Option key={hoThang} value={hoThang}>
            {hoThang}
          </Select.Option>
          ))}
        </Select>
        <Select
          onChange={handleSoTangChange}
          value={selectedSoTang}
          className="w-40"
          placeholder="Số Tầng"
          disabled={selectedHoThang === '0'}
        >
          <Select.Option value="0">Số Tầng</Select.Option>
          {soTangOptions.map(soTang => (
          <Select.Option key={soTang} value={soTang}>
            {soTang}
          </Select.Option>
          ))}
        </Select>
        <Select
          onChange={handleTaiTrongChange}
          value={selectedTaiTrong}
          className="w-40"
          placeholder="Tải Trọng"
          disabled={selectedSoTang === '0'}
        >
          <Select.Option value="0">Tải Trọng</Select.Option>
          {taiTrongOptions.map(taiTrong => (
          <Select.Option key={taiTrong} value={taiTrong}>
            {taiTrong} Kg
          </Select.Option>
          ))}
        </Select>
      </div>


      <div className=" ">
        <div className="px-4 pt-4 pb-4 w-full">
        <Card title="">
        {selectedHoThang === '0' || selectedSoTang === '0' || selectedTaiTrong === '0' ? (
          <Elevatorcustom/>
        ) : (
          <>
           
            <Elevatorcustom/>
         
          </>
        )}
            
          <List
            className="mt-4"
            size="small"
            dataSource={[
                <div className="flex justify-between">
              <div>Hố Thang:</div>
              <div> {selectedHoThang}</div>
              
                </div>
                
                ,
              
              <div className="flex justify-between">
          <p>Số Tầng:</p>
          <p> {selectedSoTang}</p>
              </div>,
              <div className="flex justify-between">
          <p>Tải Trọng:</p>
          <p> {selectedTaiTrong} Kg</p>
              </div>,
            ]}
            renderItem={item => <List.Item>{item}</List.Item>}
          />
        </Card>
        </div>
      </div>
    
    </div>
  );
};

export default Elevatortest;