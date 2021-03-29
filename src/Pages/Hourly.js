import React from "react"
import "./../CSS/Hourly.css"
class Hourly extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            DataHourly: [],
            isLoading: true
        };
    }
    conectapi = (response) => {
        this.setState({
            DataHourly: ((response.data.hourly).slice(0, 6)),
            isLoading: false
        })

    }
    componentWillMount() {
        var axios = require('axios');
        var lon = localStorage.getItem('lon');
        var lat = localStorage.getItem('lat');
        var a = this
        var config = {
            method: 'get',
            url: ('https://api.openweathermap.org/data/2.5/onecall?lat='+lat+'&lon='+lon+'&exclude=daily&appid=ba15a2d6eb01b269c2ac367530eeae8d&lang=vi&units=metric'),
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
            const { DataHourly, isLoading } = this.state
            var namecity = localStorage.getItem('name')

            if (isLoading === true) {
                return (
                    <div>
                        <h1>vui lòng chờ .....</h1>
                    </div>
                )
            }
            function format(s) {
                return new Date(s * 1e3).toISOString().slice(-13, -5);
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
                            <h1>Thời tiết theo giờ : {namecity} </h1>


                            <div className="w3ls-weather">
                                {DataHourly.map((item, index) => {
                                    if (index < 3) {
                                        return (
                                            <div className={"weather" + (index + 1)}>
                                                <h3>{((format(item.dt)).split("")).slice(0,2)}h</h3>
                                                <h4>{(Math.ceil(item.feels_like)) } °C</h4>
                                                <canvas id="rain" width={50} height={50} />
                                                <h5>Tình Trạng Thời Tiết</h5>
                                                <h5>{(item.weather[0].description)}</h5>
                                                <p>Tốc độ gió {Math.ceil((item.wind_speed) * 10)} km/h</p>
                                              
                                            </div>
                                        )
                                    }
                                }
                                )
                                }
                                <div className="clear" />
                            </div>

                            <div className="w3ls-weather">
                                {(DataHourly.slice(3, 6)).map((item, index) => {
                                    if (index < 3) {
                                        return (
                                            <div className={"weather" + (index + 1)}>
                                                <h3>{((format(item.dt)).split("")).slice(0,2)}h</h3>
                                                <h4>{(Math.ceil(item.feels_like)) } °C</h4>
                                                <canvas id="rain" width={50} height={50} />
                                                <h5>Tình Trạng Thời Tiết</h5>
                                                <h5>{(item.weather[0].description)}</h5>
                                                <p>Tốc độ gió {Math.ceil((item.wind_speed) * 10)} km/h</p>
                                            </div>
                                        )
                                    }
                                }
                                )
                                }
                                <div className="clear" />
                            </div>





                        </div>
                    </div>

                )
            }
        }

    }
    export default Hourly