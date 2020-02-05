import { useRouter } from "next/router";
import Layout from "../../components/MyLayout";

const Post = () => (
  <Layout>
    <h1>{useRouter().query.id}</h1>
    <p>This is the {useRouter().query.id} post content.</p>
  </Layout>
);

export default Post;
