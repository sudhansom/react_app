import React from "react";
import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";

const home = ({ data }) => {
  if (data.length > 0) {
    return <p>success</p>;
  }
  return <p>Unexpected error occurred....</p>;
};

export default home;

//data.map((country) => <p>{country.name}</p>);

// <div>
//   <Table>
//     <TableHead>
//       <TableRow>
//         <TableCell>Flag</TableCell>
//         <TableCell>Name</TableCell>
//         <TableCell>Currency</TableCell>
//         <TableCell>Action</TableCell>
//       </TableRow>
//     </TableHead>
//     <TableBody>
//       <TableRow>
//         <TableCell>Flag</TableCell>
//         <TableCell>Name</TableCell>
//         <TableCell>Currency</TableCell>
//         <TableCell>Action</TableCell>
//       </TableRow>
//     </TableBody>
//   </Table>
// </div>;
