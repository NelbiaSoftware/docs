import type {ReactNode} from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title={siteConfig.title}>
      <div className="info">
          <h1>Welcome</h1>
          <p>Here you can read the documentation for our plugins</p>
      </div>
    </Layout>
  );
}
