import React, { useEffect, useState } from "react";
import SimpleNav from "../../components/SimpleNav/SimpleNav";
import "./AddFirstChild.css";
import AccountState from "../../components/add-first-child-pages/AccountState";
import ChildName from "../../components/add-first-child-pages/ChildName";
import ChildGrade from "../../components/add-first-child-pages/ChildGrade";
import ChildAccount from "../../components/add-first-child-pages/ChildAccount";
import Notes from "../../components/add-first-child-pages/Notes";
import Finish from "./../../components/add-first-child-pages/Finish";
const AddFirstChild = () => {
  const [page, setpage] = useState(1);
  const [name, setname] = useState("");
  const [userName, setuserName] = useState("");
  const [password, setpassword] = useState("");
  const [switchResult, setSwitchResult] = useState(null);

  useEffect(() => {
    const switchCase = (() => {
      switch (page) {
        case 1:
          return <AccountState setPage={setpage} />;
        case 2:
          return <ChildName setpage={setpage} setname={setname} />;
        case 3:
          return (
            <ChildGrade
              setpage={setpage}
              name={name}
              setpassword={setpassword}
              setuserName={setuserName}
            />
          );
        case 4:
          return (
            <ChildAccount
              setpage={setpage}
              name={name}
              password={password}
              userName={userName}
            />
          );
        case 5:
          return <Notes setpage={setpage} name={name} />;
        default:
          return <Finish setpage={setpage} name={name} />;
      }
    })();
    setSwitchResult(switchCase);
  }, [page]);
  return (
    <div className="parent-account-setup">
      <SimpleNav pageName={"addfirstchild"} />
      <div className="theContainer">
        <div className="wrapper">{switchResult}</div>
      </div>
    </div>
  );
};

export default AddFirstChild;
