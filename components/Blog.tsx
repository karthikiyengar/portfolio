import React from "react";

export default (props) => {
  return <>{JSON.stringify(props.data || {})}</>;
};
