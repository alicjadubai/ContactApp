import React, { useState, useEffect } from "react";

const Structure = ({ item }) => {
  const [branches, setBranches] = useState([]);
  const [divisions, setDivisions] = useState([]);
  const listDivision =
    "https://hqmncnetest.sharepoint.com/sites/telephoneDirectory2/_api/web/lists/getbytitle('Division')/items";

  const listBranch =
    "https://hqmncnetest.sharepoint.com/sites/telephoneDirectory2/_api/web/lists/getbytitle('Branch')/items";

  const accessToken =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvaHFtbmNuZXRlc3Quc2hhcmVwb2ludC5jb21AOWZiMjdkNjgtY2Q2Zi00YzM5LTgyYTMtNzBiOTkzYjRjOGI2IiwiaXNzIjoiMDAwMDAwMDEtMDAwMC0wMDAwLWMwMDAtMDAwMDAwMDAwMDAwQDlmYjI3ZDY4LWNkNmYtNGMzOS04MmEzLTcwYjk5M2I0YzhiNiIsImlhdCI6MTY4MDE5MDA3OSwibmJmIjoxNjgwMTkwMDc5LCJleHAiOjE2ODAyNzY3NzksImlkZW50aXR5cHJvdmlkZXIiOiIwMDAwMDAwMS0wMDAwLTAwMDAtYzAwMC0wMDAwMDAwMDAwMDBAOWZiMjdkNjgtY2Q2Zi00YzM5LTgyYTMtNzBiOTkzYjRjOGI2IiwibmFtZWlkIjoiYmU1NWRjNWQtNjRjYy00ODNkLTg1NWMtNWQyZTdkZWRiNzRlQDlmYjI3ZDY4LWNkNmYtNGMzOS04MmEzLTcwYjk5M2I0YzhiNiIsIm9pZCI6ImExMzczNDYwLWZjYmQtNDgxNC05YjAwLTViOTc4YTYyNWQ4ZSIsInN1YiI6ImExMzczNDYwLWZjYmQtNDgxNC05YjAwLTViOTc4YTYyNWQ4ZSIsInRydXN0ZWRmb3JkZWxlZ2F0aW9uIjoiZmFsc2UifQ.NM2WNR1D39eoMvdu3XoIuHWIr1kxSEHXz0ToSSxdmqmlJTyiT-scZOPwIM5wOPdu6Z2XulcLuWpgaRmHC0RhGDWCGemStvk1EI96ONbXyudwS96rvV0cTdmhHEndP1XpJ9HYSNmDb9exLYczW9CF5U-TTUVpG71ESCNdbK3Jir-4HeHHbnoS0zYO-ZyXJ0h_MpXQoTHAdp5pzpyPZjKC4b2Cwaa8YGM5kGg-CSZJSK4Dsz9xA9z7YAji26pYoGRcVB_6L0A26J0K5U0yAImFMpu7NSLyD8QAla_DcwG1sov-oo3ohC9tyL5E-Kx0VeyfrfN88-nzWd5rACtJCylhDQ";

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
        setDivisions(data.value);
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
  const filteredBranch = branches?.filter(
    (branch) => branch.Id == item.BranchId
  );
  const filteredDivision = divisions?.filter(
    (division) => division.Id == filteredBranch[0]?.DivisionId
  );
  return (
    <>
      <ul>
        <li className="postTitle">{item.Title}</li>
        <li>{filteredBranch[0]?.Title}</li>
        <li>{filteredDivision[0]?.Title}</li>
      </ul>
    </>
  );
};

export default Structure;
