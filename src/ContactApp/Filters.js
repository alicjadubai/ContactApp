import React, { useState, useEffect } from "react";
const Filters = ({
  selectedDivision,
  setSelectedDivision,
  filteredBranches,
  setFilteredBranches,
  selectedBranch,
  setSelectedBranch,
  nationality,
  setFilteredNat,
  filteredNat,
  setItemsPerPage,
  itemsPerPage,
  filter,
  activeLetter,
}) => {
  const accessToken =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvaHFtbmNuZXRlc3Quc2hhcmVwb2ludC5jb21AOWZiMjdkNjgtY2Q2Zi00YzM5LTgyYTMtNzBiOTkzYjRjOGI2IiwiaXNzIjoiMDAwMDAwMDEtMDAwMC0wMDAwLWMwMDAtMDAwMDAwMDAwMDAwQDlmYjI3ZDY4LWNkNmYtNGMzOS04MmEzLTcwYjk5M2I0YzhiNiIsImlhdCI6MTY4MDE5MDA3OSwibmJmIjoxNjgwMTkwMDc5LCJleHAiOjE2ODAyNzY3NzksImlkZW50aXR5cHJvdmlkZXIiOiIwMDAwMDAwMS0wMDAwLTAwMDAtYzAwMC0wMDAwMDAwMDAwMDBAOWZiMjdkNjgtY2Q2Zi00YzM5LTgyYTMtNzBiOTkzYjRjOGI2IiwibmFtZWlkIjoiYmU1NWRjNWQtNjRjYy00ODNkLTg1NWMtNWQyZTdkZWRiNzRlQDlmYjI3ZDY4LWNkNmYtNGMzOS04MmEzLTcwYjk5M2I0YzhiNiIsIm9pZCI6ImExMzczNDYwLWZjYmQtNDgxNC05YjAwLTViOTc4YTYyNWQ4ZSIsInN1YiI6ImExMzczNDYwLWZjYmQtNDgxNC05YjAwLTViOTc4YTYyNWQ4ZSIsInRydXN0ZWRmb3JkZWxlZ2F0aW9uIjoiZmFsc2UifQ.NM2WNR1D39eoMvdu3XoIuHWIr1kxSEHXz0ToSSxdmqmlJTyiT-scZOPwIM5wOPdu6Z2XulcLuWpgaRmHC0RhGDWCGemStvk1EI96ONbXyudwS96rvV0cTdmhHEndP1XpJ9HYSNmDb9exLYczW9CF5U-TTUVpG71ESCNdbK3Jir-4HeHHbnoS0zYO-ZyXJ0h_MpXQoTHAdp5pzpyPZjKC4b2Cwaa8YGM5kGg-CSZJSK4Dsz9xA9z7YAji26pYoGRcVB_6L0A26J0K5U0yAImFMpu7NSLyD8QAla_DcwG1sov-oo3ohC9tyL5E-Kx0VeyfrfN88-nzWd5rACtJCylhDQ";
  const listDivision =
    "https://hqmncnetest.sharepoint.com/sites/telephoneDirectory2/_api/web/lists/getbytitle('Division')/items";

  const listBranch =
    "https://hqmncnetest.sharepoint.com/sites/telephoneDirectory2/_api/web/lists/getbytitle('Branch')/items";
  const listNationality =
    "https://hqmncnetest.sharepoint.com/sites/telephoneDirectory2/_api/web/lists/getbytitle('Nationality')/items";
  const [branches, setBranches] = useState([]);
  const [Division, setDivision] = useState(null);

  useEffect(() => {
    fetch(listDivision, {
      method: "GET",
      headers: {
        Accept: "application/json;odata=nometadata",
        Authorization: "Bearer " + accessToken,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setDivision(data.value);
      })
      .catch((error) => {
        console.error("Error fetching SharePoint list items: ", error);
      });
  }, []);

  useEffect(() => {
    fetch(listBranch, {
      method: "GET",
      headers: {
        Accept: "application/json;odata=nometadata",
        Authorization: "Bearer " + accessToken,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setBranches(data.value);
      })
      .catch((error) => {
        console.error("Error fetching SharePoint list items: ", error);
      });
  }, []);

  function handleDivisionChange(event) {
    const selectedDivision = event.target.value;

    setSelectedDivision(selectedDivision);
    setItemsPerPage(100);
    console.log(
      selectedBranch,
      typeof selectedBranch,
      selectedBranch === undefined || selectedBranch == "",
      activeLetter === "",
      isNaN(Number(filteredNat)),
      filteredNat,
      filter === ""
    );
    setFilteredBranches(
      Division
        ? branches.filter((item) => item.DivisionId == selectedDivision)
        : branches
    );
    if (
      isNaN(Number(selectedDivision)) &&
      (selectedBranch === undefined || selectedBranch == "") &&
      activeLetter === "" &&
      (isNaN(Number(filteredNat)) || filteredNat === null) &&
      filter === ""
    ) {
      setItemsPerPage(8);
    }
  }
  function handleBranchChange(event) {
    const selectedBranch = event.target.value;

    setItemsPerPage(100);
    setSelectedBranch(selectedBranch);
    if (
      isNaN(Number(selectedDivision)) &&
      (selectedBranch === undefined || selectedBranch == "") &&
      activeLetter === "" &&
      (isNaN(Number(filteredNat)) || filteredNat === null) &&
      filter === ""
    ) {
      setItemsPerPage(8);
    }
  }
  function handleNationalityChange(event) {
    const selectedNationality = event.target.value;
    console.log(
      selectedBranch,
      typeof selectedBranch,
      selectedBranch === undefined || selectedBranch == "",
      activeLetter === "",
      isNaN(Number(filteredNat)),
      filteredNat,
      filter === ""
    );
    setItemsPerPage(100);
    setFilteredNat(selectedNationality);
    if (
      isNaN(Number(selectedDivision)) &&
      (selectedBranch === undefined || selectedBranch == "") &&
      activeLetter === "" &&
      (isNaN(Number(selectedNationality)) || selectedNationality === null) &&
      filter === ""
    ) {
      setItemsPerPage(8);
    }
  }
  return (
    <>
      <select value={filteredNat} onChange={handleNationalityChange}>
        <option>Select nationality</option>
        {nationality?.map((nat) => (
          <option key={nat.Id} value={nat.Id}>
            {nat.Title}
          </option>
        ))}
      </select>
      <select value={selectedDivision} onChange={handleDivisionChange}>
        <option>Select division</option>
        {Division?.map((division) => (
          <option key={division.Id} value={division.Id}>
            {division.Title}
          </option>
        ))}
      </select>

      <select value={selectedBranch} onChange={handleBranchChange}>
        <option value="">Select branch</option>
        {filteredBranches?.map((item) => (
          <option key={item.Id} value={item.Id}>
            {item.Title}
          </option>
        ))}
      </select>
    </>
  );
};

export default Filters;
