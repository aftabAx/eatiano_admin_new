import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Header from "./Header";
import { useTheme } from "@mui/material";
import { tokens } from "./../theme";
const Product = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [data,setData]=useState([]);


    const columns = [
        { field: "product_id", headerName: "Product Id", flex: 0.5 },
        // { field: "registrarId", headerName: "Registrar ID" },
        {
            field: "data.restaurant.id",
            headerName: "Restaurant Id",
            flex: 1,
        },
        {
            field: "title",
            headerName: "Product",
            flex: 1,
            cellClassName: "name-column--cell",
        },
        {
            field: "price",
            headerName: "Price",
            flex: 1,
        },
        {
            field: "description",
            headerName: "Description",
            flex: 1,
        },
        // {
        //     field: "address",
        //     headerName: "Address",
        //     flex: 1,
        // },
    ];

    const [rows, setRows] = useState([]);

    useEffect(() => {
        // Fetch data from your API endpoint
        fetch("http://13.127.95.127/eatianoBackend/public/index.php/api/all_products")
            .then((response) => response.json())
            .then((data) => {
                setRows(data); // Update rows with the fetched data
            })
            .then((res)=>setData(res.data.data))
            .catch((error) => console.error("Error fetching data:", error));

    }, []);

    return (
        <Box m="20px">
            <Header title="PRODUCTS" subtitle="List of Products" />
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
                    rows={rows} // Update with fetched data
                    columns={columns}
                    components={{ Toolbar: GridToolbar }}
                    
                />
            </Box>
        </Box>
    );
};

export default Product;
