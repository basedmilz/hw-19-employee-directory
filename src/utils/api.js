import axios from "axios";
const api = {
    fetchEmployees: () => axios.get('https://randomuser.me/api/?results=50')

}
export default api;