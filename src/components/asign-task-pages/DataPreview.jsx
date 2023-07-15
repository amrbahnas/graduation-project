import { useEffect, useState } from "react";
import useQuestionData from "../../hooks/useQuestionData";
import DataSelectList from "../Data-select-list/DataSelectList";
import Loading from "../Full-loading/FullLoading";
import "./Common.css";
const DataPreview = ({
  subjectName,
  selectedGrade,
  selectetedData,
  setSelectedData,
  setEnableBTN,
  games,
}) => {
  const [checked, setChecked] = useState([]);
  const [passedData, setPassedData] = useState([]);
  const body = {
    grade: selectedGrade,
    subject: subjectName,
  };
  const { data, isLoading, isError } = useQuestionData(body);
  console.log(data, "data");
  useEffect(() => {
    if (!data) return;
    let filteredData = [];
    if (subjectName === "math" && data) {
      filteredData = data;
    } else if (subjectName === "arabic" && data) {
      filteredData = games.includes("7")
        ? data.filter((item) => item.definitionInAc.length >= 1)
        : data.filter((item) => item.definitionInAc.length === 1);
    } else if (data.length) {
      filteredData = games.includes("5")
        ? data
            .filter((item) => item.type === "sentence")
            .map((item) => ({ ...item, choices: item.choices[0].split(",") }))
        : data.filter((item) => item.type === "word");
    }
    setPassedData(filteredData);
  }, [data, games, subjectName]);

  useEffect(() => {
    setSelectedData([]);
  }, []);

  useEffect(() => {
    if (checked.length === 6) {
      setEnableBTN(true);
    } else {
      setEnableBTN(false);
    }
  }, [checked]);

  if (isError) return <p>Error</p>;
  if (!data) {
    return (
      <div className="border-2 shadow-inner mb-4">
        <span className="block mx-auto mt-16 w-fit">No items found !</span>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "200px" }}>
      <div className=" text-neutral-600 capitalize   ">
        select only six items {selectetedData.length} of 6
      </div>

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
      {selectetedData.length > 6 && (
        <div className="  capitalize text-red-500 flex justify-end  mb-4 text-sm ">
          you have selected more than 6 items
        </div>
      )}
    </div>
  );
};

export default DataPreview;
