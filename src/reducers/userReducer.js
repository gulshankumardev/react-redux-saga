const user = (state = null, action) => {
  switch (action.type) {
    case "USER_LOGIN":
      return action.data;

    case "USER_LOGOUT":
      return null;

    case "GET_USER":
      return { ...state, ...action.data };

    default:
      return state;
  }
};

export default user;
