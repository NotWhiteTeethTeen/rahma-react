import { Link, Outlet, useLocation } from "react-router-dom";
import GoogleIcon from "../images/google-icon.png";


const Form = () => {

    const location = useLocation();
    return (
        <>
            <div className="flex justify-center bg-darkGreen p-4">

                <Link to="/" className="text-white text-xl baseline font-bold">
                    Rahmah Makan
                </Link>

            </div>
            <div className="container flex flex-col items-center mx-auto px-6 mt-32">

                <h2 className="font-bold text-veryDarkBlue text-3xl">
                {location.pathname === "/register/login"? "Log in to your account": "Create your account."}
                </h2>

                <Link className="bg- rounded-lg w-80 text-center p-2 mt-10 hover:bg-veryLightGray border border-darkGreen font-bold">
                    <img src={GoogleIcon}
                        className="inline mr-5 w-10"
                        alt="google-icon"
                    />Continue with Google
                </Link>

                <div className="flex flex-row items-center mt-10">
                    <div className="bg-darkGrayishBlue w-36 h-0.5"></div>
                    <p className="px-2">OR</p>
                    <div className="bg-darkGrayishBlue w-36 h-0.5"></div>
                </div>


                <Outlet />





            </div>
        </>
    );
};

export default Form;