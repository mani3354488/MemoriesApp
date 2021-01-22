import { GET_TASKS } from '../constants/actionTypes'

export const getTasks = value => {
  return {
    type: GET_TASKS,
    payload: value
  }
}