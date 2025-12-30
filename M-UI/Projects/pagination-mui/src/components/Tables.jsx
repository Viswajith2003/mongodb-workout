import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Chip from "@mui/material/Chip";
import IconButton from "@mui/material/IconButton";

import { tableData } from "../datas.js";
import {
  Box,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Pagination,
} from "@mui/material";
import { useState } from "react";

export default function Tables() {
  const [sort, setSort] = useState("");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const rowPage = 5;

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setPage(1); // Reset to first page on search
  };

  const handlePageChange = (e, value) => {
    setPage(value);
  };

  const handleChange = (e) => {
    setSort(e.target.value);
    setPage(1); // Reset to first page on sort
  };

  // Filter data by search
  let filteredData = tableData.filter((item) =>
    item.Name.toLowerCase().includes(search.toLowerCase())
  );

  // Sort filtered data
  if (sort === 10) {
    filteredData = [...filteredData].sort((a, b) =>
      a.Name.localeCompare(b.Name)
    );
  } else if (sort === 20) {
    filteredData = [...filteredData].sort((a, b) => a.Date - b.Date);
  }

  // Calculate paginated data from filtered results
  const paginatedData = filteredData.slice(
    (page - 1) * rowPage,
    page * rowPage
  );
  return (
    <Box sx={{ width: "100%", minHeight: "60vh", py: 6 }}>
      <Box
        sx={{
          maxWidth: 1100,
          mx: "auto",
          mb: 2,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TextField
          variant="outlined"
          size="small"
          placeholder="Search by name"
          sx={{ background: "#fff", borderRadius: 1, width: 260 }}
          InputProps={{ style: { fontSize: 15 } }}
          value={search}
          onChange={handleSearchChange}
          autoComplete="off"
        />
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <InputLabel id="demo-select-small-label">Sort</InputLabel>
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            value={sort}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Name</MenuItem>
            <MenuItem value={20}>Date</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Paper sx={{ maxWidth: 1100, mx: "auto", boxShadow: 2 }}>
        <TableContainer>
          <Table sx={{ minWidth: 900 }} aria-label="custom design table">
            <TableHead>
              <TableRow sx={{ backgroundColor: "#f3f4f6" }}>
                <TableCell sx={{ fontWeight: 600 }}>Name</TableCell>
                <TableCell sx={{ fontWeight: 600 }}>Status</TableCell>
                <TableCell sx={{ fontWeight: 600 }}>Date</TableCell>
                <TableCell sx={{ fontWeight: 600, width: 120 }} align="center">
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedData.length > 0 ? (
                paginatedData.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>{item.Name}</TableCell>
                    <TableCell>
                      <Chip
                        label={item.Status.text}
                        sx={{
                          bgcolor: item.Status.bgcolor,
                          color: "#fff",
                          fontWeight: 500,
                        }}
                        size="small"
                      />
                    </TableCell>
                    <TableCell>{item.Date}</TableCell>
                    <TableCell align="center">
                      <IconButton size="small" color="primary">
                        <item.Actions.editIcon />
                      </IconButton>
                      <IconButton size="small" color="error">
                        <item.Actions.deleteIcon />
                      </IconButton>
                      <IconButton size="small" color="info">
                        <item.Actions.viewIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={4} align="center">
                    No results found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
        <Pagination
          count={Math.ceil(filteredData.length / rowPage) || 1}
          page={page}
          onChange={handlePageChange}
          color="primary"
          shape="rounded"
          disabled={filteredData.length === 0}
        />
      </Box>
    </Box>
  );
}
