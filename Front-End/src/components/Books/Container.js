import React from "react";
import Card from "../Card/Card";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../UserContext/UserContext";
import { useEffect } from "react";
import { useState } from "react";
function Container() {
  const { bookData } = useContext(UserContext);
  const location = useLocation();
  const category = location.pathname;
  const [book, setBook] = useState(bookData);
  let seacrhCategory = category.slice(1).toLocaleLowerCase();
  seacrhCategory = seacrhCategory.charAt(0).toUpperCase() + category.slice(2);
  useEffect(() => {
    setBook(bookData);
  }, [bookData]);
  return (
    <div className="flex flex-col lg:pt-0 pt-16 lg:pb-8">
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 w-full pt-5 px-10">
        {book &&
          book.map((item, key) => {
            return (
              <div className="m-1" key={key}>
                <Card item={item} />
              </div>
            );
          })}
        {!bookData && (
          <div className="flex justify-center justify-items-center self-center">
            Loading
          </div>
        )}
      </div>
    </div>
  );
}
export default Container;
