import {BrandHeading} from '../components/BrandHeading';
import {Layout} from '../components/Layout';
import {MaterialGroup} from '../components/MaterialGroup';
import {materialGroups} from '../data/materials';

export function MaterialsPage() {
  return (
    <Layout active="materials">
      <div className="content-width page-shell">
        <BrandHeading
          eyebrow="SOMNOG9 · SOFTWARE DEVELOPMENT TRACK"
          title="Workshop Materials"
          description="Slides, files, exercises and workshop documentation."
        />

        <div className="materials-note">
          <strong>Public access.</strong>
          <span>Click a file to view, download or open its documentation.</span>
        </div>

        <div className="materials-stack">
          {materialGroups.map((group) => <MaterialGroup key={group.day} group={group} />)}
        </div>
      </div>
    </Layout>
  );
}
