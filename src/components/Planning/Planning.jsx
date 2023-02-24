import React from "react";
import "./Planning.css";
const Planning = () => {
  return (
    <div className="planning">
      <div className="theContainer">
        <div className="wrapper">
          <div className="top">
            <h2>Tools for classrooms and kitchen tables</h2>
            <p>
              Whether you’re lesson planning at school or tackling questions at
              home, Prodigy’s evidence-based tools help you make learning fun
              and effective for kids.
            </p>
          </div>
          <div className="bottom">
            <div className="box">
              <img src="assets/images/home page/3.jpg" alt="" />
              <strong>Parents — Combine learning time with playtime</strong>

              <p>
                Cheer on your child as they have fun learning. Use your parent
                portal tools to motivate learning, track your child’s progress
                and inspire them to practice new skills
              </p>
              <a href="#r">See all parent benefits</a>
            </div>

            <div className="box">
              <img src="assets/images/home page/4.avif" alt="" />
              <strong>
                Teachers — Align in-game adventures with your lesson plan
              </strong>

              <p>
                Spend less time grading and more time teaching. As students
                play, assign curriculum-aligned skill practice, gather insights
                and easily pinpoint learning gaps.
              </p>
              <a href="#r">See all teacher tools</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Planning;
