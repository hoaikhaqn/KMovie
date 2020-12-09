import React, { useEffect, useState } from "react";
import ReactPaginate from 'react-paginate';
import { useReduceState } from "../../context";
import "./style.css";
import $ from "jquery";

//Components
import Breadcrumbs from "../../containers/DefaultLayout/DefaultBreadcrumbs";
import SideBar from "../../components/Sidebar";
import MovieList from "./MovieList";
import MovieFilter from "./MovieFilter";

var _ = require('lodash');
var reset = false;
export default function MoviePage(props) {
  const { state, firebase, getCollection } = useReduceState();
  const [type, setType] = useState();
  const [genre, setGenre] = useState();
  const [nation, setNation] = useState();
  const [year, setYear] = useState();
  const [params, setParams] = useState();
  const [keyword, setKeyword] = useState();
  const [filter, setFilter] = useState();
  const [dataPage, setDataPage] = useState();
  const [breadcrumb, setBreadcrumb] = useState();
  const [pages, setPages] = useState();
  const [currentPage, setCurrentPage] = useState();
  const perPage = 4;

  const onChangePage = data => {
    setCurrentPage(data.selected);
    let dataUpdated = getDataPage(filter,data.selected);
    setDataPage(dataUpdated);
  }

  const getDataPage = (data,currentPage) => {
    let dataUpdated = []; let page = Math.ceil(currentPage * perPage);
    for (let i = page; i < (page + perPage - 1 < data.length ? page + perPage : data.length); i++) {
      dataUpdated.push(data[i]);
    }
    return dataUpdated;
  }
  if (!keyword && props.match.params.keyword) {
    reset = true;
    $(".zmoto-products").removeClass("fadeIn");
    setKeyword(props.match.params.keyword);
  }
  if (!params || !_.isEqual(params, props.match.params)) {
    reset = true;
    $(".zmoto-products").removeClass("fadeIn");
    setParams(props.match.params);
  }

  if (!state.data || (state.data && !state.data.year)) {
    getCollection("year", { limit: 5 });
  }
  useEffect(() => {
    if(state.data){
      if (!type && state.data.type) {
        setType(state.data.type);
      }
      if (!genre && state.data.genre) {
        setGenre(state.data.genre);
      }
      if (!nation && state.data.nation) {
        setNation(state.data.nation);
      }
      if (!year && state.data.year) {
        setYear(state.data.year);
      }
    }
    if (type && genre && nation && year && params && reset) {
      var aCondition = []; var aBreadcrumb = [];
      if (params.type && params.type !== 'all-type') {
        let obj = _.find(type, { id: params.type });
        if (obj) {
          aCondition.push(["type", obj])
          aBreadcrumb.push({ url: `/${obj.id}`, label: obj.name })
        }
      }
      if (params.genre && params.genre !== 'all-genre') {
        let obj = _.find(genre, { id: params.genre });
        if (obj) {
          aCondition.push(["genre", obj])
          aBreadcrumb.push({ url: `/the-loai/${obj.id}`, label: obj.name })
        }
      }
      if (params.nation && params.nation !== 'all-nation') {
        let obj = _.find(nation, { id: params.nation });
        if (obj) {
          aCondition.push(["nation", obj])
          aBreadcrumb.push({ url: `/quoc-gia/${obj.id}`, label: obj.name })
        }
      }
      if (params.year && params.year !== 'all-year') {
        aCondition.push(["year", params.year])
        aBreadcrumb.push({ url: `/phim-nam/${params.year}`, label: `Phim ${params.year}` })
      }
      if (aCondition.length) {
        firebase.getDocWithMultiCondition("movie", { where: aCondition, orderBy: ["createdAt", "desc"]},(data)=>{
          const dataUpdated = getDataPage(data, 0);
          setDataPage(dataUpdated);
          setFilter(data)
        });
        reset = false;
      }
      setBreadcrumb(aBreadcrumb);
    }
    if (keyword && reset) {
      firebase.getDocWithKeyword("movie", {
        where: [
          [`keywords CONTAINS '${props.match.params.keyword.replace(/ /g, "%20")}'`],
          [`tags CONTAINS '${props.match.params.keyword.replace(/ /g, "%20")}'`]
        ]
      },(data)=>{
        const dataUpdated = getDataPage(data, 0);
        setDataPage(dataUpdated);
        setFilter(data)
      });
      reset = false;
    }
  },[state.data, type, genre, nation, year, params, keyword, firebase, props.match.params.keyword])
  if (!reset && filter) {
    $(".main-page").addClass("fadeIn");
    $(".zmoto-products").addClass("fadeIn");
  }
  if (!pages && filter && filter.length !== pages) {
    setPages(filter.length / perPage);
  }
  return (
    <div id="MoviePage" className="main-page fadeOut">
      {/* <!-- breadcroumb-area --> */}
      {
        props.match.params.keyword ? <Breadcrumbs items={[`Từ khóa: ${props.match.params.keyword}`]} /> : <Breadcrumbs items={breadcrumb} />
      }
      {/* <!-- End breadcroumb-area --> */}
      <div className="zmoto-inner-page">
        <div className="zmovo-product-page">
          <div className="container">
            <div className="zmovo-product-items">
              <div className="zmovo-product-items-inner">
                <div className="row">
                  <div className="col-12">
                    <div className="zmovo-product-with-sedbar">
                      <div className="row">
                        {/* <!-- Right --> */}
                        <div className="col-lg-9">
                          {/* <!-- Product Filter --> */}
                          <MovieFilter
                            params={params}
                            type={type}
                            genre={genre}
                            nation={nation}
                            year={year}
                            filter={filter}
                            history={props.history}
                            setFilter={setFilter}
                            currentPage={currentPage}
                            setCurrentPage={setCurrentPage}
                            getDataPage={getDataPage}
                            setDataPage={setDataPage}
                          />
                          {/* <!-- end Product Filter --> */}
                          <div className="zmoto-products fadeOut">
                            {
                              dataPage &&dataPage.length ? 
                              <MovieList data={dataPage} /> : 
                              <h4>Không tìm thấy phim bạn cần!</h4>
                            }
                          </div>
                          {/* <!-- Product Filter --> */}
                          {
                            (filter && filter.length > perPage) ? (
                              <div className="product-filter">
                                <div className="product-filter-inner">
                                  <div className="product-filter-list">
                                    <div className="pagination-wrapper">
                                      <nav aria-label="navigations">
                                        <ReactPaginate
                                          previousLabel={'<'}
                                          nextLabel={'>'}
                                          previousClassName={'page-item'}
                                          nextClassName={'page-item'}
                                          previousLinkClassName={'page-link pagefirst'}
                                          nextLinkClassName={'page-link lastpage'}
                                          breakLabel={'...'}
                                          breakClassName={'page-item break-me'}
                                          containerClassName={'pagination'}
                                          pageClassName={'page-item'}
                                          pageLinkClassName={'page-link'}
                                          activeClassName={'active'}
                                          pageCount={pages}
                                          forcePage={currentPage}
                                          marginPagesDisplayed={2}
                                          pageRangeDisplayed={5}
                                          onPageChange={onChangePage}
                                        />
                                      </nav>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ): ""
                          }
                          {/* <!-- end Product Filter --> */}
                        </div>
                        {/* <!-- End Right --> */}
                        {/* <!-- Left --> */}
                        <div className="col-lg-3">
                          <SideBar />
                        </div>
                        {/* <!-- End Left --> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
