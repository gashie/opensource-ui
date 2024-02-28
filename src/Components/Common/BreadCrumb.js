import React from "react";
import { Link } from "react-router-dom";
import { Col, Row } from "reactstrap";

const BreadCrumb = ({ title, pageTitle }) => {
  return (
    <React.Fragment>
      <Row>
        <Col xs={12}>
          <div
            className="page-title-box d-sm-flex align-items-center justify-content-between"
            style={{
              backgroundColor: "transparent",
              border: "none",
              boxShadow: "none",
            }}
          >
            <div>
              <div>
                <h4 className="mb-sm-0 fs-4">{title}</h4>
              </div>
              <div className="d-flex mt-2 gap-2">
                <div>
                  {" "}
                  <h4 className="mb-sm-0">
                    <i className="bx bx-home" style={{ color: "orange" }}></i>
                  </h4>
                </div>
                <div className="fw-lighter text-muted">/</div>
                <div>
                  {" "}
                  <h4 className="mb-sm-0 fw-lighter text-muted text-lowecase">
                    {pageTitle}
                  </h4>
                </div>
              </div>
            </div>

            {/* <div className="page-title-right">
              <ol className="breadcrumb m-0">
                <li className="breadcrumb-item">
                  <Link to="#">{pageTitle}</Link>
                </li>
                <li className="breadcrumb-item active">{title}</li>
              </ol>
            </div> */}
          </div>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default BreadCrumb;
