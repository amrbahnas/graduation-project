import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./ManageChildAccount.css";
import { useSelector } from "react-redux";
import DashboardNav from "../../components/DashboardNav/DashboardNav";
import SelectGrade from "../../components/Select-grade/SelectGrade";
import { toast } from "react-hot-toast";
import ApiClient from "../../services/api-client";
import { useDispatch } from "react-redux";
import { deleteChildren, updateChildren } from "../../store/slices/userSlice";
const ManageChildAccount = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { _id } = useParams();

  const { children } = useSelector((store) => store.userSlice);
  const { studentName, studentUserName, studentPassword, studentGrade } =
    children.find((child) => child._id === _id);
  const [childGrade, setChildGrade] = useState(studentGrade);
  const [childName, setChildName] = useState(studentName);
  const [childUserName, setChildUserName] = useState(studentUserName);
  const [password, setPassword] = useState(studentPassword);
  // enter the endpoint *************
  const apiClient = new ApiClient("Student/studentupdateinfo/" + _id);
  const apiClientTwo = new ApiClient("/student/studentupdatepassword/" + _id);
  const apiClientThree = new ApiClient("/student/deletestudent/" + _id);
  const updateAccount = (e) => {
    e.preventDefault();
    const body = {
      newusername: childUserName,
      newname: childName,
      newstage: childGrade,
    };
    toast.promise(apiClient.post(body), {
      loading: "Saving...",
      success: () => {
        dispatch(updateChildren(body));
        return <b>Account updated successfully.</b>;
      },
      error: () => {
        return <b>Something went wrong.</b>;
      },
    });
  };
  const updatePassword = (e) => {
    e.preventDefault();
    const body = {
      newpassword: password,
    };
    toast.promise(apiClientTwo.post(body), {
      loading: "Saving...",
      success: () => {
        dispatch(updateChildren(body));
        return <b>password updated successfully.</b>;
      },
      error: () => {
        return <b>Something went wrong.</b>;
      },
    });
  };

  const deleteAccount = () => {
    const res = window.confirm("Are you sure you want to delete this account?");
    if (!res) return;
    toast.promise(apiClientThree.delete(), {
      loading: "Deleting...",
      success: () => {
        navigate("/parent/my-children");
        dispatch(deleteChildren(_id));
        return <b>Account deleted successfully.</b>;
      },
      error: () => {
        return <b>Something went wrong.</b>;
      },
    });
  };
  return (
    <div className="manage-account">
      <DashboardNav position={"manageaccount"} />
      <div className="theContainer ">
        <div className="heading">
          <span>Manage Child</span>
          <button onClick={deleteAccount}>Remove Account</button>
        </div>
        <div className="flex flex-col w-full md:flex-row justify-center gap-10 items-center md:items-start mb-10 ">
          <div className="body">
            <h3>Account Information</h3>
            <span>
              Below is the information that your child needs to log into and
              play the game.
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
          <div className="body">
            <form action="">
              <div className="input">
                <span>User Name</span>
                <div>
                  <input
                    type="text"
                    value={childUserName}
                    onChange={(e) => setChildUserName(e.target.value)}
                  />
                  <button
                    onClick={(e) => {
                      updateAccount(e);
                    }}
                  >
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
                  <button
                    onClick={(e) => {
                      updatePassword(e);
                    }}
                  >
                    <span>save</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageChildAccount;
