import { useEffect, useState } from "react";
import useQuestionData from "../../hooks/useQuestionData";
import DataSelectList from "../Data-select-list/DataSelectList";
import Loading from "../Full-loading/FullLoading";
import "./Common.css";
const DataPreview = ({
  subjectName,
  selectedGrade,
  setSelectedData,
  setEnableBTN,
  games,
}) => {
  const [checked, setChecked] = useState([]);
  const body = {
    grade: selectedGrade,
    subject: subjectName,
  };
  const { data, loading, error } = useQuestionData(body);
  const [passedData, setPassedData] = useState([]);
  useEffect(() => {
    if (data.length > 0) {
      const filteredData = games.includes("5")
        ? data
            .filter((item) => item.type === "sentence")
            .map((item) => ({ ...item, choices: item.choices[0].split(",") }))
        : data.filter((item) => item.type === "word");
      setPassedData(filteredData);
    }
  }, [data]);

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
          data={passedData}
          checked={checked}
          setChecked={setChecked}
          setmainSelection={setSelectedData}
        />
      }
    </div>
  );
};

export default DataPreview;
