// Random user login
export const requestLogin = query => {
  console.log("query:", query);
  return {
    type: "REQUEST_LOGIN",
    query
  };
};
