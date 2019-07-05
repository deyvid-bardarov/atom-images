import { TOGGLE_FAVORITE } from "../config/constants"
import { Photo } from "../models/Photo"

export const toggleFavorite = (photo: Photo) => ({
  type: TOGGLE_FAVORITE,
  payload: photo
})