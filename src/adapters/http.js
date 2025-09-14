import axios from "axios";
export const http = axios.create({ timeout: 12000 }); // 12s timeout
