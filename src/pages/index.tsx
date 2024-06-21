import Head from 'next/head';
import { NextPageContext } from 'next/types';
export const getServerSideProps = async function ({
  req,
  query,
}: NextPageContext) {
  return {
    props: {
      title: query?.title || '',
      description: query?.description || '',
      tags: query?.tags || '',
    },
  };
};

export default function Invite(props: any) {
  return (
    <div style={{ display: 'flex', flex: 1 }}>
      <img src="/ogimage.png" width={'100%'}></img>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
        <meta name="keywords" content={props.tags} />

        <meta property="og:title" content={props.title} />
        <meta property="og:image" content="/ogimage.png" />
        <meta property="og:description" content={props.description} />
        <meta property="og:url" content="Canonical link preview URL"></meta>
      </Head>
    </div>
  );
}
