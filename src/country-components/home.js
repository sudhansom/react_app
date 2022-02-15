import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core/";

const home = ({ data }) => {
  if (data.length > 0) {
    return (
      <div>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>capital</TableCell>
              <TableCell>area</TableCell>
              <TableCell>currency</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((country) => {
              return (
                <TableRow>
                  <TableCell>
                    <Link to={`/country/${country.name}`}>{country.name}</Link>
                  </TableCell>
                  <TableCell>{country.capital}</TableCell>
                  <TableCell>{country.area}</TableCell>
                  <TableCell>currency</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    );
  }
  return <p>Unexpected error occurred....</p>;
};

// {
//   data.map((country) => {
//     <TableRow>
//       <TableCell>name</TableCell>
//       <TableCell>name</TableCell>
//       <TableCell>name</TableCell>
//       <TableCell>name</TableCell>
//     </TableRow>;
//   });
// }

export default home;

//data.map((country) => <p>{country.name}</p>);
