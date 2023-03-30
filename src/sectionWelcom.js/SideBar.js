import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import Links from "./Links";
const url = "http://localhost:3000/links";

const SideBarLink = ({ title, url, img, id }) => {
  return (
    <a href={url}>
      <i className="material-icons">{img}</i>
      <span>
        <span className="icon-text">{title}</span>
      </span>
    </a>
  );
};

const SideBarLinkGroup = ({ links }) => {
  return (
    <>
      {links?.map((el) => (
        <SideBarLink title={el.title} url={el.url} key={el.id} img={el.img} />
      ))}
    </>
  );
};
const SideBar = () => {
  const [mini, setMini] = useState(true);
  const [links, setLinks] = useState();

  useEffect(() => {
    fetch(url)
      .then((r) => r.json())
      .then((data) => setLinks(data))
      .catch((err) => console.log(err));
  }, []);

  const toggleSidebar = () => {
    if (mini) {
      setMini(false);
    } else {
      setMini(true);
    }
  };
  return (
    <>
      <div
        style={{ width: mini ? 85 : 230 }}
        onClick={toggleSidebar}
        className="sidebar__wrapper"
      >
        <SideBarLinkGroup links={links} />
      </div>
    </>
  );
};
// const SideBar = () => {
//   const [mini, setMini] = useState(true);

//   const toggleSidebar = () => {
//     if (mini) {
//       setMini(false);
//     } else {
//       setMini(true);
//     }
//   };
//   return (
//     <>
//       <div
//         style={{ width: mini ? 85 : 255 }}
//         onClick={toggleSidebar}
//         className="sidebar__wrapper"
//       >
//         <SideBarLinkGroup links={Links} itemNo={[0, 4]} />
//         <SideBarLinkGroup links={Links} itemNo={[5, 9]} />
//       </div>
//     </>
//   );
// };
export default SideBar;
