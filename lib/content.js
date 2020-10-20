import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remark from 'remark';
import html from 'remark-html';

export const POSTS_DIR = path.join(process.cwd(), 'posts');
export const DOCS_DIR = path.join(process.cwd(), 'docs');

export async function getHtmlContent(dir, id) {
  const filename = path.join(dir, `${id}.md`);
  const fileContents = fs.readFileSync(filename, 'utf8');

  const frontMatter = matter(fileContents);
  const processedContent = await remark().use(html).process(frontMatter.content);
  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
    ...frontMatter.data,
  };
}

export function getAllPathIds(dir) {
  const files = fs.readdirSync(dir);
  return files.map(file => {
    return {
      params: {
        id: file.replace(/\.md$/, ''),
      },
    };
  });
}

export function getSortedPosts(dir) {
  const files = fs.readdirSync(dir);
  const allPostsData = files.map(file => {
    const fileContents = fs.readFileSync(path.join(dir, file), 'utf8');

    const matterResult = matter(fileContents);

    return {
      id: file.replace(/\.md$/, ''),
      ...matterResult.data,
    };
  });

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}
