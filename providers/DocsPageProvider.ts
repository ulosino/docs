// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
// If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.

// Provides access, routing, and sorting to our OS Pages (Markdown format)

// Markdown processing libraries
import fs from "fs";
import path from "path";
import matter from "gray-matter";

// The location of the operating system Markdown files
const CoreDocsStore = path.join(process.cwd(), "public/markdown/core");
const PagesDocsStore = path.join(process.cwd(), "public/markdown/pages");
const PreferencesDocsStore = path.join(
  process.cwd(),
  "public/markdown/preferences"
);
const DonationDocsStore = path.join(process.cwd(), "public/markdown/tempo");

const ReferenceDocsStore = path.join(
  process.cwd(),
  "public/markdown/reference"
);

export function getDocs() {
  const fileNames = fs.readdirSync(CoreDocsStore);
  const allPostsData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, "");
    const fullPath = path.join(CoreDocsStore, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);
    return {
      slug,
      ...(matterResult.data as { date: string; title: string }),
    };
  });
  return allPostsData.sort((a, b) => {
    if (a < b) {
      return -1;
    } else {
      return 1;
    }
  });
}

export function getPagesDocs() {
  const fileNames = fs.readdirSync(PagesDocsStore);
  const allPostsData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, "");
    const fullPath = path.join(PagesDocsStore, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);
    return {
      slug,
      ...(matterResult.data as { date: string; title: string }),
    };
  });
  return allPostsData.sort((a, b) => {
    if (a < b) {
      return -1;
    } else {
      return 1;
    }
  });
}

export function getPreferencesDocs() {
  const fileNames = fs.readdirSync(PreferencesDocsStore);
  const allPostsData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, "");
    const fullPath = path.join(PreferencesDocsStore, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);
    return {
      slug,
      ...(matterResult.data as { date: string; title: string }),
    };
  });
  return allPostsData.sort((a, b) => {
    if (a < b) {
      return -1;
    } else {
      return 1;
    }
  });
}

export function getDonationDocs() {
  const fileNames = fs.readdirSync(DonationDocsStore);
  const allPostsData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, "");
    const fullPath = path.join(DonationDocsStore, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);
    return {
      slug,
      ...(matterResult.data as { date: string; title: string }),
    };
  });
  return allPostsData.sort((a, b) => {
    if (a < b) {
      return -1;
    } else {
      return 1;
    }
  });
}

export function getReferenceDocs() {
  const fileNames = fs.readdirSync(ReferenceDocsStore);
  const allPostsData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, "");
    const fullPath = path.join(ReferenceDocsStore, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);
    return {
      slug,
      ...(matterResult.data as { date: string; title: string }),
    };
  });
  return allPostsData.sort((a, b) => {
    if (a < b) {
      return -1;
    } else {
      return 1;
    }
  });
}
