import React from "react";

function MessyComponent() {
  return <div className="MessyComponent">{throw new Error()}</div>;
}

export default MessyComponent;
