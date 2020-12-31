import React from "react";
import { HelpBoxContainer, HelpBoxContent } from "./HelpBox.style";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";

const HelpBox = () => {
  return (
    <HelpBoxContainer>
      <HelpBoxContent>
        <h5>Was this information helpful?</h5>
        <FaThumbsUp className="up" /> <FaThumbsDown className="down" />
      </HelpBoxContent>
    </HelpBoxContainer>
  );
};

export default HelpBox;
