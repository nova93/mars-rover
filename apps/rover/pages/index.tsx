import { NextPage } from "next";
import Layout from "../components/Layout";

const HomePage: NextPage = () => {
  return (
    <Layout>
      <iframe src="http://localhost:3009" />
      <iframe src="http://localhost:3010" />
    </Layout>
  );
};

export default HomePage;
