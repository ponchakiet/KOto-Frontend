import {
  FaCar,
  FaChair,
  FaCogs,
  FaDoorOpen,
  FaGlobeAsia,
  FaRoad,
} from "react-icons/fa";
import { IoColorPaletteOutline } from "react-icons/io5";
import { LuPackage2 } from "react-icons/lu";
import { MdCarRepair } from "react-icons/md";

export const MAX_IMAGE_UPLOAD = 12;
export const POST_TYPE = {
  SELL: "SELL",
  RENT: "RENT",
};

export const VEHICLE_CONDITION = ["Xe mới", "Xe đã dùng"];

export const PROPERTY_FEATURES = [
  "Xe một chủ từ đầu",
  "Không tai nạn",
  "Không ngập nước",
  "Lịch sử bảo dưỡng đầy đủ",
  "Còn bảo hành",
  "Đã thay lốp mới",
  "Đã nâng cấp nội thất",
  "Đã độ thêm phụ kiện",
];

export const CAR_TYPE = {
  "Xe con": [
    "Sedan",
    "Hatchback",
    "SUV",
    "Crossover",
    "MPV",
    "Coupe",
    "Convertible",
  ],
  "Xe bán tải": ["Pickup"],
  "Xe van": ["Van", "Minivan"],
};

export const COLOR = [
  "Trắng",
  "Đen",
  "Bạc",
  "Xám",
  "Đỏ",
  "Xanh",
  "Nâu",
  "Vàng",
  "Cam",
  "Khác",
];

export const INTERIOR_COLOR = [
  "Đen",
  "Be",
  "Nâu",
  "Xám",
  "Trắng",
  "Đỏ",
  "Xanh",
  "Khác",
];

export const ORIGIN = ["Lắp ráp trong nước", "Nhập khẩu"];

export const POST_STATUS = {
  WAITING_PAYMENT: "Cần thanh toán",
  HIDE: "Ẩn",
  SHOW: "Hiển thị",
  EXPIRED: "Hết hạn",
  REJECT: "Từ chối",
  DELETE: "Đã xóa",
  WAITING_ACCEPT: "Chờ duyệt",
};

export const PROPERTIES = {
  seats: {
    icon: FaChair,
    params: "seats",
    label: "Số chỗ ngồi",
  },
  mileage: {
    icon: FaRoad,
    label: "Số km đã đi",
    params: "mileage",
  },
  doors: {
    icon: FaDoorOpen,
    params: "doors",
    label: "Số cửa",
  },
  condition: {
    icon: MdCarRepair,
    label: "Tình trạng xe",
    params: "condition",
    items: ["Xe mới", "Xe đã qua sử dụng"],
  },
  color: {
    icon: IoColorPaletteOutline,
    label: "Màu ngoại thất",
    params: "color",
    items: [
      "Trắng",
      "Đen",
      "Bạc",
      "Xám",
      "Đỏ",
      "Xanh",
      "Nâu",
      "Vàng",
      "Cam",
      "Khác",
    ],
  },
  carType: {
    icon: FaCar,
    label: "Kiểu dáng",
    params: "type",
    items: [
      "Sedan",
      "Hatchback",
      "SUV",
      "Crossover",
      "MPV",
      "Coupe",
      "Convertible",
      "Pickup",
      "Van",
      "Minivan",
    ],
  },
  engine: {
    icon: FaCogs,
    label: "Động cơ",
    params: "engine",
  },
  interiorColor: {
    icon: LuPackage2,
    label: "Màu nội thất",
    items: ["Đen", "Be", "Nâu", "Xám", "Trắng", "Đỏ", "Xanh", "Khác"],
    params: "interiorColor",
  },
  origin: {
    icon: FaGlobeAsia,
    label: "Xuất xứ",
    items: ["Lắp ráp trong nước", "Nhập khẩu"],
    params: "origin",
  },
};

export const FILTER_NAME = {
  seats: "Số chỗ ngồi",
  interiorColor: "Màu nội thất",
  mileage: "Số km đã đi",
  carType: "Kiểu dáng xe",
  doors: "Số của",
  condition: "Tình trạng xe",
  color: "Màu ngoại thất",
  minPrice: "Giá từ",
  maxPrice: "Đến",
  ward: "Phường",
  engine: "Động cơ",
  origin: "Xuất xứ"
};

export const FILTER_PRICE_SELL = [
  {
    label: "Giá dưới 1 tỷ",
    minPrice: 0,
    maxPrice: 1000000000,
  },
  {
    label: "Giá 1 - 2 tỷ",
    minPrice: 1000000000,
    maxPrice: 2000000000,
  },
  {
    label: "Giá 2 - 3 tỷ",
    minPrice: 2000000000,
    maxPrice: 3000000000,
  },
  {
    label: "Giá 3 - 5 tỷ",
    minPrice: 3000000000,
    maxPrice: 5000000000,
  },
  {
    label: "Giá 5 - 7 tỷ",
    minPrice: 5000000000,
    maxPrice: 7000000000,
  },
  {
    label: "Giá 7 - 10 tỷ",
    minPrice: 7000000000,
    maxPrice: 10000000000,
  },
  {
    label: "Giá trên 10 tỷ",
    minPrice: 10000000000,
    maxPrice: null,
  },
];
export const FILTER_PRICE_RENT = [
  {
    label: "Giá dưới 2 triệu",
    minPrice: 0,
    maxPrice: 2000000,
  },
  {
    label: "Giá 2 - 3 triệu",
    minPrice: 2000000,
    maxPrice: 3000000,
  },
  {
    label: "Giá 3 - 5 triệu",
    minPrice: 3000000,
    maxPrice: 5000000,
  },
  {
    label: "Giá 5 - 10 triệu",
    minPrice: 5000000,
    maxPrice: 10000000,
  },
  {
    label: "Giá 10 - 15 triệu",
    minPrice: 10000000,
    maxPrice: 15000000,
  },
  {
    label: "Giá 15 - 20 triệu",
    minPrice: 15000000,
    maxPrice: 20000000,
  },
  {
    label: "Giá 20 - 30 triệu",
    minPrice: 20000000,
    maxPrice: 30000000,
  },
  {
    label: "Giá 30 - 50 triệu",
    minPrice: 30000000,
    maxPrice: 50000000,
  },
  {
    label: "Giá 50 - 70 triệu",
    minPrice: 50000000,
    maxPrice: 70000000,
  },
  {
    label: "Giá trên 70 triệu",
    minPrice: 70000000,
    maxPrice: null,
  },
];

export const PAGE_SIZE = 10;
export const PAGE = 0;
export const COMMENT_SIZE = 5;
export const PRICE_CREATED = 50000;
