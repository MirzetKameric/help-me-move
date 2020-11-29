export default {
    API: {
        FLIGHT: {
            URL: process.env.VUE_APP_FLIGHT_API_URL,
            ROUTES: {
                FLIGHTS: 'flights'
            }
        },
        WEATHER: {
            URL: process.env.VUE_APP_WEATHER_API_URL,
            ROUTES: {
                FORECASTS: {
                    DAILY: {
                        DAY1: 'forecasts/v1/daily/1day/{locationKey}',
                    },
                },
            },
        },
    },
}