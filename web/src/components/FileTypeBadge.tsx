import type {MaterialType} from '../data/materials';

export function FileTypeBadge({type}: {type: MaterialType}) {
  return <span className={`file-type file-type--${type}`}>{type.toUpperCase()}</span>;
}
