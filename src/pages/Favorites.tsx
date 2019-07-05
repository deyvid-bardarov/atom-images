import React, { Component } from "react"
import { connect } from "react-redux"
import { Dispatch } from "redux"

import { Photo } from "../models/Photo"
import AlbumComponent from "../components/AlbumComponent"
import { toggleFavorite } from "../actions/favoritePhoto"

interface Props {
  favorites: Photo[]
  toggleFavorite: (photo: Photo) => void
}

interface State {
  
}

class Favorites extends Component<Props, State> {
  render() {
    const { toggleFavorite, favorites } = this.props
    return (
      <div>
        <div className="d-flex align-items-center justify-content-center">
          <h1 className="heading">Favorites</h1>
        </div>
        {favorites.length > 0 ? (
          <AlbumComponent toggleFavorite={toggleFavorite} photos={favorites} favorites={favorites} />
        ): (
          <p className="text-center">No favorites. Go like something ;)</p>
        )}
      </div>
    )
  }
}

const mapStateToProps = (state: any) => ({
  favorites: state.favorites
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  toggleFavorite: (photo: Photo) => dispatch(toggleFavorite(photo))
})

export default connect(mapStateToProps, mapDispatchToProps)(Favorites)