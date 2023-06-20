import axios from "axios";
const SERVER_API_URL = process.env.REACT_APP_SERVER_API_URL;
const USERS_URL = `${SERVER_API_URL}/users`;
// const USERS_URL = `${SERVER_API_URL}/api/users`;

console.log(SERVER_API_URL);
console.log(`${USERS_URL}/login`);

const api = axios.create({
    withCredentials: true
});

export const login = async ({username, password}) => {
    const response = await api.post(`${USERS_URL}/login`, {username, password});
    const user = response.data;
    console.log("inside login service");
    console.log("response.data = ",user);
    return user;
};

export const logout = async () => {
    const response = await api.post(`${USERS_URL}/logout`);
    return response.data;
};

export const profile = async () => {
    console.log("Inside profile service");
    const response = await api.post(`${USERS_URL}/profile`);
    // console.log("Inside profile service");
    console.log("Response data= ", response.data);
    return response.data;

};

export const updateUser = async (user) => {
    // const response = await api.put(`${USERS_URL}/${user._id}`, user);
    const response = await api.put(`${USERS_URL}`, user);
    console.log("Inside update service");
    console.log("response data = ",response.data);
    return response.data;
};

export const register = async ({username, password}) => {
    const response = await api.post(`${USERS_URL}/register`, {username, password});
    console.log("Inside register service");
    console.log("response data = ", response.data);
    return response.data;
}