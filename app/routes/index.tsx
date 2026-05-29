import logo from "~/../public/img/ja.png";


export default function Index() {
  return (
    <div className="container">
      <div className="header">
        <img className="logo" src={logo} alt="The Poast Logo" />
<<<<<<< HEAD
=======
        <div className="outer-header">
          <div className="inner-header">
            <div className="social">
              <Link className="x" to="/thepoast">
                <img src={tp} alt="The Poast" />
              </Link>
              <Link className="li" to="/jeffamazon">
                <img src={jeff} alt="Jeffamazon" />
              </Link>
              <Link className="info" to="/info">
                <img src={info} alt="More Info" />
              </Link>
            </div>
          </div>
          <div className="inner-header2">
            <Link to="/advertise">Advertise</Link>
          </div>
        </div>
        <img className="headerimg" src={j} alt="The Poast" />
>>>>>>> parent of e2cced1e (11221122)
      </div>
    </div>
  );
}