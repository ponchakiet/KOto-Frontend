import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "../../ui/Button";
import { CiHeart } from "react-icons/ci";
import {
  formatVietnamMoney,
  getTimeDifferenceFromNow,
} from "../../utils/helper";
import { useNavigate } from "react-router-dom";

function PostCard({ vehicle }) {
  const { id, title, properties, type, createdAt, vehicleDetail } = vehicle;
  const navigate = useNavigate();
  return (
    <Card
      onClick={() => navigate(`/posts/${id}`)}
      className="first:ml-0 flex-1 last:mr-0 cursor-pointer hover:scale-105 transform transition duration-500"
      sx={{ maxWidth: 220 }}
    >
      <CardMedia
        component="img"
        alt={title}
        sx={{ height: 220, width: 220, objectFit: "fit" }}
        image={vehicleDetail?.contents[0].url}
      />
      <CardContent>
        <Typography
          className="line-clamp-2 overflow-hidden"
          sx={{
            fontSize: "16px",
            fontWeight: "bold",
            lineHeight: "2.5rem",
            height: "5rem",
          }}
          gutterBottom
          component="div"
        >
          {title}
        </Typography>

        <Typography variant="body1" sx={{ fontSize: "15px" }}>
          {properties}
        </Typography>
        <Typography
          className="flex"
          variant="body1"
          sx={{ color: "text.secondary" }}
        >
          <span className="font-bold  text-2xl">
            <span className="mr-2 text-2xl text-red-500">
              {type == "RENT"
                ? `${formatVietnamMoney(price)}/tháng`
                : `${formatVietnamMoney(price)}`}
            </span>
            <span className="mx-2">Năm {vehicleDetail.manufactureYear}</span>
          </span>
        </Typography>
        <div className="grid grid-cols-3 items-start mt-2 space-x-3">
          <div className="col-span-2">
            <div className="flex items-center justify-between gap-2">
              <Typography
                variant="body1"
                sx={{
                  fontWeight: "bold",
                  lineHeight: "1.5rem",
                  height: "3rem",
                  flex: 1,
                  width: 0,
                }}
                className="font-bold text-2xl line-clamp-2"
              >
                {`${vehicleDetail.address}, ${vehicleDetail.ward}, ${vehicleDetail.province}`}
              </Typography>
            </div>
            <Typography variant="body2" className="font-bold text-2xl">
              {getTimeDifferenceFromNow(createdAt)}
            </Typography>
          </div>

          <CardActions className="col-span-1 flex justify-end">
            <Button variant="secondary">
              <CiHeart size={19} fill="black" />
            </Button>
          </CardActions>
        </div>
      </CardContent>
    </Card>
  );
}

export default PostCard;
