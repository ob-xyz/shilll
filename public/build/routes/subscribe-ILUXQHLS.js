import {
  ja3_default
} from "/build/_shared/chunk-7GTGVB7L.js";
import {
  Form,
  Link,
  useActionData,
  useNavigation
} from "/build/_shared/chunk-4R24RI46.js";
import {
  ja1_default
} from "/build/_shared/chunk-H74JKBWY.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-S4ZNHW4H.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-IU43IUTG.js";

// empty-module:@remix-run/node
var require_node = __commonJS({
  "empty-module:@remix-run/node"(exports, module) {
    module.exports = {};
  }
});

// app/routes/subscribe.tsx
var import_react = __toESM(require_react());
var import_node = __toESM(require_node());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Index() {
  const actionData = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const [mounted, setMounted] = (0, import_react.useState)(false);
  (0, import_react.useEffect)(() => {
    setMounted(true);
    import("/build/_shared/altcha-3KHXF6YF.js").catch((err) => console.error("Altcha load error:", err));
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "subscribe-container", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "logo", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: ja1_default, alt: "Jeffamazon Logo" }, void 0, false, {
      fileName: "app/routes/subscribe.tsx",
      lineNumber: 51,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/subscribe.tsx",
      lineNumber: 50,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "content", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "inner-content", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { children: "SIGN UP FOR SHILLL" }, void 0, false, {
            fileName: "app/routes/subscribe.tsx",
            lineNumber: 57,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "Stay ahead." }, void 0, false, {
            fileName: "app/routes/subscribe.tsx",
            lineNumber: 58,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/subscribe.tsx",
          lineNumber: 56,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "input-wrapper", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { className: "email", type: "text", name: "firstName", placeholder: "First Name *", required: true }, void 0, false, {
              fileName: "app/routes/subscribe.tsx",
              lineNumber: 63,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { className: "email", type: "text", name: "lastName", placeholder: "Last Name *", required: true }, void 0, false, {
              fileName: "app/routes/subscribe.tsx",
              lineNumber: 64,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { className: "email", type: "email", name: "email", placeholder: "Email Address *", required: true }, void 0, false, {
              fileName: "app/routes/subscribe.tsx",
              lineNumber: 65,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: { minHeight: "100px", margin: "15px 0" }, children: mounted ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "altcha-widget",
              {
                test: true,
                challengeurl: "https://app.jeffamzn.com/api/public/captcha/altcha"
              },
              void 0,
              false,
              {
                fileName: "app/routes/subscribe.tsx",
                lineNumber: 72,
                columnNumber: 15
              },
              this
            ) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "captcha-placeholder", children: "Loading security..." }, void 0, false, {
              fileName: "app/routes/subscribe.tsx",
              lineNumber: 77,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/routes/subscribe.tsx",
              lineNumber: 70,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "submit", type: "submit", disabled: isSubmitting, children: isSubmitting ? "Sending..." : "Send it" }, void 0, false, {
              fileName: "app/routes/subscribe.tsx",
              lineNumber: 81,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/subscribe.tsx",
            lineNumber: 62,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "l", value: "6d48fffe-7d37-4c14-b317-3e4cda33a647" }, void 0, false, {
            fileName: "app/routes/subscribe.tsx",
            lineNumber: 86,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "nonce" }, void 0, false, {
            fileName: "app/routes/subscribe.tsx",
            lineNumber: 87,
            columnNumber: 13
          }, this),
          (actionData == null ? void 0 : actionData.success) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: { color: "green", marginTop: "10px" }, children: "Success! Check your email." }, void 0, false, {
            fileName: "app/routes/subscribe.tsx",
            lineNumber: 89,
            columnNumber: 37
          }, this),
          (actionData == null ? void 0 : actionData.error) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: { color: "red", marginTop: "10px" }, children: actionData.error }, void 0, false, {
            fileName: "app/routes/subscribe.tsx",
            lineNumber: 90,
            columnNumber: 35
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/subscribe.tsx",
          lineNumber: 61,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/subscribe.tsx",
        lineNumber: 55,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "inner-content1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: ja3_default, alt: "Jeffamazon newsletter image" }, void 0, false, {
        fileName: "app/routes/subscribe.tsx",
        lineNumber: 95,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/subscribe.tsx",
        lineNumber: 94,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/subscribe.tsx",
      lineNumber: 54,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "inner-content2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: [
        "Stay ahead with ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Shilll" }, void 0, false, {
          fileName: "app/routes/subscribe.tsx",
          lineNumber: 100,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/subscribe.tsx",
        lineNumber: 100,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { className: "text", to: "/subscribe", children: [
        "Don't waste good mornings scrolling to stay ahead. ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Shilll is the 1 min antidote keeping bold, decisive people in the loop" }, void 0, false, {
          fileName: "app/routes/subscribe.tsx",
          lineNumber: 102,
          columnNumber: 62
        }, this),
        " about what matters locally and across the world."
      ] }, void 0, true, {
        fileName: "app/routes/subscribe.tsx",
        lineNumber: 101,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/subscribe.tsx",
      lineNumber: 99,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/subscribe.tsx",
    lineNumber: 49,
    columnNumber: 5
  }, this);
}
export {
  Index as default
};
//# sourceMappingURL=/build/routes/subscribe-ILUXQHLS.js.map
