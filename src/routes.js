import React from "react";

const Home = React.lazy(() => import("./views/Home"));
const Trailer = React.lazy(() => import("./views/Trailer"));
const Movies = React.lazy(() => import("./views/Movies"));
const MovieDetails = React.lazy(() => import("./views/MovieDetails"));
const MoviePlay = React.lazy(() => import("./views/MoviePlay"));
// const About = React.lazy(() => import("./views/About"));
// const Contact = React.lazy(() => import("./views/Contact"));
// const Blog = React.lazy(() => import("./views/Blog"));
// const BlogDetails = React.lazy(() => import("./views/BlogDetails"));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: "/", exact: true, name: "Home", component: Home },
  { path: "/phim/:id/xem-phim", exact: true, name: "MoviePlay", component: MoviePlay },
  { path: "/phim/:id", exact: true, name: "MovieDetails", component: MovieDetails },
  { path: "/tim-kiem/:keyword", exact: true, name: "Movies", component: Movies },
  { path: "/tu-khoa/:keyword", exact: true, name: "Movies", component: Movies },
  { path: "/trailer", exact: true, name: "Movies", component: Trailer },
  { path: "/phim-nam/:year", exact: true, name: "Movies", component: Movies },
  { path: "/quoc-gia/:nation/:year?", exact: true, name: "Movies", component: Movies },
  { path: "/the-loai/:genre/:nation?/:year?", exact: true, name: "Movies", component: Movies },
  { path: "/loai/:type/:genre?/:nation?/:year?", exact: true, name: "Movies", component: Movies },
];

export default routes;
