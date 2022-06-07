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
        <div>
          <p>Date</p>
          <input type="date" name="date" placeholder="Select Date" />
        </div>
        <div>
          <p>Time</p>
          <input type="time" name="time" placeholder="Select Time" />
        </div>
        <div>
          <p>Event</p>
          <select name="event">
            <option value="volvo">Bridal Mehndi</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
          </select>
        </div>
      </form>
    </div>
  )
}

export default form
