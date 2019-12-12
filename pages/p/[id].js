import { useRouter } from "next/router";
import { useAmp } from "next/amp";

import App from "../../components/App";
import Header from "../../components/Header";
import AMPArticle from "../../amp-components/AMPArticle";
import Article from "../../components/Article";
import { withApollo } from "../../lib/apollo";

export const config = { amp: "hybrid" };

const IndexPage = props => {
  const router = useRouter();
  const isAmp = useAmp();

  return (
    <App>
      <Header />
      {isAmp ? (
        <AMPArticle id={router.query.id} />
      ) : (
        <Article id={router.query.id} />
      )}
    </App>
  );
};
export default withApollo(IndexPage);
