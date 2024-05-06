import React, { useState ,useEffect } from 'react'
import { addemploye, getemployee, updatteemployee } from '../services/EmployeeService'
import {useNavigate, useParams} from 'react-router-dom'
const EmployeeComponent = () => {

    const [firstname, setfirstname] = useState("")
    const [lastname, setlastname] = useState("")
    const [mail, setmail] = useState("")

    const [errors , setErrors] = useState({
        firstname : '',
        lastname : '',
        mail:''

    })

    const {id} = useParams();

    const navigator = useNavigate();

    useEffect(()=>{
        if(id){
            getemployee(id).then((response)=>{
                setfirstname(response.data.firstname);
                setlastname(response.data.lastname);
                setmail(response.data.mail);
            }).catch(error => {
                console.error(error);})
        }
    },[id])
     
    function fnhandler(e){
        setfirstname(e.target.value)
    }
    function lnhandler(e){
        setlastname(e.target.value)
    }
    function mhandler(e){
        setmail(e.target.value)
    }

    function saveorupdateEmployee(e){
        e.preventDefault();
        if(validForm()){

            const employee = {firstname , lastname , mail}
                console.log(employee)

            
            if(id){
                updatteemployee(id,employee).then((response)=> {
                    console.log(response.data)
                    navigator('/employees')
                }).catch(error => {
                    console.error(error)
                })
            }else{
                addemploye(employee).then((response)=>{
                    console.log(response.data)
                    navigator('/employees')
                }).catch(error => {
                    console.error(error)
                })
            }
    
           
        }
        
    }

    function validForm(){
        let valid = true;
        const errorcopy = {... errors}
        if(firstname.trim()){
            errorcopy.firstname = ""
        }else{
            errorcopy.firstname = "First Name is required "
            valid = false;
        }
        if(lastname.trim()){
            errorcopy.lastname = ""
        }else{
            errorcopy.lastname = "Last Name is required "
            valid = false;
        }
        if(firstname.trim()){
            errorcopy.mail = ""
        }else{
            errorcopy.mail = "Mail is required "
            valid = false;
        }
        setErrors(errorcopy);
        return valid;
    }

    function pageTitle(){
        if(id){
           return <h1 className='font-bold text-3xl m-3 font-serif'>Edit Employee</h1>
        }else{
           return <h1 className='font-bold text-3xl m-3 font-serif'>Add Employee</h1>
        }
    }

  return (
    <div className=' h-[84vh] flex flex-col justify-center items-center'>
        
        <div className='flex flex-col justify-center items-center bg-slate-300 p-10 border-2 border-black w-fit h-fit'>
            {pageTitle()}
            <form>
                <div className=' p-3 flex flex-col'>
                    <label className=' font-semibold'>First Name : </label>
                    <input className={ `outline-none w-fit border-black border ${errors.firstname ? 'outline-red-700': ' '}`}
                     type='text' 
                    placeholder='Enter your first name'
                    name='firstname'
                    value={firstname}
                    onChange={fnhandler}/>
                    {errors.firstname && <div className=' text-red-700'>{errors.firstname}</div>}
                </div>

                <div className='p-3 flex flex-col'>
                    <label className=' font-semibold'>Last Name : </label>
                    <input className={ `outline-none w-fit border-black border ${errors.lastname ? 'outline-red-700': ' '}`} type='text' 
                    placeholder='Enter your Last name'
                    name='lastname'
                    value={lastname}
                    onChange={lnhandler}/>
                    {errors.lastname && <div className=' text-red-700'>{errors.lastname}</div>}
                </div>

                <div className='p-3 flex flex-col'>
                    <label className=' font-semibold'>Email : </label>
                    <input className={ `outline-none w-fit border-black border ${errors.mail ? 'outline-red-700': ' '}`} type='text' 
                    placeholder='Enter your Email'
                    name='email'
                    value={mail}
                    onChange={mhandler}/>
                    {errors.mail && <div className=' text-red-700'>{errors.mail}</div>}
                </div>
                <button className=' bg-blue-600 border-black border-2 rounded-md text-white p-2 m-2' onClick={saveorupdateEmployee}>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default EmployeeComponent