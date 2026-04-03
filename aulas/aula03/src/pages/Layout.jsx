import SideBar from "../components/Sidebar";
import Topbar from "../components/Topbar";

function Layout(){
    return (
    <>
        <SideBar/>
        <main>
            <Topbar />
        </main>
    </>
    );
}

export default Layout;