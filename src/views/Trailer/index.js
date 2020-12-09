import React, { useEffect, useState } from "react";
import { useReduceState } from "../../context";
import ReactPaginate from 'react-paginate';
import "./style.css";
import $ from "jquery";

//Components
import Breadcrumbs from "../../containers/DefaultLayout/DefaultBreadcrumbs";
import SideBar from "../../components/Sidebar";
import VideoItem from "../../components/VideoItem";

export default function TrailerPage(props) {
  const { firebase } = useReduceState();
  const [trailers, setTrailers] = useState();
  const perPage = 4;

  const onChangePage = data => {
    let dataUpdated = getDataPage(trailers,data.selected);
    setTrailers(dataUpdated);
  }
  const getDataPage = (data,currentPage) => {
    let dataUpdated = []; let page = Math.ceil(currentPage * perPage);
    for (let i = page; i < (page + perPage - 1 < data.length ? page + perPage : data.length); i++) {
      dataUpdated.push(data[i]);
    }
    return dataUpdated;
  }
  useEffect(() => {
    if (!trailers) {
      firebase.getDocWithCondition("movie", { where: ["status", 0] }, setTrailers);

    }
  }, [trailers, firebase])
  if (trailers) {
    $(".main-page").addClass("fadeIn");
    $(".zmoto-products").addClass("fadeIn");
  }
  return (
    <div id="TrailerPage" className="main-page fadeOut">
      {/* <!-- breadcroumb-area --> */}
      <Breadcrumbs items={["Trailer"]} />
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
                          <div className="zmoto-products fadeOut">
                            <div className="zmovo-product-list">
                              <div className="row">
                                {/* <!-- ITEM --> */}
                                {trailers && trailers.map(function (item, key) {
                                  return (
                                    <div key={key} className="col-lg-3 col-md-4 col-sm-4 col-6">
                                      <div className="item" >
                                        <VideoItem data={item} />
                                      </div>
                                    </div>
                                  )
                                })}
                              </div>
                            </div>
                          </div>
                          {/* <!-- Product Filter --> */}
                          {
                            (trailers && trailers.length > perPage) ? (
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
                                          pageCount={(trailers.length/perPage)}
                                          marginPagesDisplayed={2}
                                          pageRangeDisplayed={5}
                                          onPageChange={onChangePage}
                                        />
                                      </nav>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ) : ""
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
