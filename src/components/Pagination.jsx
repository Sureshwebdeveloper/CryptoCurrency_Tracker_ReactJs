import React from "react";

const Pagination = ({totalPosts,postperPage,setCurrentPage}) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postperPage); i++) {
    pages.push(i);
  }
  return <div className="text-center p-5">{
    pages.map((page,index)=>{
        return <button className="m2-4 mr-2  border-2 border-black px-2 rounded-md" key={index} onClick={()=>setCurrentPage(page)}>{page}</button>
    })}</div>;
};

export default Pagination;