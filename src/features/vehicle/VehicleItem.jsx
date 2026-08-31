import { FaMapMarkerAlt } from "react-icons/fa";
import { convertDate, formatVietnamMoney } from "../../utils/helper";

function VehicleItem({ vehicle }) {
  const {
    id,
    manufacturYear,
    price,
    address,
    ward,
    province,
    createdAt,
    imageUrl,
  } = vehicle;
  return (
    <div className="cursor-pointer my-5 overflow-hidden bg-white h-35 rounded-2xl shadow-lg flex border hover:shadow-xl transition">
      <img
        src={imageUrl}
        alt={vehicle.name}
        className="w-full md:w-64 h-52 md:h-auto object-cover"
      />
      <div className="text-xl p-4">
        <div>
          <p>
            <span className="text-2xl font-bold">Mã ô tô: </span>
            {id}
          </p>
          <div className="flex items-start mb-2">
            <FaMapMarkerAlt className="mt-1 mr-2 shrink-0 text-rose-600" />
            <p className="text-rose-600 text-2xl truncate w-0 flex-1">
              {`${address}, ${ward}, ${province}`}
            </p>
          </div>
          <p className="text-xl text-gray-600">
            Ngày đăng: {convertDate(createdAt)}
          </p>

          <div className="grid grid-cols-2 gap-5 mt-5">
            <p className="text-xl text-gray-600">
              Năm sản xuất: {manufacturYear}
            </p>
            <p className="text-xl text-gray-600">
              Giá: {formatVietnamMoney(price)} đồng
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VehicleItem;
