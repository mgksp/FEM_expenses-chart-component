import logo from "./images/logo.svg";

function App() {
  return (
    <main className="font-dmSans px-4 py-16 text-15">
      <div className="flex items-center justify-between bg-softRed text-white rounded-lg p-5 mb-4">
        <div className="">
          <p className="">My balance</p>
          <h1 className="text-2xl font-bold">$921.48</h1>
        </div>
        <div className="w-16">
          <img className="w-full" src={logo} alt="" />
        </div>
      </div>

      <div className="p-5 rounded-lg bg-veryPaleOrange">
        <h2 className="text-2xl font-bold text-darkBrown mb-7">
          Spending - Last 7 days
        </h2>

        <div className="h-52 py-5 border-b-2 border-cream mb-5 grid grid-cols-7 gap-3">
          <div className="flex flex-col justify-end gap-1">
            <div className="h-1/2 bg-softRed rounded-sm"></div>
            <p className="">mon</p>
          </div>
          <div className="flex flex-col justify-end gap-1">
            <div className="h-1/4 bg-softRed rounded-sm"></div>
            <p className="">tue</p>
          </div>
          <div className="flex flex-col justify-end gap-1">
            <div className="h-1/3 bg-softRed rounded-sm"></div>
            <p className="">wed</p>
          </div>
          <div className="flex flex-col justify-end gap-1">
            <div className="h-1/3 bg-softRed rounded-sm"></div>
            <p className="">thu</p>
          </div>
          <div className="flex flex-col justify-end gap-1">
            <div className="h-1/3 bg-softRed rounded-sm"></div>
            <p className="">fri</p>
          </div>
          <div className="flex flex-col justify-end gap-1">
            <div className="h-1/3 bg-softRed rounded-sm"></div>
            <p className="">sat</p>
          </div>
          <div className="flex flex-col justify-end gap-1">
            <div className="h-1/3 bg-softRed rounded-sm"></div>
            <p className="">sun</p>
          </div>
        </div>

        <div className="flex justify-between items-end">
          <div className="">
            <p className="text-mediumBrown mb-1">Total this month</p>
            <div className="text-darkBrown font-bold text-3xl">$478.33</div>
          </div>
          <div className="text-right">
            <p className="text-darkBrown font-bold">+2.4%</p>
            <p className="text-mediumBrown">from last month</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
