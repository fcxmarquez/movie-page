import React, { useState } from "react";
import "./styles/FrontMovie.css";
import { connect } from "react-redux";
import * as moviesAction from "../actions/moviesActions";

const FrontSerie = (props) => {
  const { name, backdrop_path, overview, homepage } = props;
  const [listed, setListed] = useState(false);
  const url = "https://image.tmdb.org/t/p/original";
  const handleSetFavorite = () => {
    props.setFavorite({ ...props });
    setListed(true);
  };

  return (
    <React.Fragment>
      {
        <div className="frontMovie--container">
          <div className="frontMovie__post">
            <img src={url + backdrop_path} alt="" />
            <div className="info">
              <h1>{name}</h1>
              <p className="description">{overview}</p>
            </div>
            <div className="frontMovie__buttons">
              <button className="btn btn-primary">
                <a href={homepage}>
                  <p>+ Info</p>
                </a>
              </button>
              {!listed && (
                <button
                  className="btn btn-secondary"
                  onClick={handleSetFavorite}
                >
                  <p>Watch List</p>
                </button>
              )}
            </div>
          </div>
        </div>
      }
    </React.Fragment>
  );
};

export default connect(null, moviesAction)(FrontSerie);
