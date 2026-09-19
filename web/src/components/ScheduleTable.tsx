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

      {day.followUp && (
        <div className="schedule-follow-up">
          <h3>{day.followUp.title}</h3>
          <ul>
            {day.followUp.items.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
      )}
    </section>
  );
}
