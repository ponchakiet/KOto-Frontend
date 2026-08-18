import { CiClock2, CiLocationOn } from "react-icons/ci";
import Section from "../../ui/Section";
import { formatVietnamMoney, getTimeDifferenceFromNow } from "../../utils/helper";
import { TbAutomaticGearbox, TbEngine, TbGauge } from "react-icons/tb";
import { PiSeat } from "react-icons/pi";

const properties = {
  engine: {
    icon: <TbEngine />,
    label: "Động cơ: ",
  },
  seats: {
    icon: <PiSeat />,
    label: "Số chỗ: ",
  },
  transmission: {
    icon: <TbAutomaticGearbox />,
    label: "Hộp số: ",
  },
  mileage: {
    icon: <TbGauge />,
    label: "Số km đã đi: ",
  },
};

function PostDetail({ post }) {
  const { createdAt, title, vehicleDetail } = post;
  return (
    <Section>
      <div className="p-5 text-2xl">
        <h2 className="text-3xl font-bold mb-6">{title}</h2>
        <div className="text-red-600 mb-4 font-bold">
          {formatVietnamMoney(vehicleDetail.price)}
        </div>
        <div className="text-gray-600 flex items-center">
          <span className="mr-2">
            <CiLocationOn />
          </span>
          {`${vehicleDetail.address}, ${vehicleDetail.ward}, ${vehicleDetail.province}`}
        </div>
        <div className="text-gray-600 flex items-center">
          <span className="mr-2">
            <CiClock2 />
          </span>
          {getTimeDifferenceFromNow(createdAt)}
        </div>

        <ul className="text-2xl pt-4">
          {Object.entries(vehicleDetail.properties).map(([key, value]) => (
            <li
              key={key}
              className="grid py-3 grid-cols-[24rem_auto] border-b border-gray-300"
            >
              <span className="flex items-center gap-2">
                {properties[key]?.icon}
                {properties[key]?.label}
              </span>
              <span className="font-bold">{value}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="text-2xl p-5 pt-4">
        <h1 className="font-semibold text-3xl mb-2">Mô tả chi tiết</h1>
        <div className="py-4 px-4 my-4 flex bg-gray-200 w-fit items-center">
          <h3 className="font-semibold">SĐT Liên hệ: </h3>
          <p className="ml-4">0383 79 xxxx</p>
        </div>
        {/* {vehicleDetail.description
          .split("\n")
          .map((item) => (item.trim() === "" ? <br /> : <p>{item}</p>))} */}
      </div>
    </Section>
  );
}

export default PostDetail;
