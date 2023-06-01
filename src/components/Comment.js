import React, { useState } from 'react'

const Comment = () => {
    const [comment, setComment] = useState("");

    const onComment = (e) => {
        setComment(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        alert("Downloading Excel File.....")
    }
  return (
    <div>
        <form className='flex space-x-5 align-middle'>
            <label className='text-xl font-bold'>Comment: <input className='border border-gray-200 bg-yellow-100 rounded-xl' type='text' placeholder='' onChange={onComment} value={comment} /></label>
            <button className='border border-gray-200 bg-yellow-100 rounded-xl' onClick={onSubmit}>Save & Check</button>
        </form>
    </div>
  )
}

export default Comment