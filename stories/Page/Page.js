import React from 'react'
import './Page.css'
import 'C:/Users/ynnav/Downloads/bipolar/bipolar_intern_assignment/app/bootstrap.css'


const Page = () => {
  return (
    <div className="pages">
      <div className="camera-details">
        <div className="frame-parent">
          <div className="icbaseline-arrow-back-parent">
            <div className="icbaseline-arrow-back">
              <img className="vector-icon" alt="" src="vector.svg" />
            </div>
            <div className="frame-group">
              <div className="vms-cameras-camera-details-parent">
                <div className="vms-cameras-container">
                  <span>
                    <b>VMS</b>
                  </span>
                  <span className="cameras-camera-details">
                    <span> / Cameras / </span>
                    <span className="camera-details1">Camera Details</span>
                  </span>
                </div>
                <div className="bank-entrance-front-view-camer">
                  Bank Entrance-front-view Camera1
                </div>
              </div>
              <div className="view-and-manage">
                View and manage camera details, recordings and connection
                details
              </div>
            </div>
          </div>
          <div className="group-parent">
            <div className="rectangle-parent">
              <div className="group-child"></div>
              <div className="filter-by">Filter by</div>
            </div>
            <div className="rectangle-group">
              <div className="group-item"></div>
              <div className="search">Search</div>
            </div>
            <div className="button">
              <div className="state-layer">
                <div className="label-text"><button type="button" className="btn btn-outline-secondary">Edit Camera</button></div>
              </div>
            </div>
            <div className="button">
              <div className="state-layer">
                <div className="label-text"><button type="button" className="btn btn-outline-secondary">Deactivate</button></div>
              </div>
            </div>
            <div className="button2">
              <div className="state-layer">
                <div className="label-text"><button type="button" className="btn btn-outline-danger">Delete Camera</button></div>
              </div>
            </div>
          </div>
        </div>
        <div className="camera-details-inner">
          <div className="frame-wrapper">
            <div className="frame-container">
              <div className="frame-div">
                <div className="bxvideo-recording-parent">
                  <img
                    className="bxvideo-recording-icon"
                    alt=""
                    src="bxvideorecording.svg"
                  />

                  <div className="view-recorded-videos">View Recorded Videos</div>
                </div>
                <div className="bxvideo-recording-parent">
                  <img
                    className="bxvideo-recording-icon"
                    alt=""
                    src="uimrefresh.svg"
                  />

                  <div className="view-recorded-videos">Refetch Camera</div>
                </div>
              </div>
              <div className="group-container">
                <div className="rectangle-container">
                  <img
                    className="group-inner"
                    alt=""
                    src="first.png"
                  />

                  <div className="pm-parent">
                    <div className="pm">01/05/2023 02:42:21 PM</div>
                    <div className="location">Hall 01</div>
                  </div>
                </div>
                <div className="frame-wrapper1">
                  <div className="frame-parent1">
                    <div className="camera-details-parent">
                      <div className="camera-details2">Camera Details</div>
                      <div className="active-wrapper">
                        <div className="active">Active</div>
                      </div>
                    </div>
                    <div className="offline-alert-parent">
                      <div className="location-parent">
                        <div className="location">Location:</div>
                        <div className="coimbatore">Coimbatore</div>
                      </div>
                      <div className="location-parent">
                        <div className="location">City:</div>
                        <div className="delhi-india">Coimbatore</div>
                      </div>
                      <div className="location-parent">
                        <div className="location">Timezone:</div>
                        <div className="delhi-india">Delhi-India</div>
                      </div>
                      <div className="location-parent">
                        <div className="location">Date added:</div>
                        <div className="delhi-india">Aug 03, 2023 12:01:42 PM</div>
                      </div>
                      <div className="location-parent">
                        <div className="location">Last update:</div>
                        <div className="delhi-india">Aug 03, 2023 12:01:42 PM</div>
                      </div>
                    </div>
                    <div className="offline-alert-parent">
                      <div className="location-parent">
                        <div className="location">Manufacture details:</div>
                        <div className="coimbatore">ADT</div>
                      </div>
                      <div className="location-parent">
                        <div className="location">RTSP/HLS URL:</div>
                        <div className="copy-url">Copy URL</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="camera-health-and-alert-parent">
                <div className="camera-health-and">Camera Health and Alert</div>
                <div className="frame-parent4">
                  <div className="frame-wrapper2">
                    <div className="frame-wrapper3">
                      <div className="offline-alert-parent">
                        <div className="offline-alert">Offline Alert</div>
                        <div className="if-camera-is">
                          If camera is continuously offline for
                        </div>
                        <div className="minutes">12 minutes</div>
                        <div className="send-an-email-to-parent">
                          <div className="send-an-email">Send an email to</div>
                          <div className="emailcom">email.com</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="frame-wrapper4">
                    <div className="frame-wrapper5">
                      <div className="offline-alert-parent">
                        <div className="location">Health Grade</div>
                        <div className="div">96%</div>
                        <div className="cheers-this-camera-had-no-off-parent">
                          <div className="cheers-this-camera">
                            Cheers, this camera had no offline time in the last
                            30 days
                          </div>
                          <div className="grade-a">Grade A</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="frame-wrapper4">
                    <div className="frame-wrapper7">
                      <div className="offline-alert-parent">
                        <div className="location">Health Logs</div>
                        <div className="today-0437-pm-activated-parent">
                          <div className="send-an-email">
                            Today, 04:37 pm: Activated
                          </div>
                          <div className="send-an-email">
                            23 Aug, 02:22 pm: Deactivated
                          </div>
                          <div className="send-an-email">
                            21 Aug, 05:12 am: Activated
                          </div>
                          <div className="send-an-email">
                            20 Aug, 02:12 am: Deactivated
                          </div>
                          <div className="send-an-email">
                            19 Aug, 02:12 am: Deactivated
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="camera-health-and-alert-parent">
                <div className="recent-recordings-parent">
                  <div className="camera-health-and">Recent Recordings</div>
                  <div className="view-all">View All</div>
                </div>
                <div className="frame-parent6">
                  <div className="group-parent1">
                    <div className="group-div">
                      <img
                        className="rectangle-icon"
                        alt=""
                        src="second.png"
                      />

                      <img
                        className="group-icon"
                        alt=""
                        src="group-32.svg"
                      />

                      <div className="rectangle-parent1">
                        <div className="rectangle-div"></div>
                        <div className="group-child1"></div>
                        <div className="div1">
                          <span>1:24 / </span>
                          <span className="span">53.30</span>
                        </div>
                      </div>
                    </div>
                    <div className="recording-0121-parent">
                      <div className="location">Recording_0121</div>
                      <div className="today-0442-pm">Today, 04:42 pm</div>
                    </div>
                  </div>
                  <div className="group-parent1">
                    <div className="group-div">
                      <img
                        className="rectangle-icon"
                        alt=""
                        src="third.png"
                      />

                      <img
                        className="group-icon"
                        alt=""
                        src="group-32.svg"
                      />

                      <div className="rectangle-parent1">
                        <div className="rectangle-div"></div>
                        <div className="group-child1"></div>
                        <div className="div1">
                          <span>1:24 / </span>
                          <span className="span">53.30</span>
                        </div>
                      </div>
                    </div>
                    <div className="recording-0121-parent">
                      <div className="location">Recording_0121</div>
                      <div className="today-0442-pm">Today, 02:14 pm</div>
                    </div>
                  </div>
                  <div className="group-parent1">
                    <div className="group-div">
                      <img
                        className="rectangle-icon"
                        alt=""
                        src="forth.png"
                      />

                      <img
                        className="group-icon"
                        alt=""
                        src="group-32.svg"
                      />

                      <div className="rectangle-parent1">
                        <div className="rectangle-div"></div>
                        <div className="group-child1"></div>
                        <div className="div1">
                          <span>1:24 / </span>
                          <span className="span">53.30</span>
                        </div>
                      </div>
                    </div>
                    <div className="recording-0121-parent">
                      <div className="location">Recording_0121</div>
                      <div className="today-0442-pm">Today, 02:09 pm</div>
                    </div>
                  </div>
                  <div className="group-parent1">
                    <div className="group-div">
                      <img
                        className="rectangle-icon"
                        alt=""
                        src="fifth.png"
                      />

                      <img
                        className="group-icon"
                        alt=""
                        src="group-32.svg"
                      />

                      <div className="rectangle-parent1">
                        <div className="rectangle-div"></div>
                        <div className="group-child1"></div>
                        <div className="div1">
                          <span>1:24 / </span>
                          <span className="span">53.30</span>
                        </div>
                      </div>
                    </div>
                    <div className="recording-0121-parent">
                      <div className="location">Recording_0121</div>
                      <div className="today-0442-pm">Today, 01:11 pm</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page