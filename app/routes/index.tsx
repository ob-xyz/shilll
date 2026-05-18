import { useState, useEffect } from "react";
import { Link, Form, useNavigation, useActionData } from "@remix-run/react";
import { json, type ActionFunctionArgs } from "@remix-run/node";
import Altcha from "../components/altcha";

import jeff from "~/../public/img/social/jeffamazon.png";
import tp from "~/../public/img/social/poast.png";
import info from "~/../public/img/social/info.png";
import j from "~/../public/img/ja7.png";
import logo from "~/../public/img/ja.png";

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const email = formData.get("email");
  // Logic for your Poast-specific mailing list here
  console.log("New Poast Subscriber:", email);
  return json({ success: true });
}

export default function Index() {
  const [showModal, setShowModal] = useState(false);
  const navigation = useNavigation();
  const actionData = useActionData<typeof action>();

  useEffect(() => {
    // Unique keys for The Poast tracking
    const isSubscribed = localStorage.getItem("thepoast_subscribed");
    const hasSeenThisSession = sessionStorage.getItem("thepoast_seen_session");

    // Only trigger if they haven't subscribed AND haven't seen it in this tab session
    if (!isSubscribed && !hasSeenThisSession) {
      const timer = setTimeout(() => {
        setShowModal(true);
        // Mark as seen immediately so it doesn't re-trigger during navigation
        sessionStorage.setItem("thepoast_seen_session", "true");
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") setShowModal(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  useEffect(() => {
    if (actionData?.success) {
      localStorage.setItem("thepoast_subscribed", "true");
      setShowModal(false);
    }
  }, [actionData]);

  return (
    <div className="container">
      {/* POPUP MODAL */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img className="logo" src={logo} alt="Shilll Logo" />
            <p>Advertise with us</p>
            <p>Every day the smartest founders, operators, and builders read our one minute news feeds to keep up in finance and technology</p>
            <form method="post" action="https://app.shilll.com/subscription/form">
              <div className="input-wrapper">
                <input className="email" type="email" name="email" required placeholder="Business Email Address *" />
                <button className="submit" type="submit">
                  {navigation.state === "submitting" ? "..." : "Submit"}
                </button>
              </div>
              <Altcha />
          <input id="36b8c" type="hidden" name="l" checked value="36b8c160-7d12-4103-aaba-8e3cd90d9d64" />
              <input type="hidden" name="nonce" />
            </form>

            <p className="dismiss-text" onClick={() => setShowModal(false)}>
              No thanks! I'm just popping by
            </p>
          </div>
        </div>
      )}

      {/* HEADER SECTION */}
      <div className="header">
        <img className="logo" src={logo} alt="The Poast Logo" />
        <div className="outer-header">
          <div className="inner-header">
            <div className="social">
              <Link className="x" to="/thepoast">
                <img src={tp} alt="The Poast" />
              </Link>
              <Link className="cp" to="/canadapoast">
                <img src={tp} alt="Canada Poast" />
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
      </div>
    </div>
  );
}