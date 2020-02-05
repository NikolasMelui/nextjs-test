import { useRouter } from "next/router";
import Layout from "../../components/MyLayout";

const Post = props => (
  <Layout>
    <h1>{props.post.name}</h1>
    <p>{props.post.summary.replace(/<[/]?[pb]>/g, "")}</p>
    {props.post.image ? <img src={props.post.image.medium} /> : null}
  </Layout>
);

Post.getInitialProps = async context => ({
  post: await (
    await fetch(`https://api.tvmaze.com/shows/${context.query.id}`)
  ).json()
});

export default Post;
