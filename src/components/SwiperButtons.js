import React from "react";
import { MdReplay } from "react-icons/md";
import { TiFlash } from "react-icons/ti";
import { CgClose } from "react-icons/cg";
import { GoStar } from "react-icons/go";
import { FaHeart } from "react-icons/fa";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
const SwiperButtons = () => {
  return (
    <div className="mb-[3rem] ">
      <Container maxWidth="sm">
        <div className="flex justify-between items-center">
          <IconButton
            size="large"
            sx={{
              backgroundColor: "white",
              boxShadow: `rgba(100, 100, 111, 0.2) 0px 7px 29px 0px`,
              fontSize: 25,
              padding: "18px",
              color: "#febd2d",
              ":hover": {
                backgroundColor: "#febd2d",
                color: "white",
              },
            }}
          >
            <MdReplay />
          </IconButton>
          <IconButton
            size="large"
            sx={{
              backgroundColor: "white",
              boxShadow: `rgba(100, 100, 111, 0.2) 0px 7px 29px 0px`,
              fontSize: 25,
              padding: "18px",
              color: "#fa3678",
              ":hover": {
                backgroundColor: "#fa3678",
                color: "white",
              },
            }}
          >
            <CgClose />
          </IconButton>
          <IconButton
            size="large"
            sx={{
              backgroundColor: "white",
              boxShadow: `rgba(100, 100, 111, 0.2) 0px 7px 29px 0px`,
              fontSize: 25,
              color: "#2bc7fd",
              padding: "18px",
              ":hover": {
                backgroundColor: "#2bc7fd",
                color: "white",
              },
            }}
          >
            <GoStar />
          </IconButton>
          <IconButton
            size="large"
            sx={{
              backgroundColor: "white",
              boxShadow: `rgba(100, 100, 111, 0.2) 0px 7px 29px 0px`,
              fontSize: 25,
              color: "#36e0a2",
              padding: "18px",
              ":hover": {
                backgroundColor: "#36e0a2",
                color: "white",
              },
            }}
          >
            <FaHeart />
          </IconButton>
          <IconButton
            size="large"
            sx={{
              backgroundColor: "white",
              boxShadow: `rgba(100, 100, 111, 0.2) 0px 7px 29px 0px`,
              fontSize: 25,
              padding: "18px",
              color: "#a756df",
              ":hover": {
                backgroundColor: "#a756df",
                color: "white",
              },
            }}
          >
            <TiFlash />
          </IconButton>
        </div>
      </Container>
    </div>
  );
};

export default SwiperButtons;
