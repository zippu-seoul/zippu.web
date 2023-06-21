import Head from 'next/head';
import { NextPageContext } from 'next/types';
export const getServerSideProps = async function ({
  req,
  query,
}: NextPageContext) {
  return {
    props: {
      name: query?.name || '',
      id: query?.id || '',
    },
  };
};
export default function Result(props: any) {
  return (
    <div style={{ display: 'flex', flex: 1 }}>
      <img src="/ogimage.png" width={'100%'}></img>
      <Head>
        <title>{`[지각뿌셔]`}</title>
        <meta property="og:title" content={`[지각뿌셔]`} />

        <meta
          name="description"
          content={`${props.name}에 초대를 받았어요. 지금 바로 그룹에 참가해보세요!`}
        />
        <meta
          property="og:description"
          content={`${props.name}에 초대를 받았어요. 지금 바로 그룹에 참가해보세요!`}
        />
        <meta property="og:image" content="/ogimage.png" />
        {/* <meta property="og:url" content="Canonical link preview URL"></meta> */}
      </Head>
      {/* <div>앱에서 확인해 주세요</div> */}
    </div>
  );
}
