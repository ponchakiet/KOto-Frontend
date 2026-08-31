import VehicleList from "./PostList";
import MiniSpinner from "../../ui/MiniSpinner";
import useGetPostsVehicle from "../vehicle/useGetPostsVehicle";
import { POST_TYPE } from "../../utils/constant";

function PostForRent() {
  const { isLoading, content, totalElements } = useGetPostsVehicle("RENT");
  if (isLoading) return <MiniSpinner />;

  return (
    <VehicleList
      type={POST_TYPE.RENT}
      data={content}
      totalElements={totalElements}
    />
  );
}

export default PostForRent;
