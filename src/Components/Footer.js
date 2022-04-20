import React from "react";
import Fbicon from "./images/Facebook Icon.png";
import GitIcon from "./images/GitHub Icon.png";
import TwitterIcon from "./images/Twitter Icon.png";
import Insta from './images/Instagram Icon.png'
export default function Footer() {
  return (
    <div className="footer">
      <a className="fb" href="#1">
        <img src={Fbicon} alt="" />
      </a>
      <a className="git" href="#2">
        <img src={GitIcon} alt="" />
      </a>
      <a className="twitter" href="#3">
        <img src={TwitterIcon} alt="" />
      </a>
      <a className="insta" href="#4">
        <img src={Insta} alt="" />
      </a>
    </div>
  );
}
