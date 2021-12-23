import Image from "next/image";
import BizwirerLogo from "../../public/images/bizwirer_white.png";
import NavStyles from "./NavbarStyles.module.scss";
const Navbar = () => {
    return (
        <nav className="navbar navbar-dark bg-primary">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <div className={NavStyles.logoContainer}>
                        <Image src={BizwirerLogo} alt="Bizwirer logo" />
                    </div>
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
