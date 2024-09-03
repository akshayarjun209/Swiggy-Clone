import React from 'react'

const Button = (props) => {
  return (
    <div className='border-[1px] border-[rgba(2,6,12,0.1)] rounded-xl p-4'>
        <button className='text-[12px] md:text-base text-[rgba(2,6,12,0.75)] font-normal md:font-[600]'>{(props.title).length<=27 ? props.title: props.title.slice(0,27)+".."}</button>
    </div>
  )
}

export default Button