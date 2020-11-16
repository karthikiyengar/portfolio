import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import compareDesc from "date-fns/compareDesc";

export interface Blog {
  date: string;
  title: string;
  description: string;
  slug: string;
  readingTime: ReturnType<typeof readingTime>;
}

export const getPosts = () => {
  const postsDir = path.join(process.cwd(), "_posts");
  const slugs = fs.readdirSync(postsDir);
  const meta = slugs
    .map((slug) => {
      const meta = matter(fs.readFileSync(path.join(postsDir, slug)));

      return {
        date: meta.data.date,
        title: meta.data.title,
        description: meta.data.description,
        slug: slug,
        readingTime: readingTime(meta.content),
      };
    })
    .sort((fst, snd) => compareDesc(new Date(fst.date), new Date(snd.date)));
  return meta;
};

export default (_req, res) => {
  const meta = getPosts();
  res.send(meta);
};
