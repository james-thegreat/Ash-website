import { SitemapStream, streamToPromise } from "sitemap";
import fs from "fs";
import path from "path";

const DOMAIN = "https://yourdomain.co.nz";
const COMPONENTS_DIR = "./src";

// Set of IDs found
const foundIds = new Set();

// Allowed IDs for sitemap (ONLY main sections)
const allowedIds = new Set(["home", "about", "services", "contact"]);

// Scan for id="..."
function scanFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (let entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      scanFiles(fullPath);
    } else if (entry.isFile() && fullPath.endsWith(".jsx")) {
      const content = fs.readFileSync(fullPath, "utf8");

      const regex = /id=["']([a-zA-Z0-9-_]+)["']/g;
      let match;

      while ((match = regex.exec(content)) !== null) {
        const id = match[1];

        if (allowedIds.has(id)) {
          foundIds.add(id);
        }
      }
    }
  }
}

scanFiles(COMPONENTS_DIR);

// Build pages list
const pages = ["/"];
foundIds.forEach((id) => pages.push(`/#${id}`));

const sitemap = new SitemapStream({ hostname: DOMAIN });

pages.forEach((page) => sitemap.write({ url: page }));
sitemap.end();

streamToPromise(sitemap).then((xml) => {
  fs.writeFileSync("./public/sitemap.xml", xml);
  console.log("✅ Clean sitemap generated → public/sitemap.xml");
  console.log("📌 Pages detected:", pages);
});
