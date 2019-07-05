import React, { ChangeEvent, Component } from "react"
import { Photo } from "../models/Photo"

interface State {
  search: string
}

interface Props {
  photos: Photo[]
  onChange: (photos: Photo[]) => void
}

class SearchBar extends Component<Props, State> {
  state = {
    search: "",
  }

  _onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const filteredPhotos = this.props.photos.filter(photo => photo.title.includes(e.target.value))
    this.props.onChange(filteredPhotos)

    this.setState({
      search: e.target.value
    })
  }

  render() {
    const { search } = this.state
    return (
      <div className="container mb-3">
        <input onChange={this._onChange} type="text" className="form-control" placeholder="Search title..." value={search}/>
      </div>
    )
  }
}

export default SearchBar