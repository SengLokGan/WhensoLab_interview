import React from "react";
import { toast } from "react-toastify";

const CustomToast = ({ message }) => {
  return (
    <div
      style={{
        borderRadius: "5px",
        fontSize: " 14px",
        color: "white",
      }}>
      <span>{message}</span>
    </div>
  );
};

export const customToast = (message, type) => {
  const options = {
    position: toast.POSITION.TOP_CENTER,
    autoClose: 3000,
    hideProgressBar: true,
  };

  const toastType = type === "success" ? toast.success : toast.error;

  toastType(<CustomToast message={message} />, options);
};
