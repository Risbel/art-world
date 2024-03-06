"use client";

import { addSubscription } from "@/actions/subscribeAction";
import Divider from "./Divider";
import AddSubscriptionBtn from "./buttons/AddSubscriptionBtn";
import { useRef } from "react";

const FormSubscribe = async () => {
  const ref = useRef<HTMLFormElement>(null);
  // const res = await fetch("https://artworld-api.myaipeople.com/api/subscriptions/", {
  //   cache: "no-cache",
  // });
  // const subscriptions: ISubscriptions = await res.json();

  return (
    <div className="flex justify-center w-full md:w-1/2 relative z-50 px-4 mb-8 md:mb-0">
      <div className="lg:w-2/3 flex flex-col items-center border-2 p-4 md:p-6 rounded-xl border-yellow-400 backdrop-blur-md">
        <div className="flex flex-col w-full md:gap-2 mb-4">
          <Divider thickness={4} />
          <p className="text-xl md:text-3xl text-center">Subscribirse</p>
          <Divider thickness={4} />
        </div>

        <form
          ref={ref}
          action={async (formData) => {
            await addSubscription(formData);
            ref.current?.reset();
          }}
          className="flex flex-col gap-2 md:gap-4 w-full"
        >
          <div>
            <label className="pl-2 text-xs md:text-base" htmlFor="name">
              Full name
            </label>
            <input
              required
              className="border pl-2 py-1 rounded-md w-full h-8 md:h-12 text-xs md:text-base"
              placeholder="Full name"
              min={2}
              type="text"
              name="name"
              id="name"
              autoComplete="name"
            />
          </div>
          <div>
            <label className="pl-2 text-xs md:text-base" htmlFor="email">
              Email
            </label>
            <input
              required
              className="border pl-2 py-1 rounded-md w-full h-8 md:h-12 text-xs md:text-base"
              placeholder="Email"
              min={2}
              type="email"
              name="email"
              id="email"
              autoComplete="email"
            />
          </div>
          <div>
            <label className="pl-2 text-xs md:text-base" htmlFor="phone">
              Phone
            </label>
            <input
              required
              className="border pl-2 py-1 rounded-md w-full h-8 md:h-12 text-xs md:text-base"
              placeholder="phone"
              min={2}
              type="tel"
              name="phone"
              id="phone"
              autoComplete="tel"
            />
          </div>

          <div>
            <label className="pl-2 text-xs md:text-base" htmlFor="address">
              Address (optional)
            </label>
            <input
              className="border pl-2 py-1 rounded-md w-full h-8 md:h-12 text-xs md:text-base"
              placeholder="Address"
              min={2}
              type="text"
              name="address"
              id="address"
              autoComplete="address-level1"
            />
          </div>

          <div>
            <label className="pl-2 text-xs md:text-base" htmlFor="company">
              Company (optional)
            </label>
            <input
              className="border pl-2 py-1 rounded-md w-full h-8 md:h-12 text-xs md:text-base"
              placeholder="Company"
              min={2}
              type="text"
              name="company"
              id="company"
              autoComplete="off"
            />
          </div>

          <AddSubscriptionBtn />
        </form>
      </div>
      {/* <div>
        {subscriptions.results.map((sub) => {
          return (
            <div key={sub.id}>
              <p>{sub.name}</p>
              <p>{sub.email}</p>
              <p>{sub.phone}</p>
              <p>{sub.company}</p>
              <p>{sub.address}</p>
            </div>
          );
        })}
      </div> */}
    </div>
  );
};

export default FormSubscribe;

export interface IPostSubscriptionsResp {
  id: string;
  name: string;
  phone: string;
  email: string;
  address: string;
  company: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface ISubscriptions {
  count: 1;
  next: null;
  previous: null;
  results: [
    {
      id: string;
      name: string;
      phone: string;
      email: string;
      address: string;
      company: string;
      is_active: boolean;
      created_at: string;
      updated_at: string;
    }
  ];
}
