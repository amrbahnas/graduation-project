import styles from "./Subject.module.css";
const Subject = ({ setsubject }) => {
  const selectedSubject = (e, subject) => {
    setsubject(subject);
    document.querySelectorAll("#subjects span").forEach((subject) => {
      subject.style.border = "none";
    });
    e.target.style.border = "1px solid black";
  };
  return (
    <div className={styles.subject}>
      <div className={styles.wrapper} id="subjects">
        <span onClick={(e) => selectedSubject(e, "arabic")}>Arabic</span>
        <span onClick={(e) => selectedSubject(e, "english")}>English</span>
        <span onClick={(e) => selectedSubject(e, "math")}>Math</span>
      </div>
    </div>
  );
};

export default Subject;
