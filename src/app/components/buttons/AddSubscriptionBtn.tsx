"use client";

import React from "react";
import { useFormStatus } from "react-dom";

const AddSubscriptionBtn = () => {
  const { pending } = useFormStatus();

  return (
    <button className="py-2 bg-yellow-300 hover:bg-yellow-400 transition-colors rounded-lg" type="submit">
      <span className="font-semibold text-yellow-950">{!pending ? "Subscribe" : "Loading..."}</span>
    </button>
  );
};

export default AddSubscriptionBtn;
