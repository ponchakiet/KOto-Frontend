import MiniSpinner from "../../ui/MiniSpinner";
import VehicleList from "./PostList";
import useGetPostsVehicle from "../vehicle/useGetPostsVehicle";
import { POST_TYPE } from "../../utils/constant";

function PostForSell() {
  const { isLoading, content, totalElements } = useGetPostsVehicle("SELL");

  if (isLoading) return <MiniSpinner />;

  return (
    <VehicleList
      type={POST_TYPE.SELL}
      data={content}
      totalElements={totalElements}
    />
  );
}

export default PostForSell;
