import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import ErrorMessage from "../../ui/ErrorMessage";
import { Controller } from "react-hook-form";
import { formatWithDots, removeDots } from "../../utils/helper";

function PostFormDetail({ setValue, watch, control, register, errors }) {
  return (
    <div className="w-full">
      {/* Check type */}
      <section className="my-5 ">
        <FormControl>
          <FormLabel
            sx={{
              fontSize: "18px",
              fontWeight: "bold",
              color: "black",
            }}
            id="demo-row-radio-buttons-group-label"
          >
            Loại hình
          </FormLabel>
          <Controller
            name="type"
            control={control}
            rules={{ required: "Vui lòng chọn loại hình" }}
            render={({ field }) => (
              <RadioGroup row {...field}>
                <FormControlLabel
                  value="SELL"
                  control={
                    <Radio
                      sx={{
                        color: "#e11d48",
                        "&.Mui-checked": {
                          color: "#e11d48",
                        },
                      }}
                    />
                  }
                  label="Bán"
                  sx={{ "& .MuiFormControlLabel-label": { fontSize: "20px" } }}
                />
                <FormControlLabel
                  value="RENT"
                  control={
                    <Radio
                      sx={{
                        color: "#e11d48",
                        "&.Mui-checked": {
                          color: "#e11d48",
                        },
                      }}
                    />
                  }
                  label="Cho thuê"
                  sx={{ "& .MuiFormControlLabel-label": { fontSize: "20px" } }}
                />
              </RadioGroup>
            )}
          />
          {errors.type && <ErrorMessage message={errors.type.message} />}
        </FormControl>
      </section>
      <section>
        <h2 className="text-3xl font-bold mb-4">
          Tiêu đề tin đăng và Mô tả chi tiết
        </h2>
        <div className="text-2xl grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="md:col-span-2">
            <input
              type="text"
              {...register("title", { required: "Vui lòng nhập tiêu đề" })}
              className="p-3 border rounded w-full"
              placeholder="Tiêu đề"
            />
            {errors.title && <ErrorMessage message={errors.title.message} />}
          </div>
          <div className="md:col-span-2">
            <textarea
              {...register("description", { required: "Vui lòng nhập mô tả" })}
              className="p-3 border rounded w-full h-64"
              placeholder="Nên có: Tình trạng xe, lịch sử sử dụng, bảo dưỡng, trang bị, nội thất, ngoại thất, giấy tờ, nguồn gốc, v.v.
Ví dụ: Toyota Camry 2.5Q đời 2022, xe gia đình sử dụng, odo 35.000 km. Bảo dưỡng định kỳ tại hãng, nội thất sạch đẹp, máy móc nguyên bản. Xe chính chủ, giấy tờ đầy đủ."
            />
            {errors.description && (
              <ErrorMessage message={errors.description.message} />
            )}
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-4">
          {watch("type") === "SELL" ? "Giá bán" : "Giá cho thuê theo tháng"}
        </h2>
        <div className="text-2xl grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="md:col-span-2">
            <input
              type="text"
              inputMode="numeric"
              {...register("price", {
                required: "Vui lòng nhập giá",
                setValueAs: (value) => Number(removeDots(value)),
              })}
              value={formatWithDots(watch("price"))}
              onChange={(e) => {
                const rawValue = removeDots(e.target.value);
                if (!/^\d*$/.test(rawValue)) return;
                setValue("price", rawValue);
              }}
              className="p-3 border rounded w-full"
              placeholder="Giá"
            />
            {errors.price && <ErrorMessage message={errors.price.message} />}
          </div>
        </div>
      </section>
    </div>
  );
}

export default PostFormDetail;
