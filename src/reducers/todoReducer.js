const todos = (state = [], action) => {
  switch (action.type) {
    case "GET_TODOS":
      return action.data;

    default:
      return state;
  }
};

export default todos;
