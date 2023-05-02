import Image from 'next/image';
import styles from './page.module.css';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description} style={{ display: 'block' }}>
        <h2>
          To. 석환님 <span>-&gt;</span>
        </h2>

        <div>
          석환님 핑크ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ어후 ㅋㅋㅋ 밖에 pages폴더 있어서
          오류나더라구요 src폴더안으로 다 이사했습니다! 석환님 저희 색 hex?rgba?
          디자인팀에 통일시켜달라고 요청드려보아요
        </div>
        <Input placeholder="input test" />
        <Button>동이님</Button>

        <div
          css={css`
            padding: 32px;
            background-color: hotpink;
            font-size: 24px;
            border-radius: 4px;
            &:hover {
              color: ${COLOR};
            }
          `}
        >
          이모션 참 쉽죠 클린아키텍쳐 폴더구조를 어떻게 해야할지 감이 안오ㅏ요..
        </div>
      </div>
    </main>
  );
}

const COLOR = 'red';

const Button = styled.button`
  padding: 32px;
  background-color: hotpink;
  font-size: 18px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  &:hover {
    color: white;
  }
`;

const Input = styled.input`
  margin-right:8px;
  padding: 10px;
  width: 200px;
  height: 40px;
  border-radius: 8px;
  color: #090909
  background-color: #ff69b4;
  
  &:focus {
        outline: none;
        box-shadow: 0px 0px 2px red;
    }
`;
