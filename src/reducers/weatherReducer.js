export const weatherInfo = (state=
{
weatherinfo:{}
}, action) => {
    //check action type
    if(action.type = "FETCH_WEATHER")
    {
        state = {...state, weatherinfo: action.payload}
    }
        return state;
}
export default weatherInfo;