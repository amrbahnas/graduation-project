import React, { useState } from "react";
import "./AddChild.css";
import SimpleNav from "./../../components/SimpleNav/SimpleNav";
import CreateChildForm from "../../components/Create-child-form/CreateChildForm";
import ChildAccountCreated from "./../../components/Child-account-created/ChildAccountCreated";
const AddChild = () => {
  const [userName, setuserName] = useState("");
  const [password, setpassword] = useState("");
  const [childId, setChildId] = useState("");
  const [success, setsuccess] = useState(false);
  return (
    <div className="add-child">
      <SimpleNav />
      <div className="theContainer">
        {success ? (
          <ChildAccountCreated
            userName={userName}
            childId={childId}
            password={password}
          />
        ) : (
          <CreateChildForm
            setsuccess={setsuccess}
            setuserName={setuserName}
            setpassword={setpassword}
            setChildId={setChildId}
          />
        )}
      </div>
    </div>
  );
};

export default AddChild;
