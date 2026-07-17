import { copyFile, mkdir, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const dist = join(root, "dist");
const serverDir = join(dist, "server");
const archiveServerDir = join(dist, "dist", "server");
const openaiDir = join(dist, ".openai");

if (!existsSync(join(dist, "index.html"))) {
  throw new Error("Missing dist/index.html. Run vite build before prepare-sites.");
}

await mkdir(serverDir, { recursive: true });
await mkdir(archiveServerDir, { recursive: true });
await mkdir(openaiDir, { recursive: true });
await copyFile(join(root, ".openai", "hosting.json"), join(openaiDir, "hosting.json"));

const workerEntrypoint = `export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const response = await env.ASSETS.fetch(request);

    if (response.status !== 404 || url.pathname.includes(".")) {
      return response;
    }

    return env.ASSETS.fetch(new Request(new URL("/index.html", url), request));
  },
};
`;

await writeFile(join(serverDir, "index.js"), workerEntrypoint);
await writeFile(join(archiveServerDir, "index.js"), workerEntrypoint);
