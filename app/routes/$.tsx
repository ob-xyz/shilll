import logo from "~/../public/img/ja1.png";

export default function Index() {
  return (
    <div className="container">
      <div className="logo">
        <img src={logo} alt="Shilll Logo" />
      </div>
        <div className="err">
            <h1>404 | This page could not be found.</h1>
        </div>
    </div>
  );
}