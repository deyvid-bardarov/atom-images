import React, { Component } from "react"
import { Link } from "react-router-dom"

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/">Atom Images</a>
        <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarColor01"
                aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="navbar-collapse collapse" id="navbarColor01">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link">Home</Link></li>
            <li><Link to={'/favorites'} className="nav-link">Favorites</Link></li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navbar
