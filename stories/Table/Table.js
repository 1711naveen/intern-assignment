import React from 'react'
import { styled } from '@mui/material/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Roboto } from 'next/font/google';
import { Button, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import BorderColorIcon from '@mui/icons-material/BorderColor';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        fontSize: 18,
        backgroundColor: '#f0f0f0',
        color: theme.palette.common.black,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 16,

        color: theme.palette.common.black,
        backgroundColor: '#fafafa',
        fontFamily: '"Noto Sans"',
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

const theme = createTheme({
    typography: {
        subtitle1: {
            fontSize: 12,
        },
        body1: {
            fontWeight: 500,
        },
        button: {
            fontStyle: 'italic',
        },
    },
});

const activeButton = (<Button variant="contained" color='success' size="small" >Active</Button>);
const inActiveButton = (<Button variant="contained" color='error' size="small" >Inactive</Button>);


const deleteImg = (<>

    <IconButton aria-label="delete" color="delete" size="small">
        <BorderColorIcon />
    </IconButton>

    <IconButton aria-label="delete" color="error" size="small">
        <DeleteIcon />
    </IconButton>

</>)

function createData(name, email, role, location, lastactive, permission, status, action) {
    return { name, email, role, location, lastactive, permission, status, action };
}

const rows = [
    createData('Peter John', 'Peter@gmail.com', 'Owner', 'Adam Stall', 'Sep 13, 2023 5:51 PM', 'All Permissions', activeButton, deleteImg),
    createData('Lingan', 'Lin@gmail.com', 'Executive', 'MMDA', 'Today, 2023 2:11 PM', '3 Permissions', activeButton, deleteImg),
    createData('Adam', 'Adam@gmail.com', 'Admin', 'DEO Office', 'Sep 13, 2023 5:51 PM', '6 Permissions', activeButton, deleteImg),
    createData('Smith', 'Smith@gmail.com', 'Supervisor', 'Plot Hub', 'Sep 13, 2023 5:51 PM', '5 Permissions', activeButton, deleteImg),
    createData('John Abraham', 'Jhon@gmail.com', 'Executive', 'CA', 'Sep 13, 2023 5:51 PM', '2 Permissions', inActiveButton, deleteImg),
]

const Table = () => {
    return (
        <div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="center">Name</StyledTableCell>
                            <StyledTableCell table align="center">Email</StyledTableCell>
                            <StyledTableCell align="center">Role&nbsp;</StyledTableCell>
                            <StyledTableCell align="center">
                                Location&nbsp;
                                <div>coimbotore</div>
                            </StyledTableCell>
                            <StyledTableCell align="center">Last Active&nbsp;</StyledTableCell>
                            <StyledTableCell align="center">Permission	&nbsp;</StyledTableCell>
                            <StyledTableCell align="center">Status	&nbsp;</StyledTableCell>
                            <StyledTableCell align="center">Action	&nbsp;</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <StyledTableRow key={row.name}>
                                <StyledTableCell component="th" scope="row" align="center" >{row.name} </StyledTableCell>
                                <StyledTableCell align="center">{row.email}</StyledTableCell>
                                <StyledTableCell align="center">{row.role}</StyledTableCell>
                                <StyledTableCell align="center">
                                    {row.location}
                                    <div>
                                        <ThemeProvider theme={theme}>
                                            <Typography variant="subtitle1">Coimbatore</Typography>
                                        </ThemeProvider>
                                    </div>
                                </StyledTableCell>
                                <StyledTableCell align="center">{row.lastactive}</StyledTableCell>
                                <StyledTableCell align="center">{row.permission}</StyledTableCell>
                                <StyledTableCell align="center">{row.status}</StyledTableCell>
                                <StyledTableCell align="center">{row.action}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default Table