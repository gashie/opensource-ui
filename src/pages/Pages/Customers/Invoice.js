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

  console.log(print);

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
                  {/* <Col lg={12}>
                  <CardHeader className="border-bottom-dashed p-4">
                    <div className="d-sm-flex">
                      <div className="flex-grow-1">
                        <img
                          src={
                            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Logo_png-01.png/1200px-Logo_png-01.png"
                          }
                          className="card-logo card-logo-dark"
                          alt="logo dark"
                          height="17"
                        />
                        <img
                          src={
                            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Logo_png-01.png/1200px-Logo_png-01.png"
                          }
                          className="card-logo card-logo-light"
                          alt="logo light"
                          height="17"
                        />
                        <div className="mt-sm-5 mt-4">
                          <h6 className="text-muted text-uppercase fw-semibold">
                            Address
                          </h6>
                          <p className="text-muted mb-1" id="address-details">
                            California, United States
                          </p>
                          <p className="text-muted mb-0" id="zip-code">
                            <span>Zip-code: 90201</span>
                          </p>
                        </div>
                      </div>
                      <div className="flex-shrink-0 mt-sm-0 mt-3">
                        <h6>
                          <span className="text-muted fw-normal">
                            Legal Registration No:
                          </span>{" "}
                          <span id="legal-register-no">987654</span>
                        </h6>
                        <h6>
                          <span className="text-muted fw-normal">Email:</span>{" "}
                          <span id="email">velzon@themesbrand.com</span>
                        </h6>
                        <h6>
                          <span className="text-muted fw-normal">Website:</span>{" "}
                          <Link to="#" className="link-primary" id="website">
                            www.themesbrand.com
                          </Link>
                        </h6>
                        <h6 className="mb-0">
                          <span className="text-muted fw-normal">
                            Contact No:
                          </span>{" "}
                          <span id="contact-no"> +(01) 234 6789</span>
                        </h6>
                      </div>
                    </div>
                  </CardHeader>
                </Col> */}
                  {/* <Col lg={12}>
                  <CardBody className="p-4">
                    <Row className="g-3">
                      <Col lg={3} xs={6}>
                        <p className="text-muted mb-2 text-uppercase fw-semibold">
                          Invoice No
                        </p>
                        <h5 className="fs-14 mb-0">
                          #VL<span id="invoice-no">25000355</span>
                        </h5>
                      </Col>
                      <Col lg={3} xs={6}>
                        <p className="text-muted mb-2 text-uppercase fw-semibold">
                          Date
                        </p>
                        <h5 className="fs-14 mb-0">
                          <span id="invoice-date">23 Nov, 2021</span>{" "}
                          <small className="text-muted" id="invoice-time">
                            02:36PM
                          </small>
                        </h5>
                      </Col>
                      <Col lg={3} xs={6}>
                        <p className="text-muted mb-2 text-uppercase fw-semibold">
                          Payment Status
                        </p>
                        <span
                          className="badge bg-success-subtle text-success fs-11"
                          id="payment-status"
                        >
                          Paid
                        </span>
                      </Col>
                      <Col lg={3} xs={6}>
                        <p className="text-muted mb-2 text-uppercase fw-semibold">
                          Total Amount
                        </p>
                        <h5 className="fs-14 mb-0">
                          $<span id="total-amount">415.96</span>
                        </h5>
                      </Col>
                    </Row>
                  </CardBody>
                </Col> */}
                  {/* <Col lg={12}>
                  <CardBody className="p-4 border-top border-top-dashed">
                    <Row className="g-3">
                      <Col sm={6}>
                        <h6 className="text-muted text-uppercase fw-semibold mb-3">
                          Billing Address
                        </h6>
                        <p className="fw-medium mb-2" id="billing-name">
                          David Nichols
                        </p>
                        <p
                          className="text-muted mb-1"
                          id="billing-address-line-1"
                        >
                          305 S San Gabriel Blvd
                        </p>
                        <p className="text-muted mb-1">
                          <span>Phone: +</span>
                          <span id="billing-phone-no">(123) 456-7890</span>
                        </p>
                        <p className="text-muted mb-0">
                          <span>Tax: </span>
                          <span id="billing-tax-no">12-3456789</span>
                        </p>
                      </Col>
                      <Col sm={6}>
                        <h6 className="text-muted text-uppercase fw-semibold mb-3">
                          Shipping Address
                        </h6>
                        <p className="fw-medium mb-2" id="shipping-name">
                          Donald Palmer
                        </p>
                        <p
                          className="text-muted mb-1"
                          id="shipping-address-line-1"
                        >
                          305 S San Gabriel Blvd
                        </p>
                        <p className="text-muted mb-1">
                          <span>Phone: +</span>
                          <span id="shipping-phone-no">(123) 456-7890</span>
                        </p>
                      </Col>
                    </Row>
                  </CardBody>
                </Col> */}

                  <>
                    <Col lg={12}>
                      <CardBody className="p-4">
                        <div className="table-responsive">
                          {/* <Table className="table-borderless text-center table-nowrap align-middle mb-0">
                        <thead>
                          <tr className="table-active">
                            <th scope="col" style={{ width: "50px" }}>
                              #
                            </th>
                            <th scope="col">Product Details</th>
                            <th scope="col">Rate</th>
                            <th scope="col">Quantity</th>
                            <th scope="col" className="text-end">
                              Amount
                            </th>
                          </tr>
                        </thead>
                        <tbody id="products-list">
                          <tr>
                            <th scope="row">01</th>
                            <td className="text-start">
                              <span className="fw-medium">
                                Sweatshirt for Men (Pink)
                              </span>
                              <p className="text-muted mb-0">
                                Graphic Print Men & Women Sweatshirt
                              </p>
                            </td>
                            <td>$119.99</td>
                            <td>02</td>
                            <td className="text-end">$239.98</td>
                          </tr>
                          <tr>
                            <th scope="row">02</th>
                            <td className="text-start">
                              <span className="fw-medium">
                                Noise NoiseFit Endure Smart Watch
                              </span>
                              <p className="text-muted mb-0">
                                32.5mm (1.28 Inch) TFT Color Touch Display
                              </p>
                            </td>
                            <td>$94.99</td>
                            <td>01</td>
                            <td className="text-end">$94.99</td>
                          </tr>
                          <tr>
                            <th scope="row">03</th>
                            <td className="text-start">
                              <span className="fw-medium">
                                350 ml Glass Grocery Container
                              </span>
                              <p className="text-muted mb-0">
                                Glass Grocery Container (Pack of 3, White)
                              </p>
                            </td>
                            <td>$24.99</td>
                            <td>01</td>
                            <td className="text-end">$24.99</td>
                          </tr>
                          <tr>
                            <th scope="row">04</th>
                            <td className="text-start">
                              <span className="fw-medium">
                                Fabric Dual Tone Living Room Chair
                              </span>
                              <p className="text-muted mb-0">Chair (White)</p>
                            </td>
                            <td>$340.00</td>
                            <td>01</td>
                            <td className="text-end">$340.00</td>
                          </tr>
                        </tbody>
                      </Table> */}

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
