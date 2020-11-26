import { PLAY_VIDEO, ADD_VIEW_COUNT } from "./reducer"

export const playVideoById = (id) => {
  return {
    type: PLAY_VIDEO,
    payload: id,
  }
}