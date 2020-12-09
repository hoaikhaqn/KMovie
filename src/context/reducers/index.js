import movieReducer from "./movie";
export const mainReducer = ({ data }, action) => ({
  data : {...data,...movieReducer(data, action)}
});
export const initialState = { data: undefined };
