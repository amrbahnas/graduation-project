import { useState, useEffect } from "react";
import "./Common.css";
import { useDispatch, useSelector } from "react-redux";
import { getChildQuestions } from "../../store/slices/questionsDataSlice";
import DataSelectList from "../Data-select-list/DataSelectList";
import toast from "react-hot-toast";
const DataPreview = ({
  subjectName,
  selectedGrade,
  setSelectedData,
  setEnableBTN,
}) => {
  const dispatch = useDispatch();
  const { loading } = useSelector((store) => store.questionsDataSlice);
  const [subjecyData, setsubjectData] = useState([]);
  const [checked, setChecked] = useState([]);

  useEffect(() => {
    if (checked.length === 6) {
      setEnableBTN(true);
    } else {
      setEnableBTN(false);
    }
  }, [checked]);

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
        toast.error("something went wrong");
      });
  }, [dispatch]);
  return (
    <div style={{ minHeight: "200px" }}>
      {loading ? (
        <span></span>
      ) : (
        /* <img
          src="/assets/svg/loading.svg"
          className=" w-5 h-5 mx-auto mt-32"
          alt=""
        /> */

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
