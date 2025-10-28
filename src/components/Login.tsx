import Button from "./ui/Button";
import { Input } from "./ui/Input";

function Login() {
  return (
    <div className="relative flex h-dvh min-h-screen w-full flex-col items-center justify-center overflow-x-hidden p-4 text-gray-100">
      <form
        autoComplete="on"
        className="flex w-full max-w-[400px] flex-col items-center justify-center rounded-xl bg-gray-800 p-6 shadow-2xl"
      >
        <h2 className="mb-2 font-bold text-2xl">Log In</h2>
        <label className="mb-4 relative flex w-full flex-col rounded-lg">
          <Input
            required
            autoComplete="email"
            type="email"
            placeholder="Email@email.com"
          />
        </label>
        <label className="mb-2 relative flex w-full flex-col rounded-lg">
          <Input
            required
            placeholder="********"
            type="password"
          />
        </label>
        <div className="mb-6 flex w-full items-center justify-between">
          <label className="flex items-center gap-2">
            <input
              className="form-checkbox h-4 w-4 rounded border-gray-500 bg-gray-700 text-sky-950 focus:ring-skyblue-800"
              type="checkbox"
            />
            <span className="text-sm font-normal leading-normal opacity-75">
              Remember Me
            </span>
          </label>
          <label>
            <a
              className="text-sm font-normal leading-normal opacity-75 hover:underline text-blue-300"
              href="#"
            >
              Forgot password?
            </a>
          </label>
        </div>
        <div className="mb-6 flex w-full">
          
          <Button>
            <span>Log In</span>
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Login;
