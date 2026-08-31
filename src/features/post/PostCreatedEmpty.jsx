import { Link } from "react-router-dom";
import Button from "../../ui/Button";

function PostCreatedEmpty() {
  return (
    <div className="bg-white ">
      <div className="py-20">
        <img
          className="w-114.25 h-114.25 mx-auto"
          src="/public/post-create-banner.png"
        />
        <p className="text-4xl font-bold text-center mt-5">
          ĐĂNG NHANH - BÁN GỌN
        </p>
        <p className="text-4xl font-bold text-center mt-5">
          Bạn chưa có ô tô nào. Hãy tạo ô tô để bắt đầu!
        </p>
      </div>
      <div className="justify-around flex">
        <Link to="/create-vehicle">
          <Button>Tạo ô tô ngay</Button>
        </Link>
      </div>
    </div>
  );
}

export default PostCreatedEmpty;
