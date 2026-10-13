import MiniSpinner from "../../ui/MiniSpinner";
import VehicleList from "./PostList";
import useGetPostsHome from "./useGetPostsHome";
import { POST_TYPE } from "../../utils/constant";

function PostForSell() {
  const { isLoading, content, totalElements } = useGetPostsHome("SELL");

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
