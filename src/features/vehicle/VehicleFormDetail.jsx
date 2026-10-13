import {
  VEHICLE_CONDITION,
  CAR_TYPE,
  COLOR,
  INTERIOR_COLOR,
  PROPERTY_FEATURES,
  ORIGIN,
} from "../../utils/constant";
import ErrorMessage from "../../ui/ErrorMessage";

function VehicleFormDetail({ category, register, errors }) {
  return (
    <>
      <section>
        <h2 className="text-3xl font-bold mb-4">Thông tin cơ bản</h2>
        <div className="text-2xl grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block font-semibold mb-1">
              Năm sản xuất <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              {...register("manufactureYear")}
              className="w-full p-3 border rounded"
              placeholder="Năm sản xuất"
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">
              Giá nhập xe <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              min={0}
              {...register("price")}
              className="w-full p-3 border rounded"
              placeholder="Giá nhập xe"
            />
          </div>
        </div>
      </section>
      {/* Thông tin chi tiết */}
      <section className="text-2xl">
        <h2 className="text-3xl font-bold mb-4">Thông tin chi tiết</h2>
        {/* Kiểu dáng */}
        {category && (
          <div className="mb-5">
            <label className="block font-semibold mb-1">
              Kiểu dáng {category.name} <span className="text-red-500">*</span>
            </label>
            <select
              id="carType"
              {...register("carType", {
                required: "Vui lòng chọn kiểu dáng xe",
              })}
              className="w-full p-3 border rounded text-2xl"
            >
              <option value="">Kiểu dáng xe</option>
              {CAR_TYPE[category.name]?.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
              {errors.carType && (
                <ErrorMessage message={errors.carType.message} />
              )}
            </select>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Số chỗ ngồi */}
          <div>
            <label className="block font-semibold mb-1">
              Số chỗ ngồi <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              min={0}
              {...register("seats", {
                required: "Vui lòng nhập số chỗ ngồi",
              })}
              className="w-full p-3 border rounded"
              placeholder="0"
            />
            {errors.seats && <ErrorMessage message={errors.seats.message} />}
          </div>

          {/* Số cửa */}
          <div>
            <label className="block font-semibold mb-1">
              Số cửa <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              min={0}
              {...register("doors")}
              className="w-full p-3 border rounded"
              placeholder="0"
            />
            {errors.doors && <ErrorMessage message={errors.doors.message} />}
          </div>

          {/* Tình trạng xe */}
          <div>
            <label className="block font-semibold mb-1">
              Tình trạng <span className="text-red-500">*</span>
            </label>
            <select
              id="condition"
              {...register("condition")}
              className="w-full p-3 border rounded text-2xl"
            >
              <option value="">Tình trạng</option>
              {VEHICLE_CONDITION.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
            {errors.condition && (
              <ErrorMessage message={errors.condition.message} />
            )}
          </div>

          {/* Số km đã đi */}
          <div>
            <label className="block font-semibold mb-1">
              Số km đã đi <span className="text-red-500">*</span>
            </label>
            <input
              min={0}
              type="number"
              {...register("mileage")}
              className="w-full p-3 border rounded"
              placeholder="0"
            />
            {errors.mileage && (
              <ErrorMessage message={errors.mileage.message} />
            )}
          </div>
        </div>
      </section>

      {/* Thông tin khác */}
      <section>
        <h2 className="text-3xl font-bold mb-4">Thông tin khác</h2>
        <div className="text-2xl grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block font-semibold mb-1">
              Màu ngoại thất <span className="text-red-500">*</span>
            </label>
            <select
              id="color"
              {...register("color", {
                required: "Vui lòng chọn màu xe",
              })}
              className="w-full p-3 border rounded text-2xl"
            >
              <option value="">Màu ngoại thất</option>
              {COLOR.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
            {errors.color && <ErrorMessage message={errors.color.message} />}
          </div>

          <div>
            <label className="block font-semibold mb-1">
              Màu nội thất <span className="text-red-500">*</span>
            </label>
            <select
              id="interiorColor"
              {...register("interiorColor", {
                required: "Vui lòng chọn màu nội thất",
              })}
              className="w-full p-3 border rounded text-2xl"
            >
              <option value="">Màu nội thất</option>
              {INTERIOR_COLOR.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
            {errors.interiorColor && (
              <ErrorMessage message={errors.interiorColor.message} />
            )}
          </div>
        </div>

        {/* Checkbox group */}
        <div className="grid text-2xl grid-cols-2 gap-3 mt-4">
          {PROPERTY_FEATURES.map((label, index) => (
            <label key={index} className="flex items-center gap-2">
              <input type="checkbox" {...register("otherInfo")} value={label} />
              <span>{label}</span>
            </label>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-4">
          Động cơ <span className="text-red-500">*</span>
        </h2>
        <div className="text-2xl grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="md:col-span-2">
            <input
              type="text"
              {...register("engine", { required: "Vui lòng nhập động cơ" })}
              className="p-3 border rounded w-full"
              placeholder="Động cơ"
            />{" "}
            {errors.engine && <ErrorMessage message={errors.engine.message} />}
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Xuất xứ <span className="text-red-500">*</span>
            </h2>
            <select
              id="origin"
              {...register("origin", { required: "Vui lòng nhập xuất xứ" })}
              className="w-full p-3 border rounded text-2xl"
            >
              <option value="">Xuất xứ</option>
              {ORIGIN.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
            {errors.origin && <ErrorMessage message={errors.origin.message} />}
          </div>
        </div>
      </section>
    </>
  );
}

export default VehicleFormDetail;
