import { postsFetcher } from "./posts_fetcher";
import markdownIt from 'markdown-it';

const md = markdownIt();

export async function fetchPost(path: string):Promise<string> {
  const res = await postsFetcher.get(`${path.trim()}/content.md`);

  const data = res.data;
  const strHtml = md.render(data);
  
  return strHtml;
}