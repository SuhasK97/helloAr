import * as React from "react";
import Button from "@mui/material/Button";
import ModalComp from "./../../Atoms/ModalComp";
import Table from "react-bootstrap/Table"
import {useState,useEffect} from "react"
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';

export default function Settings() {
  const [show, setShow] = useState(false)
  const [userData, setuserData] =useState({
    email:"",
    select:""
  })
  const [data, setdata] = useState([])
  let handleClose=()=>setShow(false)
  let handleInput=(e)=>
  {
    setuserData({
      ...userData,
      [e.target.name]:e.target.value
    })
  }

  let addData=()=>
  {
    let dataCopy=[...data]
    dataCopy.push(userData)
   setdata(dataCopy)
   setuserData({
    email:"",
    select:""
   })
   handleClose()
  }

  useEffect(()=>
  {
    localStorage.setItem("userData",JSON.stringify(data))
    
  },[data])

  let deleteData=(index)=>
  {
    let filteredData=data.filter((val,ind)=>ind!==index)
    setdata(filteredData)
  }
  
  return (
    <div>
      <Button
        className="rounded-pill"
        sx={{ backgroundColor: "#4eb777", color: "white",padding:'5px 13px' }}
        onClick={()=>setShow(true)}
      >
        Add User
      </Button>
      <Table striped bordered hover style={{width:"70%"}} className="m-5" >
      <thead>
        <tr>
          <th>#</th>
          <th>User</th>
          <th>Last Signed In</th>
          <th>Role</th>
          <th> </th>
        </tr>
      </thead>
      <tbody>
        {data?data.map((val,ind)=>
        {
          return <tr>
          <td>{ind+1}</td>
          <td>{val.email}</td>
          <td></td>
          <td>{val.select}</td>
          <td><button onClick={()=>{deleteData(ind)}} style={{border:"none"}}>{<DeleteRoundedIcon/>}</button></td>
        </tr>
        }):null}
      </tbody>
    </Table>
        <ModalComp show={show} className={"modalComp"} handleInput={handleInput} nemail={"email"} nselect={"select"} handleClose={handleClose} addData={addData} email={userData.email} select={userData.select} />
    </div>
  );
}
