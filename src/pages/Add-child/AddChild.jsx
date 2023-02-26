import React, { useState } from "react";
import "./AddChild.css";
import SimpleNav from "./../../components/SimpleNav/SimpleNav";
import CreateChildForm from "../../components/Create-child-form/CreateChildForm";
import ChildAccountCreated from "./../../components/Child-account-created/ChildAccountCreated";
const AddChild = () => {
  const [success, setsuccess] = useState(false);
  return (
    <div className="add-child">
      <SimpleNav />
      <div className="theContainer">
        {success ? (
          <ChildAccountCreated />
        ) : (
          <CreateChildForm setsuccess={setsuccess} />
        )}
      </div>
    </div>
  );
};

export default AddChild;
