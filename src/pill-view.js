import React from "react";
import PropTypes from "prop-types";

const PillView = ({ pill, bgColor, borderColor, textColor }) => {
  return (
    <div
      style={{
        backgroundColor: bgColor,
        border: `1px solid ${borderColor}`,
        color: textColor,
        textAlign: "center",
        fontSize: "0.75em ",
        display: "inline-block",
        verticalAlign: "middle",
        fontWeight: 500,
        borderRadius: "10rem",
        padding: "2px 10px",
        marginRight: "10px"
      }}
    >
      {pill}
    </div>
  );
};

PillView.propTypes = {
  pill: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  borderColor: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired
};

export default PillView;
