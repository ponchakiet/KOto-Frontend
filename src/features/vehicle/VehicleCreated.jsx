import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import useCreateVehicle from "./useCreateVehicle";
import FullPageSpinner from "../../ui/FullPageSpinner";
import Button from "../../ui/Button";
import { useEffect } from "react";
import toast from "react-hot-toast";
import VehicleUploadImage from "./VehicleUploadImage";
import VehicleUploadVideo from "./VehicleUploadVideo";
import VehicleCreatedForm from "./VehicleCreatedForm";

function VehicleCreated() {
  const { state } = useLocation();
  const draft = state?.draft || state?.vehicle || {};

  const {
    properties = {},
    address,
    manufactureYear,
    price,
    province,
    ward,
    contents,
    createdAt,
    attachedPostShow,
    userId,
    ...restDraft
  } = draft;

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    clearErrors,
    formState: { errors },
  } = useForm({
    defaultValues: {
      ...restDraft,
      ...properties,
      manufactureYear: manufactureYear,
      price: price,
      address: {
        detail: address,
        province,
        ward,
      },
    },
  });
  
  const navigate = useNavigate();
  const { isPending, createVehicle } = useCreateVehicle();

  useEffect(() => {
    register("category", { required: "Vui lòng chọn danh mục" });
    register("id");
    register("address", { required: "Vui lòng cung cấp địa chỉ" });
  }, [register]);

  if (isPending) return <FullPageSpinner />;
  const images = contents
    ?.filter((media) => media.type === "IMAGE")
    .map((media) => media.url);
  const videos = contents
    ?.filter((media) => media.type === "VIDEO")
    .map((media) => media.url);
  const onSubmit = (data) => {
    const {
      id,
      address,
      manufactureYear,
      price,
      category,
      otherInfo,
      ...rest
    } = data;
    const cleanedProperties = Object.fromEntries(
      Object.entries(rest).filter(
        ([item, value]) => value !== "" && value !== null,
      ),
    );

    const request = {
      id,
      province: address.province,
      categoryId: category.id,
      ward: address.ward,
      address: address.detail,
      manufactureYear: manufactureYear,
      price: price,
      type: "PERSIST",
      otherInfo: otherInfo ? otherInfo : null,
      properties: cleanedProperties,
    };
    if (!id) {
      toast.error("Vui lòng tải lên ít nhất 1 tấm ảnh");
      return;
    }
    createVehicle(
      { request },
      {
        onSuccess: () => {
          navigate(`/vehicle/${id}`);
          toast.success("Successfully creat vehicle");
        },
        onError: ({ response }) => {
          const { detail } = response.data;
          toast.error(detail);
        },
      },
    );
  };

  function setCategory(selectedCategory) {
    setValue("category", selectedCategory);
    clearErrors("category");
  }

  function setVehicleId(vehicleId) {
    setValue("id", vehicleId);
  }

  function handleOnChangeAddress(address) {
    setValue("address", address);
    clearErrors("address");
  }

  return (
    <form
      id="post-form"
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white grid grid-cols-[0.4fr_0.6fr] gap-2 p-5 space-y-8"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5"> Hình ảnh và Video sản phẩm</h1>
        <div className="w-full mb-5">
          <VehicleUploadImage
            initImages={images}
            vehicleId={watch("id")}
            setVehicleId={setVehicleId}
          />
        </div>
        <div>
          <VehicleUploadVideo
            vehicleId={watch("id")}
            setVehicleId={setVehicleId}
            initVideos={videos}
          />
        </div>
      </div>
      <VehicleCreatedForm
        register={register}
        errors={errors}
        watch={watch}
        setCategory={setCategory}
        handleOnChangeAddress={handleOnChangeAddress}
      />
      <div className="w-full flex justify-end left-0 fixed bottom-0 p-5 border-[0.5px] border-gray-300 bg-white shadow-2xl">
        <Button
          type="submit"
          form="post-form"
          variant="primary"
          className="w-80"
        >
          {watch("id") ? "Cập nhật ô tô" : "Tạo ô tô"}
        </Button>
      </div>
    </form>
  );
}

export default VehicleCreated;
