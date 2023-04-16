import { useNavigate } from "react-router-dom";
import { resetAll } from "../../store/slices/userSlice";
import { useDispatch } from "react-redux";
import { ArrowBackIosIcon, LogoutIcon } from "../../utils/icons";
import "./SimpleNav.css";
const SimpleNav = ({ pageName }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const signUp = () => {
    dispatch(resetAll());
  };
  return (
    <div className="simple-nav">
      {pageName === "addfirstchild" ? (
        <div className="btn" onClick={signUp}>
          <LogoutIcon />
          <span>Logout</span>
        </div>
      ) : (
        <div className="btn" onClick={(e) => navigate(-1)}>
          <ArrowBackIosIcon />
          <span>back</span>
        </div>
      )}

      <img
        src="/assets/brand/logo.svg"
        alt=""
        onClick={(e) => navigate("/", { replace: true })}
      />
      <div className="hidden md:block w-10"></div>
    </div>
  );
};

export default SimpleNav;
