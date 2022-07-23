import { useEffect } from "react";
import React from "react";

export const Alert = ({ message, type, removeAlert, list }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 3000);
    return () => clearTimeout(timeout);
  }, [list]);
  return <p className={type}>{message}</p>;
};
