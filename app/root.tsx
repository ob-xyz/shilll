import type { MetaFunction } from "@remix-run/node";
import type { LinksFunction } from "@remix-run/node";

import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
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
  title: "shilll",
  description: "Always something new.",
  viewport: "width=device-width,initial-scale=1"
});

export default function App() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "shilll",
    "alternateName": ["Shilll", "shilll Newsletter", "shilll.com", "shilll feed"],
    "url": "https://thepoast.com",
    "logo": "https://thepoast.com/favicon.ico",
    "description": "Always something new."
  };

  return (
    <html lang="en">
      <head>
        <Meta />
        <meta name="color-scheme" content="light dark" />
        <meta
          name="theme-color"
          content="#ffffff"
          media="(prefers-color-scheme: light)"
        />
        <meta
          name="theme-color"
          content="#050505"
          media="(prefers-color-scheme: dark)"
        />
        <Links />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaData),
          }}
        />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}