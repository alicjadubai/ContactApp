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
}) => {
  const accessToken =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvaHFtbmNuZXRlc3Quc2hhcmVwb2ludC5jb21AOWZiMjdkNjgtY2Q2Zi00YzM5LTgyYTMtNzBiOTkzYjRjOGI2IiwiaXNzIjoiMDAwMDAwMDEtMDAwMC0wMDAwLWMwMDAtMDAwMDAwMDAwMDAwQDlmYjI3ZDY4LWNkNmYtNGMzOS04MmEzLTcwYjk5M2I0YzhiNiIsImlhdCI6MTY4MDUzNTQ0NSwibmJmIjoxNjgwNTM1NDQ1LCJleHAiOjE2ODA2MjIxNDUsImlkZW50aXR5cHJvdmlkZXIiOiIwMDAwMDAwMS0wMDAwLTAwMDAtYzAwMC0wMDAwMDAwMDAwMDBAOWZiMjdkNjgtY2Q2Zi00YzM5LTgyYTMtNzBiOTkzYjRjOGI2IiwibmFtZWlkIjoiYmU1NWRjNWQtNjRjYy00ODNkLTg1NWMtNWQyZTdkZWRiNzRlQDlmYjI3ZDY4LWNkNmYtNGMzOS04MmEzLTcwYjk5M2I0YzhiNiIsIm9pZCI6ImExMzczNDYwLWZjYmQtNDgxNC05YjAwLTViOTc4YTYyNWQ4ZSIsInN1YiI6ImExMzczNDYwLWZjYmQtNDgxNC05YjAwLTViOTc4YTYyNWQ4ZSIsInRydXN0ZWRmb3JkZWxlZ2F0aW9uIjoiZmFsc2UifQ.obnBq_XVvui22Xdr14bRpLYO8oM0pnSPVu_zEhYi1wmOIVKj6EMtKUa7LFdDBGsf8n5AhpNcEk7Aqijb4XFme-WUQKMN3qiDBqyNR1L3B6xlgSF_DHY4CYbMNI3zkQLzGl0MFekU1IMFJpAw82dzxwKDFaC9tUKNvHLVXWfWbAGLaCfxEXpLJar2ZDlB20q0Nh7mKDyOKfdIywWvVxbZcK0_CgDtPe1sA0em_tDsBvj-_7gJGkBwVxRK4UWQ0uKPQtaZ50XtXsv41gnGejubZj4EHTdb03H3BgzJlOPhuvGNCZ466exzSQ2e4qD3uMszSxwT0F0L81u4mec_ytHARg";
  const listDivision =
    "https://hqmncnetest.sharepoint.com/sites/telephoneDirectory2/_api/web/lists/getbytitle('Division')/items";

  const listBranch =
    "https://hqmncnetest.sharepoint.com/sites/telephoneDirectory2/_api/web/lists/getbytitle('Branch')/items";

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
    setFilteredBranches(
      Division
        ? branches.filter((item) => item.DivisionId == selectedDivision)
        : branches
    );
    selectedDivision == "Select division" && setSelectedBranch("");
  }
  function handleBranchChange(event) {
    const selectedBranch = event.target.value;
    setSelectedBranch(selectedBranch);
  }
  function handleNationalityChange(event) {
    const selectedNationality = event.target.value;
    setFilteredNat(selectedNationality);
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
