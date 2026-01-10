import type { MetaFunction } from "@remix-run/node";
import type { LinksFunction } from "@remix-run/node";
import { useEffect } from "react";
import Footer from "./components/footer";

import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation
} from "@remix-run/react";

import globalStyles from "~/style/global/global.css";

export const links: LinksFunction = () => {
  return [
    {
      rel: "icon",
      href: "/favicon.ico",
      type: "image/png",
    },
    {
      rel: "stylesheet",
      href: globalStyles,
    },
  ];
};

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Subscribe to Jeffamazon 1-Minute Newsletter - Jeffamazon",
  description: "Subscribe to the free, 1-minute daily newsletter keeping 32K+ decisive people in the know about what matters.",
  viewport: "width=device-width,initial-scale=1"
});

export default function App() {
  const location = useLocation();

  useEffect(() => {
    const renderCaptchas = () => {
      if (window.hcaptcha) {
        const captchaElements = document.querySelectorAll(".h-captcha");
        captchaElements.forEach((el) => {
          if (el.innerHTML === "") {
            window.hcaptcha.render(el);
          }
        });
      }
    };

    let script = document.querySelector('script[src="https://js.hcaptcha.com/1/api.js"]');
    
    if (!script) {
      script = document.createElement("script");
      script.src = "https://js.hcaptcha.com/1/api.js";
      script.async = true;
      script.defer = true;
      script.onload = renderCaptchas;
      document.body.appendChild(script);
    } else {
      renderCaptchas();
    }
  }, [location.key]);
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <Footer />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
