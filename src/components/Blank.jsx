import axios from 'axios'
import { Box } from "@mui/material";
import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component';
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useTheme } from "@mui/material";
import { tokens } from "../theme";
import Header from './Header';
const Blank = () => {
    const colors = tokens(theme.palette.mode);
    const theme = useTheme();
    const column =[
        {
            filed: ' id',
            headerName: 'ID',
            
        },
        {
            field: 'name',
            headerName: 'Name',
            
        }
        // {
        //     name: 'Email',
        //     selector: row => row.email 
        //     }, 
        // {
        //     name: 'City',
        //     selector: row => row.city
        // }
    ]
    const [records,setRecords]=useState([]);
    useEffect(()=>{
        const fetchData=async () => {
            axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res =>setRecords(res.data))
            .catch(err =>console.log(err));
        }
        fetchData();
    }, [])
    
  return (
    <div>
        <Box m="20px">
      <Header
        title="CONTACTS"
        subtitle="List of Contacts for Future Reference"
      />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          
          columns={column}
          
        />
      </Box>
    </Box>
       
    </div>
  )
}

export default Blank