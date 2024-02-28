import React, { useState } from "react";
import { Container, Row, Card, Button } from "reactstrap";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import DataTable from "../../../Components/Common/DataTable/DataTable";
import DropdownComponent from "../../../Components/Common/DropdownComponent";

function Advices() {
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
      Header: "SHORT NAME",
      accessor: "short_name",
    },
    {
      Header: "TENDERNO",
      accessor: "tenderno",
    },
    {
      Header: "MATRIUTY VALUE",
      accessor: "maturity_value",
    },

    // {
    //   Header: "ACTION",
    //   accessor: "is_active",
    //   Cell: ({ value }) => (
    //     <DropdownComponent />
    //   ),
    // },
  ];

  const roles = [
    {
      id: 90,
      cl_prefix: "182-DAY T/BILL",

      short_name: "1480",
      tenderno: "384879",
      maturity_value: "56116",
    },
    {
      id: 90,
      cl_prefix: "182-DAY T/BILL",

      short_name: "1480",
      tenderno: "384879",
      maturity_value: "56116",
    },
    {
      id: 90,
      cl_prefix: "182-DAY T/BILL",

      short_name: "1480",
      tenderno: "384879",
      maturity_value: "56116",
    },
    {
      id: 90,
      cl_prefix: "182-DAY T/BILL",

      short_name: "1480",
      tenderno: "384879",
      maturity_value: "56116",
    },
    {
      id: 90,
      cl_prefix: "182-DAY T/BILL",

      short_name: "1480",
      tenderno: "384879",
      maturity_value: "56116",
    },
    {
      id: 90,
      cl_prefix: "182-DAY T/BILL",

      short_name: "1480",
      tenderno: "384879",
      maturity_value: "56116",
    },
    {
      id: 90,
      cl_prefix: "182-DAY T/BILL",

      short_name: "1480",
      tenderno: "384879",
      maturity_value: "56116",
    },
    {
      id: 90,
      cl_prefix: "182-DAY T/BILL",

      short_name: "1480",
      tenderno: "384879",
      maturity_value: "56116",
    },
    {
      id: 90,
      cl_prefix: "182-DAY T/BILL",

      short_name: "1480",
      tenderno: "384879",
      maturity_value: "56116",
    },
    {
      id: 90,
      cl_prefix: "182-DAY T/BILL",

      short_name: "1480",
      tenderno: "384879",
      maturity_value: "56116",
    },
    {
      id: 90,
      cl_prefix: "182-DAY T/BILL",

      short_name: "1480",
      tenderno: "384879",
      maturity_value: "56116",
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
                <Row className="dash-nft">
                  <Card
                    className="p-3 mb-5 "
                    style={{
                      boxShadow: "none",
                      borderBottom: "1px solid #e0e0e0",
                      borderRadius: "0px",
                    }}
                  >
                    <div className="d-flex justify-content-between align-items-center mb-5">
                      <div className="fs-5 text-muted">Investment</div>

                      <div className="text-end">
                        <Button
                          style={{
                            background:
                              "linear-gradient(90deg, rgba(237,139,0,1) 0%, rgba(237,139,0,1) 0%, rgba(255,209,0,1) 100%)",
                            border: "1px solid orange",
                            boxShadow: "none",
                          }}
                          className="p-3 px-4"
                        >
                          Print Advice
                        </Button>
                      </div>
                    </div>
                  </Card>
                </Row>
                <DataTable
                  columns={columns}
                  data={roles}
                  useGlobalFilter={true}
                  loading={loading}
                />
              </Card>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Advices;
