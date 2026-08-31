import ErrorMessage from "../../ui/ErrorMessage";

function VehicleFormDetail({ category, register, errors }) {
  return (
    <>
      <section>
        <h2 className="text-3xl font-bold mb-4">Thông tin cơ bản</h2>
        <div className="text-2xl grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block font-semibold mb-1">Năm sản xuất</label>
            <input
              type="text"
              {...register("manufactureYear")}
              className="w-full p-3 border rounded"
              placeholder="Năm sản xuất"
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">Giá xe</label>
            <input
              type="text"
              {...register("price")}
              className="w-full p-3 border rounded"
              placeholder="Giá xe"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default VehicleFormDetail;
