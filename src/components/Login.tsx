function Login() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col items-center justify-center overflow-x-hidden bg-gray-900 p-4 text-gray-100">
      <form
        autoComplete="on"
        className="flex w-full max-w-[400px] flex-col items-center justify-center rounded-xl bg-gray-800 p-6 shadow-2xl"
      >
        <h2 className="mb-2 font-bold text-2xl">Log In</h2>
        <label className="mb-4 relative flex w-full flex-col rounded-lg">
          <input
            required
            className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg border border-gray-100 py-4 pr-4 pl-4 text-base leading-normal font-normal placeholder:text-lg placeholder:opacity-50 focus:border-sky-700 focus:ring-0 focus:outline-0"
            type="email"
            placeholder="Email"
          />
        </label>
        <label className="mb-2 relative flex w-full flex-col rounded-lg">
          <input
            required
            className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg border border-gray-100 py-4 pr-4 pl-4 text-base leading-normal font-normal placeholder:text-lg placeholder:opacity-50 focus:border-sky-700 focus:ring-0 focus:outline-0"
            type="password"
            placeholder="Password"
          />
        </label>
        <div className="mb-6 flex w-full items-center justify-between">
          <label className="flex items-center gap-2">
            <input className="form-checkbox h-4 w-4 rounded border-gray-500 bg-gray-700 text-sky-950 focus:ring-skyblue-800" type="checkbox"/>
            <span className="text-sm font-normal leading-normal opacity-75">Remember Me</span>
          </label>
          <label>
            <a className="text-sm font-normal leading-normal opacity-75 hover:underline text-blue-300" href="#">Forgot password?</a>
          </label>
        </div>
        <div className="mb-6 flex w-full">
          <button className="flex h-14 min-w-[84px] flex-1 cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-blue-500 px-5 text-base font-bold leading-normal tracking-[0.015rem] text-gray-100 hover:bg-sky-500">
            <span className="truncate">Log In</span>
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
