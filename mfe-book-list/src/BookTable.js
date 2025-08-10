import React from 'react';
import { render } from "react-dom";

// Import React Table
import ReactTable from "react-table";

const BookTable = (props) => {
    console.log("Book data:", JSON.stringify(props));
  const handleAddToCart = (book) => {
    console.log("Adding to cart:", book);
  };

    return (
        <>
        <ReactTable
          data={props}
          columns={[
            {
              Header: "Cover",
              accessor: "cover",
              Cell: ({ value }) => (
                <img src={''} alt="cover" style={{ height: 50 }} />
              )
            },
            { Header: "Title", accessor: "title" },
            { Header: "Authors", accessor: "authors" },
            { Header: "Year", accessor: "year" },
            { Header: "Genre", accessor: "genre" },
            { Header: "Price", accessor: "price" },
            { Header: "Logged Edition", accessor: "logged_edition" },
          ]}
          defaultPageSize={5}
          className="-striped -highlight"
        />
        </>
  );
};

export default BookTable;
