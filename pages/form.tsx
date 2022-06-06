import React from 'react'

function form() {
  return (
    <div>
      <form>
        <div>
          <p>Name</p>
          <input type="text" name="name" placeholder="Enter your name" />
        </div>
        <div>
            <p>Email</p>
            <input type="email" name="email" placeholder="Enter your email" />
        </div>
      </form>
    </div>
  )
}

export default form
