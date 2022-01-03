import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import API from "../../API/API";

const Categories = ({ categories }) => {
  const [loading, setLoading] = useState(false);
  const [crimes, setCrimes] = useState([]);
  const getAllCrimes = async () => {
    return new Promise((resolve) => {
      resolve(
        API("/crimes", {
          method: "GET",
          withCredentials: true,
        }).then((res) => res.data.crimes)
      );
    });
  };

  useEffect(() => {
    getAllCrimes().then((res) => {
      setLoading(true);
      setCrimes(res);
      setLoading(false);
    });
  }, []);

  return (
    <ul>
      {loading ? (
        <h1>Load</h1>
      ) : (
        <>
          <li>
            <NavLink to={`/crimes`}>
              All <span className="text-center">({crimes.length})</span>
            </NavLink>
          </li>
          {categories.map((category) => {
            return (
              <li key={category._id}>
                <NavLink to={`/crimes?category=${category.category}`}>
                  {category.category}{" "}
                  <span className="text-center">
                    (
                    {
                      crimes.filter(
                        (crime) => crime.category.category === category.category
                      ).length
                    }
                    )
                  </span>
                </NavLink>
              </li>
            );
          })}
        </>
      )}
    </ul>
  );
};

export default Categories;
