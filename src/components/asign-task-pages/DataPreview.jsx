import { useEffect, useState } from "react";
import useParentData from "../../hooks/useParentData";
import DataSelectList from "../Data-select-list/DataSelectList";
import Loading from "../Full-loading/FullLoading";
import "./Common.css";
const DataPreview = ({
  subjectName,
  selectedGrade,
  setSelectedData,
  setEnableBTN,
}) => {
  const [checked, setChecked] = useState([]);
  const body = {
    grade: selectedGrade,
    subject: subjectName,
  };
  const { data, loading, error } = useParentData(body);

  useEffect(() => {
    if (checked.length === 6) {
      setEnableBTN(true);
    } else {
      setEnableBTN(false);
    }
  }, [checked]);

  return (
    <div style={{ minHeight: "200px" }}>
      {loading && (
        <>
          <Loading />
          <span></span>
        </>
      )}
      {
        <DataSelectList
          data={data}
          checked={checked}
          setChecked={setChecked}
          setmainSelection={setSelectedData}
        />
      }
    </div>
  );
};

export default DataPreview;
