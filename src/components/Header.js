import IconButton from "@mui/material/IconButton";
import { FaRegUser } from "react-icons/fa";
import Container from "@mui/material/Container";
import { SiTinder } from "react-icons/si";
import { IoMdChatboxes } from "react-icons/io";
const Header = () => {
  return (
    <header className="py-1">
      <Container maxWidth="lg">
        <div className="flex justify-between items-center">
          <IconButton size="medium">
            <FaRegUser />
          </IconButton>
          <IconButton size="large">
            <SiTinder color="#fe3c72" />
          </IconButton>
          <IconButton size="medium">
            <IoMdChatboxes />
          </IconButton>
        </div>
      </Container>
    </header>
  );
};

export default Header;
