import React, { useState, useEffect } from "react";
import { Container, Row, Card, Input, Button } from "reactstrap";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import DataTable from "../../../Components/Common/DataTable/DataTable";
import DropdownComponent from "../../../Components/Common/DropdownComponent";
import { useDispatch } from "react-redux";
import { searchCustomers } from "../../../slices/thunks";
import { useSelector } from "react-redux";

function index() {
  const dispatch = useDispatch();

  const { customers, loading } = useSelector((state) => ({
    customers: state.SearchCustomers.customers,
    loading: state.SearchCustomers.customersLoading,
  }));

  const columns = [
    {
      Header: "ID",
      accessor: "id",
    },
    {
      Header: "CL PREFIX",
      accessor: "client_prefix",
    },
    {
      Header: "CL SUFFIX",
      accessor: "client_suffix",
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
      accessor: "other_names",
    },
    {
      Header: "ACCOUNT NUMBER",
      accessor: "accountnumber",
    },
    {
      Header: "ACTION",
      accessor: "is_active",
      Cell: ({ value }) => <DropdownComponent />,
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
  ];

  const [searchText, setSearchText] = useState("");

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
                <Row>
                  {" "}
                  <div className="mb-5 mt-4">
                    <h5 className="fw-bolder">
                      {" "}
                      Search CSD NO OR ACCOUNT NUMBER
                    </h5>
                    <p className="fw-bolder text-muted">Type below ...</p>
                    <div style={{ width: "70%" }}>
                      <Input
                        type="text"
                        value={searchText}
                        onChange={(e) => {
                          setSearchText(e.target.value);
                        }}
                        placeholder="Search..."
                        className="mb-4 p-3 "
                        style={{ color: "black" }}
                      />

                      <div className="text-end">
                        <Button
                          style={{
                            backgroundColor: "orange",
                            border: "none",
                            backgroundColor: "#ffd100",
                            border: '1px solid orange', 
                            boxShadow: 'none'
                          }}
                          className="px-4 py-2"
                          onClick={() => {
                            dispatch(searchCustomers());
                          }}
                        >
                          Search
                        </Button>
                      </div>
                    </div>

                    <div className="mt-4 mb-5">
                      <hr
                        style={{ border: "1px solid #e0e0e0" }}
                        className="mb-3 mt-3"
                      />
                    </div>
                  </div>
                </Row>

                <DataTable
                  columns={columns}
                  data={customers}
                  useGlobalFilter={true}
                  loading={loading}
                  extra={false}
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
