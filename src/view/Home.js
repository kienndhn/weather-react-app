import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Current from '../component/Current'
import Forecast from '../component/Forecast'
import Loading from '../component/Loading'
import Message from '../component/Message'
import Modal from '../component/Modal'
import { getData } from '../redux/action/weather'
// import { current } from '../redux/action/weather'

function Home() {

  const dispatch = useDispatch()

  const weatherData = useSelector(state => state.weatherData)
  const { location, current } = weatherData

  useEffect(() => {
    if (!current) {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          const latitude = position.coords.latitude
          const longtitude = position.coords.longitude
          dispatch(getData(String(latitude) + "," + String(longtitude)))
        })
      }
    }
  }, [])

  useEffect(() => {
    if (location) {
      const hour = new Date(location.localtime)
      document.body.classList=""
      document.body.classList.add(`g${hour.getHours()}`)
      console.log(hour.getHours())
    }

    
  }, [location])

  console.log("home re-render")

  return (
    <>
      <div className="d-block mx-auto w-100" style={{ maxWidth: "500px" }}>
        <div className="d-flex flex-column">
          <Loading />
          <Message />
          <Current />
          <Forecast />
        </div>
      </div>
    </>
  )
}

export default Home
