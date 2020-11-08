import fs from "fs";
import path from "path";
import matter from "gray-matter";

export default (req, res) => {
  const slugs = fs.readdirSync(path.join(process.cwd(), "content"));
  const meta = slugs
    .map((blog) =>
      matter(fs.readFileSync(path.join(process.cwd(), "content", blog)))
    )
    .map((meta) => ({
      date: meta.data.date,
      title: meta.data.title,
      excerpt: meta.data.excerpt,
    }));
  res.send(meta);
};
