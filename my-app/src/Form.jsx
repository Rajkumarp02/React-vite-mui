import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Container, Grid, TextField } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
//import './Form.css'; 
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Autocomplete from '@mui/material/Autocomplete';

//create a data for table
function createData(
  A,
  B,
  C,

) {
  return { A, B, C, };
}

//send the data to row
const rows = [
  createData('Cell A', 'Cell B', 'Cell C'),
  createData('Cell A', 'Cell B', 'Cell C'),
  createData('Cell A', 'Cell B', 'Cell C'),
];


//user fields
const options = [
  { name: 'john', address: "17d rjpm for john", phone: '7181889199' },
  { name: 'raja', address: "18d mdu for raja", phone: '7728888222' },
  { name: 'ravi', address: "19d kv for ravi", phone: '2222222222' },
]

//sources
const sources = ['New York', 'Los Angeles', 'Chicago', 'San Francisco', 'Boston'];
//Destination
const destinationOp = ['London', 'Paris', 'Berlin', 'Tokyo', 'Sydney'];






export default function Form() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedOption2, setSelectedOption2] = useState(null);
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');

  const handleNameChange = (event, value) => {
    setSelectedOption(value);
  }
  const handleNameChange2 = (event, value) => {
    setSelectedOption2(value);
  }

  return (
    <div>
      {/* header section */}
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{
          backgroundColor: "#039be5", display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "60px",
        }}>
          <div className='nav'>
            <Toolbar>

              <Typography variant="h6" component="div" sx={{
                margin: "0px 65px",
                border: "1px solid rgb(162, 0, 255)",
                borderRadius: "2px",
                padding: "8px 25px",
                backgroundColor: "white",
                color: "rgb(82, 110, 236)",
                fontSize: "11px",
                fontWeight: "bold",

              }}>
                Page One
              </Typography>
              <Typography variant="h6" component="div" sx={{
                margin: "0px 65px",
                border: "1px solid rgb(162, 0, 255)",
                borderRadius: "2px",
                padding: "8px 25px",
                backgroundColor: "white",
                color: "rgb(82, 110, 236)",
                fontSize: "11px",
                fontWeight: "bold"
              }}>
                Page Two
              </Typography>
              <Typography variant="h6" component="div" sx={{
                margin: "0px 65px",
                border: "1px solid rgb(162, 0, 255)",
                borderRadius: "2px",
                padding: "8px 25px",
                backgroundColor: "white",
                color: "rgb(82, 110, 236)",
                fontSize: "11px",
                fontWeight: "bold"
              }}>
                Page Three
              </Typography>

            </Toolbar>
          </div>
        </AppBar>
      </Box>

      <br />

      <div>
        {/* input fields (date,source,destination) */}
        <Container maxWidth="md">
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ marginTop: "15px" }}>
            <Grid item md={4} >
              <Button variant="contained" size="small"
                sx={{
                  padding: "0px 10px",
                  borderRadius: "8px",
                  backgroundColor: "#3f51b5",
                  fontSize: "11px"
                }}>
                Date
              </Button>
              <div>
                <LocalizationProvider dateAdapter={AdapterDayjs}
                >
                  <DatePicker sx={{
                    width: 190,
                    "& input": {
                      height: 5
                    },
                  }} />
                </LocalizationProvider>
              </div>
            </Grid>
            <Grid item md={4}>
              <Button variant="contained" size="small"
                sx={{
                  padding: "0px 10px",
                  borderRadius: "8px",
                  backgroundColor: "#3f51b5",
                  fontSize: "11px"
                }}>
                Source
              </Button>
              <div>
                <Autocomplete
                  options={sources}
                  value={source}
                  onChange={(event, newValue) => setSource(newValue)}
                  renderInput={(params) =>
                    <TextField  {...params} id="outlined-basic" variant="outlined" placeholder="Add text"
                      sx={{
                        width: 190,
                        "& input": {
                          height: 5
                        },
                      }}
                    />
                  }
                />


              </div>
            </Grid>
            <Grid item md={4}>
              <Button variant="contained" size="small"
                sx={{
                  padding: "0px 10px",
                  borderRadius: "8px",
                  backgroundColor: "#3f51b5",
                  fontSize: "11px"
                }}>
                Destination
              </Button>
              <div>
                <Autocomplete
                  options={destinationOp}
                  value={destination}
                  onChange={(event, newValue) => setDestination(newValue)}
                  renderInput={(params) =>
                    <TextField  {...params} id="outlined-basic" variant="outlined" placeholder="Add text"
                      sx={{
                        width: 190,
                        "& input": {
                          height: 5,
                        },
                      }}
                    />
                  }
                />


              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
      <br />


      <div>





        {/* Two Input containers */}
        <Container maxWidth="md">
          <>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ marginTop: "15px" }}>

              <Grid item md={6}>
                <Button variant="contained" size="small"
                  sx={{
                    padding: "0px 10px",
                    borderRadius: "8px",
                    backgroundColor: "#3f51b5",
                    fontSize: "11px"
                  }}
                >
                  Client One
                </Button>
                <Card sx={{ minWidth: 275, backgroundColor: "#039be5" }}>

                  <CardContent sx={{
                    display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", padding: "35px"
                  }}>
                    <div>

                      <Button variant="contained" size="small"
                        sx={{
                          padding: "0px 10px",
                          borderRadius: "8px",
                          backgroundColor: "#3f51b5",
                          fontSize: "11px",
                          display: "flex", alignItems: "flex-start", justifyContent: "flex-start", flexDirection: "column",
                        }}>
                        Name
                      </Button>

                      <Autocomplete
                        //freeSolo
                        //id="free-solo-2-demo"
                        //disableClearable
                        options={options}
                        getOptionLabel={(option) => option.name}
                        onChange={handleNameChange}
                        //options={top100Films.map((option) => option.address)}
                        renderInput={(params) => (
                          <TextField id="outlined-basic" variant="outlined"
                            {...params}
                            placeholder="Add Text"
                            sx={
                              {
                                backgroundColor: "white",
                                borderRadius: "4px",
                                fontSize: "11px",
                                width: 240,
                                mb: 1,

                              }
                            }

                          />
                        )}

                      />



                    </div>

                    <div>
                      <Button variant="contained" size="small"
                        sx={{
                          padding: "0px 10px",
                          borderRadius: "8px",
                          backgroundColor: "#3f51b5",
                          fontSize: "11px",
                          display: "flex", alignItems: "flex-start", justifyContent: "flex-start", flexDirection: "column"
                        }}>
                        Address
                      </Button>

                      <TextField id="outlined-multiline-flexible" variant="outlined" multiline maxRows={4}
                        placeholder="Add text"
                        value={selectedOption ? selectedOption.address : ''}
                        sx={
                          {
                            backgroundColor: "white",
                            borderRadius: "4px",
                            fontSize: "11px",
                            width: 240,
                            mb: 1
                          }
                        } />

                    </div>
                    <div>
                      <Button variant="contained" size="small"
                        sx={{
                          padding: "0px 10px",
                          borderRadius: "8px",
                          backgroundColor: "#3f51b5",
                          fontSize: "11px",
                          display: "flex", alignItems: "flex-start", justifyContent: "flex-start", flexDirection: "column"
                        }}>
                        Phone
                      </Button>

                      <TextField id="outlined-basic" variant="outlined" placeholder="Add text"
                        value={selectedOption ? selectedOption.phone : ''}

                        sx={
                          {
                            backgroundColor: "white",
                            borderRadius: "4px",
                            fontSize: "11px",
                            width: 240,
                            mb: 1
                          }
                        } />


                    </div>
                  </CardContent>
                </Card>
              </Grid>




              <Grid item md={6}>
                <Button variant="contained" size="small"
                  sx={{
                    padding: "0px 10px",
                    borderRadius: "8px",
                    backgroundColor: "#3f51b5",
                    fontSize: "11px",
                  }}>
                  Client Two
                </Button>

                <Card sx={{ minWidth: 275, backgroundColor: "#039be5" }}>
                  <CardContent sx={{
                    display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", padding: "35px"
                  }}>
                    <div>
                      <Button variant="contained" size="small"
                        sx={{
                          padding: "0px 10px",
                          borderRadius: "8px",
                          backgroundColor: "#3f51b5",
                          fontSize: "11px",
                          display: "flex", alignItems: "flex-start", justifyContent: "flex-start", flexDirection: "column"
                        }}>
                        Name
                      </Button>

                      <Autocomplete
                        //freeSolo
                        //id="free-solo-2-demo"
                        //disableClearable
                        options={options}
                        getOptionLabel={(option) => option.name}
                        onChange={handleNameChange2}
                        //options={top100Films.map((option) => option.address)}
                        renderInput={(params) => (
                          <TextField id="outlined-basic" variant="outlined"
                            {...params}
                            placeholder="Add Text"
                            sx={
                              {
                                backgroundColor: "white",
                                borderRadius: "4px",
                                fontSize: "11px",
                                width: 240,
                                mb: 1,

                              }
                            }

                          />
                        )}

                      />

                    </div>
                    <div>
                      <Button variant="contained" size="small"
                        sx={{
                          padding: "0px 10px",
                          borderRadius: "8px",
                          backgroundColor: "#3f51b5",
                          fontSize: "11px",
                          display: "flex", alignItems: "flex-start", justifyContent: "flex-start", flexDirection: "column"

                        }}>
                        Address
                      </Button>

                      <TextField
                        id="outlined-multiline-flexible" variant="outlined" multiline maxRows={4}
                        placeholder="Add text"
                        value={selectedOption2 ? selectedOption2.address : ''}

                        sx={
                          {
                            backgroundColor: "white",
                            borderRadius: "4px",
                            fontSize: "11px",
                            width: 240,
                            mb: 1
                          }
                        } />
                    </div>
                    <div>
                      <Button variant="contained" size="small"
                        sx={{
                          padding: "0px 10px",
                          borderRadius: "8px",
                          backgroundColor: "#3f51b5",
                          fontSize: "11px",
                          display: "flex", alignItems: "flex-start", justifyContent: "flex-start", flexDirection: "column"
                        }}>
                        Phone
                      </Button>

                      <TextField id="outlined-basic" variant="outlined" placeholder="Add text"
                        value={selectedOption2 ? selectedOption2.address : ''}

                        sx={
                          {
                            backgroundColor: "white",
                            borderRadius: "4px",
                            fontSize: "11px",
                            width: 240,
                            mb: 1
                          }
                        } />
                    </div>
                  </CardContent>
                </Card>
              </Grid>

            </Grid>
          </>
        </Container>
      </div>
      <br />



      {/* List Of Table */}
      <div>
        <Container maxWidth="md">
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ marginTop: "10px" }}>
            <Grid item md={12}>
              <Button variant="contained" size="small"
                sx={{
                  padding: "0px 10px",
                  borderRadius: "8px",
                  backgroundColor: "#3f51b5",
                  fontSize: "11px"
                }}>
                List
              </Button>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell align="center" sx={{ fontSize: "17px" }}>HEADER A</TableCell>
                      <TableCell align="center" sx={{ fontSize: "17px" }}>HEADER B</TableCell>
                      <TableCell align="center" sx={{ fontSize: "17px" }}>HEADER C</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow
                        key={row.A}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell component="th" scope="row" align="center" sx={{ fontSize: "15px" }}>
                          {row.A}
                        </TableCell>
                        <TableCell align="center" sx={{ fontSize: "15px" }}>{row.B}</TableCell>
                        <TableCell align="center" sx={{ fontSize: "15px" }}>{row.C}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>

  )
}
