export const CurrentReducer = (state = {message: "Enter city name, zip code or latitude and longitude"}, action) => {
    switch (action.type) {
        case "GET_DATA_REQUEST":
            return {
                loading: true
            }
        case "GET_DATA_SUCCESS":
            return {
                loading: false,
                current: action.payload.current,
                forecastToday: action.payload.forecast.forecastday[0],
                forecast: action.payload.forecast.forecastday,
                location: action.payload.location,
            }
        case "GET_DATA_ERROR":
            return {
                loading: false,
                message: action.payload
            }
        default:
            return state
    }
}