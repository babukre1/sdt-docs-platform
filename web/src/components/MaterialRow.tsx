import type {Material} from '../data/materials';
import {isExternalUrl, withBase} from '../lib/paths';
import {FileTypeBadge} from './FileTypeBadge';

const downloadTypes = new Set<Material['type']>(['pptx', 'docx', 'xlsx', 'zip']);

function actionLabel(material: Material) {
  switch (material.type) {
    case 'docs':
      return 'Read Docs';
    case 'pdf':
      return 'View';
    case 'github':
      return 'Open Repository';
    case 'video':
      return 'Watch';
    case 'link':
      return 'Open';
    default:
      return 'Download';
  }
}

export function MaterialRow({material}: {material: Material}) {
  const external = isExternalUrl(material.href);
  const href = external ? material.href : withBase(material.href);
  const shouldDownload = downloadTypes.has(material.type);
  const newTab = material.type === 'pdf' || external;

  return (
    <div className="material-row">
      <div className="material-row__type">
        <FileTypeBadge type={material.type} />
      </div>

      <div className="material-row__name">
        <strong>{material.title}</strong>
        {material.description && <small>{material.description}</small>}
      </div>

      <div className="material-row__size">{material.size || '-'}</div>

      <div className="material-row__action">
        <a
          href={href}
          target={newTab ? '_blank' : undefined}
          rel={newTab ? 'noreferrer' : undefined}
          download={shouldDownload ? true : undefined}>
          {actionLabel(material)}
        </a>
      </div>
    </div>
  );
}
