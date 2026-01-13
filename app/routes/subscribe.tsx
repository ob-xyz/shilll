import { useEffect, useState } from "react";
import { Link, Form, useActionData, useNavigation } from "@remix-run/react";
import { json, type ActionFunctionArgs } from "@remix-run/node";

import logo from "~/../public/img/ja1.png";
import header from "~/../public/img/ja3.png";

/**
 * SERVER SIDE ACTION
 */
export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const LISTMONK_URL = "https://app.jeffamzn.com/subscription/form";
  
  try {
    const response = await fetch(LISTMONK_URL, {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      return json({ success: true, error: null });
    }
    
    return json({ success: false, error: "Subscription failed. Please check your details." }, { status: 400 });
  } catch (e) {
    return json({ success: false, error: "Server error. Try again later." }, { status: 500 });
  }
}

/**
 * CLIENT SIDE COMPONENT
 */
export default function Index() {
  const actionData = useActionData<typeof action>();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  
  // State to track if we are in the browser
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Dynamically import the Altcha package only on the client
    import("altcha").catch(err => console.error("Altcha load error:", err));
  }, []);

  return (
    <div className="subscribe-container">
      <div className="logo">
        <img src={logo} alt="Jeffamazon Logo" />
      </div>
      
      <div className="content">
        <div className="inner-content">
          <div className="text">
            <h4>SIGN UP FOR SHILLL</h4>
            <h1>Stay ahead.</h1>
          </div>

          <Form method="post">
            <div className="input-wrapper">
              <input className="email" type="text" name="firstName" placeholder="First Name *" required />
              <input className="email" type="text" name="lastName" placeholder="Last Name *" required />
              <input className="email" type="email" name="email" placeholder="Email Address *" required />
              
              {/* Only render the widget if mounted is true. 
                  This prevents SSR mismatch and ensures the script is ready.
              */}
              <div style={{ minHeight: '100px', margin: '0 0' }}>
                {mounted ? (
                  <altcha-widget 
                    challengeurl="https://app.jeffamzn.com/api/public/captcha/altcha"
                    hidefooter="true"
                    hidelogo="true"
                  ></altcha-widget>
                ) : (
                  <div className="captcha-placeholder">Loading security...</div>
                )}
              </div>

              <button className="submit" type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send it"}
              </button>
            </div>

            <input type="hidden" name="l" value="6d48fffe-7d37-4c14-b317-3e4cda33a647" />
            <input type="hidden" name="nonce" />

            {actionData?.success && <p style={{ color: "green", marginTop: "10px" }}>Success! Check your email.</p>}
            {actionData?.error && <p style={{ color: "red", marginTop: "10px" }}>{actionData.error}</p>}
          </Form>
        </div>

        <div className="inner-content1">
          <img src={header} alt="Jeffamazon newsletter image" />
        </div>
      </div>

      <div className="inner-content2">
        <h2>Stay ahead with <span>Shilll</span></h2>
        <Link className="text" to="/subscribe">
          Don't waste good mornings scrolling to stay ahead. <span>Shilll is the 1 min antidote keeping bold, decisive people in the loop</span> about what matters locally and across the world.
        </Link>
      </div>
    </div>
  );
}