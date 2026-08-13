function UserInfo() {
  return (
    <div className="flex items-center space-x-3">
      <img
        src="https://koto-storage.s3.ap-southeast-2.amazonaws.com/bean.png"
        alt="User Avatar"
        className="w-10 h-10 rounded-full object-cover"
      />
      <span className="ml-3 text-xl font-medium text-gray-800">Mr Bean</span>
    </div>
  );
}

export default UserInfo;
