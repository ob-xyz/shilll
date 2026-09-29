import {
  ja_default
} from "/build/_shared/chunk-CNBIUG56.js";
import {
  AltchaWrapper
} from "/build/_shared/chunk-XPEYCE7Y.js";
import {
  Link,
  require_jsx_dev_runtime
} from "/build/_shared/chunk-2LO4XZ6N.js";
import {
  __toESM
} from "/build/_shared/chunk-IU43IUTG.js";

// app/style/scss/subscribe.css
var subscribe_default = "/build/_assets/subscribe-HVFETJ5O.css";

// app/routes/subscribe.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var links = () => [
  { rel: "stylesheet", href: subscribe_default }
];
var meta = () => ({
  title: "Subscribe : The Poast",
  description: "Get the daily conversations that matter to you."
});
function Subscribe() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "subscribe-page", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "subscribe-card", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/", className: "subscribe-logo", "aria-label": "The Poast home", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: ja_default, alt: "The Poast" }, void 0, false, {
      fileName: "app/routes/subscribe.tsx",
      lineNumber: 22,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/subscribe.tsx",
      lineNumber: 21,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "subscribe-title", children: "Sign up for free" }, void 0, false, {
      fileName: "app/routes/subscribe.tsx",
      lineNumber: 25,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "subscribe-sub", children: "Get the daily conversations that matter to you." }, void 0, false, {
      fileName: "app/routes/subscribe.tsx",
      lineNumber: 26,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "form",
      {
        method: "post",
        action: "https://app.thepoast.com/subscription/form",
        className: "subscribe-form",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "subscribe-input-bar", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "subscribe-email", className: "sr-only", children: "Email address" }, void 0, false, {
              fileName: "app/routes/subscribe.tsx",
              lineNumber: 36,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "input",
              {
                id: "subscribe-email",
                className: "subscribe-input",
                type: "email",
                name: "email",
                required: true,
                autoComplete: "email",
                inputMode: "email",
                placeholder: "Email Address *"
              },
              void 0,
              false,
              {
                fileName: "app/routes/subscribe.tsx",
                lineNumber: 39,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "subscribe-submit", type: "submit", children: "Sign Up" }, void 0, false, {
              fileName: "app/routes/subscribe.tsx",
              lineNumber: 49,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/subscribe.tsx",
            lineNumber: 35,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "subscribe-altcha", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AltchaWrapper, {}, void 0, false, {
            fileName: "app/routes/subscribe.tsx",
            lineNumber: 55,
            columnNumber: 13
          }, this) }, void 0, false, {
            fileName: "app/routes/subscribe.tsx",
            lineNumber: 54,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "input",
            {
              id: "6d48f",
              type: "hidden",
              name: "l",
              value: "6d48fffe-7d37-4c14-b317-3e4cda33a647"
            },
            void 0,
            false,
            {
              fileName: "app/routes/subscribe.tsx",
              lineNumber: 58,
              columnNumber: 11
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "nonce" }, void 0, false, {
            fileName: "app/routes/subscribe.tsx",
            lineNumber: 64,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "subscribe-legal", children: [
            "By submitting, you agree to our",
            " ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { className: "sm", to: "/policies/terms", children: "Terms" }, void 0, false, {
              fileName: "app/routes/subscribe.tsx",
              lineNumber: 68,
              columnNumber: 13
            }, this),
            " &",
            " ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { className: "sm", to: "/policies/privacy", children: "Privacy Policy" }, void 0, false, {
              fileName: "app/routes/subscribe.tsx",
              lineNumber: 69,
              columnNumber: 13
            }, this),
            "."
          ] }, void 0, true, {
            fileName: "app/routes/subscribe.tsx",
            lineNumber: 66,
            columnNumber: 11
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "app/routes/subscribe.tsx",
        lineNumber: 30,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/", className: "subscribe-back", children: "Read today\u2019s edition first \u2192" }, void 0, false, {
      fileName: "app/routes/subscribe.tsx",
      lineNumber: 73,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/subscribe.tsx",
    lineNumber: 20,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/subscribe.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
}
export {
  Subscribe as default,
  links,
  meta
};
//# sourceMappingURL=/build/routes/subscribe-JCOERFCZ.js.map
