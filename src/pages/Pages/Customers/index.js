import React from "react";
import { Container, Row } from "reactstrap";
import BreadCrumb from "../../../Components/Common/BreadCrumb";

function index() {
  return (
    <>
      <div className="page-content">
        <Container fluid className="mt-5">
          <div>
            <BreadCrumb title={"Home"} pageTitle={"Analytics Dashboard"} />
          </div>

          <div>
            <Row className="dash-nft">

            </Row>
          </div>
        </Container>
      </div>
    </>
  );
}

export default index;
