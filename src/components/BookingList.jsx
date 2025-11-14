import React from 'react'


export default function BookingList({bookings}) {
    return (
        <div className="border rounded p-4 bg-white">
            <h3 className="font-semibold mb-2">Bookings</h3>
            {bookings.length===0 ? <p className="text-gray-500">No bookings</p> : (
                <ul className="text-sm">
                    {bookings.map(b=>(<li key={b.id}>{b.date} {b.time} — {b.title}</li>))}
                </ul>
            )}
        </div>
    )
}