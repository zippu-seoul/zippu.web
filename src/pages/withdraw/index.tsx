import Head from 'next/head';
import { NextPageContext } from 'next/types';
export const getServerSideProps = async function ({
  req,
  query,
}: NextPageContext) {
  return {
    props: {
      group: query?.group || '',
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
          content={`앱내 탈퇴페이지로 이동합니다. 설정 > 탈퇴하기`}
        />
        <meta property="og:image" content="/ogimage.png" />
      </Head>
    </div>
  );
}
