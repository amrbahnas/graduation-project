import { useState } from "react";
import { useParams } from "react-router-dom";
import "./ManageAccount.css";
import { useSelector } from "react-redux";
import DashboardNav from "../../components/DashboardNav/DashboardNav";
import SelectGrade from "./../../components/Select-grade/SelectGrade";

import { toast } from "react-hot-toast";

import ApiClient from "../../services/api-client";
const ManageAccount = () => {
  const { _id } = useParams();
  const { children } = useSelector((store) => store.userSlice);
  const { _id: parentId } = useSelector((store) => store.userSlice);
  const { studentName, studentUserName, studentPassword, studentGrade } =
    children.find((child) => child._id === _id);
  const [childGrade, setChildGrade] = useState(studentGrade);
  const [childName, setChildName] = useState(studentName);
  const [password, setPassword] = useState(studentPassword);
  // enter the endpoint *************
  const apiClient = new ApiClient("/endpoint");
  const updateAccount = (e) => {
    e.preventDefault();
    const body = {
      _id,
      studentName: childName,
      studentGrade: childGrade,
      studentPassword: password,
    };
    toast.promise(apiClient.updateInfo(body), {
      loading: "Saving...",
      success: <b>Account updated successfully.</b>,
      error: () => {
        return <b>Something went wrong.</b>;
      },
    });
  };
  const deleteAccount = () => {
    toast.promise(apiClient.deleteAccount(), {
      loading: "Deleting...",
      success: <b>Account deleted successfully.</b>,
      error: () => {
        return <b>Something went wrong.</b>;
      },
    });
  };
  return (
    <div className="manage-account">
      <DashboardNav position={"manageaccount"} />
      <div className="theContainer">
        <div className="heading">
          <span>Manage Child</span>
          <button onClick={deleteAccount}>Remove Account</button>
        </div>
        <div className="body">
          <h3>Account Information</h3>
          <span>
            Below is the information that your child needs to log into and play
            the game.
          </span>
          <div className="info">
            <span>
              username: <strong>{studentUserName}</strong>
            </span>
            <span>
              password: <strong>{studentPassword}</strong>
            </span>
            <span>
              Grade: <strong>{studentGrade}</strong>
            </span>
          </div>
          <form onSubmit={updateAccount}>
            <div className="input">
              <span>Child Name</span>
              <div>
                <input
                  type="text"
                  value={childName}
                  onChange={(e) => setChildName(e.target.value)}
                />
                <button>
                  <span>save</span>
                </button>
              </div>
            </div>
            <div className="input">
              <span>New Password</span>
              <div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button>
                  <span>save</span>
                </button>
              </div>
            </div>
            <div className="input">
              <div>
                <SelectGrade
                  setChildGrade={setChildGrade}
                  childGrade={childGrade}
                />
                <button className="mt-2">
                  <span>save</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ManageAccount;
