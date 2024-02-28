import React, { useState } from "react";
import { Container, Row } from "reactstrap";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import DataTable from "../../../Components/Common/DataTable/DataTable";

function index() {
  const columns = [
    {
      Header: "ID",
      accessor: "role_name", // Replace with the actual accessor for your data
    },
    {
      Header: "Role Description",
      accessor: "description",
    },

    {
      Header: "Active Status",
      accessor: "is_active",
      Cell: ({ value }) => (
        <div className="text-start">
          <div
            className="hstack d-flex justify-content-center p-2 w-100 text-start"
            style={{
              backgroundColor: value ? "#00d084" : "#f7d5ca",
              borderRadius: "10px",
              color: value ? "green" : "#ec255a",
            }}
          >
            {value ? <div>Active</div> : <div>Inactive</div>}
          </div>
        </div>
      ),
    },
  ];

  const roles = [{}];

  const [loading, setLoading] = useState(false);
  return (
    <>
      <div className="page-content">
        <Container fluid className="mt-5">
          <div>
            <BreadCrumb title={"Home"} pageTitle={"Analytics Dashboard"} />
          </div>

          <div>
            <Row className="dash-nft">
              <DataTable
                columns={columns}
                data={roles}
                useGlobalFilter={true}
                loading={loading}
              />
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
}

export default index;
