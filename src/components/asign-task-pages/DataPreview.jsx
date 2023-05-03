import { useState, useEffect } from "react";
import "./Common.css";
import { useDispatch, useSelector } from "react-redux";
import { getChildQuestions } from "../../store/slices/questionsDataSlice";
import DataSelectList from "../Data-select-list/DataSelectList";
const DataPreview = ({ subjectName, selectedGrade, setSelectedData }) => {
  const dispatch = useDispatch();
  const { loading } = useSelector((store) => store.questionsDataSlice);
  const [subjecyData, setsubjectData] = useState([]);
  const [checked, setChecked] = useState([]);
  console.log(subjecyData);
  useEffect(() => {
    const data = {
      grade: selectedGrade,
      subject: subjectName,
    };
    dispatch(getChildQuestions(data))
      .unwrap()
      .then((action) => {
        setsubjectData(action);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [dispatch]);
  return (
    <div style={{ minHeight: "200px" }}>
      {loading ? (
        <img
          src="/assets/svg/loading.svg"
          className=" w-5 h-5 mx-auto mt-32"
          alt=""
        />
      ) : (
        <DataSelectList
          data={subjecyData}
          checked={checked}
          setChecked={setChecked}
          setmainSelection={setSelectedData}
        />
      )}
    </div>
  );
};

export default DataPreview;
