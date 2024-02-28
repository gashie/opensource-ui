import React, { useState, Fragment } from "react";
import {
  useTable,
  useFilters,
  useGlobalFilter,
  useSortBy,
  usePagination,
} from "react-table";
import { Input, Button } from "reactstrap";
import SidebarLoader from "../SkeletonLoader";

const DataTable = ({ columns, data, colHight, length, loading }) => {
  const [searchText, setSearchText] = useState("");

  const tableInstance = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 10 },
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    state,
    setGlobalFilter,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    pageCount,
    gotoPage,
    setPageSize,
  } = tableInstance;

  // Filter data based on search text
  const { globalFilter, pageIndex, pageSize } = state;
  const filteredData = globalFilter
    ? data?.filter((row) =>
        Object.values(row).some((cell) =>
          cell !== null &&
          cell.toString().toLowerCase().includes(globalFilter.toLowerCase())
        )
      )
    : data;

  return (
    <>
      <div
        className="table-responsive"
        style={{ color: "black", backgroundColor: "transparent" }}
      >
        <Input
          type="text"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            setGlobalFilter(e.target.value);
          }}
          placeholder="Search..."
          className="mb-4"
          style={{ color: "black" }}
        />
        <table
          {...getTableProps()}
          className="table align-middle table-hover dataTable"
          style={{ width: "100%" }}
        >
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr
                {...headerGroup.getHeaderGroupProps()}
                className="small text-muted text-uppercase"
              >
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    className="text-center"
                  >
                    {column.render("Header")}
                    <span>
                      {/* Display sort icons */}
                      {/* <span style={{ opacity: column.isSorted && column.isSortedDesc ? 0.5 : 1 }}>&#x2191;</span>
                      <span style={{ opacity: column.isSorted && !column.isSortedDesc ? 0.5 : 1 }}>&#x2193;</span> */}
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <Fragment key={row.getRowProps().key}>
                  <tr>
                    {row.cells.map((cell) => (
                      <td
                        key={cell.id}
                        {...cell.getCellProps()}
                        style={{
                          padding: `0.9rem ${colHight || "2rem"}`,
                        }}
                        className="text-center"
                      >
                        <div className="text-center">{cell.render("Cell")}</div>
                      </td>
                    ))}
                  </tr>
                </Fragment>
              );
            })}
          </tbody>
        </table>

        {length === 0 ? (
          <div className="d-flex justify-content-center mt-5">No Data</div>
        ) : (
          ""
        )}
        {loading === true ? (
          <div className="d-flex justify-content-center">
            <SidebarLoader />
          </div>
        ) : (
          ""
        )}

        {/* Pagination */}
        <div className="">
          <Button
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
            className="me-2"
            style={{backgroundColor: 'orange', border: 'none'}}
          >
            Previous
          </Button>
          <Button
            onClick={() => nextPage()}
            disabled={!canNextPage}
            className="me-2"
            style={{backgroundColor: 'orange', border: 'none'}}
          >
            Next
          </Button>
          <span>
            Page{" "}
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>{" "}
          </span>
          {/* <span>
            | Go to page:{" "}
            <Input
              type="number"
              defaultValue={pageIndex + 1}
              onChange={(e) => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                gotoPage(page);
              }}
              style={{ width: "70px", marginLeft: "5px", marginRight: "5px" }}
            />
          </span> */}
          {/* <select
            value={pageSize}
            onChange={(e) => setPageSize(Number(e.target.value))}
            style={{ marginLeft: "5px" }}
          >
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select> */}
        </div>
      </div>
    </>
  );
};

export default DataTable;
