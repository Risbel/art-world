import { ISubscriptions } from "@/actions/subscribeTypes";
import React from "react";

const Subscriptions = async () => {
  const res = await fetch("https://artworld-api.myaipeople.com/api/subscriptions/", {
    cache: "no-cache",
    next: {
      tags: ["subscriptions"],
    },
  });
  const subscriptions: ISubscriptions = await res.json();

  return (
    <div className="flex flex-wrap gap-4 p-32">
      {subscriptions.results.map((item) => {
        return (
          <div className="border p-4 rounded-xl" key={item.id}>
            <p className="font-semibold text-xl">👤 {item.name}</p>
            <p>✉️ {item.email}</p>
            <p>📞 {item.phone}</p>
            <p>🌎 {item.address}</p>
            <p>Company: {item.company}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Subscriptions;
