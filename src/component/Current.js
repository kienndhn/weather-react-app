import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { current } from '../redux/action/weather'

const Current = () => {

    const weatherData = useSelector(state => state.weatherData)
    const { location, current, forecastToday } = weatherData

    const openBackdrop = () => {
        const backdrop = document.getElementById("backdrop")
        backdrop.style.display = "block"
        document.body.classList.add("modal-open")
        document.getElementById("main-container").classList.toggle("modal-backdrop")
        setTimeout(() => {
            backdrop.classList.toggle("show")
        }, 161);
    }

    return (
        <>
            {location && current && forecastToday &&
                <>
                    <div className="d-flex flex-row align-self-auto overview weather-box">
                        <div className="d-flex flex-column w-100">
                            <div className="d-flex flex-row">
                                <div className="d-flex flex-column">
                                    <h1 style={{ fontSize: "20px", fontWeight: "bold" }}>{location.name}, {location.country} Weather</h1>
                                    <span>As of {location.localtime.slice(10, 16)}</span>
                                </div>
                                <div className="btn my-auto ml-auto btn-outline-light" role="button"
                                    data-toggle="modal" data-target="#backdrop"
                                    onClick={openBackdrop}
                                >
                                    Detail
                                </div>
                            </div>

                            <div className="d-flex flex-row">
                                <h1 style={{ fontSize: "56px", fontWeight: "bold" }}>
                                    {current.temp_c}°
                                </h1>

                                <div className="d-flex ml-auto">
                                    <img src={current.condition.icon} />
                                </div>
                            </div>
                            <div style={{ fontWeight: "bold" }}>
                                {current.condition.text}
                            </div>
                        </div>
                    </div>

                </>
            }
        </>
    )
}

export default Current