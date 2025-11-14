import React, { useState, useEffect } from 'react'
import Calendar from './components/Calendar'
import BookingForm from './components/BookingForm'
import BookingList from './components/BookingList'
import bookings from './data/bookings'


export default function App() {
  //const [bookings, setBookings] = useState([])


  useEffect(()=> {
    const stored = localStorage.getItem('bookings')
    //if(stored) setBookings(JSON.parse(stored))
  }, [])


  useEffect(()=> {
    localStorage.setItem('bookings', JSON.stringify(bookings))
  }, [bookings])


  const addBooking = (booking)=> {
    setBookings(prev => [...prev, booking])
  }


  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">My Calendar App</h1>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-2/3">
          <Calendar bookings={bookings} />
        </div>
        <div className="md:w-1/3 flex flex-col gap-6">
          <BookingForm addBooking={addBooking} />
          <BookingList bookings={bookings} />
        </div>
      </div>
    </div>
  )
}
