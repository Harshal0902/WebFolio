import React, { Component } from 'react'
import "./Education.css"
import Fade from 'react-reveal/Fade';
import GradImg from "../../assets/images/education-section/graduation-cap.png"
import SchoolImg from "../../assets/images/education-section/school-backpack.png"

export class Education extends Component {
  render() {
    return (
      <div id="education">
        <Fade left>
          <div>
            <h2 className="podcastbg">Education</h2>
            <div className="podcastfr">Education</div>
          </div>
        </Fade>
        <div className="timeline">

          <Fade left>
            <div className="timeline-event timeline-event--type1">
              <div className="timeline-event-icon ">
                <img alt="Graduation" width="80px" src={GradImg} />
              </div>
              <div className="timeline-event-date">
                2019-2023
              </div>
              <div className="timeline-event-content ">
                <div className="timeline-event-title">
                  SRM Institute of Science and Technology
                </div>
                <div className="timeline-event-description">
                  <p >Bachelor of Technology, Computer Science & Engineering (2019-2023) <br />
                    Current CGPA: 9.2/10</p>
                </div>
              </div>
            </div>
          </Fade>

          <Fade right>
            <div className="timeline-event timeline-event--type2">
              <div className="timeline-event-icon">
                <img alt="School" width="70px" className="SchoolImg" src={SchoolImg} />
              </div>
              <div className="timeline-event-date">
                2019
              </div>
              <div className="timeline-event-content">
                <div className="timeline-event-title">
                  Starex International School
                </div>
                <div className="timeline-event-description">
                  <p>12th CBSE<br />
                    Score: 74%<br />
                  </p>
                </div>
              </div>
            </div>
          </Fade>

          <Fade left>
            <div className="timeline-event timeline-event--type3">
              <div className="timeline-event-icon">
                <img alt="School" width="70px" className="SchoolImg" src={SchoolImg} />
              </div>
              <div className="timeline-event-date">
                2017
              </div>
              <div className="timeline-event-content">
                <div className="timeline-event-title">
                  Starex International school
                </div>
                <div className="timeline-event-description">
                  <p>10th CBSE<br />
                    Score: 9.2 CGPA<br />
                    Cyber Olympiad Gold Medalist (School Level)
                  </p>
                </div>
              </div>
            </div>
          </Fade>

        </div>
      </div>
    )
  }
}

export default Education
