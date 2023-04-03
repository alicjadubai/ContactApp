import React, { useState, useEffect } from "react";

const Structure = ({ item }) => {
  const [branches, setBranches] = useState([]);
  const [divisions, setDivisions] = useState([]);
  const listDivision =
    "https://hqmncnetest.sharepoint.com/sites/telephoneDirectory2/_api/web/lists/getbytitle('Division')/items";

  const listBranch =
    "https://hqmncnetest.sharepoint.com/sites/telephoneDirectory2/_api/web/lists/getbytitle('Branch')/items";

  const accessToken =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvaHFtbmNuZXRlc3Quc2hhcmVwb2ludC5jb21AOWZiMjdkNjgtY2Q2Zi00YzM5LTgyYTMtNzBiOTkzYjRjOGI2IiwiaXNzIjoiMDAwMDAwMDEtMDAwMC0wMDAwLWMwMDAtMDAwMDAwMDAwMDAwQDlmYjI3ZDY4LWNkNmYtNGMzOS04MmEzLTcwYjk5M2I0YzhiNiIsImlhdCI6MTY4MDUzNTQ0NSwibmJmIjoxNjgwNTM1NDQ1LCJleHAiOjE2ODA2MjIxNDUsImlkZW50aXR5cHJvdmlkZXIiOiIwMDAwMDAwMS0wMDAwLTAwMDAtYzAwMC0wMDAwMDAwMDAwMDBAOWZiMjdkNjgtY2Q2Zi00YzM5LTgyYTMtNzBiOTkzYjRjOGI2IiwibmFtZWlkIjoiYmU1NWRjNWQtNjRjYy00ODNkLTg1NWMtNWQyZTdkZWRiNzRlQDlmYjI3ZDY4LWNkNmYtNGMzOS04MmEzLTcwYjk5M2I0YzhiNiIsIm9pZCI6ImExMzczNDYwLWZjYmQtNDgxNC05YjAwLTViOTc4YTYyNWQ4ZSIsInN1YiI6ImExMzczNDYwLWZjYmQtNDgxNC05YjAwLTViOTc4YTYyNWQ4ZSIsInRydXN0ZWRmb3JkZWxlZ2F0aW9uIjoiZmFsc2UifQ.obnBq_XVvui22Xdr14bRpLYO8oM0pnSPVu_zEhYi1wmOIVKj6EMtKUa7LFdDBGsf8n5AhpNcEk7Aqijb4XFme-WUQKMN3qiDBqyNR1L3B6xlgSF_DHY4CYbMNI3zkQLzGl0MFekU1IMFJpAw82dzxwKDFaC9tUKNvHLVXWfWbAGLaCfxEXpLJar2ZDlB20q0Nh7mKDyOKfdIywWvVxbZcK0_CgDtPe1sA0em_tDsBvj-_7gJGkBwVxRK4UWQ0uKPQtaZ50XtXsv41gnGejubZj4EHTdb03H3BgzJlOPhuvGNCZ466exzSQ2e4qD3uMszSxwT0F0L81u4mec_ytHARg";

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
