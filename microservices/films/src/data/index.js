const axios = require("axios");

const DB_HOST = "http://database:8004/Film";

const list = async () => {
  const response = await axios.get(DB_HOST);
  return response.data;
};

const get = async (id) => {
  const response = await axios.get(`${DB_HOST}/${id}`);
  return response.data;
};

const create = async (body) => {
  const response = await axios.post(DB_HOST, body);
  console.log(response);
  return response.data;
};

const update = async (id, body) => {
  const response = await axios.put(`${DB_HOST}/${id}`, body);
  return response.data;
};

const remove = async (id) => {
  const response = await axios.delete(`${DB_HOST}/${id}`);
  return response.data;
};

module.exports = { list, get, create, update, remove };
