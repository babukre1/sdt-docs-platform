import {Layout} from '../components/Layout';
import {ScheduleTable} from '../components/ScheduleTable';
import {schedule} from '../data/schedule';

export function SchedulePage() {
  return (
    <Layout active="schedule">
      <div className="content-width page-shell">
        <header className="schedule-heading">
          <h1>Workshop Schedule</h1>
          <p>Microservices &amp; Full-Stack Engineering · 19–21 Sep, 2026</p>
        </header>

        <div className="schedule-stack">
          {schedule.map((day) => <ScheduleTable key={day.day} day={day} />)}
        </div>
      </div>
    </Layout>
  );
}
