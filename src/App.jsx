import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Imagecontainer from './components/Imagecontainer';
import Pagination from './components/Pagination';

const App = () => {
  const [currencyList, setCurrencyList] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postperPage, setPostPerPage] = useState(12);

  const lastPostIndex = currentPage * postperPage;
  const firstPostIndex = lastPostIndex - postperPage;
  const currentPost = currencyList.slice(firstPostIndex, lastPostIndex);

  const handlechange = (e) => {
    setSearch(e.target.value)
  }

  useEffect(() => {
    axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd").then((response) => setCurrencyList(response.data));
  }, []);


  return (
    <div className='h-[100vh] bg-[#ffffffc6]'>
      <div className='header flex justify-center items-center flex-col'>
        <h1 className='font-semibold  text-center text-[26px]  pt-5  pb-4'>Crypto Tracker</h1>
        <input type="search" placeholder='Serachher....' className='grid border-2 border-[#ff4805] cursor-pointer outline-none  h-[40px] rounded-md w-[300px] pl-4  pr-6 mb-10 text-xl font-bold text-blue-500 2xl:w-8/12 xl:w-5/12  lg:w-5/12 md:columns-6/12 sm:w-5/12  '
          onChange={handlechange} />
      </div>
      <hr className='h-[1px] shadow-md bg-black' />
      <div className="flex flex-row flex-wrap  flex-shrink justify-center items-center">
        {currentPost.filter((currency) =>
          currency.name.toLowerCase().includes(search.toLowerCase())).map((currency) => (
            <div key={currency.id}>
              < Imagecontainer {...currency} />
            </div>
          ))}
      </div>
          <Pagination totalPosts={currencyList.length} postperPage={postperPage} setCurrentPage={setCurrentPage} />
    </div>
  )
}

export default App