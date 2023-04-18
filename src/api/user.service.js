import { api } from './api'
const SERVICE_ENDPOINT = `https://641eff78f228f1a83eae5b61.mockapi.io/api/users`
// const SERVICE_ENDPOINT = `${api.server + api.apiVersion}/users`
export const getUsers = async () => {
  try {
    const response = await fetch(SERVICE_ENDPOINT)
    return response.json()
  } catch {
    throw new Error('could not fetch users')
  }
}
