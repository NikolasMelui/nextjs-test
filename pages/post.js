import { useRouter } from "next/router";
import Layout from "../components/MyLayout";

const Page = () => (
  <Layout>
    <h1>{useRouter().query.title}</h1>
    <p>This is the {useRouter().query.title.toLowerCase()} post content.</p>
  </Layout>
);

export default Page;
