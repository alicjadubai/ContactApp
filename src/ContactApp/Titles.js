import Structure from "./Structure";
import "../CSSComponents/contacts.css";
import Pagination from "./Pagination";

const Tiles = ({
  items,
  pictures,
  nationality,
  personnel,
  filter,
  activeLetter,
  onClick,
  selectedDivision,
  selectedBranch,
  CurrentPagination,
  setCurrentPagination,
  filteredNat,
  itemsPerPage,
  setItemsPerPage,
}) => {
  // Apply filters to the items array
  const filteredData = items
    .map((item) => {
      const personnelItem = personnel?.find((p) => p.Id === item.PersonnelId);
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
          el.personnelItem?.lastName.toUpperCase().includes(filter)) &&
        (!selectedDivision ||
          selectedDivision === "Select division" ||
          el.item.DivisionId == selectedDivision) &&
        (!selectedBranch ||
          selectedBranch === "Select division" ||
          el.item.BranchId == selectedBranch) &&
        (!filteredNat ||
          filteredNat === "Select nationality" ||
          el.personnelItem?.nationalityId == filteredNat)
    );

  const lastIndex = CurrentPagination * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentData = filteredData.slice(firstIndex, lastIndex);

  setItemsPerPage(8);
  return (
    <>
      <div id="tiles">
        {currentData.map((el, index) => (
          // picture
          <div key={el.item.Id} className="thumbnail">
            {el.pictureItem ? (
              <div onClick={() => onClick(el.item.Id)} className="pic">
                <img
                  src={`https://hqmncnetest.sharepoint.com/sites/telephoneDirectory2/Pictures/${el.pictureItem.Title}.jpg`}
                />
              </div>
            ) : (
              <div className="pic">
                <img src={`https://image.ibb.co/gE7cc5/user_4.jpg`} />
              </div>
            )}

            <div className="details ">
              <p>
                {el.personnelItem ? (
                  <span>
                    {el.personnelItem.Title} {el.personnelItem.firstName}{" "}
                    {el.personnelItem.lastName}
                  </span>
                ) : null}
              </p>

              <p className="details__nat">
                {el.nationalityItem ? (
                  <>
                    <img className="flag" src={el.nationalityItem.flag.Url} />
                    <span>{el.nationalityItem.Title}</span>
                  </>
                ) : null}
              </p>
              <div
                className={
                  el.item.isDetailsHidden ? "details" : "details__hidden"
                }
              >
                {el.personnelItem?.phone ? (
                  <div className="details_phone">
                    <span className="material-symbols-outlined">call</span>{" "}
                    <span>{el.personnelItem.phone}</span>
                  </div>
                ) : null}
                {el.personnelItem?.email ? (
                  <div className="details_email">
                    <span className="material-symbols-outlined">mail</span>
                    <span>{el.personnelItem.email}</span>
                  </div>
                ) : null}
                <Structure item={el.item} />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <Pagination
          firstIndex={firstIndex}
          lastIndex={lastIndex}
          setCurrentPagination={setCurrentPagination}
          itemsPerPage={itemsPerPage}
          CurrentPagination={CurrentPagination}
          items={filteredData}
        />
      </div>
    </>
  );
};

export default Tiles;
