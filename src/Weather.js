import React, { Component } from 'react'
import "./card.css"

export default class Weather extends Component {

    render() {
        let { weatherDetails } = this.props;
        console.log("--", this.props.weatherDetails)
        return (
            <div className='card-aligin'>
                {weatherDetails && <div className="row" style={{ marginTop: "10px", marginLeft: "33%" }}>
                    <div className="card" style={{ width: "16rem", marginLeft: "10px", marginTop: "15px", color: "black" }}>
                        <div className='card-header'>
                            <h5 className="" >
                                Your entered location is
                        </h5>
                            <span className='title-align'>
                                <h3 className = 'city-title'>
                                    {this.props.weatherDetails.name}
                                </h3>

                                <img style={{ marginLeft: '40%' }} src={`http://openweathermap.org/img/w/${weatherDetails.weather[0].icon}.png`} />
                            </span>
                        </div>

                        <div className="card-body bgColor" >

                            <strong>{this.props.description}</strong>
                            <ul className="list-group list-group-flush alignment" >
                                <li className="list-group-item">Temp:</li>
                                <li className="list-group-item">Climate: </li>
                                <li className="list-group-item">Wind: </li>
                                <li className="list-group-item">Pressure:hPa</li>
                            </ul>
                        </div>
                    </div>
                </div>
                }
            </div>

        );
    }
}