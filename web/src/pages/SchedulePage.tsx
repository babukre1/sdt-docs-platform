import {BrandHeading} from '../components/BrandHeading';
import {Layout} from '../components/Layout';
import {ScheduleTable} from '../components/ScheduleTable';
import {schedule} from '../data/schedule';

export function SchedulePage() {
  return (
    <Layout active="schedule">
      <div className="content-width page-shell">
        <BrandHeading
          eyebrow="SOMNOG9 · SOFTWARE DEVELOPMENT TRACK"
          title="Workshop Schedule"
          description="19-24 September 2026"
        />

        <div className="schedule-stack">
          {schedule.map((day) => <ScheduleTable key={day.day} day={day} />)}
        </div>
      </div>
    </Layout>
  );
}
