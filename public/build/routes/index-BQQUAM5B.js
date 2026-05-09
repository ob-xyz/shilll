import {
  ja7_default
} from "/build/_shared/chunk-NPV7MO4L.js";
import {
  ja_default
} from "/build/_shared/chunk-DAFTH56S.js";
import {
  AltchaWrapper,
  jeffamazon_default,
  poast_default
} from "/build/_shared/chunk-G66ZZQD6.js";
import {
  info_default
} from "/build/_shared/chunk-JOIKWTUL.js";
import {
  Link,
  useActionData,
  useNavigation
} from "/build/_shared/chunk-ROHSLC5J.js";
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

// app/routes/index.tsx
var import_react = __toESM(require_react());
var import_node = __toESM(require_node());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Index() {
  const [showModal, setShowModal] = (0, import_react.useState)(false);
  const navigation = useNavigation();
  const actionData = useActionData();
  (0, import_react.useEffect)(() => {
    const isSubscribed = localStorage.getItem("thepoast_subscribed");
    const hasSeenThisSession = sessionStorage.getItem("thepoast_seen_session");
    if (!isSubscribed && !hasSeenThisSession) {
      const timer = setTimeout(() => {
        setShowModal(true);
        sessionStorage.setItem("thepoast_seen_session", "true");
      }, 1e3);
      return () => clearTimeout(timer);
    }
  }, []);
  (0, import_react.useEffect)(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape")
        setShowModal(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);
  (0, import_react.useEffect)(() => {
    if (actionData == null ? void 0 : actionData.success) {
      localStorage.setItem("thepoast_subscribed", "true");
      setShowModal(false);
    }
  }, [actionData]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container", children: [
    showModal && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "modal-overlay", onClick: () => setShowModal(false), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "modal-content", onClick: (e) => e.stopPropagation(), children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { className: "logo", src: ja_default, alt: "Shilll Logo" }, void 0, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 62,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Subscribe to Shilll's free newsletter" }, void 0, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 63,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Get today's news, plus one killer podcast, and exclusive subscriber-only insights" }, void 0, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 64,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", { method: "post", action: "https://app.shilll.com/subscription/form", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "input-wrapper", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { className: "email", type: "email", name: "email", required: true, placeholder: "Email Address *" }, void 0, false, {
            fileName: "app/routes/index.tsx",
            lineNumber: 67,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "submit", type: "submit", children: navigation.state === "submitting" ? "..." : "Subscribe" }, void 0, false, {
            fileName: "app/routes/index.tsx",
            lineNumber: 68,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/index.tsx",
          lineNumber: 66,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AltchaWrapper, {}, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 72,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "bcd05", type: "hidden", name: "l", checked: true, value: "bcd05274-b4b9-4a90-a8b5-1fdee92637fa" }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 73,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "nonce" }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 74,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/index.tsx",
        lineNumber: 65,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "dismiss-text", onClick: () => setShowModal(false), children: "No thanks! I'm already subscribed" }, void 0, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 77,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/index.tsx",
      lineNumber: 61,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/index.tsx",
      lineNumber: 60,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "header", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { className: "logo", src: ja_default, alt: "The Poast Logo" }, void 0, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 86,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "outer-header", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "inner-header", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "social", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { className: "x", to: "/thepoast", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: poast_default, alt: "The Poast" }, void 0, false, {
            fileName: "app/routes/index.tsx",
            lineNumber: 91,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/index.tsx",
            lineNumber: 90,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { className: "li", to: "/jeffamazon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: jeffamazon_default, alt: "Jeffamazon" }, void 0, false, {
            fileName: "app/routes/index.tsx",
            lineNumber: 94,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/index.tsx",
            lineNumber: 93,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { className: "info", to: "/info", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: info_default, alt: "More Info" }, void 0, false, {
            fileName: "app/routes/index.tsx",
            lineNumber: 97,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/index.tsx",
            lineNumber: 96,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/index.tsx",
          lineNumber: 89,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 88,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "inner-header2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/subscribe", children: "Subscribe" }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 102,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 101,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/index.tsx",
        lineNumber: 87,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { className: "headerimg", src: ja7_default, alt: "The Poast" }, void 0, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 105,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/index.tsx",
      lineNumber: 85,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/index.tsx",
    lineNumber: 57,
    columnNumber: 5
  }, this);
}
export {
  Index as default
};
//# sourceMappingURL=/build/routes/index-BQQUAM5B.js.map
