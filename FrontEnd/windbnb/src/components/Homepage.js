import React from "react";
import Header from "./Header";
import Content from "./Content";
import { useState, useEffect } from "react";
import staydata from "../db/stays.json";
import SearchArea from "./SearchArea";

const Homepage = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [location, setLocation] = useState("");
  const [guestCount, setGuestCount] = useState(0);

  useEffect(() => {
    setData(staydata);
    setFilteredData(staydata);
  }, []);

  const locations = data
    .map((item) => {
      return item.city + "," + item.country;
    })
    .filter((loc, index, self) => self.indexOf(loc) === index);

  console.log(data, filteredData);
  // setFilteredData(...data);

  const handleSearch = (count) => {
    console.log("here", count);
    setGuestCount(count);
    console.log(guestCount);
    // console.log(location);
    if (location == "") return;

    const [city, country] = location.split(",");
    console.log(city, country);
    setFilteredData(
      data
        .filter((item) => item.city === city && item.country === country)
        .filter((item) => item.maxGuests >= count)
    );
    console.log(filteredData);
    setShowSearch(!showSearch);
  };

  // console.log(locations);
  // console.log(data);

  return (
    <div>
      {showSearch && (
        <SearchArea
          location={location}
          setLocation={setLocation}
          locations={locations}
          handleSearch={handleSearch}
          setShowSearch={setShowSearch}
          showSearch={showSearch}
          guestCount={guestCount}
          setGuestCount={setGuestCount}
        />
      )}
      <Header
        data={data}
        showSearch={showSearch}
        setShowSearch={setShowSearch}
      />
      <Content data={filteredData} />
    </div>
  );
};

export default Homepage;
