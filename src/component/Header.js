import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div><nav className="navbar navbar-expand-lg navbar-dark bg-info">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">SOCIAL</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          q
          <Link className="nav-link active" to={"/"}>Add Post</Link>
          
          <Link className="nav-link " to={"/search"}>Search Post</Link>
          
          <Link className="nav-link " to={"/view"}>View Post</Link>
          
        </div>
      </div>
    </div>
  </nav></div>
  )
}

export default Header