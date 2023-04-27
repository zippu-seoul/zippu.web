import Image from 'next/image';
import styles from 'src/app/page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description} style={{ display: 'block' }}>
        <h2>
          To. 석환님 <span>-&gt;</span>
        </h2>
        <div>
          석환님 일단 어제 얘기한걸 토대로 초기세팅 해보았습니다. ㅎㅎ 음 진짜
          기본적인것만 해놔서 더 추가적으로 필요한것이 있으면 추가 해주시구요
          ㅋㅋㅋ 폴더구조는 기본템플릿으로 구성했습니다. 더 자세한 폴더구조는
          클린아키텍쳐 공부후 일욜에 심도깊은 논의 하시죱! 그럼 오늘도
          좋은하루되시고 피드백 기다리겠습니다.
        </div>
      </div>
    </main>
  );
}
