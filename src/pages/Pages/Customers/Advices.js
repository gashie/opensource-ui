import React, { useState, useEffect } from "react";
import { Container, Row, Card, Button } from "reactstrap";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import DataTable from "../../../Components/Common/DataTable/DataTable";
import DropdownComponent from "../../../Components/Common/DropdownComponent";

import { getTbillInvoices } from "../../../slices/thunks";
import { useDispatch, useSelector } from "react-redux";

function Advices() {
  const { advices, loading } = useSelector((state) => ({
    advices: state.TbillsInvoice.invoices,
    loading: state.TbillsInvoice.adviceLoading,
  }));

  const columns = [
    {
      Header: "ID",
      accessor: "id",
    },
    {
      Header: "CL PREFIX",
      accessor: "clientprefix",
    },

    {
      Header: "SHORT NAME",
      accessor: "shortname",
    },
    {
      Header: "TENDERNO",
      accessor: "tenderno",
    },
    {
      Header: "MATRIUTY VALUE",
      accessor: "maturityvalue",
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



  const dispatch = useDispatch();

  console.log(advices);

  useEffect(() => {
    dispatch(getTbillInvoices());
  }, [dispatch]);

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
                  data={advices}
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
