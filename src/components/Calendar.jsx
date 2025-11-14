import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'

export default function Calendar({ bookings, addBooking }) {
  // FullCalendar expects events with 'title', 'start', 'end', 'id'
  const handleDateSelect = (selectInfo) => {
    const title = prompt('Enter booking title:')
    const calendarApi = selectInfo.view.calendar
    calendarApi.unselect() // clear selection

    if (title) {
      const newBooking = {
        id: Date.now(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr
      }
      addBooking(newBooking)
    }
  }

  return (
    <FullCalendar
      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
      initialView="dayGridMonth"
      selectable={true}
      events={bookings}
      select={handleDateSelect}
      eventColor="#2563EB"
      headerToolbar={{
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      }}
      height="auto"
    />
  )
}
