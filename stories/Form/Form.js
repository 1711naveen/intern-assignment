import './Form.css';
import 'C:/Users/ynnav/Downloads/bipolar/bipolar_intern_assignment/app/bootstrap.css'

const Form = () => {
  return (
    <>
      <div className="outerbox">


        <div className="box ">
          <div className="innerBox">
            <div className="text1">
              XYZ
            </div>
            <div className="welcomeboard">
              <div className="welcome2">

                <div className="text2">
                  Welcome Onboard
                </div>
              </div>
              <div>
                <input type="email" className="form-control" placeholder='Your Name' size="57" />
              </div>
              <div >
                <input  className="form-control" placeholder='Company Name' size="57" />
              </div>

              <select className="form-select" aria-label="Default select example">
                <option selected>Select Industry</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>

              <div className="location">
                <div className="text4">
                  Select Number of Locations
                </div>
                <div className="btn-group" role="group" aria-label="Basic example">
                  <button type="button" className="btn btn-secondary m-2 rounded">1-10</button>
                  <button type="button" className="btn btn-secondary m-2 rounded">10-50</button>
                  <button type="button" className="btn btn-secondary m-2 rounded">50-150</button>
                  <button type="button" className="btn btn-secondary m-2 rounded">150+</button>
                </div>
              </div>

              <div className="d-grid gap-2">
                <button className="btn btn-secondary" type="button">Button</button>

              </div>
            </div>

          </div>

        </div>
      </div>

    </>
  );
};

export default Form;