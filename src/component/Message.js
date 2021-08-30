import React from 'react'
import { useSelector } from 'react-redux'

const Message = () => {

    const weatherData = useSelector(state => state.weatherData)
    const { loading, message } = weatherData

    return (
        <>
            {!loading && message &&
                <div className="d-flex flex-row align-self-auto overview weather-box">
                    <div className="d-flex flex-column w-100">
                        <div className="d-flex flex-column justify-content-center">
                            <h1 style={{ fontSize: "20px", fontWeight: "bold" }}>{message}</h1>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default Message