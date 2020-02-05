import Layout from "../components/MyLayout";
import Link from "next/link";

const PostLink = props => (
  <li>
    <Link href="/posts/[id]" as={`/posts/${props.id}`}>
      <a>{props.id}</a>
    </Link>
  </li>
);

const Posts = () => (
  <Layout>
    <p>Blog</p>
    <ul>
      <PostLink id="First post" />
      <PostLink id="Second post" />
      <PostLink id="Third post" />
    </ul>
  </Layout>
);

export default Posts;
