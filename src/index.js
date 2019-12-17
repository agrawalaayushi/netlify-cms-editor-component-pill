const pill = {
  // Internal id of the component
  id: "pill",
  // Visible label
  label: "Pill",
  // Fields the user need to fill out when adding an instance of the component
  fields: [
    {
      name: "text",
      label: "Text",
      widget: "string"
    },
    {
      name: "bgColor",
      label: "Background Color",
      widget: "string",
      default: `#F1E9F2`
    },
    {
      label: "Text Color",
      name: "textColor",
      widget: "string",
      default: `black`
    },
    {
      label: "Border Color",
      name: "borderColor",
      widget: "string",
      default: `#92509B`
    }
  ],
  // Pattern to identify a block as being an instance of this component
  pattern: /^{{< Pill text="(.*)" bgColor="(.*)" textColor="(.*)" borderColor="(.*)" >}}$/,
  // Function to extract data elements from the regexp match
  fromBlock: match =>
    match && {
      text: match[1],
      bgColor: match[2],
      textColor: match[3],
      borderColor: match[4]
    },
  toBlock: function(obj) {
    return `{{< Pill text=\"${obj.text}\" bgColor=\"${obj.bgColor}\" textColor=\"${obj.textColor}\" borderColor=\"${obj.borderColor}\" >}}`
  },
  // Preview output for this component. Can either be a string or a React component (component gives better render performance)
  toPreview: function(obj) {
    return `<div
      style=" 
        background-color:${obj.bgColor};
        border:1px solid ${obj.borderColor};
        color:${obj.textColor};
        text-align:center;
        font-size:0.75em;
        display:inline-block;
        vertical-align:middle;
        font-weight:500;  
        border-radius:10rem;
        padding:2px 10px;
        margin-right:10px;
      "
    >
      ${obj.text}
    </div>`
  }
}

export const NetlifyCmsEditorComponentPill = pill
export default pill
