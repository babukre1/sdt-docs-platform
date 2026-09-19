import type {Material} from '../data/materials';
import {isExternalUrl, withBase} from '../lib/paths';
import {FileTypeBadge} from './FileTypeBadge';

const viewableTypes = new Set<Material['type']>(['docs', 'pdf', 'link', 'github', 'video']);
const downloadableTypes = new Set<Material['type']>(['pdf', 'pptx', 'docx', 'xlsx', 'zip']);

export function MaterialRow({material}: {material: Material}) {
  const external = isExternalUrl(material.href);
  const href = external ? material.href : withBase(material.href);
  const newTab = material.type === 'pdf' || external;
  const isMarkdown = material.href.toLowerCase().endsWith('.md');
  const canView = viewableTypes.has(material.type) || isMarkdown;
  const canDownload = downloadableTypes.has(material.type) && !isMarkdown;

  return (
    <div className="material-row">
      <div className="material-row__type">
        <FileTypeBadge type={material.type} />
      </div>

      <div className="material-row__name">
        <strong>{material.title}</strong>
      </div>

      <div className="material-row__size">{material.size || '-'}</div>

      <div className="material-row__action">
        {canView && (
          <a
            className="material-action material-action--view"
            href={href}
            target={newTab ? '_blank' : undefined}
            rel={newTab ? 'noreferrer' : undefined}>
            View
          </a>
        )}
        {canDownload && (
          <a
            className="material-action material-action--download"
            href={href}
            download
            target={external ? '_blank' : undefined}
            rel={external ? 'noreferrer' : undefined}>
            Download
          </a>
        )}
      </div>
    </div>
  );
}
