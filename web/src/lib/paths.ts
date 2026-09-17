const viteBase = import.meta.env.BASE_URL || '/';

function isExternal(value: string) {
  return /^https?:\/\//i.test(value);
}

export function withBase(path: string) {
  if (isExternal(path)) return path;

  const base = viteBase.endsWith('/') ? viteBase : `${viteBase}/`;
  const cleanPath = path.replace(/^\/+/, '');

  return `${base}${cleanPath}`;
}

export function isExternalUrl(path: string) {
  return isExternal(path);
}
