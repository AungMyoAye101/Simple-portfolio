"use client";

import React from "react";
import { useFormStatus } from "react-dom";

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      className="px-6 py-2 rounded-lg shadow-md border-2 border-cyan-400  font-lora text-lg hover:scale-105 hover:shadow-lg hover:bg-cyan-400 transition-all ease-out duration-200 "
    >
      {pending ? "Submiting..." : "Submit"}
    </button>
  );
};

export default SubmitButton;
