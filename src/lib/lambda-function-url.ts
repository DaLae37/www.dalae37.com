import "server-only";

import { Sha256 } from "@aws-crypto/sha256-js";
import { defaultProvider } from "@aws-sdk/credential-provider-node";
import { HttpRequest } from "@smithy/protocol-http";
import { SignatureV4 } from "@smithy/signature-v4";

const functionUrlPattern = /^([a-z0-9-]+)\.lambda-url\.([a-z0-9-]+)\.on\.aws$/;

export async function fetchLambdaFunctionUrlHtml(
  functionUrl: string,
): Promise<string> {
  const url = new URL(functionUrl);
  const match = url.hostname.match(functionUrlPattern);

  if (url.protocol !== "https:" || !match) {
    throw new Error("A valid HTTPS Lambda Function URL is required.");
  }

  const [, , region] = match;
  const signer = new SignatureV4({
    credentials: defaultProvider(),
    region,
    service: "lambda",
    sha256: Sha256,
  });

  const request = new HttpRequest({
    protocol: url.protocol,
    hostname: url.hostname,
    method: "GET",
    path: url.pathname,
    headers: {
      accept: "text/html",
      host: url.host,
    },
  });
  const signedRequest = await signer.sign(request);
  const response = await fetch(url, {
    method: signedRequest.method,
    headers: signedRequest.headers,
    cache: "no-store",
    signal: AbortSignal.timeout(7_000),
  });

  if (!response.ok) {
    throw new Error(`Lambda Function URL request failed: ${response.status}`);
  }

  const html = await response.text();

  if (!html.trim()) {
    throw new Error("Lambda Function URL returned an empty response.");
  }

  return html;
}
