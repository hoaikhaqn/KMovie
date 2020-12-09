import React, { useEffect } from "react";

export default function ContactPage(props) {
  const onFilter = event => {
    var ftype = document.getElementById("type").value;
    var fgenre = document.getElementById("genre").value;
    var fnation = document.getElementById("nation").value;
    var fyear = document.getElementById("year").value;

    if (ftype === 'all-type' && fgenre !== 'all-genre') {
      props.history.push(`/the-loai/${fgenre}/${fnation}/${fyear}`)
    }
    else if (ftype === 'all-type' && fnation !== 'all-nation') {
      props.history.push(`/quoc-gia/${fnation}/${fyear}`)
    }
    else if (ftype === 'all-type' && fyear !== 'all-year') {
      props.history.push(`/phim-nam/${fyear}`)
    }
    else {
      props.history.push(`${ftype !== 'all-type' ? '/loai/'+ftype:ftype}/${fgenre}/${fnation}/${fyear}`)
    }
  };
  const onSort = event => {
    var sort = event.target.value;
    props.setCurrentPage(0);
    var dataUpdated = props.getDataPage(props.filter.sort(function (a,b) {
      return b[sort] - a[sort];
    }),0)
    props.setDataPage(dataUpdated);
  };
  useEffect(() => { });
  return (
    <div className="product-filter mb-30">
      <div className="product-filter-inner">
        <div className="product-filter-list">
          <div className="short-by-show form-inline2">
            <div className="row">
              <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                <div className="short-by">
                  <select type="select" id="sort" onChange={onSort} className="selectpicker" data-live-search="true">
                    <option value="createdAt">Mới nhất</option>
                    <option value="imdb">Top IMDb</option>
                    <option value="view">Lượt xem</option>
                    <option value="rating">Top đánh giá</option>
                  </select>
                </div>
              </div>
              {props.type ? (
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                    <div className="pro-show">
                      <select type="select" id="type" className="selectpicker" defaultValue={props.params.type}>
                        <option value="all-type">--Loại--</option>
                        {
                          props.type.map(function (item, key) {
                            return <option key={key} value={item.id}>{item.name}</option>
                          })
                        }
                      </select>
                    </div>
                  </div>
                ) : ""
              }
              {props.genre ? (
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                    <div className="pro-show">
                      <select type="select" id="genre" className="selectpicker" defaultValue={props.params.genre} >
                        <option value="all-genre">--Thể loại--</option>
                        {
                          props.genre.map(function (item, key) {
                            return <option key={key} value={item.id}>{item.name}</option>
                          })
                        }
                      </select>
                    </div>
                  </div>
                ) : ""
              }
              {props.nation ? (
                <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                  <div className="pro-show">
                    <select type="select" id="nation" className="selectpicker" defaultValue={props.params.nation} >
                      <option value="all-nation">--Quốc gia--</option>
                      {
                        props.nation.map(function (item, key) {
                          return <option key={key} value={item.id}>{item.name}</option>
                        })
                      }
                    </select>
                  </div>
                </div>
              ) : ""}
              {props.year ? (
                <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                  <div className="pro-show">
                    <select type="select" id="year" className="selectpicker" defaultValue={props.params.year} >
                      <option value="all-year">--Năm--</option>
                      {
                        props.year.map(function (item, key) {
                          return <option key={key} value={item.id}>{item.id}</option>
                        })
                      }
                    </select>
                  </div>
                </div>
              ) : ""}
              <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                <div className="pro-show">
                  <button className="btn btn-buttons btn-sm btn-fit" onClick={onFilter}>Lọc phim</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}