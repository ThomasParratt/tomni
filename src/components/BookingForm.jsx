import React, { useState } from 'react'


export default function BookingForm({addBooking}) {
    const [title,setTitle] = useState('')
    const [date,setDate] = useState('')
    const [startTime,setStartTime] = useState('')
    const [endTime,setEndTime] = useState('')


    function handleSubmit(e) {
        e.preventDefault()
        if(!title || !date) return
        const start = startTime ? `${date}T${startTime}` : date
        const end =  endTime ? `${date}T${endTime}` : date
        addBooking({id: Date.now(), title, start, end})
        setTitle(''); setDate(''); setStartTime(''); setEndTime('')
    }


    return (
        <form className="flex flex-col gap-2 border rounded p-4 bg-white" onSubmit={handleSubmit}>
            <h3 className="font-semibold">Add Booking</h3>
            <input className="border px-2 py-1 rounded" placeholder="Title" value={title} onChange={e=>setTitle(e.target.value)} />
            <input className="border px-2 py-1 rounded" type="date" value={date} onChange={e=>setDate(e.target.value)} />
            <input className="border px-2 py-1 rounded" type="time" value={startTime} onChange={e=>setStartTime(e.target.value)} />Start
            <input className="border px-2 py-1 rounded" type="time" value={endTime} onChange={e=>setStartTime(e.target.value)} />End
            <button className="bg-gray-900 text-white px-3 py-1 rounded mt-2" type="submit">Add</button>
        </form>
    )
}