import axios from 'axios'

const BASE_URL = 'https://fakestoreapi.com'

export const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
})

export const productAPI = {
  getAll: () => api.get('/products'),
  // getById: (id) => api.get(`/products/${id}`),
  // getCategories: () => api.get('/products/categories'),
  // getByCategory: (category) => api.get(`/products/category/${category}`),
}