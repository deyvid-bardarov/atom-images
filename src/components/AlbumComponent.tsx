import React, { Component } from "react"
import { Photo } from "../models/Photo"

interface Props {
  photos: Photo[]
  favorites: Photo[]
  toggleFavorite: (photo: Photo) => void
}

class AlbumComponent extends Component<Props> {
  render() {
    const { photos, favorites, toggleFavorite } = this.props
    return (
      <div id="album" className="album">
        {photos.map((photo: Photo) => (
          <div key={photo.id}>
            <div className="card" style={{padding: "10px"}}>
              <img onDoubleClick={() => toggleFavorite(photo)} className="card-img-top" width={600} src={photo.url} alt=""/>
              <div className="card-body">
                <p>{photo.title}</p>
                <a onClick={() => toggleFavorite(photo)} className={(favorites.find(fav => fav.id === photo.id) ? "pulse " : "") + "float-right favorite"}>
                  <div key={Math.random()}>
                    <i className={(favorites.find((fav: Photo) => fav.id === photo.id) ? "fas" : "far") + " fa-heart"}/>
                  </div>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }
}

export default AlbumComponent