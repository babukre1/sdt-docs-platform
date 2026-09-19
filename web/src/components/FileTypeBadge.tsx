import type {MaterialType} from '../data/materials';

export function FileTypeBadge({type}: {type: MaterialType}) {
  const label = type === 'docs' ? 'DOC' : type.toUpperCase();

  return <span className={`file-type file-type--${type}`} aria-label={`${label} file`}>{label}</span>;
}
