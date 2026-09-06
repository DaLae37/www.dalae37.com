export async function fetchFromWas<T>(
  path: string,
  init?: RequestInit,
): Promise<T> {
  const baseUrl = process.env.WAS_URL?.trim();

  if (!baseUrl) {
    throw new Error("WAS_URL is not configured.");
  }

  const url = new URL(path, baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`);
  const response = await fetch(url, {
    ...init,
    headers: {
      Accept: "application/json",
      ...init?.headers,
    },
  });

  if (!response.ok) {
    throw new Error(`WAS request failed: ${response.status}`);
  }

  return response.json() as Promise<T>;
}
