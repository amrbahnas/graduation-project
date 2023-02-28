import React, { useEffect } from "react";
import DashboardNav from "../../components/DashboardNav/DashboardNav";
import SpeedIcon from "@mui/icons-material/Speed";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import { Link, useParams } from "react-router-dom";
/// redux
import { useSelector, useDispatch } from "react-redux";
import { getChildQuestions } from "../../store/slices/questionsDataSlice";
// component
import SingleEnglishWord from "../../components/SingleE-english-word/SingleEnglishWord";

import "./ChildDashboard.css";
const ChildDashboard = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { english, loading } = useSelector((store) => store.questionsDataSlice);
  const { children } = useSelector((store) => store.userSlice);
  const { studentName } = children.filter((child) => child._id === id)[0];
  useEffect(() => {
    const data = {
      unit: 1,
      stadge: 1,
      lesson: 1,
    };
    dispatch(getChildQuestions(data));
  }, [dispatch, id]);

  return (
    <div className="parent-dashboard">
      <DashboardNav />
      <div className="theContainer">
        <div className="dashboard-wrapper">
          <div className="nav">
            <ul>
              <li>
                <SpeedIcon />
                <span> Dashboard</span>
              </li>
              <li>
                <LightbulbIcon />
                <span> Learning</span>
              </li>
            </ul>
          </div>

          <div className="dashboard">
            <div className="title">
              <span>{studentName}'s Dashboard</span>
            </div>
            <div className="boxs">
              <div className="activity">
                <h3>
                  <span>Recent activity</span>
                </h3>
                <div className="body">
                  <img src="/assets/images/noActivity.svg" alt="" />
                  <span>{studentName} hasn’t Tasks yet</span>
                  <span className="description">
                    Once {studentName} starts to play Prodigy, you will be able
                    to see what they have worked on here.
                  </span>
                  <button>
                    <span>Add Tasks</span>
                  </button>
                </div>
              </div>
              <div className="subject-data">
                <span className="view-all">view All</span>
                <h3>
                  <span>Subject data</span>
                  <span>{english.length} found</span>
                </h3>
                {loading ? (
                  <img
                    src="/assets/svg/loading.svg"
                    alt=""
                    className="loading"
                  />
                ) : english.length > 0 ? (
                  <div className="data">
                    {english.map((word) => {
                      return (
                        <SingleEnglishWord
                          wordData={word}
                          key={word}
                          image={word.Image}
                        />
                      );
                    })}
                  </div>
                ) : (
                  <div className="no-data">
                    <span>Not data yet! </span>
                    <Link to={`/gameSetup/${id}/unit`}>Add data</Link>
                  </div>
                )}
              </div>
              <div className="feadback">
                <h3>
                  <span>Weekly questions answered</span>
                </h3>
                <div className="body">not yet</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChildDashboard;
