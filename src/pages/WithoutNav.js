import { Outlet } from "react-router-dom";

const WithoutNav = () => {
    return (
        <>
            <Outlet></Outlet>
        </>
    );
}

export default WithoutNav;