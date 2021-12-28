import React, { useState, useEffect } from "react";

const Pagination = ({ data, RenderComponent, dataLimit }) => {
  //const [pages] = useState(Math.round(data.length / dataLimit));

  const [currentPage, setCurrentPage] = useState(1);

  const goToNextPage = () => {
    setCurrentPage((page) => page + 1);
  };
  const goToPreviousPage = () => {
    setCurrentPage((page) => page - 1);
  };
  const changePage = (event) => {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
  };
  const getPaginatedData = () => {
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;

    return data.slice(startIndex, endIndex);
  };

  const getPaginationGroup = () => {
    let limit = Math.ceil(data.length / dataLimit);
    let start = Math.floor((currentPage - 1) / limit) * limit;
    return new Array(limit).fill().map((_, idx) => start + idx + 1);
  };
  useEffect(() => {
    window.scrollTo({ behavior: "smooth", top: "0px" });
  }, [currentPage]);
  return (
    <>
      <>
        {getPaginatedData().map((crime) => {
          return (
            <div className="col-6 col-lg-6 mt-4">
              <RenderComponent crime={crime} />{" "}
            </div>
          );
        })}
      </>

      <div className="blog-pagination">
        <ul className="justify-content-center">
          {getPaginationGroup().map((item, index) => {
            return (
              <li key={index}>
                {/* <NavLink to="#">1</NavLink> */}
                <button
                  onClick={changePage}
                  className={` ${currentPage === item ? "active" : null}`}
                >
                  {item}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Pagination;
