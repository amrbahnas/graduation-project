import { useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import DashboardNav from "../../components/DashboardNav/DashboardNav";
import ApiClient from "../../services/api-client";
import { resetAll, setParentinfo } from "../../store/slices/userSlice";
import usePasswordFunction from "./../../hooks/usePasswordFunction";
import "./ManageParentAccount.css";
import { ArrowBackIcon } from "../../utils/icons";
const ManageParentAccount = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { forgotPassword, isLoading } = usePasswordFunction();
  const { _id, parentName, parentMail } = useSelector(
    (store) => store.userSlice
  );
  const [name, setName] = useState(parentName);
  const [mail, setMail] = useState(parentMail);

  // enter the endpoint *************
  // update
  const apiClient = new ApiClient("/parent/updateParentInfo/" + _id);
  // delete
  const apiClientTwo = new ApiClient("/parent/deleteAccount/" + _id);
  const updateAccount = (e) => {
    e.preventDefault();
    const body = {
      parentName: name,
      parentMail: mail,
      parentPhoneNumber: "01012345675",
      parentAge: 20,
    };
    toast.promise(apiClient.post(body), {
      loading: "Saving...",
      success: () => {
        dispatch(setParentinfo(body));
        return <b>Account updated successfully.</b>;
      },
      error: () => {
        return <b>Something went wrong.</b>;
      },
    });
  };
  const deleteAccount = () => {
    const res = window.confirm("Are you sure you want to delete this account?");
    if (!res) return;
    toast.promise(apiClientTwo.delete(), {
      loading: "Deleting...",
      success: () => {
        dispatch(resetAll());
        return <b>Account deleted successfully.</b>;
      },
      error: () => {
        return <b>Something went wrong.</b>;
      },
    });
  };

  return (
    <div className="manage-parent-account">
      <DashboardNav position={"manageParentAccount"} />
      <div className="theContainer">
        <div className="my-6">
          <ArrowBackIcon
            className="cursor-pointer"
            onClick={() => navigate(-1)}
          />
        </div>
        <div className="heading">
          <span>Manage Account</span>
          <button onClick={deleteAccount}>Remove Account</button>
        </div>
        <div className="body">
          <h3>Account Information</h3>
          <form onSubmit={updateAccount}>
            <div className="input">
              <span> Name</span>
              <div>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <button>
                  <span>save</span>
                </button>
              </div>
            </div>
            <div className="input">
              <span> Email</span>
              <div>
                <input
                  type="text"
                  value={mail}
                  onChange={(e) => setMail(e.target.value)}
                />
                <button>
                  <span>save</span>
                </button>
              </div>
            </div>
            <div className="input mt-8">
              <div>
                <button
                  className="w-full"
                  disabled={isLoading}
                  onClick={(e) => forgotPassword({ e, email: parentMail })}
                >
                  <span>{isLoading ? "Sending..." : "Forgot Password?"}</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ManageParentAccount;
