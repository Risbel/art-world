import Divider from "./Divider";

const FormSubscribe = () => {
  return (
    <div className="flex justify-center w-1/2 relative z-50">
      <div className="w-2/3 flex flex-col items-center border-2 p-6 rounded-xl border-yellow-400 backdrop-blur-md">
        <div className="flex flex-col gap-2">
          <Divider thickness={4} />
          <p className="text-3xl">Subscribirse</p>
          <Divider thickness={4} />
        </div>

        <form action="" className="flex flex-col gap-4 w-full">
          <div>
            <label className="pl-2" htmlFor="fullName">
              Full name
            </label>
            <input
              required
              className="border pl-2 py-1 rounded-md w-full h-12"
              placeholder="Full name"
              min={2}
              type="text"
              name="fullName"
              id="fullName"
              autoComplete="billing tel-national webauthn"
            />
          </div>
          <div>
            <label className="pl-2" htmlFor="email">
              Email
            </label>
            <input
              required
              className="border pl-2 py-1 rounded-md w-full h-12"
              placeholder="Email"
              min={2}
              type="email"
              name="email"
              id="email"
              autoComplete="billing tel-national webauthn"
            />
          </div>
          <div>
            <label className="pl-2" htmlFor="moreInfo">
              More info (optional)
            </label>
            <textarea
              className="w-full border pl-2 py-2"
              placeholder="Optional aditional info"
              name="moreInfo"
              id="moreInfo"
              rows={5}
            ></textarea>
          </div>
          <button type="submit" className="py-2 bg-yellow-300 hover:bg-yellow-400 transition-colors rounded-lg">
            <span className="font-semibold text-yellow-950">Submit</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormSubscribe;
