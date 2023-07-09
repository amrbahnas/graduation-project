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
  const { data, isLoading, isError } = useQuestionData(body);
  if (isError) return <p>Error</p>;
  if (!data)
    return (
      <div className="border-2 shadow-inner mb-4">
        <span className="block mx-auto mt-16 w-fit">No items found !</span>;
      </div>
    );
  const [passedData, setPassedData] = useState([]);
  useEffect(() => {
    if (subjectName === "math" && data) {
      setPassedData(data);
      return;
    }
    if (data.length) {
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
      {isLoading && (
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
