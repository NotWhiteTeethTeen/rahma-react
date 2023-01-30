import { Link, useSearchParams } from "react-router-dom";
async function sendRequest() {
  console.log("YEP THIS IS SOMETHING");
  try {
    //   console.log('req sent');
    let req = await fetch("http://localhost:5000/endpoint");
    const res = await req.text();
    //   console.log(res);
    console.log(res);
    // return res;
  } catch (error) {
    console.log(error);
  }
}
const Login = () => {
  sendRequest();
  let [getSearchParams, searchParams, setSearchParams] = useSearchParams();
  let error = getSearchParams.get("error");
  console.log(error);
  return (
    <>
      <form
        method="POST"
        action="http://localhost:5000/login"
        className="mt-5 flex flex-col items-start"
      >
        <label htmlFor="email" className="mt-5 text-sm">
          Email Address
        </label>
        <input
          type="email"
          name="mail"
          className="border border-darkGreen w-80 p-2 rounded-lg"
          placeholder="Email"
        />

        <label htmlFor="email" className="mt-5 text-sm">
          Password
        </label>
        <input
          name="pass"
          type="password"
          className="border border-darkGreen w-80 p-2 rounded-lg"
          placeholder="Password"
        />

        <button className="p-3 text-white text-center px-6 pt-2 w-100 bg-darkGreen w-full rounded-lg mt-5 font-bold">
          Log In
        </button>
      </form>
      <p className="mt-10">
        Don't have an account?{" "}
        <Link to="/register/sign-up" className="font-bold">
          Sign Up
        </Link>
      </p>
      <p>{error}</p>
      <div></div>
    </>
  );
};
export default Login;
