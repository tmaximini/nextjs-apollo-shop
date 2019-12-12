import { useQuery } from "@apollo/react-hooks";

import Head from "next/head";
import gql from "graphql-tag";
import ErrorMessage from "../components/ErrorMessage";

export const GET_PRODUCT_BY_ID = gql`
  query getProduct($id: ID!) {
    product(id: $id) {
      name
      brand
      description {
        short
      }
      slug
      price {
        amount
        currency
      }
      images {
        filename
        position
        type
        src {
          small
          big
        }
      }
    }
  }
`;

export default function Article({ id }) {
  const { loading, error, data } = useQuery(GET_PRODUCT_BY_ID, {
    variables: {
      id
    }
  });

  if (error) return <ErrorMessage message="Error loading article." />;
  if (loading) return <div>Loading</div>;

  const { product } = data;

  return (
    <section>
      <Head>
        <title>
          {product.brand} - {product.name}
        </title>
      </Head>
      <h3>AMP PAGE!!!!</h3>
      <h2>{product.brand}</h2>
      <h1>{product.name}</h1>
      <h4>
        {product.price.amount} {product.price.currency}
      </h4>
      <p dangerouslySetInnerHTML={{ __html: product.description.short }}>{}</p>
      {product.images.map(
        img =>
          img.type !== "gallery" && (
            <amp-img
              key={img.filename}
              src={img.src.small}
              alt={product.name}
              width="300"
              height="360"
            />
          )
      )}
      <style jsx>{`
        section {
          padding-bottom: 20px;
        }

        a {
          font-size: 14px;
          margin-right: 10px;
          text-decoration: none;
          padding-bottom: 0;
          border: 0;
        }
        span {
          font-size: 14px;
          margin-right: 5px;
        }
      `}</style>
    </section>
  );
}
