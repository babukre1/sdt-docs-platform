import type {WorkshopDay} from '../data/schedule';

export function ScheduleTable({day}: {day: WorkshopDay}) {
  return (
    <section className="schedule-day">
      <div className="day-title">
        <h2>{day.day}</h2>
        <span>{day.date}</span>
      </div>

      <div className="table-scroll">
        <table className="schedule-table">
          <thead>
            <tr>
              <th scope="col">Time</th>
              <th scope="col">Session</th>
              <th scope="col">Facilitator</th>
            </tr>
          </thead>
          <tbody>
            {day.sessions.map((session, index) => (
              <tr key={`${day.day}-${index}`}>
                <td className="time-cell">{session.time}</td>
                <td>{session.title}</td>
                <td>{session.facilitator}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
