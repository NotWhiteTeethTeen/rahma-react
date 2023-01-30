import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <>
      <form
        method="POST"
        action="http://localhost:5000/signup"
        className="mt-5 flex flex-col items-start"
      >
        <label htmlFor="name" className="mt-5 text-sm">
          Full Name
        </label>
        <input
          type="text"
          name="name"
          className="border border-darkGreen w-80 p-2 rounded-lg"
          placeholder="Full Name"
        />

        <label htmlFor="email" className="mt-5 text-sm">
          Email Address
        </label>
        <input
          type="email"
          name="mail"
          className="border border-darkGreen w-80 p-2 rounded-lg"
          placeholder="Email"
        />

        <label htmlFor="password" className="mt-5 text-sm">
          Password
        </label>
        <input
          type="password"
          name="pass"
          className="border border-darkGreen w-80 p-2 rounded-lg"
          placeholder="Password"
        />

        <button className="p-3 text-white text-center px-6 pt-2 w-100 bg-darkGreen w-full rounded-lg mt-5">
          Sign Up
        </button>
      </form>
      <p className="mt-10">
        Already have an account?{" "}
        <Link to="/register/login" className="font-bold">
          Log In
        </Link>
      </p>
    </>
  );
};

export default SignUp;
