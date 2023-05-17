import React, { useEffect } from "react";
import useTask from "../../hooks/useTask";
import DashboardNav from "../../components/DashboardNav/DashboardNav";
import { SpeedIcon, LightbulbIcon } from "../../utils/icons";
import { Link, useParams, useNavigate } from "react-router-dom";
/// redux
import { useSelector } from "react-redux";
// component
import TaskCard from "../../components/Task-card/TaskCard";
import "./ChildDashboard.css";
import Loading from "../../components/Full-loading/FullLoading";
import { current } from "@reduxjs/toolkit";
const ChildDashboard = () => {
  const { _id, currentPage } = useParams();
  const { children = [], studentGrade } = useSelector(
    (store) => store.userSlice
  );

  const { studentName = "" } = children?.filter(
    (child) => child?._id === _id
  )[0];

  const { data, loading, error } = useTask(_id);
  const [tasks, setTasks] = React.useState([]);

  useEffect(() => {
    if (!data) return;
    if (currentPage === "alltasks") {
      console.log("all tasks");
      setTasks(data);
      return;
    }
    setTasks(data.filter((task) => task?.Subject === currentPage));
  }, [currentPage, data]);

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
                {tasks?.length > 0 ? (
                  <div className="tasks">
                    <div className="  h-[380px]  overflow-scroll">
                      <TaskCard number={"1"} tasks={tasks} />
                    </div>
                    <div className="btns">
                      <button>
                        <span>Reordring Tasks</span>
                      </button>
                      <button>
                        <Link to="/parent/asigntask" className=" w-full h-full">
                          Add Task
                        </Link>
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="no-tasks">
                    <img src="/assets/images/noActivity.svg" alt="" />
                    <span>{studentName} hasn’t Tasks yet</span>
                    <span className="description">
                      Once {studentName} starts to play, you will be able to see
                      what they have worked on here.
                    </span>
                    <button>
                      <Link to="/parent/asigntask">Add Task</Link>
                    </button>
                  </div>
                )}
              </div>
              <div className="grade">
                <h3>
                  <span>Grade level</span>
                </h3>

                <p>
                  {studentName} is performing at{" "}
                  <strong> Grade {studentGrade} </strong>
                  level currently{" "}
                  <Link
                    to={`/parent/my-children/${_id}/manage-account`}
                    className="underline cursor-pointer"
                  >
                    Manage Account
                  </Link>
                  .
                </p>
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
      {loading && <Loading />}
    </div>
  );
};

export default ChildDashboard;
