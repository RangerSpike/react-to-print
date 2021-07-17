import React from "react";

export class ComponentToPrint extends React.PureComponent {
  render() {
    return (
      <div className="Container" style={{ width: "100%" }}>
        <div className="row Box1">
          <div className="col-sm-4 Box1First">
            <img src="logoPdf.png" alt="logo" />
          </div>

          <div className="col-sm-4 Box1Mid">
            <h4>PURCHASE ORDER</h4>
          </div>

          <div className="col-sm-4 Box1Last">
            <div className="Box1LastData">
              <h5>Doc No : 1200112</h5>

              <h5>Date : 29-02-2001</h5>

              <h5>Rev. No : 1200112</h5>
            </div>
          </div>
        </div>

        <div className="row Box2">
          <div className="col-xs-6 Box2Left">
            <div className="Box2LeftData">
              <h5 style={{ fontSize: "25px", textAlign: "left" }}>
                Invoice To
              </h5>

              <h6 style={{ fontSize: "25px", textAlign: "left" }}>
                Entema Al Shamal Gen. cont. Est
              </h6>

              <p style={{ fontSize: "16px", textAlign: "left" }}>
                Al-Jubail St P.O. Box 2816, Jubail 31951, Saudi Arabia
                <br />
                <strong>Phone:</strong> 013 363 1210
                <br />
                <strong>Email:</strong> info@entema-sa.com
                <br />
                <strong>VAT No:</strong> 310005823700003
              </p>
            </div>
          </div>

          <div className="col-sm-6 Box2Right">
            <h4 style={{ margin: "15px" }}>Work Order</h4>
            <div className="Box2RightData">
              <div className="row">
                <div className="col-sm-6">
                  <h5>Number : Ponumber123123</h5>
                </div>
                <div className="col-sm-6">
                  <h5>Project : 123Projexct</h5>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <h5>Mod/Terms : Ponumber123123</h5>
                  </div>

                  <div className="col-sm-6">
                    <h5>Payment : Ponumber123123</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row Box3">
          <div className="col-sm-6 Box3Left">
            <div className="row">
              <div className="col-xs-6">
                <h5>Vendor : POVENDOE</h5>
              </div>

              <br />
              <div className="col-xs-6">
                <h5>Code : pocode</h5>
              </div>
            </div>

            <div className="row">
              <div className="col-xs-6">
                <h5>Email : POEMAIL</h5>
              </div>

              <div className="col-xs-6 ">
                <h5>Phone : POHONE</h5>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <h5>Contact Person: CPERSON</h5>
              </div>
              <div className="col-sm-6">
                <h5>Mobile : 81201012</h5>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-7">
                <h5>VAT :VATSATSTTA</h5>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-6">
                <h5>Address : poaddress</h5>
              </div>
            </div>
          </div>

          <div className="col-sm-6 Box3Right">
            <h1>Work Schedule</h1>

            <div className="Box3RightData">
              <h5>Start : STARTDATE</h5>

              <h5>End Date : POENDDATE</h5>

              <h5>Location : POLOCATION</h5>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
