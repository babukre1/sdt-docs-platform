import type {MaterialGroup as MaterialGroupType} from '../data/materials';
import {MaterialRow} from './MaterialRow';

export function MaterialGroup({group}: {group: MaterialGroupType}) {
  return (
    <section className="material-group">
      <div className="material-group__heading">
        <h2>{group.day} – {group.date}</h2>
        <small>{group.materials.length} {group.materials.length === 1 ? 'file' : 'files'}</small>
      </div>

      {group.materials.length > 0 ? (
        <div className="material-list" role="table" aria-label={`${group.day} materials`}>
          <div className="material-list__header" role="row">
            <span aria-hidden="true" />
            <span>Name</span>
            <span>Size</span>
            <span>Action</span>
          </div>
          {group.materials.map((material) => (
            <MaterialRow key={material.id} material={material} />
          ))}
        </div>
      ) : (
        <div className="empty-materials">Materials for this day will appear here.</div>
      )}
    </section>
  );
}
