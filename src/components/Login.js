import { Link, useSearchParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
const isLoggedIn = async () => {
  let req = await fetch("http://localhost:5000/currentUser", {
        credentials: 'include'
  });
  let res = await req.json();
  // console.log(res["uid"]);
  if (res.hasOwnProperty("uid")) {
    return true;
  }
  return false;
}
const Login = () => {
  const navigation = useNavigate();
  useEffect(() => {
    isLoggedIn().then(e => {
      if (e)
      {
        navigation('/');
        }
    })
  });
  let [getSearchParams] = useSearchParams();
  let error = getSearchParams.get("error");
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
