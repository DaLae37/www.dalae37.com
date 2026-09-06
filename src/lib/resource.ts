function trimEndSlash(value: string) {
  return value.endsWith("/") ? value.slice(0, -1) : value;
}

export function resourceUrl(path: string) {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  const base = process.env.RESOURCE_URL?.trim();

  return base ? `${trimEndSlash(base)}${normalized}` : `/resource${normalized}`;
}

export function gameUrl(path: string) {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  const base = process.env.WEB_GAME_URL?.trim();

  return base ? `${trimEndSlash(base)}${normalized}` : `/games${normalized}`;
}
