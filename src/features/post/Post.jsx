import SyncLoader from "react-spinners/SyncLoader";
import PostDetail from "./PostDetail";
import PostThumb from "./PostThumb";
import useGetPost from "./useGetPost";

function Post() {
  const { isLoading, post } = useGetPost();
  if (isLoading) return <SyncLoader />;

  const { vehicleDetail } = post;

  return (
    <div className="overflow-hidden">
      <PostThumb images={vehicleDetail.contents} />
      <PostDetail post={post} />
    </div>
  );
}

export default Post;
