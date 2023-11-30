import HamburgerMenu from "./HamburgerMenu";
import Logo from "./Logo";
import NotificationBell from "./NotificationBell";
import ProfileBtn from "./ProfileBtn";
import Searchbar from "./Searchbar";
import SocialIcons from "./SocialIcons";

export default function Navbar(){
    return(
        <header className="w-[100%] h-[70px] bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg px-8 flex items-center fixed z-10 justify-between">
            <div className="flex flex-row items-center">
                <HamburgerMenu />
                <Logo />
                <Searchbar />
                <SocialIcons />
            </div>
            <div className="flex flex-row items-center">
                <NotificationBell />
                <ProfileBtn />

            </div>
        </header>
    )
}