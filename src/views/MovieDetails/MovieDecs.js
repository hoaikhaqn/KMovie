import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import SocialLink from "../../components/SocialLink";
import StarRatings from 'react-star-ratings';

export default function MovieDecs({ item }) {
  // const [rating,setRating] = useState();
  // console.log(item);
  const changeRating = (newRating) => {
    alert(newRating)
  };
  useEffect(()=>{

  })
  return (
    <div className="container">
      <div className="zmovo-poster">
        <Link to={"/phim/" + item.id + "/xem-phim"}>
          <div className="zmovo-slide-ply-btn">
            <span>
              <img src="./assets/images/play-button.png" alt="" />
            </span>
          </div>
          <img src={"./assets/images/movie/" + item.id + "/" + item.poster} alt="" />
        </Link>
      </div>
      <div className="zmovo-slider-content">
        <h2>{item.name}</h2>
        <p>{item.subname}</p>
        <div className="zmovo-slide-cat">
          <div className="zmovo-trailor-meta-info">
            <div className="dec-review-dec">
              <div className="ratting">
                <StarRatings
                  rating={item.rating}
                  starRatedColor="orange"
                  starHoverColor="orange"
                  starDimension="16px"
                  starSpacing="2px"
                  changeRating={changeRating}
                  numberOfStars={5}
                  name='rating'/>
                <Link to="/">{item.rating}/5 ({item.voted} voted)</Link>
              </div>
              <div className="dec-review-meta">
                <ul>
                  <li>
                    <span>Trạng thái :</span>
                    <span>{item.status === 0 ? "Trailer" : "Completed"}</span>
                  </li>
                  <li>
                    <span>IMDb :</span>
                    <span id="imdb">{item.imdb}</span>
                  </li>
                  {
                    item.directors ? (
                      <li>
                        <span>Đạo diễn :</span>
                        {Object.keys(item.directors).map((key) => {
                          return <Link key={key} to={"/ca-nhan/" + key}>{item.directors[key]}</Link>
                        })}
                      </li>
                    ) : ""
                  }
                  {
                    item.actors ? (
                      <li>
                        <span>Diễn viên :</span>
                        {Object.keys(item.actors).map((key) => {
                          return <Link key={key} to={"/dien-vien/" + key}>{item.actors[key]}</Link>
                        })}
                      </li>
                    ) : ""
                  }
                  {
                    item.producer && item.producer.length > 0 ? (
                      <li>
                        <span>Nhà sản xuất :</span>
                        {item.producer.map((item) => {
                          return <Link key={item} to={"/dien-vien/" + item}>{item}</Link>
                        })}
                      </li>
                    ) : ""
                  }
                  <li>
                    <span>Thể loại :</span>
                    {Object.keys(item.genre).map((key) => {
                      return <Link key={key} to={"/the-loai/" + key}>{item.genre[key]}</Link>
                    })}
                  </li>
                  <li>
                    <span>Chất lượng :</span>
                    <span>{item.quality}</span>
                  </li>
                  <li>
                    <span>Năm : </span>
                    <Link to={"/phim-nam/" + item.year}>{item.year}</Link>
                    <span> | Thời lượng :</span>
                    <span>{item.time}</span>
                  </li>
                  {item.totalEpisode ? (
                    <li>
                      <span>Số tập : </span>
                      <span>{item.server[0].ep.length} / {item.totalEpisode}</span>
                    </li>
                  ) : ""}
                  <li>
                    <span>Quốc gia :</span>
                    {Object.keys(item.nation).map((key) => {
                      return <Link key={key} to={"/quoc-gia/" + key}>{item.nation[key]}</Link>
                    })}
                  </li>
                </ul>
              </div>
              {/* Social Link */}
              <SocialLink />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
