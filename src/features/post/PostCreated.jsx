import { useEffect } from "react";
import PostCreatedUploadImage from "./PostCreatedUploadImage";
import PostCreatedUploadVideo from "./PostCreatedUploadVideo";
import PostCreatedForm from "./PostCreatedForm";
import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import useCreateVehicle from "../vehicle/useCreateVehicle";
import toast from "react-hot-toast";

function PostCreated() {
  const {
    register,
    handleSubmit,
    setValue,
    control,
    watch,
    clearErrors,
    formState: { errors },
  } = useForm();

  const { isPending, createVehicle } = useCreateVehicle();

  const onSubmit = (data) => {
    const {
      vehicleId,
      address,
      category,
      otherInfo,
      price,
      manufactureYear,
      ...rest
    } = data;
    const cleanedProperties = Object.fromEntries(
      Object.entries(rest).filter(
        ([item, value]) => value !== "" && value !== null,
      ),
    );
    const request = {
      userId: "user-1",
      id: vehicleId,
      province: address.province,
      category: category.id,
      ward: address.ward,
      address: address.detail,
      price: price,
      manufactureYear: manufactureYear,
      type: "PERSIST",
      otherInfo,
      properties: cleanedProperties,
    };

    console.log(request);

    createVehicle(
      { request },
      {
        onSuccess: () => toast.success("Successfully create vehicle"),
        onError: (error) => toast.error(error.message),
      },
    );
  };

  function setCategory(selectedCategory) {
    setValue("category", selectedCategory);
    clearErrors("category");
  }

  function setVehicleId(vehicleId) {
    console.log(vehicleId);
    setValue("vehicleId", vehicleId);
  }

  function handleOnChangeAddress(address) {
    setValue("address", address);
    clearErrors("address");
  }

  useEffect(() => {
    register("category", { required: "Vui lòng chọn danh mục" });
    register("vehicleId");
    register("address", { required: "Vui lòng cung cấp địa chỉ" });
  }, [register]);

  return (
    <form
      id="post-form"
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white grid grid-cols-[0.4fr_0.6fr] gap-2 p-5 space-y-8"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5"> Hình ảnh và Video sản phẩm</h1>
        <div className="w-full mb-5">
          <PostCreatedUploadImage
            vehicleId={watch("vehicleId")}
            setVehicletId={setVehicleId}
          />
        </div>
        <div>
          <PostCreatedUploadVideo />
        </div>
      </div>
      <PostCreatedForm
        register={register}
        control={control}
        errors={errors}
        watch={watch}
        setCategory={setCategory}
        handleOnChangeAddress={handleOnChangeAddress}
      />
      <div className="w-full flex justify-center left-0 fixed bottom-0 p-5 border-[0.5px] border-gray-300 bg-white shadow-2xl">
        <Button variant="secondary" className="w-80 mr-5">
          Xem trước
        </Button>
        <Button
          type="submit"
          form="post-form"
          variant="primary"
          className="w-80"
        >
          Đăng tin
        </Button>
      </div>
    </form>
  );
}

export default PostCreated;
