import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";

function AppLayout() {
    return (
        <div className="min-h-screen bg-white">
            <NavBar />
            <main className="bg-gray-50 px-[250px]">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default AppLayout;