import React, { useEffect } from "react";
import DashboardNav from "../../components/DashboardNav/DashboardNav";
import { SpeedIcon, LightbulbIcon } from "../../utils/icons";
import { Link, useParams, useNavigate } from "react-router-dom";
/// redux
import { useSelector, useDispatch } from "react-redux";
import {
  getChildQuestions,
  getQuestionsFeedback,
} from "../../store/slices/questionsDataSlice";
// component
import TaskCard from "../../components/Task-card/TaskCard";
import "./ChildDashboard.css";
const ChildDashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { _id } = useParams();
  const { children = [], login = false } = useSelector(
    (store) => store.userSlice
  );
  const { english, loading, feedBack } = useSelector(
    (store) => store?.questionsDataSlice
  );

  const { studentName = "" } = children?.filter(
    (child) => child?._id === _id
  )[0];
  useEffect(() => {
    const data = {
      unit: 1,
      stadge: 1,
      lesson: 1,
    };
    dispatch(getChildQuestions(data));
    dispatch(getQuestionsFeedback(_id));
  }, [dispatch, _id]);

  return (
    <div className="parent-dashboard">
      <DashboardNav position={"dashboard"} />
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
                {feedBack?.length === 0 ? (
                  <div className="tasks">
                    <TaskCard number={"1"} />
                    <div className="btns">
                      <button>
                        <span>Reordring Tasks</span>
                      </button>
                      <button>
                        <Link to="/parent/asigntask">Add Task</Link>
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="no-tasks">
                    <img src="/assets/images/noActivity.svg" alt="" />
                    <span>{studentName} hasn’t Tasks yet</span>
                    <span className="description">
                      Once {studentName} starts to play Prodigy, you will be
                      able to see what they have worked on here.
                    </span>
                    <button>
                      <span>Add Tasks</span>
                    </button>
                  </div>
                )}
              </div>
              <div className="grade">
                {/* <span className="view-all">view All</span> */}
                <h3>
                  <span>Grade level</span>
                  {/* <span>{english.length} found</span> */}
                </h3>

                <p>
                  ahmed is performing at <strong> Grade 1 </strong>
                  level currently{" "}
                  <Link
                    to={`/parent/my-children/${_id}/manage-account`}
                    className="underline cursor-pointer"
                  >
                    Manage Account
                  </Link>
                  .
                </p>
                {/* {loading ? (
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
                          key={word._id}
                          image={word.Image}
                        />
                      );
                    })}
                  </div>
                ) : (
                  <div className="no-data">
                    <span>Not data yet! </span>
                    <Link to={`/AddSubjectData/${_id}/unit`}>Add data</Link>
                  </div>
                )} */}
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
      {/* <SubjectData/> */}
    </div>
  );
};

export default ChildDashboard;
