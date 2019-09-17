import React from "react";
import ReactDOMServer from "react-dom/server";

import PillView from "./pill-view";

const pill = {
  label: "Pill",
  name: "pill",
  id: "pill",
  fromBlock: match =>
    match && {
      pill: match[2]
    },
  //to preview the editor_preview(right side)
  toBlock: ({ pill, textColor, bgColor, borderColor }) => {
    return ReactDOMServer.renderToStaticMarkup(
      <PillView
        pill={pill}
        textColor={textColor}
        bgColor={bgColor}
        borderColor={borderColor}
      />
    );
  },
  // to preview output in the website
  toPreview: ({ pill, textColor, bgColor, borderColor }) => {
    return (
      <PillView
        pill={pill}
        textColor={textColor}
        bgColor={bgColor}
        borderColor={borderColor}
      />
    );
  },
  fields: [
    {
      label: "Status",
      name: "pill",
      widget: "string"
    },
    {
      label: "Background color",
      name: "bgColor",
      widget: "string",
      default: `hsla(293, 26%, 93%, 1)`
    },
    {
      label: "Text color",
      name: "textColor",
      widget: "string",
      default: `black`
    },
    {
      label: "Border color",
      name: "borderColor",
      widget: "string",
      default: `hsla(293, 32%, 46%, 1)`
    }
  ]
  // pattern: if any,
};

export const NetlifyCmsEditorComponentPill = pill;
export default pill;
