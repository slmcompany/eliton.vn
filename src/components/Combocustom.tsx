import Elevatorcustom from "../components/Elevatorcustom.tsx";
import Elevatortuybien from "../components/Elevatortuybien.tsx";
import { Button } from "antd";

const Combocustom = () => {
  return (
    <div className="bg-white py-6 bg-cover bg-center relative">
      <div className="absolute inset-0 top-0 w-full z-0">
        <img
          src="/images/abstract-1.png"
          alt=""
          className="object-cover w-2/3"
        />
      </div>
      <div className="flex overflow-hidden z-0 flex-col justify-center px-4  mt-10 mb-12 w-full  ">
        <div className="flex flex-col w-full pt-6">
          <h2 className="text-4xl leading-10 font-bold text-black">
            Đẳng cấp riêng,
            <br />
            Phong cách riêng
          </h2>
          <p className="mt-4 text-xl leading-8 text-neutral-600 font-light w-4/5">
            Màu sắc, ánh sáng, phản xạ, kết hợp cùng kiểu dáng, vật liệu sẽ
            chiều lòng thị giác của Quý khách hàng. Hãy để cảm xúc dẫn lối lựa
            chọn của bạn. Bạn có thể tuỳ chọn:{" "}
            <strong className="font-bold"> Trần, Sàn, Vách, Tay Vịn</strong>
          </p>
        </div>
        <div className="gap-2 self-stretch mt-8 w-full text-sm font-semibold leading-none text-black  rounded-lg">
          {/* <Elevatorcustom /> */}
          <Elevatortuybien />
          <Button
            type="primary"
            className="w-full text-lg py-6 px-4 rounded-md bg-yellow-400"
            style={{
              backgroundColor: "#facc15",
              borderColor: "#FFC107",
              color: "#000",
            }}
          >
            Tạo thiết kế cho riêng bạn
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Combocustom;
