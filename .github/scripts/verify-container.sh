#!/usr/bin/env bash
set -euo pipefail

image="$1"
platform="$2"
arch="${platform#linux/}"
if [[ "$arch" == amd64 ]]; then arch=x64; fi

docker run --rm --platform "$platform" --entrypoint node "$image" -e '
  console.log({ node: process.version, arch: process.arch, lts: process.release.lts });
  if (process.version !== "v26.13.0" || process.arch !== process.argv[1] ||
      process.release.lts !== "Lithium" || process.getuid() === 0) process.exit(1);
' "$arch"

container="$(docker run -d --platform "$platform" "$image")"
trap 'docker logs "$container"; docker rm -f "$container" >/dev/null' EXIT
for attempt in {1..30}; do
  if docker exec "$container" node -e '
    fetch("http://127.0.0.1:3000/healthz", { signal: AbortSignal.timeout(2000) })
      .then(async response => {
        const body = await response.json();
        if (response.status !== 200 || body.status !== "ok" ||
            body.service !== "www.dalae37.com") process.exit(1);
        console.log("/healthz: HTTP 200", body);
      }).catch(() => process.exit(1));
  '; then
    exit 0
  fi
  sleep 2
done
exit 1
