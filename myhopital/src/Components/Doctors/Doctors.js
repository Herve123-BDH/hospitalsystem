import {Box, TextField} from '@material-ui/core'
import {useState} from 'react'
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import {ArrowBack} from '@material-ui/icons';
import {Button} from '@material-ui/core'
import {Link} from 'react-router-dom'
import axios from 'axios'
import '../book/Book.css'
import Typography from '@material-ui/core/Typography';
import img from "../../img/img.jpg"
export const Doctors = () => {
    const [doctors, setDoctors]=useState([
        {
            id: 1,
            name: "Dr.Smith",
            profession: "pediatrics"
        },
        {
            id: 1,
            name: "Dr.Jhone",
            profession: "radiology"
        },
        {
            id: 1,
            name: "Dr.Herve",
            profession: "ophthalmology"
        },
        {
            id: 1,
            name: "Dr.Kingsley",
            profession: "dermatology"
        },
        {
            id: 1,
            name: "Dr.Junior",
            profession: "oncology"
        },
        {
            id: 1,
            name: "Dr.Mary",
            profession: "Emergency"
        }
    ])
    return (
        <div className='box'>
            <div style={{height:"50px"}}></div>
            <div className="items">
                {doctors.map(elt=>
                    <div className='item'>
                        <img alt='#' style={{width:"100%", height:"100%",  borderTopLeftRadius:"10px", borderBottomLeftRadius:"10px"}} src={img}/>
                        <div style={{}}>
                            <h2>{elt.name}</h2>
                            <Typography variant="subtitle1" color="text.secondary" component="div">
                                profession:{elt.profession}
                                
                            </Typography>
                            
                        </div>
                    </div>
                )}
            </div>
    </div>
)}