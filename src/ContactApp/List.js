import Structure from "./Structure";
import "../CSSComponents/contacts.css";
import Pagination from "./Pagination";

const List = ({
  items,
  pictures,
  nationality,
  personnel,
  filter,
  activeLetter,
  selectedDivision,
  selectedBranch,
  CurrentPagination,
  setCurrentPagination,
  filteredNat,
}) => {
  const itemsPerPage = 7;
  const lastIndex = CurrentPagination * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentData = items.slice(firstIndex, lastIndex);
  return (
    <>
      <div id="list">
        <div id="list">
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Rank</th>
                <th>Nationality</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Phone No</th>
                <th>Email Address</th>
                <th>Structure</th>
              </tr>
            </thead>
            <tbody>
              {currentData
                .map((item) => {
                  const personnelItem = personnel?.find(
                    (p) => p.Id === item.PersonnelId
                  );
                  const nationalityItem = nationality.find(
                    (p) => p.Id === personnelItem?.nationalityId
                  );

                  const pictureItem = pictures.find(
                    (p) => p.PersonnelId === personnelItem?.Id
                  );
                  return {
                    item,
                    pictureItem,
                    nationalityItem,
                    personnelItem,
                  };
                })
                .filter(
                  (el) =>
                    (!activeLetter || el.personnelItem?.FL === activeLetter) &&
                    (!filter ||
                      el.personnelItem?.lastName
                        .toUpperCase()
                        .includes(filter)) &&
                    (!selectedDivision ||
                      el.item.DivisionId == selectedDivision) &&
                    (!selectedBranch || el.item.BranchId == selectedBranch) &&
                    (!filteredNat ||
                      el.personnelItem.nationalityId == filteredNat)
                )
                .map((el, index) => (
                  <tr key={el.item.Id}>
                    {el.pictureItem ? (
                      <td>
                        <img
                          className="pic"
                          src={`https://hqmncnetest.sharepoint.com/sites/telephoneDirectory2/Pictures/${el.pictureItem.Title}.jpg`}
                        />
                      </td>
                    ) : (
                      <td></td>
                    )}
                    <td>{el.personnelItem?.Title || ""}</td>
                    <td>
                      {el.nationalityItem ? (
                        <span className="details">
                          {el.nationalityItem.Title}
                        </span>
                      ) : null}
                    </td>
                    <td>{el.personnelItem?.firstName || ""}</td>
                    <td>{el.personnelItem?.lastName || ""}</td>
                    {el.personnelItem?.phone ? (
                      <td>{el.personnelItem.phone}</td>
                    ) : null}
                    {el.personnelItem?.email ? (
                      <td>{el.personnelItem.email}</td>
                    ) : null}
                    <td>
                      <Structure item={el.item} />
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <Pagination
          firstIndex={firstIndex}
          lastIndex={lastIndex}
          setCurrentPagination={setCurrentPagination}
          itemsPerPage={itemsPerPage}
          CurrentPagination={CurrentPagination}
          items={items}
        />
      </div>
    </>
  );
};
export default List;
