import ModalSelectCategory from "../../ui/ModalSelectCategory";
import ErrorMessage from "../../ui/ErrorMessage";
import ModalSelectAddress from "../../ui/ModalSelectAddress";

function VehicleCreatedForm({
  register,
  errors,
  handleOnChangeAddress,
  watch,
  setCategory,
}) {
  return (
    <div className="p-4">
      {/* Category */}
      <div>
        <ModalSelectCategory
          category={watch("category")}
          setCategory={setCategory}
        />
        {errors.category && <ErrorMessage message={errors.category.message} />}
      </div>

      {/*Address*/}
      <div className="my-5">
        <h1 className="text-3xl font-bold mb-2">Địa chỉ</h1>
        <ModalSelectAddress
          address={watch("address")}
          setAddress={handleOnChangeAddress}
        />
        {errors.address && <ErrorMessage message={errors.address.message} />}
      </div>

      {/*form detail*/}
      {watch("category") && (
        <div className="space-y-3">
          <VehicleFormDetail
            category={watch("category")}
            register={register}
            errors={errors}
          />
        </div>
      )}
    </div>
  );
}

export default VehicleCreatedForm;
