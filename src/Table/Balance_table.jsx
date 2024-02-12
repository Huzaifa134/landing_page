import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import IconContacts from '../components/Contact_Icon';;

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 10,
    
  },
}));

function createData(name, address, balance ) {
  return { name, address, balance  };
}

const rows = [
  createData('Account1 (polkadot-js)', '5HGhE2166R33wtIJaUL1rVASBEOWUVAbQtUc5LyhtDnhtHpp', 0),
  createData('Account 2 (polkadot-js)', 'SERvoXojVEcUsX7nmi2HXMcStdg6q9JevndM3nAW9S8osrkjo', 0),
  createData('Sudo (polkadot-js)', '5FFWh4xXSmKr2iYTljheMPAYhebbwB76jmxXsBi3pK8zXYGss', 0),
  createData('Polka Dot (polkadot-js)', '5CDHUFXZ1Xchmain33gXeimyMu14nJeT4CUd1kLVkgGgH6a', "2,648,410,829,890"),
  createData('ControllerPD (polkadot-js)', '5ED4XWcsFWMqM4ChhfLGKP4THssSQnsFDZ3Lqrvgwuwdr7', "10,253,057,376"),
  createData('ValController (polkadot-js)', '5CMQb188vSttvUHnLUNHUZdsmHTXdHmYS9pd4Q6jUsPsoS', "14,160,039,646"),
  createData('Account3 (polkadot-js)', '5Cd2GdG8LGqZZspbGeKAVUkfotVPRXnQHBA74rQ1TNSBIM', "11,842,900,800"),
  createData('Account4 (polkadot-js)', '5EstP9ATGzYcfARSVBXXTNQ07sMbS8st36THkvj87YrGDShd', 0),
];

export default function CustomizedTables() {
  return (
    <TableContainer component={Paper} style={{width:"82.5%", margin:"250px auto"}}>
      <Table sx={{ minWidth: 500 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="right" className='w-96 font-bold'>Name</StyledTableCell>
            <StyledTableCell align="left">Address</StyledTableCell>
            <StyledTableCell align="left">Balance</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row" align="right">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="left">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ flexGrow: 1 }}>{row.address}</div>
                  <div style={{ width: '50%' }}>
                    <IconButton color="primary" aria-label="contact icon" style={{ marginLeft: '50%' }}>
                      <IconContacts />
                    </IconButton>
                  </div>
                </div>
              </StyledTableCell>
              <StyledTableCell align="left">{row.balance}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
