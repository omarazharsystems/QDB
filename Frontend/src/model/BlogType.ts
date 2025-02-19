export interface BlogsProps {
  onPostSelect: (postId: number) => void;
  title: string
}

export interface PostProp {
  postId: number;
  title: string;
  content: string;
 
}
