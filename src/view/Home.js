import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Current from '../component/Current'
import Forecast from '../component/Forecast'
import Loading from '../component/Loading'
import Message from '../component/Message'
import Modal from '../component/Modal'
// import { current } from '../redux/action/weather'

function Home() {

    const dispatch = useDispatch()

    const weatherData = useSelector(state => state.weatherData)
    const { current, loading, message, forecast } = weatherData

    // useEffect(() => {
    // }, [current])


    return (
        <>
            <div className="d-block mx-auto w-100" style={{ maxWidth: "500px" }}>
                <div className="d-flex flex-column">
                    {loading && <Loading />}
                    <Message /> 
                    <Current />
                    <Forecast />
                </div>
            </div>
        </>
    )
}

export default Home
