import React, { useEffect, useState } from "react";
import useTasks from "../../hooks/useTasks";
import DashboardNav from "../../components/DashboardNav/DashboardNav";
import { SpeedIcon, LightbulbIcon, ArrowBackIcon } from "../../utils/icons";
import { Link, useParams, useNavigate } from "react-router-dom";
/// redux
import { useSelector } from "react-redux";
// component
import TaskCard from "../../components/Task-card/TaskCard";
import "./ChildDashboard.css";
import Loading from "../../components/Full-loading/FullLoading";
import { current } from "@reduxjs/toolkit";
import LoadingDots from "./../../components/LoadingDots/LoadingDots";
import TaskModel from "../../components/TaskModel/TaskModel";
const ChildDashboard = () => {
  const navigate = useNavigate();
  const { _id, currentPage } = useParams();
  const { data, isLoading, isError } = useTasks(_id);

  console.log("data", data);
  const {
    children = [],
    studentGrade,
    _id: parentId,
  } = useSelector((store) => store.userSlice);
  const [child, setChild] = useState({});

  useEffect(() => {
    const child = children?.filter((child) => child?._id === _id)[0];
    if (!child) {
      navigate("/parent/my-children");
    } else {
      setChild(child);
    }
  }, [_id]);

  const [tasks, setTasks] = React.useState([]);
  useEffect(() => {
    if (!Array.isArray(data)) {
      setTasks([]);
      return;
    }
    if (data.length === 0) {
      setTasks([]);
      return;
    }

    if (currentPage === "alltasks") {
      setTasks(data);
      return;
    } else {
      setTasks(data.filter((task) => task?.Subject === currentPage));
    }
  }, [currentPage, data, _id]);

  return (
    <div className="parent-dashboard">
      <DashboardNav position={"dashboard"} />
      <div className="theContainer">
        <div className="dashboard-wrapper">
          <div className="nav">
            <ul>
              <li className=" cursor-pointer">
                <SpeedIcon />
                <span> Dashboard</span>
              </li>
              <li>
                <div className=" ml-8 mt-6">
                  <ArrowBackIcon
                    className="cursor-pointer"
                    onClick={() => navigate(-1)}
                  />
                </div>
              </li>
              {/* <li>
                <LightbulbIcon />
                <span> Learning</span>
              </li> */}
            </ul>
          </div>

          <div className="dashboard">
            <div className="title">
              <span>{child?.studentName}'s Dashboard</span>
            </div>
            <div className="boxs">
              <div className="activity min-h-[400px]">
                <h3>
                  <span>Tasks</span>
                </h3>
                {isLoading ? (
                  <div className=" w-fit mx-auto mt-20">
                    <LoadingDots />
                  </div>
                ) : tasks?.length ? (
                  <div className="tasks">
                    <div className=" min-h-[380px] max-h-[500px] mb-4  overflow-scroll">
                      <TaskCard number={"1"} tasks={tasks} />
                    </div>
                    <div className="btns">
                      <button>
                        <Link
                          to={"/parent/AddSubjectData/" + parentId}
                          className="w-full h-full"
                        >
                          Add Data
                        </Link>
                      </button>
                      <button className=" border-yellow shadow-md">
                        <Link to="/parent/asigntask" className=" w-full h-full">
                          Add Task
                        </Link>
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="no-tasks">
                    <img src="/assets/images/noActivity.svg" alt="" />
                    <div className=" flex flex-col gap-1">
                      <span>{child?.studentName} hasn’t Tasks yet</span>
                      <span className="description">
                        Once {child?.studentName} starts to play, you will be
                        able to see what they have worked on here.
                      </span>
                      <span className=" font-normal">
                        {child?.studentName} hastn't Data Yet ?
                        <Link
                          to={"/parent/AddSubjectData/" + parentId}
                          className="underline cursor-pointer"
                        >
                          Add Data
                        </Link>
                      </span>
                    </div>
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
                  {child?.studentName} is performing at{" "}
                  <strong> Grade {child.studentGrade} </strong>
                  currently{" "}
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
                  <span>Student Activity</span>
                </h3>
                <div className="body">not yet</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* {loading && <Loading />} */}
    </div>
  );
};

export default ChildDashboard;
