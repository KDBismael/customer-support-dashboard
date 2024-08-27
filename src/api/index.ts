import axios from "axios";

const BASE_URL = "http://localhost:3500"

const login = async (email: string, password: string) => {
    try {
        const res = await axios.post(`${BASE_URL}/auth/login`, { email, password })
        localStorage.setItem('user', JSON.stringify(res.data));
        return res.data;
    } catch (error) {
        console.log(error);
    }
}

const getAllTicket = async (token: string) => {
    try {
        return (await axios.get(`${BASE_URL}/ticket`, { headers: { Authorization: `Bearer ${token}` } })).data;
    } catch (error) {
        console.log(error)
    }
}

const getTicket = async (token: string, id: string) => {
    try {
        return (await axios.get(`${BASE_URL}/ticket/${id}`, { headers: { Authorization: `Bearer ${token}` } })).data;
    } catch (error) {
        console.log(error)
    }
}
const updateTicket = async (token: string, id: string, data: Partial<TicketI>) => {
    try {
        return (await axios.patch(`${BASE_URL}/ticket/${id}`, data, { headers: { Authorization: `Bearer ${token}` } })).data;
    } catch (error) {
        console.log(error)
    }
}

export { getAllTicket, getTicket, login, updateTicket };

