import React, { Component } from 'react'
import "./Education.scss"

export class Education extends Component {
  render() {
    return (
      <div id="education">
        <h2 className="podcastbg">Education</h2>
        <div className="podcastfr">Education</div>
        <div className="timeline">
          <div className="timeline-event  animated fadeInUp delay-3s timeline-event--type1">
            <div className="timeline-event-icon ">
              <img src="https://img.icons8.com/plasticine/60/000000/graduation-cap.png" />
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

          <div className="timeline-event animated fadeInUp delay-2s timeline-event--type2">
            <div className="timeline-event-icon">
              <img src="https://img.icons8.com/fluent/60/000000/school-backpack.png" />
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

          <div className="timeline-event animated fadeInUp delay-1s timeline-event--type3">
            <div className="timeline-event-icon">
              <img src="https://img.icons8.com/fluent/60/000000/school-backpack.png" />

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
        </div>
      </div>
    )
  }
}

export default Education
