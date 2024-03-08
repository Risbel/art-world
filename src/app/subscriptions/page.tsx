import { ISubscriptions } from "@/actions/subscribeTypes";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
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
    <div className="p-4 lg:p-16">
      <div className="flex">
        <Link className="flex bg-yellow-400 hover:bg-yellow-300 pr-2 py-2 rounded-lg shadow-md" href={"/"}>
          <ChevronLeft /> <span className="font-semibold">Go back</span>
        </Link>
      </div>

      <div className="flex flex-col items-center p-8">
        <h1 className="text-3xl font-semibold">Subscriptors:</h1>
        <div className="flex flex-wrap gap-4 py-8">
          {subscriptions.results.map((item) => {
            return (
              <div className="w-full lg:w-auto border p-4 rounded-xl" key={item.id}>
                <p className="font-semibold text-xl">👤 {item.name}</p>
                <p>✉️ {item.email}</p>
                <p>📞 {item.phone}</p>
                <p>🗺️ {item.address}</p>
                <p>Company: {item.company}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Subscriptions;
