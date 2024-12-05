import { Outlet } from "react-router";
 
const AdminLayout = () => {
    return <div style={{ backgroundColor: "yellow", border: '5px solid red'}}><Outlet /></div>;
};
 
export default AdminLayout;