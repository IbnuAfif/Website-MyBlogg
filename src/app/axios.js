import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://cdn.contentful.com/spaces/7oactv4gwwo1/environments/master/",
  params: {
    access_token: "FSKQ4gR4f2Y2a5C-3x7N__jCNvd0lHTQztpbqOuwD7U",
  },
});

export default axiosInstance;
