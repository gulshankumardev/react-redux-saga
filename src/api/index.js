export const fetchTodosApi = () => {
  return fetch("https://jsonplaceholder.typicode.com/todos")
    .then(res => res.json())
    .then(data => data);
};

export const userLoginApi = query => {
  return fetch(`https://randomuser.me/api/${query}`)
    .then(res => res.json())
    .then(data => data);
};
