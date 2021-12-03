import {Box, TextField} from '@material-ui/core'
import {useState} from 'react'
import axios from 'axios'
import '../book/Book.css'
import Typography from '@material-ui/core/Typography';
import img from "../../img/img.jpg"
export const Patients = () => {
    const [doctors, setDoctors]=useState([])
    const run=()=>{
        axios.get('https://hospitalsystembooking.herokuapp.com/ok/get')
            .then(data=>{
            setDoctors(data.data.msg)})
    }
    run()
    return (
        <div className='box'>
            <div style={{height:"50px"}}></div>
            <div className="items">
                {doctors.length===0?"no patient currently":doctors.map(elt=>
                    <div className='itemP'>
                        <img alt='#' style={{width:"100%", height:"100%",  borderTopLeftRadius:"10px", borderBottomLeftRadius:"10px"}} src={img}/>
                        <div>
                            <Typography className="hummm" variant="subtitle1" color="text.secondary" component="div">
                                <p><b>Fullname:</b> {elt.name}</p>
                                <p><b>email:</b> {elt.email}</p>
                                <p><b>meeting date:</b> {elt.meeting}</p>
                                <p><b>doctor:</b> {elt.doctor}</p>
                                <p><b>profession:</b>{elt.department}</p>
                                <p><b>purpose:</b> Confidential</p>
                            </Typography>
                        </div>
                    </div>
                )}
            </div>
    </div>
)}