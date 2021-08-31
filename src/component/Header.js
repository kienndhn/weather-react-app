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


    return (
        <>
            <div className="d-flex flex-column w-100 mb-4">
                <div className="d-block w-100 my-auto" id="search-box" style={{ maxWidth: "380px" }}>
                    <div className="d-block my-auto" style={{ position: "relative" }}>
                        <div className="d-flex" style={{ position: "relative" }}>
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

                    </div>
                </div>
            </div>
        </>
    )
}

export default Header