import { useState, useEffect } from "react";
import { useParams } from "react-router";
import RestInfo from "./RestInfo";

export default function SearchFood() {
  const { id } = useParams();
  const [food, setFood] = useState("");
  const [RestData, setRestData] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const proxyServer = "https://cors-anywhere.herokuapp.com/";
      const swiggyAPI = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`;

      const response = await fetch(proxyServer + swiggyAPI);
      const data = await response.json();

      const tempData =
        data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

      const menuData = tempData.filter(
        (item) => item?.card?.card?.itemCards
      );

      setRestData(menuData);
    }

    fetchData();
  }, []);


  useEffect(() => {
    if (food.trim() === "") {
        setFilteredItems([]);
        return;
    }

    const matchedItems = RestData.flatMap((menu) =>
        menu?.card?.card?.itemCards?.filter((item) =>
        item?.card?.info?.name?.toLowerCase().includes(food.toLowerCase())
        ) || []
    );

    setFilteredItems(matchedItems);
    }, [food, RestData]);



  return (
    <div>
      <div className="w-[80%] mx-auto mt-20">
        <input
          className="w-full pl-10 py-4 text-2xl bg-gray-200 rounded-2xl border"
          placeholder="Search here"
          value={food}
          onChange={(e) => setFood(e.target.value)}
        />
      </div>

      <div className="mt-10">
        {food.trim() === "" ? (
            <p className="text-center mt-10 text-gray-600">
            Type something to search food items
            </p>
        ) : filteredItems.length > 0 ? (
            filteredItems.map((item) => (
            <RestInfo
                key={item?.card?.info?.id}
                restData={item?.card?.info}
            />
            ))
        ) : (
            <p className="text-center mt-10 text-gray-600">
            No food items found.
            </p>
        )}
    </div>
    </div>
  );
}
