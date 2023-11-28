"use client"
import React, { useContext, useEffect, useState } from "react";
import Dot from "../../public/assets/Ellipse.svg";
import { Link } from "react-router-dom";
import StateContext from "../../context/StateContext";

import Left from "../../public/assets/Icons/Left.svg";
import ReactGA from "react-ga4";

const Blogs = () => {
  const ALL_ACTIVE_TAG = "All";
  const { blogData } = useContext(StateContext);
  const [page, setPage] = useState(1);
  const [activeTag, setActiveTag] = useState(ALL_ACTIVE_TAG);


  const sortedBlogs = blogData?.sort((a, b) => {
    return b.id - a.id;
  });

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    ReactGA.send({ hitType: "pageview", page: "/blog", title: "Blogs Page" });

  }, []);

  // const numberOfBlogs = blogData.length;
  // const numberOfPages = Math.ceil(numberOfBlogs / 6);

  const filteredBlogs =
    activeTag === ALL_ACTIVE_TAG
      ? sortedBlogs
      : sortedBlogs.filter((blog) =>
          blog?.tags.some(
            (tag) => tag.toLowerCase() === activeTag.toLowerCase()
          )
        );

  const numberOfBlogs = filteredBlogs && filteredBlogs.length;
  const numberOfPages = Math.ceil(numberOfBlogs / 6);

  // Get blogs for the current page
  const blogsForCurrentPage =
    filteredBlogs && filteredBlogs.slice((page - 1) * 6, page * 6);

  // Assuming 'page' is the current page number
  const paginationNumbers = Array.from(
    { length: numberOfPages },
    (_, index) => index + 1
  );

  return (
    <div>
      <div className="container-fluid pt-5 ">
        <div className="container pt-5 mt-5">
          <h1 className="ch h11 pt-5">
            Looking to manage your
            <br />
            data more efficiently?
          </h1>
          <p className="ch"></p>

          <div className="tags pt-4 pe-5">
            <div
              className={"tagsbox cp " + (activeTag === "All" ? "active" : "")}
              onClick={() => {
                setActiveTag("All");
                setPage(1);
              }}
            >
              <p className="ch m-0">All</p>
            </div>
            <img src={Dot} alt="" />
            <div
              className={
                "tagsbox cp " +
                (activeTag === "Data-Engineering" ? "active" : "")
              }
              onClick={() => {
                setActiveTag("Data-Engineering");
                setPage(1);
              }}
            >
              <p className="ch m-0">Data-Engineering</p>
            </div>
            <img src={Dot} alt="" />
            <div
              className={
                "tagsbox cp " + (activeTag === "Data-Strategy" ? "active" : "")
              }
              onClick={() => {
                setActiveTag("Data-Strategy");
                setPage(1);
              }}
            >
              <p className="ch m-0">Data-Strategy</p>
            </div>

            <img src={Dot} alt="" />
            <div
              className={
                "tagsbox cp " + (activeTag === "Data-Moat" ? "active" : "")
              }
              onClick={() => {
                setActiveTag("Data-Moat");
                setPage(1);
              }}
            >
              <p className="ch m-0">Data-Moat</p>
            </div>
            <img src={Dot} alt="" />
            <div
              className={
                "tagsbox cp " +
                (activeTag === "Data-Intelligence" ? "active" : "")
              }
              onClick={() => {
                setActiveTag("Data-Intelligence");
                setPage(1);
              }}
            >
              <p className="ch m-0">Data-Intelligence</p>
            </div>
          </div>

          <div className="articles headings  ch">
            <h2 className="pt-4">{activeTag + " Articles"}</h2>
            <div className="row mt-5 w-100 p-0 m-0">
              {blogsForCurrentPage &&
                blogsForCurrentPage.map((blog) => {
                  const {
                    id,
                    description,
                    meta_data: metaData,
                    heading,
                    tags,
                  } = blog || {};
                  const { readTime, blogOptionImg, url_title } = metaData || {};
                  return (
                    <div className="col-12 col-md-4 p-0 pe-3 pb-3 mb-3  m-0">
                      <Link to={`/blog/${url_title}`}>
                        <div className="article__box pb-3" key={id}>
                          <img
                            src={blogOptionImg}
                            className="w-100 img-fluid"
                            alt=""
                          />
                          <div className="article__box__">
                            <div className="d-flex justify-content-start px-3 pt-2 gap-3">
                              <div className="tag__box">
                                <span>{tags ? tags[0] : ""}</span>
                              </div>
                              <p className="ch5 p3 pt-2">{`${readTime} mins read`}</p>
                            </div>
                            <div className="article__content px-3 ">
                              <h5 className="ch6 m-0 my-1 mb-2">
                                <b>{heading}</b>
                              </h5>
                              <p className="ch5 p3 m-0">{description}</p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  );
                })}
            </div>
            <div className="container d-flex justify-content-center">
              {numberOfPages > 1 && (
                <div className="firstw">
                  <div className="pagination">
                    <div
                      className="page page__left non-active"
                      onClick={() => {
                        setPage(page - 1);
                        window.scrollTo({
                          top: 0,
                          left: 0,
                          behavior: "smooth",
                        });
                      }}
                    >
                      <img src={Left} alt="" />
                    </div>
                    {paginationNumbers &&
                      paginationNumbers.map((pageNumber) => (
                        <div
                          className={`page ${
                            pageNumber === page ? "active" : "non-active"
                          }`}
                          key={pageNumber}
                          onClick={() => {
                            setPage(pageNumber);
                            window.scrollTo({
                              top: 0,
                              left: 0,
                              behavior: "smooth",
                            });
                          }}
                        >
                          <p className=" m-0 ">
                            <strong>{pageNumber}</strong>
                          </p>
                        </div>
                      ))}
                    <div
                      className="page page__right non-active"
                      onClick={() => {
                        setPage(page + 1);
                        window.scrollTo({
                          top: 0,
                          left: 0,
                          behavior: "smooth",
                        });
                      }}
                    >
                      <img src={Left} alt="" />
                    </div>
                  </div>
                </div>
              )}{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
