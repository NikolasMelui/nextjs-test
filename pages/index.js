import Layout from "../components/MyLayout";
import Link from "next/link";

const PostLink = props => (
  <li>
    <Link href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
);

const Blog = () => (
  <Layout>
    <p>Blog</p>
    <ul>
      <PostLink title="First post" />
      <PostLink title="Second post" />
      <PostLink title="Third post" />
    </ul>
  </Layout>
);

export default Blog;
