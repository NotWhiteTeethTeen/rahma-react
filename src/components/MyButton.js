import { Link } from "react-router-dom";

const MyButton = ({text, className, to}) => {
    return (
        <Link 
        to={to}
        className={"p-3 text-white px-6 pt-2 bg-darkGreen rounded-full hover:bg-brightRedLight baseline "+ className}>
            {text}
        </Link>
    );
};

export default MyButton;