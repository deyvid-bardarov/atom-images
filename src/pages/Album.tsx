import React, { Component } from "react"
import { RouteComponentProps } from "react-router"
import { connect } from "react-redux"
import { Dispatch, Unsubscribe } from "redux"

import "../styles/Album.scss"
import { Photo } from "../models/Photo"
import { store } from "../store"
import { toggleFavorite } from "../actions/favoritePhoto"
import SearchBar from "../components/SearchBar"
import AlbumComponent from "../components/AlbumComponent"

interface State {
  photos: Photo[]
  filtered: Photo[]
  albumId: number
  favorites: Photo[]
}

interface Props extends RouteComponentProps {
  dispatch: Dispatch
  toggleFavorite: (photo: Photo) => void
  favorites: Photo[]
}

class Album extends Component<Props, State> {
  state = {
    photos: [],
    filtered: [],
    albumId: 0,
    favorites: []
  }

  unsub: Unsubscribe = () => {}

  componentWillMount() {
    this.setState({ ...this.props.location.state, filtered: this.props.location.state.photos })
    this.setState({
      favorites: this.props.favorites
    })
    this.unsub = store.subscribe(() => {
      this.setState({
        favorites: store.getState().favorites
      })
    })
  }

  componentWillUnmount() {
    this.unsub()
  }

  _onSearch = (photos: Photo[]) => this.setState({ filtered: photos })

  render() {
    const { photos, filtered, albumId, favorites } = this.state
    return (
      <div>
        <div className="d-flex align-items-center justify-content-center">
          <h1 className="heading">Album {albumId}</h1>
        </div>
        <SearchBar photos={photos} onChange={this._onSearch} />
        <AlbumComponent toggleFavorite={this.props.toggleFavorite} photos={filtered} favorites={favorites} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Album)