import { BlogsProps } from "../model/BlogType";
import Blogs from "./Blogs";

export default function Dashboard({ onPostSelect, title }: BlogsProps) {
  return <Blogs title={title} onPostSelect={onPostSelect}/>;
}
