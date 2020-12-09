const movie = (state, action) => {
  switch (action.type) {
    case "GET_LISTDATA":
      return action.data;
    case "GET_MOVIE_ITEM":
      return action.data;
    default:
      return state;
  }
};
export default movie;
