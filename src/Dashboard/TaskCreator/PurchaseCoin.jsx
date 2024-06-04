import { useState } from "react";

const PurchaseCoin = () => {
  const [pay, setPay] = useState(0);

  const handleParsesCoin = (coin) => {
    if (coin === 10) {
      setPay(1);
    } else if (coin === 100) {
      setPay(9);
    } else if (coin === 500) {
      setPay(19);
    } else if (coin === 1000) {
      setPay(39);
    }
  };

  return (
    <section>
      <div
        className="min-h-[calc(100vh-96px)] bg-customGray flex items-center justify-center"
        style={{
          background: "url(https://i.ibb.co/28887J6/register.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-2xl w-full p-6 bg-[#fff] bg-opacity-50 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-6 text-center">Purchase Coins</h1>
          <div className="grid gap-4">
            <div
              onClick={() => handleParsesCoin(10)}
              className="p-4 bg-regular bg-opacity-70 hover:bg-opacity-100 transition text-customPrimary rounded-lg cursor-pointer text-center font-semibold"
            >
              10 coins = 1 dollar
            </div>

            <div
              onClick={() => handleParsesCoin(100)}
              className="p-4 bg-regular bg-opacity-70 hover:bg-opacity-100 transition text-customPrimary rounded-lg cursor-pointer text-center font-semibold"
            >
              100 coins = 9 dollars
            </div>

            <div
              onClick={() => handleParsesCoin(500)}
              className="p-4 bg-regular bg-opacity-70 hover:bg-opacity-100 transition text-customPrimary rounded-lg cursor-pointer text-center font-semibold"
            >
              500 coins = 19 dollars
            </div>

            <div
              onClick={() => handleParsesCoin(1000)}
              className="p-4 bg-regular bg-opacity-70 hover:bg-opacity-100 transition text-customPrimary rounded-lg cursor-pointer text-center font-semibold"
            >
              1000 coins = 39 dollars
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PurchaseCoin;
