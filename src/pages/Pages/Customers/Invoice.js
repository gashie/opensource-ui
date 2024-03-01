import React, { useEffect } from "react";
import {
  Container,
  Table,
  Card,
  CardBody,
  Row,
  Col,
  CardHeader,
  Spinner,
} from "reactstrap";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import { Link } from "react-router-dom";
import { printInvoice as printInvoiceAction } from "../../../slices/thunks";
import { useDispatch, useSelector } from "react-redux";

function Invoice() {
  const printInvoice = () => {
    window.print();
  };

  const { print, loading } = useSelector((state) => ({
    print: state.TbillsInvoice.print,
    loading: state.TbillsInvoice.printLoading,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(printInvoiceAction());
  }, [dispatch]);


  return (
    <div className="page-content">
      {/* <div className="d-flex justify-content-center">
     <Card style={{width: "max-content"}} className="p-5">
        <Container className="mb-5 mt-5">
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
              <p className="fw-bolder fw-lighter  mt-5 text-muted">
                {" "}
                Please notify CAL Bank at least one week maturity if you wish
                changes to your instructions Authorised Signature
              </p>
            </div>
          </div>
        </Container>
        <Container className="" style={{ marginTop: "13rem" }}>
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
              <p className="fw-bolder fw-lighter  mt-5 text-muted">
                {" "}
                Please notify CAL Bank at least one week maturity if you wish
                changes to your instructions Authorised Signature
              </p>
            </div>
          </div>
        </Container>
      </Card>
     </div> */}

      <Container fluid>
        <BreadCrumb title="Invoice Details" pageTitle="Invoices" />

        {loading === false ? (
          <Row className="justify-content-center">
            <Col xxl={9}>
              <Card id="demo">
                <Row>
            
                  <>
                    <Col lg={12}>
                      <CardBody className="p-4">
                        <div className="table-responsive">
                         

                          <div className="d-flex justify-content-center">
                            <Card
                              style={{ width: "max-content" }}
                              className="p-5"
                            >
                              {print?.map((item) => (
                                <>
                                  <Container className="mb-5 mt-5">
                                    <div className="text-end">
                                      <h6 className="text-end fw-bolder text-muted">
                                        {`${item?.title} ${item?.surname} ${item?.other_names}`}
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
                                        {item?.address}
                                      </h6>
                                    </div>

                                    <div className="w-100 mt-5">
                                      <Table
                                        striped
                                        className="table-borderless text-center table-nowrap align-middle mb-0"
                                      >
                                        <thead>
                                          <tr>
                                            <th className="text-muted fw-bolder">
                                              Auction Number
                                            </th>
                                            <th className="text-muted fw-bolder">
                                              CSD Account No
                                            </th>
                                            <th className="text-muted fw-bolder">
                                              Type of Security
                                            </th>
                                            <th className="text-muted fw-bolder">
                                              Effective Date
                                            </th>
                                            <th className="text-muted fw-bolder">
                                              Maturity Date
                                            </th>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          <tr>
                                            <td className="text-muted">1481</td>
                                            <td className="text-muted">
                                              CAL872433LI
                                            </td>
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

                                            <td className="text-muted">
                                              Amount Invested:
                                            </td>
                                            <td className="text-muted">
                                              GHS 31,999.34
                                            </td>
                                          </tr>
                                          <tr>
                                            <th scope="row"></th>
                                            <td className="text-muted"></td>

                                            <td className="text-muted">
                                              Discount Rate(%):
                                            </td>
                                            <td className="text-muted">
                                              21.5%
                                            </td>
                                          </tr>
                                          <tr>
                                            <th scope="row"></th>
                                            <td className="text-muted"></td>

                                            <td className="text-muted">
                                              Maturity Value (GHS):
                                            </td>
                                            <td className="text-muted">
                                              GHS 33,817.00
                                            </td>
                                          </tr>
                                        </tbody>
                                      </Table>
                                      <div>
                                        <p className="fw-bolder fw-lighter  mt-5 text-muted">
                                          {" "}
                                          Please notify CAL Bank at least one
                                          week maturity if you wish changes to
                                          your instructions Authorised Signature
                                        </p>
                                      </div>
                                    </div>
                                  </Container>
                                </>
                              ))}
                            </Card>
                          </div>
                        </div>

                        <div className="hstack gap-2 justify-content-end d-print-none mt-4">
                          <Link
                            to="#"
                            onClick={printInvoice}
                            className="btn btn-success"
                          >
                            <i className="ri-printer-line align-bottom me-1"></i>{" "}
                            Print
                          </Link>
                          <Link to="#" className="btn btn-primary">
                            <i className="ri-download-2-line align-bottom me-1"></i>{" "}
                            Download
                          </Link>
                        </div>
                      </CardBody>
                    </Col>
                  </>
                </Row>
              </Card>
            </Col>
          </Row>
        ) : (
          <div className="d-flex justify-content-center mt-5 align-items-center">
            <Spinner style={{ color: "gold" }} />
          </div>
        )}
      </Container>
    </div>
  );
}

export default Invoice;
