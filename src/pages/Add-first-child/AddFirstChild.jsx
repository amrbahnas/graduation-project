import React, { useEffect, useState } from "react";
import SimpleNav from "../../components/SimpleNav/SimpleNav";
import { useSelector } from "react-redux";
import "./AddFirstChild.css";
import AccountState from "../../components/add-first-child-pages/AccountState";
import ChildName from "../../components/add-first-child-pages/ChildName";
import ChildGrade from "../../components/add-first-child-pages/ChildGrade";
import ChildAccount from "../../components/add-first-child-pages/ChildAccount";
import Notes from "../../components/add-first-child-pages/Notes";
import Finish from "./../../components/add-first-child-pages/Finish";
const AddFirstChild = () => {
  const { page } = useSelector((store) => store.addFirstChildSlice);
  const [switchResult, setSwitchResult] = useState(null);

  useEffect(() => {
    const switchCase = (() => {
      switch (page) {
        case 1:
          return <AccountState />;
        case 2:
          return <ChildName />;
        case 3:
          return <ChildGrade />;
        case 4:
          return <ChildAccount />;
        case 5:
          return <Notes />;
        default:
          return <Finish />;
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
