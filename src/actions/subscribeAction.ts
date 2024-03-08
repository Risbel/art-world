"use server";

import { revalidateTag } from "next/cache";
import { ISubscriptions } from "./subscribeTypes";

export const addSubscription = async (e: FormData) => {
  try {
    const name = e.get("name")?.toString();
    const phone = e.get("phone")?.toString();
    const email = e.get("email")?.toString();
    const address = e.get("address")?.toString();
    const company = e.get("company")?.toString();

    if (!name || !phone || !email) {
      return;
    }

    const newSubscription = {
      name,
      phone,
      email,
      address,
      company,
    };

    await fetch("https://artworld-api.myaipeople.com/api/subscriptions/", {
      method: "POST",
      body: JSON.stringify(newSubscription),
      headers: {
        "Content-Type": "application/json",
      },
    });

    revalidateTag("subscriptions");
  } catch (error) {
    return {
      error,
    };
  }
};

export const getSubscriptions = async () => {
  try {
    const res = await fetch("https://artworld-api.myaipeople.com/api/subscriptions/", {
      cache: "no-cache",
      next: {
        tags: ["subscriptions"],
      },
    });
    const subscriptions: ISubscriptions = await res.json();
    return subscriptions;
  } catch (error) {
    return {
      error,
    };
  }
};
