import React from "react";
import Table from '../../components/Table.jsx'
import Navbar from '../../components/Navbar/Navbar.jsx'

export default function Homepage() {
  // const rowArray = row.map(el => {
  //   const rw = Object.values(el)
  //     <td>{rw}</td>;
  //   }) 

  return (
    <div>
      <Navbar />
      <Table />
    </div>
  )
}