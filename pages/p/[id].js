import { useRouter } from "next/router";

import App from "../../components/App";
import Header from "../../components/Header";
import Article from "../../components/Article";
import { withApollo } from "../../lib/apollo";

const IndexPage = props => {
  const router = useRouter();

  return (
    <App>
      <Header />
      <Article id={router.query.id} />
    </App>
  );
};
export default withApollo(IndexPage);
