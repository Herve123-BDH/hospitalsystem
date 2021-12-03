import './Navbar.css'
import img from '../../img/img.jpg'
import {Button} from '@material-ui/core'
import {Link} from 'react-router-dom'
export const Navbar = () => {
    return (
        <div className='box'>
            <img className='img' src={img}/>
            <div className='booked'>
            <h2 className='welcome'>welcome to Health Care</h2>
            <Link className='Link' to='/book'><Button style={{position:"relative", top:"-30px"}} color="success" variant='outlined'>Book an appointment</Button></Link>
            
            </div>
            
            <div className='details'>
                <div>
                    <h1>10+</h1>
                    <p>Countries</p>
                </div>
                <div>
                    <h1>1000+</h1>
                    <p>Beds</p>
                </div>
                <div>
                    <h1>30.000+</h1>
                    <p>Happy clients</p>
                </div>
                <div>
                    <h1>50+</h1>
                    <p>Doctors</p>
                </div>
            </div>
        </div>
    )
}
