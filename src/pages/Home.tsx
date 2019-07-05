import React, { Component } from "react"
import { RouteComponentProps } from "react-router"
import Axios from "axios"
import { groupBy } from "lodash"

import { Photo } from "../models/Photo"
import "../styles/Gallery.scss"

interface State {
  photos: Photo[][]
}

class Home extends Component<RouteComponentProps, State> {
  state = {
    photos: [],
  }

  async componentWillMount() {
    const res = await Axios.get<Photo[]>(`https://jsonplaceholder.typicode.com/photos`)
    const grouped = groupBy(res.data, "albumId")
    this.setState({
      photos: Object.values(grouped)
    })
  }

  albumClick = (index: number) => {
    this.props.history.push("/album", { photos: this.state.photos[index], albumId: index + 1 })
  }

  render() {
    const { photos } = this.state
    return (
      <div>
        <div className="d-flex align-items-center justify-content-center">
          <h1 className="heading">Home</h1>
        </div>
        <div className="gallery">
          {photos.map((arr: Photo[], i) => (
            <div key={i} className="col-lg-2 col-md-4 col-sm-12 gallery-item">
              <div onClick={() => this.albumClick(i)} className="album">
                <img src={arr[0].thumbnailUrl} alt=""/>
                <img src={arr[1].thumbnailUrl} alt=""/>
                <img src={arr[2].thumbnailUrl} alt=""/>
                <p>{arr[0].albumId}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default Home