import React, { useState } from "react";

const SearchArea = ({
  location,
  setLocation,
  locations,
  handleSearch,
  showSearch,
  setShowSearch,
  setGuestCount,
}) => {
  let [count1, setCount1] = useState(0);
  let [count2, setCount2] = useState(0);

  const handleCount = (action) => {
    switch (action) {
      case "INC_1":
        setCount1(count1 + 1);
        break;
      case "DEC_1":
        if (count1 !== 0) setCount1(count1 - 1);
        break;
      case "INC_2":
        setCount2(count2 + 1);
        break;
      case "DEC_2":
        if (count2 !== 0) setCount2(count2 - 1);
        break;
    }
  };

  // console.log(location);
  return (
    <div className="search-area">
      <div className="btn-filter-lg">
        <button
          className="nav-btn-lg"
          onClick={() => {
            // setShowSearch(!showSearch);
            console.log("Location Button clicked");
          }}
        >
          {location ? location : "Select Location"}
        </button>
        <button
          className="nav-btn-lg"
          onClick={() => {
            // setShowSearch(!showSearch);
            console.log("Guest Button clicked");
          }}
        >
          Add Guest
        </button>
        <button
          className="nav-btn-search-lg"
          onClick={() => {
            let count = 0;
            if (count1 > 0 || count2 > 0) count = count1 + count2;
            console.log("Search clicked", count);
            handleSearch(count);
          }}
        >
          SEARCH
        </button>
      </div>
      <div className="input-area">
        <div className="input-left">
          {locations.map((item) => {
            return (
              <button onClick={() => setLocation(item)}>
                <p>{item}</p>
              </button>
            );
          })}
        </div>
        <div className="input-right">
          <div className="input-right-line">
            <button
              onClick={() => {
                handleCount("DEC_1");
                // console.log("clicked");
              }}
            >
              -
            </button>
            <p>{count1}</p>
            <button onClick={() => handleCount("INC_1")}>+</button>
          </div>
          <div className="input-right-line">
            <button onClick={() => handleCount("DEC_2")}>-</button>
            <p>{count2}</p>
            <button onClick={() => handleCount("INC_2")}>+</button>
          </div>
        </div>
      </div>
      {showSearch && (
        <button
          className="search-close-btn"
          onClick={() => setShowSearch(!showSearch)}
        >
          X
        </button>
      )}
    </div>
  );
};

export default SearchArea;
