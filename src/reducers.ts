import { TOGGLE_FAVORITE } from "./config/constants"
import { Photo } from "./models/Photo"

interface State {
  favorites: Photo[]
}

const initialState: State = {
  favorites: []
}

export default (state = initialState, action: any) => {
  switch(action.type) {
    case TOGGLE_FAVORITE:
      if (state.favorites.find(fav => fav.id === action.payload.id)) {
        return {
          ...state,
          favorites: state.favorites.filter(photo => photo.id !== action.payload.id)
        }
      }
      return {
        ...state,
        favorites: [...state.favorites, action.payload]
      }
    default:
      return state
  }
}