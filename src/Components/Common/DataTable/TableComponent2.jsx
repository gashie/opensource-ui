import React from "react";
import DataTable from "react-data-table-component";

function TableComponent({ columns, data }) {
  function getNumberOfPages(rowCount, rowsPerPage) {
    return Math.ceil(rowCount / rowsPerPage);
  }

  function toPages(pages) {
    const results = [];

    for (let i = 1; i < pages; i++) {
      results.push(i);
    }

    return results;
  }

  const customStyles = {
    table: {
      styl: {
        border: "none", // Remove the border
        borderRadius: "0px", // Set border-radius to 0 for sharp edges
        padding: "10px", // Optional: Add padding for better visual appearance
        marginBottom: '4rem'
      },
    },
    tableWrapper: {
      style: {
        display: "table",
        border: "none",
      },
    },

    rows: {
      style: {
        fontSize: "13px",
        fontWeight: 600,
        fontFamily: "monospace",
        color: "gray",
        backgroundColor: "#080a0a",
        minHeight: "61px",
        "&:not(:last-of-type)": {
          borderBottomStyle: "solid",
          borderBottomWidth: "1px",
          borderBottomColor: "rgba(37, 44, 44, 0.667)",
        },
      },
      denseStyle: {
        minHeight: "32px",
      },
      selectedHighlightStyle: {
        // use nth-of-type(n) to override other nth selectors
        "&:nth-of-type(n)": {
          color: "black",
          backgroundColor: "",
          borderBottomColor: "magenta",
        },
      },
      highlightOnHoverStyle: {
        color: "gray",
        backgroundColor: "white",
        transitionDuration: "0.15s",
        transitionProperty: "background-color",
        borderBottomColor: "brown",
        outlineStyle: "solid",
        outlineWidth: "1px",
        outlineColor: "gold",
      },
      stripedStyle: {
        color: "#Ed8b00",
        backgroundColor: "yellow",
      },
    },
    expanderRow: {
      style: {
        color: "",
        backgroundColor: "blue",
      },
    },
    expanderCell: {
      style: {
        flex: "0 0 48px",
      },
    },
    expanderButton: {
      style: {
        color: "",
        fill: "#Ed8b00",
        backgroundColor: "transparent",
        borderRadius: "2px",
        transition: "0.25s",
        height: "100%",
        width: "100%",
        "&:hover:enabled": {
          cursor: "pointer",
        },
        "&:disabled": {
          color: "magenta",
        },
        "&:hover:not(:disabled)": {
          cursor: "pointer",
          backgroundColor: "magenta",
        },
        "&:focus": {
          outline: "none",
          backgroundColor: "magenta",
        },
        svg: {
          margin: "auto",
        },
      },
    },
    headCells: {
      style: {
        backgroundColor: "white",
        color: "gray",
        fontFamily: "monospace",
        fontSize: "14px",
        // border: "1px solid rgba(37, 44, 44, 0.667)",
      },
    },
    stripedStyle: {
      color: "",
      backgroundColor: "#Ed8b00",
    },
    header: {
      style: {
        fontSize: "22px",
        backgroundColor: "white",
        minHeight: "56px",
        paddingLeft: "16px",
        paddingRight: "8px",
        border: "1px solid rgba(37, 44, 44, 0.667) ",
      },
    },
    cells: {
      style: {
        paddingLeft: "8px", // override the cell padding for data cells
        paddingRight: "8px",
      },
    },
  };

  const conditionalRowStyles = [
    {
      when: (row) => row.id % 2 === 0,
      style: {
        backgroundColor: "white", // Light color for even rows

        borderRadius: "0px",
      },
    },
    {
      when: (row) => row.id % 2 !== 0,
      style: {
        backgroundColor: "white",
        borderRadius: "0px",
      },
    },
  ];

  // RDT exposes the following internal pagination properties
  const BootyPagination = ({
    rowsPerPage,
    rowCount,
    onChangePage,
    onChangeRowsPerPage, // available but not used here
    currentPage,
  }) => {
    const handleBackButtonClick = () => {
      onChangePage(currentPage - 1);
    };

    const handleNextButtonClick = () => {
      onChangePage(currentPage + 1);
    };

    const handlePageNumber = (e) => {
      onChangePage(Number(e.target.value));
    };

    const pages = getNumberOfPages(rowCount, rowsPerPage);
    const pageItems = toPages(pages);
    const nextDisabled = currentPage === pageItems.length;
    const previosDisabled = currentPage === 1;

    return (
      <nav style={{ background: "#333", color: "#fff" }}>
        <ul className="pagination">
          <li className="page-item">
            <button
              className="page-link"
              onClick={handleBackButtonClick}
              disabled={previosDisabled}
              aria-disabled={previosDisabled}
              aria-label="previous page"
              style={{ background: "#080a0a", color: "gray", border: "none" }}
            >
              Previous
            </button>
          </li>
          {pageItems.map((page) => {
            const className =
              page === currentPage ? "page-item active" : "page-item";

            return (
              <li key={page} className={className}>
                <button
                  className="page-link"
                  onClick={handlePageNumber}
                  value={page}
                  style={{
                    background: "#080a0a",
                    color: "gray",
                    border: "none",
                  }}
                >
                  {page}
                </button>
              </li>
            );
          })}
          <li className="page-item" style={{ backgroundColor: "darkred" }}>
            <button
              className="page-link"
              onClick={handleNextButtonClick}
              disabled={nextDisabled}
              aria-disabled={nextDisabled}
              aria-label="next page"
              style={{ background: "#080a0a", color: "gray", border: "none" }}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    );
  };

  const BootyCheckbox = React.forwardRef(({ onClick, ...rest }, ref) => (
    <div className="form-check">
      <input
        htmlFor="booty-check"
        type="checkbox"
        className="form-check-input"
        ref={ref}
        onClick={onClick}
        {...rest}
      />
      <label className="form-check-label" id="booty-check" />
    </div>
  ));

  return (
    <>
      <DataTable
        //   title="Movies"
        columns={columns}
        data={data}
        defaultSortFieldID={1}
        //   pagination
        //   paginationComponent={BootyPagination}
        selectableRows
        selectableRowsComponent={BootyCheckbox}
        customStyles={customStyles}
        //theme="solarized"
        conditionalRowStyles={conditionalRowStyles}
      />
    </>
  );
}

export default TableComponent;
