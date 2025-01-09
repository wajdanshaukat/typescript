// import React, { useState } from "react";
import { useCounter } from "../provider/counter";

interface MyButtonProps {
  text: string | number | boolean;
  onClick?: () => void;
}

const MyButton: React.FC<MyButtonProps> = () => {
  const context = useCounter();
  return (
    <div className="Button">
      <h1 onClick={() => context?.setCount(context?.value + 1)}>{context?.value}</h1>
    </div>
  );
};

export default MyButton;
