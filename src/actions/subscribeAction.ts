"use server";

export const addSubscription = async (e: FormData) => {
  try {
    const name = e.get("name")?.toString();
    const phone = e.get("phone")?.toString();
    const email = e.get("email")?.toString();
    const addres = e.get("address")?.toString();
    const company = e.get("company")?.toString();

    if (!name || !phone || !email) {
      return;
    }

    const newSubscription = {
      name,
      phone,
      email,
      addres,
      company,
    };

    await fetch("http://artworld-api.myaipeople.com/api/subscriptions/", {
      method: "POST",
      body: JSON.stringify(newSubscription),
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return {
      error,
    };
  }
};
