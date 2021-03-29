import React from "react"
import "../CSS/Now.css"
class Now extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      DataNow: [],
      isLoading: true
    };
  }
  conectapi = (response) => {
    this.setState({
      DataNow: response.data,
      isLoading: false
    })

  }
  componentWillMount() {
    var axios = require('axios');
    var namecity = localStorage.getItem('name');
    let a = this
    var config = {
      method: 'get',
      url:('http://api.openweathermap.org/data/2.5/weather?q='+namecity+'&appid=ba15a2d6eb01b269c2ac367530eeae8d&lang=vi&units=metric') ,
      headers: {}
    };
    axios(config)
      .then(function (response) {

        a.conectapi(response)

      })
      .catch(function (error) {
        console.log(error);
      });

  }
  render() {
    const { DataNow, isLoading } = this.state
    var today = new Date();
    var datanew = localStorage.getItem("name")
    if (datanew === null){
      localStorage.setItem("name",'Thành phố Hồ Chí Minh')
      localStorage.setItem("lon",'106.666672')
      localStorage.setItem("lat",'10.83333')
      window.location.href = '/'
    }
    if (isLoading === true) {
      return (

        <div>
          <h3>Vui Lòng chờ</h3>
        </div>
      )
    }
    if (isLoading === false) {
      return (

        <div>
          <div>

            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta charSet="utf-8" />
            <meta name="keywords" content="Classic Weather Widget Responsive Web Template, Bootstrap Web Templates, Flat Web Templates, Android Compatible Web Template, Smartphone Compatible Web Template, Free Webdesigns for Nokia, Samsung, LG, Sony Ericsson, Motorola Web Design" />
            <link href="css/style.css" rel="stylesheet" type="text/css" />

            <link href="//fonts.googleapis.com/css?family=Poppins:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&subset=devanagari,latin-ext" rel="stylesheet" />
            <h1>{DataNow.name} </h1>
            <div className="w3ls-weather">
              <div className="weather100">
                <h3>{DataNow.name}</h3>

                <h4>{Math.ceil(DataNow.main.feels_like)} °C </h4>
                <h5>Tốc độ gió {Math.ceil((DataNow.wind.speed) * 10)} km/h </h5>
                <canvas id="rain" width={500} height={150} />
                <h5>Tình Trạng Thời tiết : {(DataNow.weather[0].description)}</h5>
                <p>{" Ngày " + today.getDate()+ " Tháng " +(today.getMonth()+1)+ " Năm " +today.getFullYear()}</p>
              </div>


              <div className="clear" />
            </div>


          </div>

        </div>
      )
    }
  }

}
export default Now