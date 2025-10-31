import { useState } from "react";
import RestInfo from "./RestInfo";

export default function MenuCard({ menuItems, foodselected }) {
  const [isOpen, setIsOpen] = useState(true);


  if (isOpen) {
    if (foodselected === "veg") {
      return (
        <div className="w-full">
          <div className="flex justify-between w-full">
            <p className="text-3xl font-bold mb-4">{menuItems.title}</p>
            <button
              className="text-5xl font-bold mr-20"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? "^" : "˯"}
            </button>
          </div>
          <div>
            {menuItems?.itemCards
              ?.filter((food) => "isVeg" in food?.card?.info)
              .map((items) => (
                <RestInfo
                  key={items?.card?.info?.id}
                  restData={items?.card?.info}
                />
              ))}
          </div>
          <div className="h-5 bg-gray-200 mt-2 mb-2"></div>
        </div>
      );
    }
    else if (foodselected === "nonveg") {
      return (
        <div className="w-full">
          <div className="flex justify-between w-full">
            <p className="text-3xl font-bold mb-4">{menuItems.title}</p>
            <button
              className="text-5xl font-bold mr-20"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? "^" : "˯"}
            </button>
          </div>
          <div>
            {menuItems?.itemCards
              ?.filter((food) => !("isVeg" in food?.card?.info))
              .map((items) => (
                <RestInfo
                  key={items?.card?.info?.id}
                  restData={items?.card?.info}
                />
              ))}
          </div>
          <div className="h-5 bg-gray-200 mt-2 mb-2"></div>
        </div>
      );
    }
    else {
      return (
        <div className="w-full">
          <p className="text-2xl font-bold">{menuItems.title}</p>
          <div>
            {menuItems?.itemCards?.map((items) => (
              <RestInfo
                key={items?.card?.info?.id}
                restData={items?.card?.info}
              />
            ))}
          </div>
        </div>
      );
    }
  }

  // Case 2: Card is closed
  else if (!isOpen) {
    return (
      <div className="w-full">
        <div className="flex justify-between w-full">
          <p className="text-3xl font-bold mb-4">{menuItems.title}</p>
          <button
            className="text-5xl font-bold mr-20"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "^" : "⌄"}
          </button>
        </div>
        <div className="h-5 bg-gray-200 mt-2 mb-2"></div>
      </div>
    );
  }
}
