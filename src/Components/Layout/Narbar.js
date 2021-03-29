import React from "react"
import "../../CSS/Narbar.css"
import { NavLink } from 'react-router-dom'
class Narbar extends React.Component{
    
    render(){
        return(
            <div className="narbar_top">
            <div class="topnav">
            <NavLink  className="" to="/now"> Hiện Nay </NavLink>   
            <NavLink  className="" to="/hourly"> Hằng Giờ </NavLink>     
            <NavLink  className="" to="/daily"> Hằng Ngày </NavLink>   
            {/* <NavLink  className="" to="/monthly"> Hằng Tháng </NavLink>    */}
            {/* <a class="active" href="#home">Hiện Nay</a>
            <a href="#news">Hằng Giờ</a>
            <a href="#contact">Hằng Ngày</a>
            <a href="#about">Hằng Tháng</a> */}
        </div>
        
        </div>
        )
    }
}
export default Narbar