import React from 'react'
import { useSelector } from 'react-redux'

const Forecast = () => {

    const weatherData = useSelector(state => state.weatherData)
    const { loading, forecast } = weatherData

    return (

        <>
            {!loading && forecast &&
                <div className="d-flex flex-column weather-box overview" >
                    <div className="d-flex flex-row">
                        <h1 style={{ fontSize: "20px", fontWeight: "bold" }}>Daily Forecast</h1>
                    </div>

                    <div className="d-flex flex-row justify-content-center">
                        {forecast.map((day) => (
                            <div key={day.date} className="d-flex flex-column border-0 d-flex align-items-center forecast-items" style={{ flexBasis: "33%" }}>
                                <div className="card-title" style={{ fontSize: "24px" }}>
                                    {day.date.slice(5, 10)}
                                </div>
                                <span style={{ fontSize: "30px" }}>
                                    {Math.round(day.day.maxtemp_c)}°
                                </span>
                                <span style={{ fontSize: "24px" }}>
                                    {Math.round(day.day.mintemp_c)}°
                                </span>
                                <img className="flex-shrink-0" src={day.day.condition.icon} />
                                <span>
                                    <svg style={{ fill: "#00FFFF", width: "0.7vw" }} set="heads-up" name="precip-rain-single" theme="full" data-testid="Icon" aria-hidden="true" role="img" className="Icon--icon--3wCKh Icon--fullTheme--3ns8p" viewBox="0 -2 5 10"><title>Rain</title><path d="M4.7329.0217c-.1848-.059-.3855.0064-.4803.148L.2731 5.1191c-.0814.0922-.1501.1961-.196.3108-.2469.6009.1185 1.2697.8156 1.4943.6914.226 1.447-.0712 1.7-.6585L4.9662.4987l.0111-.0282c.073-.1807-.036-.379-.2444-.4488z"></path></svg> {day.day.daily_chance_of_rain}%
                                </span>
                            </div>
                        ))}
                    </div>
                    
                </div>}
        </>
    )
}

export default Forecast