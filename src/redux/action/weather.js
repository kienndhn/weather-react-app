import axios from 'axios'

export const getData = (q) => async (dispatch) => {
    try {
        dispatch({ type: "GET_DATA_REQUEST" })
        
        const config = {
            headers: {
                "Content-Type": "application/json",
                // Authorization: `${userInfo.token_type} ${userInfo.access_token}`
            }
        }
        const { data } = await axios.get(`forecast.json?key=0d51b511bb5946d8852154552212908&q=${q}&days=5&aqi=yes`)
        dispatch({
            type: "GET_DATA_SUCCESS",
            payload: data
        })
    }
    catch (error) {
        dispatch({
            type: "GET_DATA_ERROR",
            payload: error.response.data.error.message
        })
        // console.log(error.response.data.error.message)
    }
}

