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

function VehicleCard({ vehicle }) {
  const { id, title, properties, createdAt, vehicleDetail } = vehicle;
  const navigate = useNavigate();
  return (
    <Card
      onClick={() => navigate(`/posts/${id}`)}
      className="mx-3 first:ml-0 last:mr-0 cursor-pointer hover:scale-105 transform transition duration-500"
      sx={{ maxWidth: 250 }}
    >
      <CardMedia
        component="img"
        alt={title}
        sx={{ height: 169, width: 250, objectFit: "fit" }}
        image={vehicleDetail?.contents[0].url}
      />
      <CardContent>
        <Typography
          className="line-clamp-2 overflow-hidden"
          sx={{
            fontSize: "16px",
            fontWeight: "bold",
            lineHeight: "1.5rem",
            height: "3rem",
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
            <span className="mr-2 text-red-500">{formatVietnamMoney(vehicleDetail.price)}</span>
            <span className="mx-2">Năm {vehicleDetail.manufactureYear}</span>
          </span>
        </Typography>
        <div className="flex items-start justify-between mt-2">
          <div>
            <Typography
              variant="body1"
              sx={{
                fontWeight: "bold",
                lineHeight: "1.5rem",
                height: "3rem",
              }}
              className="font-bold text-2xl"
            >
              {`${vehicleDetail.address}, ${vehicleDetail.ward}, ${vehicleDetail.province}`}
            </Typography>
            <Typography variant="body2" className="font-bold text-2xl">
              {getTimeDifferenceFromNow(createdAt)}
            </Typography>
          </div>
          <CardActions>
            <Button variant="secondary">
              <CiHeart size={19} fill="black" />
            </Button>
          </CardActions>
        </div>
      </CardContent>
    </Card>
  );
}

export default VehicleCard;
