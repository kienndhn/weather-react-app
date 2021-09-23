import React from 'react'
import { useSelector } from 'react-redux'

const Loading = () => {

    const weatherData = useSelector(state => state.weatherData)
    const { loading } = weatherData
    return (
        <>
            {
                loading && <div className="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            }
        </>
    )
}

export default Loading