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
import './Book.css'
// import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import img from "../../img/img.jpg"
export const Book = () => {
    const url='https://hospitalsystembooking.herokuapp.com/ok/addpatient'
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
    const [search, setSearch]=useState("")
    const [name, setName]=useState("")
    const [profession, setProfession]=useState("")
    const [bool, setBool]=useState(true)
    const [age, setAge] = useState("")
    const [username, setUsername] = useState("")
    const [message, setMessage] = useState("")
    const [weight, setWeight] = useState("")
    const [date, setDate] = useState("")
    const [userSurname, setUserSurname] = useState("")
    const [errorAge, setErrorAge]=useState("")
    const [errorName,setErrorName]=useState("")
    const [errorSurname,setErrorSurname]=useState("")
    const [errorMessage,setErrorMessage]=useState("")
    const [errorWeight,setErrorWeight]=useState("")
    const[submittion,setSubmittion]=useState(false)
    const [errorDate,setErrorDate]=useState("")
    const [email, setEmail]=useState("")
    const [errorEmail, setErrorEmail]=useState("")
    const [submitted, setSubmitted]=useState(false)
    const [success, setSuccess]=useState(false)
    const [ErrorNot, setErrorNot]=useState("")
    const submit=()=>{
        if(age==="" || username==="" || message==="" || weight==="" || userSurname==="" ||date===""){
            setErrorAge("entrer your age please")
            setErrorName("enter you name please")
            setErrorSurname("enter your surname please")
            setErrorMessage("enter any message  for more details")
            setErrorWeight("enter your weight please")
            setErrorDate("enter the day of the meeting")
            setErrorEmail("enter your email address")
            setSubmittion(true)
        }else{
            setSubmitted(true)
            setErrorNot('')
            axios.post(url, {name:username,surname:userSurname,doctor:name,department:profession,meeting:date,age:age,weight:weight,email:email,message:message})
            .then(data=>{
                if(data.data.msg.__v===0){
                    setSubmitted(true)
                    setTimeout(()=>{
                        setSuccess(true)
                    }, 2000);
                }
            })
            .catch(err=>{
                setSubmitted(false)
                setErrorNot('An error occured while sending data, retry again')
                console.log(err)})
            
        }
    }
    return (
        <div className='box'>
            <div className='search'>
                <Paper component="form" sx={{ p: '2px 4px', display: 'flex', alignItems: 'center'}}>
                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        style={{width:"80%"}}
                        placeholder="search doctors by speciality"
                        value={search}
                        onChange={(e)=>{setSearch(e.target.value.toLowerCase())}}
                        inputProps={{ 'aria-label': 'search doctors by speciality' }}/>
                    <IconButton type="button"  sx={{ p: '10px' }} aria-label="search">
                        <SearchIcon />
                    </IconButton>
                    <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                </Paper>
            </div>
            
            <div style={{height:"50px"}}></div>
            {bool===true?<h2 style={{opacity:"0.7"}}>Choose the doctor you want to have an appointment with</h2>:submitted===false?<h2 style={{opacity:"0.7"}}>Fill out this form to book a meeting with a doctor</h2>:""}
            
            {bool===true? search===""?
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
                        <button onClick={()=>{
                            setName(elt.name)
                            setProfession(elt.profession)
                            setBool(!bool)
                        }} className='btn btn-outline-success'>Book</button>
                    </div>
                    )}
                </div>
            :doctors.map(elt=>search===elt.profession?
                    <div className='item'>
                        <img alt='#' style={{width:"100%",  borderTopLeftRadius:"10px", borderBottomLeftRadius:"10px"}} src={img}/>
                        <div style={{}}>
                            <h2>{elt.name}</h2>
                            <Typography variant="subtitle1" color="text.secondary" component="div">
                                profession:{elt.profession}
                            </Typography>
                        </div>
                        <button onClick={()=>{
                            setName(elt.name)
                            setProfession(elt.profession)
                            setBool(!bool)
                        }} className='btn btn-outline-success'>Book</button>
                        
                    </div>
                    
                :""):
            name===""?"":submitted===false?<div>
            <Box
                component="form"
                noValidate
                autoComplete="off">
                    <div className="inputs">
                        <TextField error={submittion===false?"":username===""?"error":""} helperText={submittion===false?"":username===""?errorName:""} className='textinput' value={username} onChange={(e)=>setUsername(e.target.value)}  label="name" variant="standard" />
                        <TextField error={submittion===false?"":userSurname===""?"error":""} helperText={submittion===false?"":userSurname===""?errorSurname:""} className='textinput' value={userSurname} onChange={(e)=>setUserSurname(e.target.value)} label="surname" variant="standard" />
                    </div>
                    <div className='inputs'>
                        <TextField className='textinput'  label="doctor" value={name} variant="standard" />
                        <TextField className='textinput'  label="Departement" value={profession} variant="standard" />
                        <TextField
                        className='textinput'
                            id="date"
                            label="meeting date"
                            type="date"
                            error={submittion===false?"":date===""?"error":""}
                            helperText={submittion===false?"":date===""?errorDate:""}
                            // InputProps={{
                            //     inputComponent: InputComponent
                            // }}
                            value={date}
                            onChange={(e)=>setDate(e.target.value)}
                            InputLabelProps={{
                                shrink: true
                            }}/>
                    </div>
                    <div className="inputs">
                        <TextField error={submittion===false?"":age===""?"error":""}  helperText={submittion===false?"":age===""?errorAge:""} className='textinput' value={age} onChange={(e)=>setAge(e.target.value)} type='number'  label="age" variant="standard" />
                        <TextField error={submittion===false?"":weight===""?"error":""} helperText={submittion===false?"":weight===""?errorWeight:""} className='textinput' value={weight} onChange={(e)=>setWeight(e.target.value)} type='number' label="weight(kg)" variant="standard" />
                    </div>
                    <div>
                    <TextField
                        className='textinpu'
                        label="enter your email address"
                        error={submittion===false?"":email===""?"error":""}
                        helperText={submittion===false?"":email===""?errorEmail:""}
                        value={email}
                        type='email'
                        onChange={(e)=>setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                    
                        <TextField
                        className='textinpu'
                        label="additional message about my problem"
                        error={submittion===false?"":message===""?"error":""}
                        helperText={submittion===false?"":message===""?errorMessage:""}
                        value={message}
                        onChange={(e)=>setMessage(e.target.value)}
                        multiline
                        rows={4}
                        />    
                    </div>
                    <div>
                        <Button onClick={()=>{setBool(!bool)
                        setName("")
                        setProfession("")
                        }} variant='contained' style={{marginRight:"10px"}}><ArrowBack/>Go back</Button>
                        <Button onClick={submit} variant='contained'>Book now</Button>
                    </div>
                    
                
            </Box>
                </div>:success===false?<div>
                    
                <div class="spinner-border text-secondary" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
                </div>:<div>
                    <div>Meeting successfully booked, you will be notified shortly</div>
                    <Link to='/'>
                        <Button variant='contained'>Get to the dasboard</Button>
                    </Link>
                    </div>}
                {ErrorNot===""?"":
                <div>
                    {ErrorNot}
                </div>}
        </div>
    )
}


