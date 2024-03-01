import React, { useState } from "react";
import { Container, Row, Card } from "reactstrap";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import DataTable from "../../../Components/Common/DataTable/DataTable";
import DropdownComponent from "../../../Components/Common/DropdownComponent";


function index() {
  const columns = [
    {
      Header: "ID",
      accessor: "id",
    },
    {
      Header: "CL PREFIX",
      accessor: "cl_prefix",
    },
    {
      Header: "CL SUFFIX",
      accessor: "cl_suffix",
    },

    {
      Header: "INITIALS",
      accessor: "initials",
    },
    {
      Header: "FIRSTNAME",
      accessor: "first_name",
    },
    {
      Header: "SURNAME",
      accessor: "surname",
    },
    {
      Header: "OTHER NAME",
      accessor: "other_name",
    },
    {
      Header: "ACCOUNT NUMBER",
      accessor: "account_number",
    },
    {
      Header: "ACTION",
      accessor: "is_active",
      Cell: ({ value }) => (
        <DropdownComponent />
      ),
    },
  ];



  const roles = [
    {
      id: 90,
      cl_prefix: "0000000384879",
      cl_suffix: "LI",
      initials: "MR",
      first_name: "JOT",
      surname: "JOT",
      other_name: "JOSEPH",
      account_number: "JOT",
    },
    {
      id: 90,
      cl_prefix: "0000000384879",
      cl_suffix: "LI",
      initials: "MR",
      first_name: "JOT",
      surname: "JOT",
      other_name: "JOSEPH",
      account_number: "JOT",
    },
    {
      id: 90,
      cl_prefix: "0000000384879",
      cl_suffix: "LI",
      initials: "MR",
      first_name: "JOT",
      surname: "JOT",
      other_name: "JOSEPH",
      account_number: "JOT",
    },
    {
      id: 90,
      cl_prefix: "0000000384879",
      cl_suffix: "LI",
      initials: "MR",
      first_name: "JOT",
      surname: "JOT",
      other_name: "JOSEPH",
      account_number: "JOT",
    },
    {
      id: 90,
      cl_prefix: "0000000384879",
      cl_suffix: "LI",
      initials: "MR",
      first_name: "JOT",
      surname: "JOT",
      other_name: "JOSEPH",
      account_number: "JOT",
    },
    {
      id: 90,
      cl_prefix: "0000000384879",
      cl_suffix: "LI",
      initials: "MR",
      first_name: "JOT",
      surname: "JOT",
      other_name: "JOSEPH",
      account_number: "JOT",
    },
    {
      id: 90,
      cl_prefix: "0000000384879",
      cl_suffix: "LI",
      initials: "MR",
      first_name: "JOT",
      surname: "JOT",
      other_name: "JOSEPH",
      account_number: "JOT",
    },
    {
      id: 90,
      cl_prefix: "0000000384879",
      cl_suffix: "LI",
      initials: "MR",
      first_name: "JOT",
      surname: "JOT",
      other_name: "JOSEPH",
      account_number: "JOT",
    },
    {
      id: 90,
      cl_prefix: "0000000384879",
      cl_suffix: "LI",
      initials: "MR",
      first_name: "JOT",
      surname: "JOT",
      other_name: "JOSEPH",
      account_number: "JOT",
    },
    {
      id: 90,
      cl_prefix: "0000000384879",
      cl_suffix: "LI",
      initials: "MR",
      first_name: "JOT",
      surname: "JOT",
      other_name: "JOSEPH",
      account_number: "JOT",
    },
    {
      id: 90,
      cl_prefix: "0000000384879",
      cl_suffix: "LI",
      initials: "MR",
      first_name: "JOT",
      surname: "JOT",
      other_name: "JOSEPH",
      account_number: "JOT",
    },
    {
      id: 90,
      cl_prefix: "0000000384879",
      cl_suffix: "LI",
      initials: "MR",
      first_name: "JOT",
      surname: "JOT",
      other_name: "JOSEPH",
      account_number: "JOT",
    },
  ];

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
            <Card className="p-3">
            <DataTable
                columns={columns}
                data={roles}
                useGlobalFilter={true}
                loading={loading}
                extra={true}
              />
            </Card>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
}

export default index;
