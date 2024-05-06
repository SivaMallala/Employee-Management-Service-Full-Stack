import React,{useEffect, useState} from 'react'
import {  deleteemployee, listemployess } from '../services/EmployeeService'
import { useNavigate } from 'react-router-dom'

const ListEmployeCompo = () => {
    const navigater = useNavigate();
    const [employees, setEmployees] = useState([])

    useEffect(() => {
      getAllemployees();

    }, [])

    function getAllemployees(){
      listemployess().then((response) => {
        setEmployees(response.data)
      }).catch(error => {
        console.error(error)
      })
    }
    
    function addnewemp(){
            navigater("/add-employee")
    }

    function updateEmpoyee(id){
      navigater(`/edit-employee/${id}`)
    }
    function removeemployee(id){
      console.log(id)
      deleteemployee(id).then((response)=> {
          getAllemployees();
      }).catch(error => {
        console.error(error)
      })
    }
  return (
    <div className='h-[80vh] flex justify-center items-center flex-col'>
        <h1 className=' m-3 text-4xl font-extrabold font-serif'>List of Employes</h1> 
        <button className=' bg-green-600 border-black border-2 rounded-md text-white p-2' onClick={addnewemp}>Add Employee</button>
        <table className=' h-fit m-3'>
            <thead>
                <tr className=' bg-slate-500 text-white border-solid border-[3px] border-black'>
                    <th className='p-2 border-solid border-2 border-black'>Employee ID</th>
                    <th className='p-2 border-solid border-2 border-black'>Employee First Name</th>
                    <th className='p-2 border-solid border-2 border-black'>Employee Last Name</th>
                    <th className='p-2 border-solid border-2 border-black'>Employee Email</th>
                    <th className='p-2 border-solid border-2 border-black'>Actions</th>
                </tr>
            </thead>
            <tbody>
                {employees.map(employee =>
                <tr className=' bg-yellow-50 border-solid border-[3px] border-black' key={employee.id}>
                    <td className=' p-2 border-solid border-2 border-black'>{employee.id}</td>
                    <td className=' p-2 border-solid border-2 border-black'>{employee.firstname}</td>
                    <td className='p-2 border-solid border-2 border-black'>{employee.lastname}</td>
                    <td className='p-2 border-solid border-2 border-black'>{employee.mail}</td>
                    <td>
                      <button className=' bg-blue-700 m-1 border-black border-2 rounded-md text-white p-1'
                       onClick={()=> updateEmpoyee(employee.id)}>Update</button>
                       <button className=' bg-red-700 m-1 border-black border-2 rounded-md text-white p-1'
                       onClick={()=> removeemployee(employee.id)}>Delete</button>
                    </td>
                </tr>)}
            </tbody>
        </table>
    </div>
  )
}

export default ListEmployeCompo