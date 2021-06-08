import React, { Component } from 'react'
import "./Education.css"

export class Education extends Component {
  render() {
    return (
      <div id="education">
        <h2 className="podcastbg">Education</h2>
        <div className="podcastfr">Education</div>
        <div className="timeline">
          
          <div className="timeline__event timeline__event--type1">
            <div className="timeline__event__icon ">
              <img alt="Graduation" src="https://img.icons8.com/plasticine/60/000000/graduation-cap.png" />
            </div>
            <div className="timeline__event__date">
              2019-2023
              </div>
            <div className="timeline__event__content ">
              <div className="timeline__event__title">
              Indian Institutes of Technology 
                </div>
              <div className="timeline__event__description">
                <p >Bachelor of Technology, Computer Science & Engineering (2019-2023) <br />
                  Current CGPA: 10/10</p>
              </div>
            </div>
          </div>

          <div className="timeline__event timeline__event--type2">
            <div className="timeline__event__icon">
              <img alt="School" src="https://img.icons8.com/fluent/60/000000/school-backpack.png" />
            </div>
            <div className="timeline__event__date">
              2019
              </div>
            <div className="timeline__event__content">
              <div className="timeline__event__title">
              Indian Institutes of Technology
                </div>
              <div className="timeline__event__description">
                <p>12th CBSE<br />
                  Score: 99%<br />
                </p>
              </div>
            </div>
          </div>

          <div className="timeline__event timeline__event--type3">
            <div className="timeline__event__icon">
              <img alt="School" src="https://img.icons8.com/fluent/60/000000/school-backpack.png" />
            </div>
            <div className="timeline__event__date">
              2017
              </div>
            <div className="timeline__event__content">
              <div className="timeline__event__title">
              Indian Institutes of Technology
                </div>
              <div className="timeline__event__description">
                <p>10th CBSE<br />
                  Score: 10 CGPA
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
