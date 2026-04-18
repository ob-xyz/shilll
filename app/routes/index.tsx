import { Link } from "@remix-run/react";
import logo from "~/../public/img/ja1.png";
import pic from "~/../public/img/pic.png";

export default function Index() {
  return (
    <div className="container">
      <div className="logo">
        <img src={logo} alt="Shilll Logo" />
      </div>
    </div>
  );
}