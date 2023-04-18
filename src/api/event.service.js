import { api } from './api'
const SERVICE_ENDPOINT = `https://6432e8f93e05ff8b37311054.mockapi.io/api/events`

export const getEventList = async () => {
  try {
    const response = await fetch(SERVICE_ENDPOINT)
    return response.json()
  } catch {
    throw new Error('could not fetch locations')
  }
}
