import React from 'react'
import './user.css'

const User = ({id,email,name,onDelete}) => {

    const handleDelete = () => {
        onDelete(id);
    }

    return (
        <div className='list'>
          <form onSubmit={handleDelete}>
            <span>{name}</span>
            <span>{email}</span>
            <span>
                <button>edit</button>
                <button onClick={handleDelete}>delete</button>
            </span>
          </form>
        </div>
    )
}

export default User
