import React from "react";
import { Link } from "react-router-dom";

import "./country.css";

// hooks
import useAllCountries from "./custom-hooks/useAllCountries";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core/";

function Home() {
  const [err, data] = useAllCountries("https://restcountries.com/v2/all");
  if (data.length > 0) {
    return (
      <div>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Flag</TableCell>
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
                    <img src={country.flag} height="20em" />
                  </TableCell>
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
}

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

export default Home;

//data.map((country) => <p>{country.name}</p>);
