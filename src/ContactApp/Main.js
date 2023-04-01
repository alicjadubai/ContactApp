import React, { useState, useEffect } from "react";
import Filters from "./Filters";
import List from "./List";
import Tiles from "./Titles";
import "../CSSComponents/contacts.css";

function SharePointList() {
  //VARIABALES
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [personnel, setPersonnel] = useState([]);
  const [nationality, setNationality] = useState([]);
  const [pictures, setPictures] = useState([]);
  const [view, setView] = useState("tiles");
  const [activeLetter, setActiveLetter] = useState("");
  const [filter, setFilter] = useState("");
  const [selectedDivision, setSelectedDivision] = useState();
  const [filteredBranches, setFilteredBranches] = useState();
  const [selectedBranch, setSelectedBranch] = useState();
  const [currentPagination, setCurrentPagination] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState();
  const [filteredNat, setFilteredNat] = useState(null);

  const accessToken =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvaHFtbmNuZXRlc3Quc2hhcmVwb2ludC5jb21AOWZiMjdkNjgtY2Q2Zi00YzM5LTgyYTMtNzBiOTkzYjRjOGI2IiwiaXNzIjoiMDAwMDAwMDEtMDAwMC0wMDAwLWMwMDAtMDAwMDAwMDAwMDAwQDlmYjI3ZDY4LWNkNmYtNGMzOS04MmEzLTcwYjk5M2I0YzhiNiIsImlhdCI6MTY4MDMzMDEwNCwibmJmIjoxNjgwMzMwMTA0LCJleHAiOjE2ODA0MTY4MDQsImlkZW50aXR5cHJvdmlkZXIiOiIwMDAwMDAwMS0wMDAwLTAwMDAtYzAwMC0wMDAwMDAwMDAwMDBAOWZiMjdkNjgtY2Q2Zi00YzM5LTgyYTMtNzBiOTkzYjRjOGI2IiwibmFtZWlkIjoiYmU1NWRjNWQtNjRjYy00ODNkLTg1NWMtNWQyZTdkZWRiNzRlQDlmYjI3ZDY4LWNkNmYtNGMzOS04MmEzLTcwYjk5M2I0YzhiNiIsIm9pZCI6ImExMzczNDYwLWZjYmQtNDgxNC05YjAwLTViOTc4YTYyNWQ4ZSIsInN1YiI6ImExMzczNDYwLWZjYmQtNDgxNC05YjAwLTViOTc4YTYyNWQ4ZSIsInRydXN0ZWRmb3JkZWxlZ2F0aW9uIjoiZmFsc2UifQ.LP-ZnFAyGCB3Q3r7QOq26z5SJb4MZcFF7a85xT3Zv_S57jkcdl9W47fYvVQrim1jllj71HfQkqkgPeuGYNIa4j5uOnoEqGp1wELz4vAMQI_8x8ebkYBy8UepLXtWvGjQNM4ItWDXb4pbbtcntI-SmntV5B-CzOXxN-T9VWbiuJIjOBmtfR_iwq3j501fthv3sIgvvMwFb6zdldE6JLQNHbrYZZ0s688NjK71ArCj-ttGBK81E1DwLkuAChTFbnnE5UKaiTduzUt75OZIO8RnMDu-44FxuV53J64dbWB3O2T0K9xkz3Hz5RMGiJcHj8yU2mKzekg6h_Hyx29AxISRQA";
  const listStructure =
    "https://hqmncnetest.sharepoint.com/sites/telephoneDirectory2/_api/web/lists/getbytitle('Structure')/items";
  const listPersonnel =
    "https://hqmncnetest.sharepoint.com/sites/telephoneDirectory2/_api/web/lists/getbytitle('Personnel')/items";
  const listNationality =
    "https://hqmncnetest.sharepoint.com/sites/telephoneDirectory2/_api/web/lists/getbytitle('Nationality')/items";
  const listPictures =
    "https://hqmncnetest.sharepoint.com/sites/telephoneDirectory2/_api/web/lists/getbytitle('Pictures')/items";

  //USE EFFECTS Fetching SharePoint lists

  useEffect(() => {
    fetch(listStructure, {
      method: "GET",
      headers: {
        Accept: "application/json;odata=nometadata",
        Authorization: "Bearer " + accessToken,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setItems(data.value);
        setFilteredItems(data.value);
      })
      .catch((error) => {
        console.error("Error fetching SharePoint list items: ", error);
      });
  }, []);

  useEffect(() => {
    fetch(listPersonnel, {
      method: "GET",
      headers: {
        Accept: "application/json;odata=nometadata",
        Authorization: "Bearer " + accessToken,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setPersonnel(data.value);
      })
      .catch((error) => {
        console.error("Error fetching SharePoint list items: ", error);
      });
  }, []);
  useEffect(() => {
    fetch(listNationality, {
      method: "GET",
      headers: {
        Accept: "application/json;odata=nometadata",
        Authorization: "Bearer " + accessToken,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setNationality(data.value);
      })
      .catch((error) => {
        console.error("Error fetching SharePoint list items: ", error);
      });
  }, []);
  useEffect(() => {
    fetch(listPictures, {
      method: "GET",
      headers: {
        Accept: "application/json;odata=nometadata",
        Authorization: "Bearer " + accessToken,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setPictures(data.value);
      })
      .catch((error) => {
        console.error("Error fetching SharePoint list items: ", error);
      });
  }, []);

  //FUNCTIONS

  //to change display
  const handleListClick = () => {
    setView("list");
  };
  const handleTileClick = () => setView("tiles");

  //to expand card view
  const handleThumbnailClick = (itemId) => {
    setItems((prevItems) =>
      prevItems.map((item) => {
        if (item.Id === itemId) {
          return { ...item, isDetailsHidden: !item.isDetailsHidden };
        } else {
          return item;
        }
      })
    );
  };

  const handleInputChange = (event, items) => {
    setFilter(event.target.value.toUpperCase());
  };
  //component to managed grouping by first letter of surname
  const AlphabetNav = ({ personnel }) => {
    const alphabets = "abcdefghijklmnopqrstuvwxyz".split("");

    const handleAlphabetClick = (e) => {
      e.preventDefault();

      const clickedLetter = e.target.textContent.toUpperCase();

      if (activeLetter === clickedLetter) {
        setActiveLetter("");
      } else {
        setActiveLetter(clickedLetter);
        const filteredPersonnel = personnel.filter(
          (person) => person.FL == clickedLetter
        );
      }
    };

    return (
      <>
        <div className="AlphabetNav">
          {alphabets.map((letter) => (
            <a
              key={letter}
              href="#"
              className={activeLetter === letter.toUpperCase() ? "active" : ""}
              onClick={handleAlphabetClick}
            >
              {letter}
            </a>
          ))}
        </div>
      </>
    );
  };

  return (
    <>
      <div>
        <AlphabetNav
          filteredItems={filteredItems}
          setItems={setItems}
          setFilteredItems={setFilteredItems}
          items={items}
          personnel={personnel}
        />
        <header>
          <h1>HQ MNC NE Personnel Directory</h1>
          <div>
            <input
              type="text"
              placeholder="Search..."
              onChange={handleInputChange}
              items={items}
            />
            <Filters
              selectedDivision={selectedDivision}
              setSelectedDivision={setSelectedDivision}
              filteredBranches={filteredBranches}
              setFilteredBranches={setFilteredBranches}
              selectedBranch={selectedBranch}
              setSelectedBranch={setSelectedBranch}
              nationality={nationality}
              filteredNat={filteredNat}
              setFilteredNat={setFilteredNat}
            />
            <button onClick={handleTileClick} className="btn js-tile">
              Tile
            </button>
            <button onClick={handleListClick} className="btn js-list">
              List
            </button>
          </div>
        </header>

        {view === "tiles" ? (
          <>
            <Tiles
              items={items}
              personnel={personnel}
              nationality={nationality}
              pictures={pictures}
              filter={filter}
              activeLetter={activeLetter}
              onClick={handleThumbnailClick}
              selectedDivision={selectedDivision}
              selectedBranch={selectedBranch}
              setCurrentPagination={setCurrentPagination}
              CurrentPagination={currentPagination}
              filteredNat={filteredNat}
              itemsPerPage={itemsPerPage}
              setItemsPerPage={setItemsPerPage}
            />
          </>
        ) : (
          <>
            <List
              items={items}
              personnel={personnel}
              nationality={nationality}
              pictures={pictures}
              filter={filter}
              activeLetter={activeLetter}
              selectedDivision={selectedDivision}
              selectedBranch={selectedBranch}
              setCurrentPagination={setCurrentPagination}
              CurrentPagination={currentPagination}
              filteredNat={filteredNat}
              itemsPerPage={itemsPerPage}
              setItemsPerPage={setItemsPerPage}
            />
          </>
        )}
      </div>
    </>
  );
}

export default SharePointList;
