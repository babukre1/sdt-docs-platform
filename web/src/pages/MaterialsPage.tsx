import {Layout} from '../components/Layout';
import {MaterialGroup} from '../components/MaterialGroup';
import {materialGroups} from '../data/materials';

export function MaterialsPage() {
  return (
    <Layout active="materials">
      <div className="content-width page-shell">
        <header className="materials-heading">
          <h1>Workshop Materials</h1>
          <p>Public files and learning resources</p>
        </header>

        <div className="materials-stack">
          {materialGroups.map((group) => <MaterialGroup key={group.day} group={group} />)}
        </div>
      </div>
    </Layout>
  );
}
