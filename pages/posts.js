import Layout from "../components/MyLayout";
import Link from "next/link";
import fetch from "isomorphic-unfetch";

const PostLink = props => (
  <li>
    <Link href="/posts/[id]" as={`/posts/${props.id}`}>
      <a>{props.name}</a>
    </Link>
  </li>
);

const Posts = props => (
  <Layout>
    <h1>Posts</h1>
    <ul>
      {props.posts.map(({ id, name }) => (
        <PostLink key={id} id={id} name={name} />
      ))}
    </ul>
  </Layout>
);

Posts.getInitialProps = async () => ({
  posts: (
    await (await fetch("https://api.tvmaze.com/search/shows?q=batman")).json()
  ).map(entry => entry.show)
});

export default Posts;
