const Login = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-2xl font-bold">
      <form action="" className="flex flex-col gap-2">
        <input
          type="text"
          placeholder="example@gmail.com"
          className="p-2 placeholder:text-[1rem] border border-white bg-transparent outline-none focus:outline-purple-500  outline-offset-0"
        />
        <input
          type="password"
          placeholder="password"
          className="p-2 placeholder:text-[1rem] border border-white bg-transparent outline-none focus:outline-purple-500 outline-offset-0"
        />
        <input type="sumbit" value="submit" className="text-center text-lg p-3 text-blue-500 " />
      </form>
    </div>
  );
};

export default Login;
