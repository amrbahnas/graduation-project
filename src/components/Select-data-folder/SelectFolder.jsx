import React, { useState } from "react";
// css
import "./SelectFolder.css";
// component

/*****************************************start******** */
const SelectFolder = () => {
  const [userFolders, setuserFolders] = useState(1);
  const [selectedFolder, setselectedFolder] = useState(1);
  const addNewFolder = () => {
    setuserFolders(userFolders + 1);
  };

  const Folder = ({ num }) => {
    return (
      <div
        className={`folder ${
          +num === +selectedFolder ? "border-2 border-gray-500" : ""
        }`}
        onClick={() => setselectedFolder(num)}
      >
        <div className="info">
          <span>Folder {num}</span>
        </div>
      </div>
    );
  };

  return (
    <div className="select-data-folder">
      <div className="folders">
        {Array.from(Array(userFolders))?.map((_, index) => (
          <Folder num={index + 1} key={index} />
        ))}
      </div>
      <button onClick={addNewFolder}>add new folder</button>
    </div>
  );
};

export default SelectFolder;
