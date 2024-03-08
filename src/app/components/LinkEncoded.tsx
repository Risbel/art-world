"use client";

import { X } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const LinkEncoded = () => {
  const router = useRouter();
  const [clickCount, setClickCount] = useState(0);

  const redirectEncoded = () => {
    setClickCount((prevCount) => prevCount + 1);

    setTimeout(() => {
      setClickCount(0);
    }, 2000);
  };

  useEffect(() => {
    if (clickCount > 5) {
      router.push("/subscriptions");
    }
  }, [clickCount]);

  return (
    <div>
      <button onClick={redirectEncoded}>
        <X className="h-10 w-10 lg:h-16 lg:w-16" />
      </button>
    </div>
  );
};

export default LinkEncoded;
