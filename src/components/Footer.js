import { Link } from "react-router-dom";

const Footer = () => {
    return (
        // Footer
        <footer className="bg-veryDarkBlue">
            {/* Flex container */}
            <div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0 mt-32">
                {/* Links container */}
                <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
                    <Link to="/" className="text-darkGreen text-xl baseline font-bold">
                        Rahmah Makan
                    </Link>
                    
                    <p className="text-darkGreen">made with ❤️</p>
                </div>

                <div className="flex justify-around space-x-32">
                    <div className="flex flex-col space-y-3 text-white">
                        <Link to="/" className="text-white hover:text-darkGreen">Home</Link>
                        <Link to="/about-us" className="text-white hover:text-darkGreen">About Us</Link>
                        <Link to="/about-us" className="text-white hover:text-darkGreen">About Us</Link>


                    </div>
                    <div className="flex flex-col space-y-3 text-white">
                        <Link to="/" className="text-white">Home</Link>
                        <Link to="/about-us" className="text-white hover:text-darkGreen">About Us</Link>
                        <Link to="/about-us" className="text-white hover:text-darkGreen">About Us</Link>
                    </div>
                </div>

            </div>
        </footer>
    );
}

export default Footer;