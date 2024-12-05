import { Outlet } from "react-router";
 
const BaseLayout = () => {
    return <div style={{ backgroundColor: "gray" }}><Outlet /></div>;
};
 
export default BaseLayout;