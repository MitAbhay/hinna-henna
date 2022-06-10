import React, { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { send } from 'emailjs-com'

type Inputs = {
  name: string
  date: string
  time: string
  event: string
  email: string
  phone: string
}

function form() {
  const [submitted, setsubmitted] = useState(false)
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data)
    send(
      'service_mehndi',
      'template_sisters',
      {
        name: data.name,
        email: data.email,
        date: data.date,
        time: data.time,
        event: data.event,
        phone: data.phone,
      },
      '1dkKce18eHpwrAQMV'
    )
    setsubmitted(true)
  }

  return !submitted ? (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        id="form"
        className="space-y-4 max-w-5xl items-center text-center mx-auto my-32"
      >
        <div className="flex space-x-8 p-4 shadow-md text-lg font-serif">
          <p className="font-bold px-2">Name</p>
          <input
            {...register('name', { required: true })}
            className="w-full outline-none"
            type="text"
            name="name"
            placeholder="Enter your name"
          />
        </div>
        <div className="flex space-x-8 p-4 shadow-md text-lg font-serif">
          <p className="font-bold px-2">Email</p>
          <input
            {...register('email', { required: true })}
            className="w-full outline-none"
            type="email"
            name="email"
            placeholder="Enter your email"
          />
        </div>
        <div className="flex space-x-8 p-4 shadow-md text-lg font-serif">
          <p className="font-bold px-2">Date</p>
          <input
            {...register('date', { required: true })}
            className="outline-none"
            type="date"
            name="date"
            placeholder="Select Date"
          />
        </div>
        <div className="flex space-x-8 p-4 shadow-md text-lg font-serif">
          <p className="font-bold px-2">Time</p>
          <input
            {...register('time', { required: true })}
            className="outline-none"
            type="time"
            name="time"
            placeholder="Select Time"
          />
        </div>
        <div className="flex space-x-8 p-4 shadow-md text-lg font-serif">
          <p className="font-bold px-2">Contact</p>
          <input
            {...register('phone', { required: true })}
            className="outline-none w-full"
            type="phone"
            name="phone"
            placeholder="Enter your contact number"
          />
        </div>
        <div className="flex space-x-8 p-4 shadow-md text-lg font-serif">
          <p className="font-bold px-2">Event</p>
          <select
            {...register('event', { required: true })}
            className="outline-none"
            name="event"
          >
            <option value="don't-know">Select Event</option>
            <option value="bridal-mehndi">Bridal Mehndi</option>
            <option value="sangeet">Sangeet Parties</option>
            <option value="enga">Engagements</option>
            <option value="baby">Baby/Bridal Showers</option>
            <option value="bday">Birthday Parties</option>
            <option value="school">School/Corporate Events</option>
            <option value="bar">Bar/Bat Mitzvah</option>
            <option value="grad">Grad Night</option>
            <option value="girls">Girls Night Out</option>
          </select>
        </div>

        <input
          className="p-4 px-16 shadow-lg bg-yellow-400 text-white text-2xl rounded-lg cursor-pointer"
          type="submit"
          name="submit"
          value="Submit"
        />
      </form>
    </div>
  ) : (
    <div className="text-3xl font-bold font-serif p-8 max-w-3xl mx-auto items-center text-center my-28 ">
      Successfully submitted
    </div>
  )
}

export default form
