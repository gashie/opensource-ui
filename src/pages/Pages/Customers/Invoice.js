import React from "react";
import { Container, Table } from "reactstrap";

function Invoice() {
  return (
    <div className="page-content">
      <Container fluid>
        <div className="text-end">
          <h6 className="text-end fw-bolder text-muted">
            MR. OFORI-TEIKO JOSEPH
          </h6>
        </div>

        <div className="mt-2 text-start">
          <h6 className="text-start">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Logo_png-01.png/1200px-Logo_png-01.png"
              width="100"
            ></img>
          </h6>
          <h6 className="text-start fw-bolder text-muted">
            C/O CAL BANL LTD. P. O. Box 14596
          </h6>
        </div>

        <div className="w-100 mt-5">
          <Table striped>
            <thead>
              <tr>
                <th className="text-muted fw-bolder">Auction Number</th>
                <th className="text-muted fw-bolder">CSD Account No</th>
                <th className="text-muted fw-bolder">Type of Security</th>
                <th className="text-muted fw-bolder">Effective Date</th>
                <th className="text-muted fw-bolder">Maturity Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-muted">1481</td>
                <td className="text-muted">CAL872433LI</td>
                <td className="text-muted">
                  <div>91 DAY</div>
                  <div>Treasury BILL</div>
                </td>
                <td className="text-muted">
                  <div>18 - April 2016</div>
                </td>
                <td className="text-muted">
                  <div>18 - July 2016</div>
                </td>
              </tr>
              <tr>
                <th scope="row"></th>
                <td className="text-muted"></td>

                <td className="text-muted">Amount Invested:</td>
                <td className="text-muted">GHS 31,999.34</td>
              </tr>
              <tr>
                <th scope="row"></th>
                <td className="text-muted"></td>

                <td className="text-muted">Discount Rate(%):</td>
                <td className="text-muted">21.5%</td>
              </tr>
              <tr>
                <th scope="row"></th>
                <td className="text-muted"></td>

                <td className="text-muted">Maturity Value (GHS):</td>
                <td className="text-muted">GHS 33,817.00</td>
              </tr>
            </tbody>
          </Table>
          <div>
            <p className="fw-bolder fw-lighter fs-5 mt-3 text-muted">
              {" "}
              Please notify CAL Bank at least one week maturity if you wish
              changes to your instructions Authorised Signature
            </p>
          </div>
        </div>
      </Container>
      <Container fluid className="mt-5">
        <div className="text-end">
          <h6 className="text-end fw-bolder text-muted">
            MR. OFORI-TEIKO JOSEPH
          </h6>
        </div>

        <div className="mt-2 text-start">
          <h6 className="text-start">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Logo_png-01.png/1200px-Logo_png-01.png"
              width="100"
            ></img>
          </h6>
          <h6 className="text-start fw-bolder text-muted">
            C/O CAL BANL LTD. P. O. Box 14596
          </h6>
        </div>

        <div className="w-100 mt-5">
          <Table striped>
            <thead>
              <tr>
                <th className="text-muted fw-bolder">Auction Number</th>
                <th className="text-muted fw-bolder">CSD Account No</th>
                <th className="text-muted fw-bolder">Type of Security</th>
                <th className="text-muted fw-bolder">Effective Date</th>
                <th className="text-muted fw-bolder">Maturity Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-muted">1481</td>
                <td className="text-muted">CAL872433LI</td>
                <td className="text-muted">
                  <div>91 DAY</div>
                  <div>Treasury BILL</div>
                </td>
                <td className="text-muted">
                  <div>18 - April 2016</div>
                </td>
                <td className="text-muted">
                  <div>18 - July 2016</div>
                </td>
              </tr>
              <tr>
                <th scope="row"></th>
                <td className="text-muted"></td>

                <td className="text-muted">Amount Invested:</td>
                <td className="text-muted">GHS 31,999.34</td>
              </tr>
              <tr>
                <th scope="row"></th>
                <td className="text-muted"></td>

                <td className="text-muted">Discount Rate(%):</td>
                <td className="text-muted">21.5%</td>
              </tr>
              <tr>
                <th scope="row"></th>
                <td className="text-muted"></td>

                <td className="text-muted">Maturity Value (GHS):</td>
                <td className="text-muted">GHS 33,817.00</td>
              </tr>
            </tbody>
          </Table>
          <div>
            <p className="fw-bolder fw-lighter fs-5 mt-3 text-muted">
              {" "}
              Please notify CAL Bank at least one week maturity if you wish
              changes to your instructions Authorised Signature
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Invoice;
