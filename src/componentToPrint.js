import React from "react";

export class ComponentToPrint extends React.PureComponent {

    render() {
        return (
            <div id="divToPrint" className="mt4">

                <div className="col-sm-12 print-div">
                    <div className="print-quot">
                        <div className="row">
                            <div className="col-sm-3 logo-div">
                                <img src="logoPdf.png" style={{ width: "100%" }} alt="logo" />
                            </div>
                            <div className="col-sm-4 print-quot1">
                                <h4>PURCHASE ORDER</h4>
                            </div>

                            <div className="print-quot6">
                                <div className="row">
                                    <div className="col-sm-5 col-xs-4 pt-left">Doc No</div>
                                    <div className="col-sm-7 col-xs-8 pt-right"></div>
                                </div>

                                <div className="row">
                                    <div className="col-sm-5 col-xs-4 pt-left">Date</div>
                                    <div className="col-sm-7 col-xs-8 pt-right"></div>
                                </div>

                                <div className="row">
                                    <div className="col-sm-5 col-xs-4 pt-left">Rev. No</div>
                                    <div className="col-sm-7 col-xs-8 pt-right"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row print-detail">
                    <div className="col-sm-6 left1">
                        <div className="print-detail1">
                            <h5 style={{ fontSize: "14px", textAlign: "left" }}>
                                Invoice To
                            </h5>
                            <h1>Entema Al Shamal Gen. cont. Est</h1>
                            <p>
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

                    <div className="col-sm-6 right1">
                        <div className="print-detail3 pd3">
                            <h1>Work Order</h1>
                            <div className="row pd8-det">
                                <div className="col-sm-5 left1">
                                    <div className="row">
                                        <div className="col-sm-7 pri-field-head">Number</div>
                                        <div className="col-sm-5 pri-field-data pon">

                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-sm-7 pri-field-head">Project</div>
                                        <div className="col-sm-5 pri-field-data"></div>
                                    </div>
                                </div>

                                <div className="col-sm-7 right1">
                                    <div className="row">
                                        <div className="col-sm-7 pri-field-head">
                                            Quatation Ref
                                        </div>
                                        <div className="col-sm-5 pri-field-data">

                                        </div>
                                    </div>
                                </div>

                                <div className="col-sm-12">
                                    <div className="row">
                                        <div className="col-sm-6 pri-field-head">
                                            Mode / Terms Payment
                                        </div>
                                        <div className="col-sm-6 pri-field-data">

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row" style={{ marginTop: "10px" }}>
                    <div className="col-sm-8 left1">
                        <div className="print-vendor">
                            <div className="row">
                                <div className="col-sm-8 left1">
                                    <div className="row ven-row">
                                        <div className="col-sm-4 pri-field-head pv3">Vendor</div>
                                        <div
                                            className="col-sm-8 pri-field-data p-data"
                                            style={{ fontSize: "13px", fontWeight: "500" }}
                                        >

                                        </div>
                                    </div>
                                </div>

                                <br />
                                <div className="col-sm-4 right1">
                                    <div className="row pvc">
                                        <div className="col-sm-6 pri-field-head">Code</div>
                                        <div className="col-sm-6 pri-field-data p-data1">

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="row pv2">
                                        <div className="col-sm-3 pri-field-head">Address</div>
                                        <div className="col-sm-9 pri-field-data"> </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-sm-5 left1">
                                    <div className="row">
                                        <div className="col-sm-6 pri-field-head pv4">Ph</div>
                                        <div className="col-sm-6 pri-field-data"></div>
                                    </div>
                                </div>

                                <div className="col-sm-7 right1">
                                    <div className="row">
                                        <div className="col-sm-7 pri-field-head">
                                            Contact Person
                                        </div>
                                        <div className="col-sm-5 pri-field-data">

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-sm-5 left1">
                                    <div className="row">
                                        <div className="col-sm-5 pri-field-head pv4">Mobile</div>
                                        <div className="col-sm-7 pri-field-data"></div>
                                    </div>
                                </div>

                                <div className="col-sm-7 right1">
                                    <div className="row">
                                        <div className="col-sm-3 pri-field-head">VAT</div>
                                        <div className="col-sm-9 pri-field-data"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-sm-7 left1">
                                    <div className="row">
                                        <div className="col-sm-5 pri-field-head pv1">Email</div>
                                        <div className="col-sm-7 pri-field-data"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-4 right1">
                        <div className="print-detail5 pd3a">
                            <h1>Work Schedule</h1>

                            <div className="pvw">
                                <div className="row">
                                    <div className="col-sm-6 pri-field-head">Start</div>
                                    <div className="col-sm-6 pri-field-data"></div>
                                </div>

                                <div className="row">
                                    <div className="col-sm-6 pri-field-head">Completion</div>
                                    <div className="col-sm-6 pri-field-data"></div>
                                </div>

                                <div className="row">
                                    <div className="col-sm-6 pri-field-head">Location</div>
                                    <div className="col-sm-6 pri-field-data"> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="dash-pr">
                            <div className="row">
                                <div className="col-sm-3 pri-field-head">
                                    Description of Work
                                </div>
                                <div className="col-sm-9 pri-field-data"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-12">
                        <div className="print-table9">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Sr#</th>
                                        <th>Description </th>
                                        <th> Unit</th>
                                        <th>QTY</th>
                                        <th>Unit rate (Sar)</th>
                                        <th>Amount (sar)</th>
                                        <th>Remarks</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    <tr>
                                        <th scope="row" >
                                            ROW
                                        </th>
                                        <td>DESC</td>
                                        <td>UNIT ID</td>
                                        <td>QTY</td>
                                        <td>URTAE</td>
                                        <td>UNITAMOIN</td>
                                        <td>NA</td>
                                    </tr>
                                    <tr>
                                        <th scope="row" >
                                            ROW
                                        </th>
                                        <td>DESC</td>
                                        <td>UNIT ID</td>
                                        <td>QTY</td>
                                        <td>URTAE</td>
                                        <td>UNITAMOIN</td>
                                        <td>NA</td>
                                    </tr>
                                    <tr>
                                        <th scope="row" >
                                            ROW
                                        </th>
                                        <td>DESC</td>
                                        <td>UNIT ID</td>
                                        <td>QTY</td>
                                        <td>URTAE</td>
                                        <td>UNITAMOIN</td>
                                        <td>NA</td>
                                    </tr>
                                    <tr>
                                        <th scope="row" >
                                            ROW
                                        </th>
                                        <td>DESC</td>
                                        <td>UNIT ID</td>
                                        <td>QTY</td>
                                        <td>URTAE</td>
                                        <td>UNITAMOIN</td>
                                        <td>NA</td>
                                    </tr>
                                    <tr>
                                        <th scope="row" >
                                            ROW
                                        </th>
                                        <td>DESC</td>
                                        <td>UNIT ID</td>
                                        <td>QTY</td>
                                        <td>URTAE</td>
                                        <td>UNITAMOIN</td>
                                        <td>NA</td>
                                    </tr>
                                    <tr>
                                        <th scope="row" >
                                            ROW
                                        </th>
                                        <td>DESC</td>
                                        <td>UNIT ID</td>
                                        <td>QTY</td>
                                        <td>URTAE</td>
                                        <td>UNITAMOIN</td>
                                        <td>NA</td>
                                    </tr>
                                    <tr>
                                        <th scope="row" >
                                            ROW
                                        </th>
                                        <td>DESC</td>
                                        <td>UNIT ID</td>
                                        <td>QTY</td>
                                        <td>URTAE</td>
                                        <td>UNITAMOIN</td>
                                        <td>NA</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <div className="row mt-2">
                            <div className="col-sm-5 pri-field-head">Mobilization Date</div>
                            <div className="col-sm-7 "></div>
                        </div>
                    </div>

                    <div className="col-6">
                        <div className="print-total row mr-0">
                            <div className="col-6 tot-left tl1">TOTAL sar</div>
                            <div className="col-6 tot-right tr1" id="total">

                            </div>

                            <div className="col-6 col-xs-6 tot-left">

                            </div>
                            <div className="col-6 col-xs-6 tot-right"></div>
                            <div className="col-sm-6 col-xs-6 tot-left tl2">
                                gRAND tOTAL (sAR)
                            </div>
                            <div
                                className="col-sm-6 col-xs-6 tot-right tr2"
                                id="grandtotal"
                            >

                            </div>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="print-total7">
                            <h4>
                                <span>
                                    TOTAL (IN WORDS ):
                                    <span id="total_word" style={{ display: "inline" }}></span>
                                    SAR{" "}
                                    <span
                                        id="total_decimal"
                                        style={{ display: "inline" }}
                                    ></span>
                                    Only
                                </span>
                            </h4>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-12">
                        <div className="dash-terms mt-0 pt-0">
                            <h1 className="pl-0">INSTRUCTIONS:</h1>

                        </div>
                    </div>

                    <div className="col-sm-12">
                        <div className="dash-terms mt-0 pt-0">
                            <h1 className="pl-0">Terms of delivery:</h1>

                        </div>
                    </div>

                    <div className="col-sm-12">
                        <div className="dash-terms mt-0 pt-0">
                            <h1 className="pl-0">Terms &amp; Conditions:</h1>

                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12" style={{ maxWidth: "97%" }}>
                        <div className="bot-cl5">
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="bot-cl6">
                                        <h1>Accepted by</h1>
                                        <div className="row">
                                            <div className="col-sm-5 col-xs-6 bot-left">
                                                Signature
                                            </div>
                                            <div className="col-sm-7 col-xs-6 bot-right">

                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-5 col-xs-6 bot-left">
                                                Name &amp; Title
                                            </div>
                                            <div className="col-sm-7 col-xs-6 bot-right">

                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-5 col-xs-6 bot-left">Date</div>
                                            <div className="col-sm-7 col-xs-6 bot-right">

                                            </div>
                                        </div>
                                        <div className="row">
                                            <div
                                                className="col-sm-12"
                                                style={{ textAlign: "center", fontSize: "13px" }}
                                            >

                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-sm-6">
                                    <div className="bot-cl10">
                                        <h1>Issued by</h1>
                                        <h5>
                                            Authorised Signatory
                                            <br />
                                            (Entema Al Shamal Gen. cont. Est)
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}