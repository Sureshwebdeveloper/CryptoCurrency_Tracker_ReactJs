import React from 'react'

const Imagecontainer = (props) => {
    return (
        <div className='w-[250px] h-[250px] bg-[#f1f1f161] border-2 text-[black] rounded-xl m-10 shadow-xl shadow-[#00000099] border-[#ff6127]'>
            <div className='flex flex-col items-center justify-center'>
            <img src={props.image} className='h-[60px] w-[60px] mt-3' alt={props.alt} />
            <h5 className='text-lg font-semibold mb-2'>{props.name}</h5>
            <p className='text-center font-bold text-md mt-3'>price:{`$${props.current_price}`}</p>
            <p className='text-center  text-md mt-3'>Rank:{`$${props.market_cap_rank}`}</p>
            <p className='text-center  text-md mt-4'>Market Cap:{`$${props.market_cap}`}</p>
            </div>
        </div>
    )
}

export default Imagecontainer