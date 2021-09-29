import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from '../redux/action/weather'

const Header = () => {
    const weatherData = useSelector(state => state.weatherData)
    const { current, loading } = weatherData

    const [q, setQ] = useState('')
    const dispatch = useDispatch()


    const search = useCallback(
        (e) => {
            e.preventDefault();
            // console.log(q)
            if (q !== "") {
                dispatch(getData(q))
                setQ("")
            }        // 
        },
        [q],
    )

    const getMyLocationWeather = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const latitude = position.coords.latitude
                const longtitude = position.coords.longitude
                dispatch(getData(String(latitude) + "," + String(longtitude)))
            })
        }
    }


    return (
        <>
            <div className="d-flex flex-column w-100 mb-4">
                <div className="d-block w-100 my-auto" id="search-box" style={{ maxWidth: "380px" }}>
                    <div className="d-flex my-auto align-items-center" style={{ position: "relative" }}>
                        <div className="d-flex w-100 mr-2" style={{ position: "relative" }}>
                            <form className="w-100" onSubmit={(e) => { search(e) }}>
                                <input
                                    value={q}
                                    type="text"
                                    className="form-control text-center border-0 search-input"
                                    placeholder="Search city"
                                    onChange={(e) => {
                                        // console.log(q)
                                        setQ(e.target.value)
                                    }} />
                            </form>

                            <svg
                                style={{ position: "absolute", height: "100%", right: "8px", top: "0", width: "24px" }}
                                set="ui" name="location" className="d-inline-block" theme="light" data-testid="Icon" aria-hidden="true" role="img" viewBox="0 0 20 20"><title>Search</title><path d="M11.493 3.54c-2.284 0-4.142 1.866-4.142 4.16s1.858 4.16 4.142 4.16c2.284 0 4.142-1.866 4.142-4.16s-1.858-4.16-4.142-4.16zM7.026 11.72c-0.954-1.068-1.541-2.475-1.541-4.020 0-3.327 2.695-6.033 6.007-6.033s6.007 2.707 6.007 6.033c0 3.327-2.695 6.033-6.007 6.033-1.103 0-2.133-0.305-3.022-0.828l-4.327 5.099c-0.185 0.217-0.447 0.329-0.71 0.329-0.215 0-0.43-0.073-0.605-0.224-0.392-0.336-0.438-0.927-0.104-1.32l4.303-5.069z"></path>
                            </svg>
                        </div>
                        <div onClick={getMyLocationWeather} style={{cursor: "pointer"}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48">
                                <path d="M0 0h48v48h-48z" fill="none" />
                                <path d="M24 16c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm17.88 6c-.92-8.34-7.54-14.96-15.88-15.88v-4.12h-4v4.12c-8.34.92-14.96 7.54-15.88 15.88h-4.12v4h4.12c.92 8.34 7.54 14.96 15.88 15.88v4.12h4v-4.12c8.34-.92 14.96-7.54 15.88-15.88h4.12v-4h-4.12zm-17.88 16c-7.73 0-14-6.27-14-14s6.27-14 14-14 14 6.27 14 14-6.27 14-14 14z" />
                            </svg>
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}

export default Header