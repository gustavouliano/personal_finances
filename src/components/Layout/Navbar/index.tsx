import { useState } from "react";
import { useTheme } from "../../../hooks/theme";
import { useAuth } from "../../../hooks/auth";
import { Container, Icon, LeftSide, RightSide } from "./styles";
import { BiExitFullscreen, BiFullscreen } from "react-icons/bi";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { TbLogout } from "react-icons/tb";

const Navbar = () => {
    const [fullScreenEnabled, setFullScreenEnabled] = useState(false);

    const { handleToggleTheme, theme } = useTheme();
    const { handleSignOut } = useAuth();

    const handleToggleFullScreen = () => {
        let enabled = true;
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        }
        else if (document.exitFullscreen) {
            document.exitFullscreen();
            enabled = false;
        }

        setFullScreenEnabled(enabled);
    }

    return (
        <Container>
            <LeftSide>
                <Icon onClick={handleToggleFullScreen}>
                    {
                        fullScreenEnabled ? <BiExitFullscreen /> : <BiFullscreen />
                    }
                </Icon>
            </LeftSide>
            <RightSide>
                <Icon onClick={handleToggleTheme}>
                    {
                        theme == 'dark' ? <MdOutlineLightMode /> : <MdOutlineDarkMode />
                    }
                </Icon>
                <Icon onClick={handleSignOut}>
                    <TbLogout />
                </Icon>
            </RightSide>
        </Container>
    );
}

export default Navbar;