import Button from "../../ui/Button";
import { Link, useNavigate } from "react-router-dom";
import useDeleteVehicle from "./useDeleteVehicle";
import { Box, Modal } from "@mui/material";
import ConfirmDelete from "../../ui/ConfirmDelete";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  border: "transparent",
  bgcolor: "background.paper",
  borderRadius: "5px",
  boxShadow: 24,
  overflow: "hidden",
  display: "flex",
  justifyContent: "justify-center",
  alignItems: "center",
  padding: "30px",
};

const DraftItem = ({ draft }) => {
  const { contents, category, address, ward, province } = draft;
  const { isPending, deleteVehicle } = useDeleteVehicle();
  const [isShowDelete, setIsShowDelete] = useState(false);
  function handleOnCloseDelete() {
    setIsShowDelete(false);
  }
  const navigate = useNavigate();
  function handleOnConfirm() {
    deleteVehicle(
      { id: draft.id },
      {
        onSuccess: () => {
          navigate("/vehicle");
          toast.success("Xóa ô tô thành công");
        },
      },
    );
  }

  return (
    <div className="space-y-4 text-2xl cursor-pointer">
      <div className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-md">
        <div className="flex">
          <img
            src={contents[0].url}
            alt="Card Image"
            className="w-36 h-36 mr-4"
          />
          <div className="mb-2 space-y-5">
            <p className=" text-2xl truncate">
              <span className="font-bold">Danh mục ô tô: </span>
              {category ? category.name : "Chưa thiết lập"}
            </p>
            <p className=" text-2xl truncate">
              <span className="font-bold">Địa chỉ: </span>
              {address ? `${address}, ${ward}, ${province}` : "Chưa thiết lập"}
            </p>
          </div>
        </div>
        <div className="flex space-x-2">
          <Modal
            open={isShowDelete}
            onClose={handleOnCloseDelete}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <ConfirmDelete
                resourceName="ô tô"
                disabled={isPending}
                onCloseModal={handleOnCloseDelete}
                onConfirm={() => handleOnConfirm()}
              />
            </Box>
          </Modal>
          <Button onClick={() => setIsShowDelete(true)} variant="secondary">
            Xóa
          </Button>
          <Link to={`draft/${draft.id}`} state={{ draft }}>
            <Button variant="primary">Tiếp tục tin nháp</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DraftItem;
