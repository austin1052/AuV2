import { CSSProperties } from "react";
import "../globals.css"

const colors = {
  black: "var(--black)",
  red: "var(--accent)",
}

export const snippetTheme: { [key: string]: CSSProperties } =  {
  "hljs-comment": {
      "color": "#7e7777"
  },
  "hljs-quote": {
      "color": "#7e7777"
  },
  "hljs-variable": {
      "color": `${colors.red}`
  },
  "hljs-template-variable": {
      "color": `${colors.red}`
  },
  "hljs-attribute": {
      "color": `${colors.red}`
  },
  "hljs-tag": {
      "color": `${colors.red}`
  },
  "hljs-name": {
      "color": `${colors.red}`
  },
  "hljs-regexp": {
      "color": `${colors.red}`
  },
  "hljs-link": {
      "color": `${colors.red}`
  },
  "hljs-selector-id": {
      "color": `${colors.red}`
  },
  "hljs-selector-class": {
      "color": `${colors.red}`
  },
  "hljs-number": {
      "color": "#b45a3c"
  },
  "hljs-meta": {
      "color": "#b45a3c"
  },
  "hljs-built_in": {
      "color": "#b45a3c"
  },
  "hljs-builtin-name": {
      "color": "#b45a3c"
  },
  "hljs-literal": {
      "color": "#b45a3c"
  },
  "hljs-type": {
      "color": "#b45a3c"
  },
  "hljs-params": {
      "color": "#b45a3c"
  },
  "hljs-string": {
      "color": "#4b8b8b"
  },
  "hljs-symbol": {
      "color": "#4b8b8b"
  },
  "hljs-bullet": {
      "color": "#4b8b8b"
  },
  "hljs-title": {
      "color": "#7272ca"
  },
  "hljs-section": {
      "color": "#7272ca"
  },
  "hljs-keyword": {
      "color": "#8464c4"
  },
  "hljs-selector-tag": {
      "color": "#8464c4"
  },
  "hljs-deletion": {
      "color": "#1b1818",
      "display": "inline-block",
      "width": "100%",
      "backgroundColor": `${colors.red}`
  },
  "hljs-addition": {
      "color": "#1b1818",
      "display": "inline-block",
      "width": "100%",
      "backgroundColor": "#4b8b8b"
  },
  "hljs": {
    // "fontSize": "1rem",
    "fontFamily": "monospace",
    // "fontWeight": "200",
      "display": "block",
      "overflowX": "auto",
//   "background": `${colors.black}`,
      "background": "none",

      "color": "#8a8585",
      "padding": "0"
  },
  "hljs-emphasis": {
      "fontStyle": "italic"
  },
  "hljs-strong": {
      "fontWeight": "bold"
  }
}


