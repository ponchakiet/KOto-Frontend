import ErrorMessage from "../../ui/ErrorMessage";
import useCreatePost from "./useCreatePost";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import toast from "react-hot-toast";
import InfiniteScroll from "react-infinite-scroll-component";
import MiniSpinner from "../../ui/MiniSpinner";
import VehicleItem from "../vehicle/VehicleItem";
import { IoCheckmarkCircle } from "react-icons/io5";
import PostFormDetail from "./PostFormDetail";
import { formatVietnamMoney } from "../../utils/helper";
import { PRICE_CREATED } from "../../utils/constant";
import Button from "../../ui/Button";

function PostCreatedForm({ vehicles, fetchNextPage, hasMore, page }) {
  const { isPending, createPost } = useCreatePost();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setValue,
    control,
    watch,
    clearErrors,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      type: "SELL",
    },
  });

  useEffect(() => {
    register("vehicleId", { required: "Vui lòng chọn 1 ô tô" });
  }, [register]);

  const onSubmit = (data) => {
    console.log("🔥 SUBMIT:", data);

    createPost(
      { request: data },
      {
        onSuccess: () => {
          toast.success("Tạo bài viết thành công");
          reset();
          navigate("/my-ads");
        },
        onError: (error) => toast.error(error.message),
      },
    );
  };

  const handleOnClickVehicle = (vehicle) => {
    if (!vehicle.attachedPost) {
      setValue("vehicleId", vehicle.id);
      window.scrollTo({ top: 0, behavior: "smooth" });
      clearErrors("vehicleId");
    }
  };

  return (
    <div className="bg-white grid grid-cols-[0.6fr_0.4fr] gap-15 p-5 space-y-8">
      <div>
        {errors.vehicleId && (
          <div className="bg-red-300 p-2 text-2xl font-bold">
            <ErrorMessage message={errors.vehicleId.message} />
          </div>
        )}
        <div id="scrollableDiv" className="h-150 overflow-auto">
          <InfiniteScroll
            dataLength={vehicles.length}
            next={() => {
              const nextPage = page + 1;
              fetchNextPage(nextPage);
            }}
            hasMore={hasMore}
            loader={<MiniSpinner />}
            scrollableTarget="scrollableDiv"
          >
            {watch("vehicleId") && (
              <div className="relative">
                {vehicles
                  .filter((vehicle) => vehicle.id === watch("vehicleId"))
                  .map((vehicle) => (
                    <VehicleItem key={vehicle.id} vehicle={vehicle} />
                  ))}
                <span className="absolute z-10 text-4xl right-2 bottom-1 text-red-600">
                  <IoCheckmarkCircle />
                </span>
              </div>
            )}

            {vehicles.map((vehicle) => (
              <div
                className="relative"
                key={vehicle.id}
                onClick={() => handleOnClickVehicle(vehicle)}
              >
                {vehicle.attachedPost && (
                  <span className="absolute right-3 top-5 border rounded-lg text-xl p-1 bg-green-500 font-bold">
                    Đính kèm bài đăng khác
                  </span>
                )}
                {watch("vehicleId") !== vehicle.id && (
                  <VehicleItem vehicle={vehicle} />
                )}
              </div>
            ))}
          </InfiniteScroll>
        </div>
      </div>

      <form id="post-form" onSubmit={handleSubmit(onSubmit)}>
        <PostFormDetail
          setValue={setValue}
          watch={watch}
          control={control}
          errors={errors}
          register={register}
        />{" "}
        <div className="w-full  flex items-center justify-between left-0 fixed bottom-0 p-5 border-[0.5px] border-gray-300 bg-white shadow-2xl">
          <p className="text-2xl font-bold">
            Phí đăng tin cho mỗi bài viết:
            {formatVietnamMoney(PRICE_CREATED)}
            <span className="text-red-600">*</span>
          </p>
          <div>
            <Button
              disabled={isPending}
              type="submit"
              form="post-form"
              variant="primary"
              className="w-80"
            >
              Đăng tin
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default PostCreatedForm;
