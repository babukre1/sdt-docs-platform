export type Session = {
  time: string;
  title: string;
  facilitator: string;
};

export type WorkshopDay = {
  day: string;
  date: string;
  sessions: Session[];
};

/*
 * Replace the sample session titles/times below with the final agenda.
 * The facilitator names are kept in one central file so the UI never
 * needs to be edited when the schedule changes.
 */
export const schedule: WorkshopDay[] = [
  {
    day: 'Day 1',
    date: 'Saturday, 19 September 2026',
    sessions: [
      {time: '09:00 - 09:30', title: 'Opening & Welcome', facilitator: 'Mohamed A. Abdisamad'},
      {time: '09:30 - 10:30', title: 'Introduction to Software Development', facilitator: 'Bashiir'},
      {time: '10:30 - 12:00', title: 'Git & GitHub', facilitator: 'Nadaara'},
      {time: '12:00 - 13:00', title: 'Lunch Break', facilitator: '-'},
      {time: '13:00 - 14:30', title: 'HTML & CSS Fundamentals', facilitator: 'Sumaya'},
      {time: '14:30 - 16:00', title: 'Hands-on Exercise', facilitator: 'Hassan'},
    ],
  },
  {
    day: 'Day 2',
    date: 'Sunday, 20 September 2026',
    sessions: [
      {time: '09:00 - 10:30', title: 'JavaScript Fundamentals', facilitator: 'Bashiir'},
      {time: '10:30 - 12:00', title: 'JavaScript Practical Session', facilitator: 'Nadaara'},
      {time: '12:00 - 13:00', title: 'Lunch Break', facilitator: '-'},
      {time: '13:00 - 14:30', title: 'Working with APIs', facilitator: 'Sumaya'},
      {time: '14:30 - 16:00', title: 'Hands-on Lab', facilitator: 'Hassan'},
    ],
  },
  {
    day: 'Day 3',
    date: 'Monday, 21 September 2026',
    sessions: [
      {time: '09:00 - 10:30', title: 'React Fundamentals', facilitator: 'Mohamed A. Abdisamad'},
      {time: '10:30 - 12:00', title: 'Components & State', facilitator: 'Bashiir'},
      {time: '12:00 - 13:00', title: 'Lunch Break', facilitator: '-'},
      {time: '13:00 - 14:30', title: 'React Practical Session', facilitator: 'Nadaara'},
      {time: '14:30 - 16:00', title: 'Workshop Exercise', facilitator: 'Sumaya'},
    ],
  },
  {
    day: 'Day 4',
    date: 'Tuesday, 22 September 2026',
    sessions: [
      {time: '09:00 - 10:30', title: 'Backend Development', facilitator: 'Hassan'},
      {time: '10:30 - 12:00', title: 'REST APIs', facilitator: 'Mohamed A. Abdisamad'},
      {time: '12:00 - 13:00', title: 'Lunch Break', facilitator: '-'},
      {time: '13:00 - 16:00', title: 'Backend Hands-on Lab', facilitator: 'Bashiir'},
    ],
  },
  {
    day: 'Day 5',
    date: 'Wednesday, 23 September 2026',
    sessions: [
      {time: '09:00 - 10:30', title: 'Databases', facilitator: 'Nadaara'},
      {time: '10:30 - 12:00', title: 'Connecting Frontend & Backend', facilitator: 'Sumaya'},
      {time: '12:00 - 13:00', title: 'Lunch Break', facilitator: '-'},
      {time: '13:00 - 16:00', title: 'Group Project Work', facilitator: 'Hassan'},
    ],
  },
  {
    day: 'Day 6',
    date: 'Thursday, 24 September 2026',
    sessions: [
      {time: '09:00 - 12:00', title: 'Project Finalization', facilitator: 'Mohamed A. Abdisamad'},
      {time: '12:00 - 13:00', title: 'Lunch Break', facilitator: '-'},
      {time: '13:00 - 15:00', title: 'Project Presentations', facilitator: 'Bashiir'},
      {time: '15:00 - 16:00', title: 'Closing & Next Steps', facilitator: 'Hassan'},
    ],
  },
];
