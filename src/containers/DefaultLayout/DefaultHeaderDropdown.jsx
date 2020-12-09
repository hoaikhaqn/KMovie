import React, { useEffect, useState } from "react";
import { useReduceState } from "../../context";
import { Link } from 'react-router-dom';
import $ from "jquery";

//Components
// import Loading from "../../containers/DefaultLayout/DefaultLoading";

export default function DefaultHeaderDropdown(props) {
  const { state, getCollection } = useReduceState();
  const [type, setType] = useState();
  const [genres, setGenres] = useState();
  const [nation, setNation] = useState();

  if (!state.data || (state.data && !state.data.genre)) {
    getCollection("genre");
  }
  if (!state.data || (state.data && !state.data.type)) {
    getCollection("type");
  }
  if (!state.data || (state.data && !state.data.nation)) {
    getCollection("nation");
  }


  if(genres && type && nation){
    $("html").scrollTop(0);
    $(".main-menu").addClass("fadeIn");
  }
  useEffect(() => {
    if (!genres) {
      setGenres(state.data && state.data.genre);
    }
    if (!type) {
      setType(state.data && state.data.type);
    }
    if (!nation) {
      setNation(state.data && state.data.nation);
    }
  }, [state.data,genres,type,nation])
  return (
    <div className="main-menu fadeOut show">
      <div className="navigation">
        <div className="menu-container">
          <ul id="navigation" className="menu-collpase">
            <div id="menu-button" data-toggle="collapse" data-target="#menuCollapse"></div>
            <ul id="menuCollapse" className="collapse">
              <li>
                <Link className="menu-title" to="/">Trang chủ</Link>
              </li>
              <li className="has-sub"><span data-toggle="collapse" data-target="#genreCollapse" className="submenu-button"></span>
                <span className="menu-title">Thể loại</span>
                <ul id="genreCollapse" className="collapse">
                  {genres && genres.map(function (item, key) {
                    return <li key={key}><Link to={`/the-loai/${item.id}`}>{item.name}</Link></li>
                  })}
                </ul>
              </li>
              {
                type && type.map(function (item, key) {
                  return <li key={key}><Link className="menu-title" to={`/loai/${item.id}`}>{item.name}</Link></li>
                })
              }
              <li className="has-sub"><span data-toggle="collapse" data-target="#nationCollapse" className="submenu-button"></span>
                <span className="menu-title">Quốc gia</span>
                <ul id="nationCollapse" className="collapse">
                  {nation && nation.map(function (item, key) {
                    return <li key={key}><Link to={`/quoc-gia/${item.id}`}>{item.name}</Link></li>
                  })}
                </ul>
              </li>
              <li>
                <Link className="menu-title" to="/trailer">Trailer</Link>
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </div>
  );
}
