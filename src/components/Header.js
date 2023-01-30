import { Link } from "react-router-dom";

const Header = ({className}) => {
    return (
        <div className="flex justify-center bg-veryDarkBlue p-4">
            <Link to="/" className="text-white text-xl baseline font-bold">
                Rahmah Makan
            </Link>
        </div>
    );
};

export default Header;