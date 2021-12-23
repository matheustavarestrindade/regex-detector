import Navbar from "./NavBar/Navbar";
import Head from "next/head";
import Footer from "./Footer/Footer";

const Layout = ({ children }) => {
    return (
        <div className="bg-background">
            <Navbar />
            <div className="container mt-3" style={{ minHeight: "50vh" }}>
                {children}
            </div>
            <Footer />
        </div>
    );
};

export default Layout;
