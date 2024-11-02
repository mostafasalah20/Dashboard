import { Box, Typography, useTheme } from '@mui/material';
import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { format } from 'date-fns';

function createEventId() {
  return String(Date.now());
}

const INITIAL_EVENTS = [];

export default function Calendar() {
  const theme = useTheme();
  const [weekendsVisible, setWeekendsVisible] = useState(true);
  const [currentEvents, setCurrentEvents] = useState([]);

  const handleWeekendsToggle = () => setWeekendsVisible(!weekendsVisible);

  const handleDateSelect = (selectInfo) => {
    const title = prompt('Please enter a new title for your event');
    const calendarApi = selectInfo.view.calendar;
    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      });
    }
  };

  const handleEventClick = (clickInfo) => {
    if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
      clickInfo.event.remove();
    }
  };

  const handleEvents = (events) => setCurrentEvents(events);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', mt: 10,mb:5, ml:10 ,}}>
      <Typography variant="h4" sx={{ fontWeight: 700, color: theme.palette.primary.main, mb: 2 }}>
        Calendar
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 4,
        }}
      >
        
        <Sidebar
          weekendsVisible={weekendsVisible}
          handleWeekendsToggle={handleWeekendsToggle}
          currentEvents={currentEvents}
        />

       
        <Box sx={{ flex: 1 }}>
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay'
            }}
            initialView="dayGridMonth"
            editable
            selectable
            selectMirror
            dayMaxEvents
            weekends={weekendsVisible}
            initialEvents={INITIAL_EVENTS}
            select={handleDateSelect}
            eventContent={renderEventContent}
            eventClick={handleEventClick}
            eventsSet={handleEvents}
          />
        </Box>
      </Box>
    </Box>
  );
}

function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  );
}

function Sidebar({ weekendsVisible, handleWeekendsToggle, currentEvents }) {
  return (
    <Box sx={{ width: { xs: '100%', md: 300 }, p: 2, bgcolor: 'background.paper', borderRadius: 2, boxShadow: 3}}>
      <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>Instructions</Typography>
      <ul>
        <li>Select dates and you will be prompted to create a new event</li>
        <li>Drag, drop, and resize events</li>
        <li>Click an event to delete it</li>
      </ul>
      <Box sx={{ mt: 3 }}>
        <label>
          <input
            type="checkbox"
            checked={weekendsVisible}
            onChange={handleWeekendsToggle}
          />
          Toggle weekends
        </label>
      </Box>
      <Box sx={{ mt: 3 }}>
        <Typography variant="subtitle1">All Events ({currentEvents.length})</Typography>
        <ul>
          {currentEvents.map((event) => (
            <SidebarEvent key={event.id} event={event} />
          ))}
        </ul>
      </Box>
    </Box>
  );
}

function SidebarEvent({ event }) {
  return (
    <li>
      <b>{format(new Date(event.start), 'yyyy-MM-dd')}</b>
      <i>{event.title}</i>
    </li>
  );
}
