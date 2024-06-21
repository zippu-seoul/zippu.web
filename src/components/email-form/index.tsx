import { FC, useCallback, useState } from 'react';
import styled from '@emotion/styled';
import axios from 'axios';
import { IContactForm } from './email';

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 8px;
  margin: 0 auto;
`;

const LabelAndInputContaier = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  max-width: 300px;
`;

const CustomInput = styled.input`
  padding: 8px;
  width: 100%;
`;

const TextArea = styled.textarea`
  padding: 8px;
  width: 100%;
  resize: none;
`;

const Button = styled.button`
  margin-top: 20px;
  padding: 10px;
  border-radius: 4px;
  outline: none;
  color: white;
  background-color: #6a25ef;
  font-size: 16px;
  letter-spacing: 2px;

  &:hover {
    opacity: 0.8;
  }
  &:disabled {
    opacity: 0.5;
  }

  @media (max-width: 768px) {
    margin-top: 0;
  }
`;

const ZippuImage = styled.img`
  width: 50%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const PATH =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://zippu-web.vercel.app';

const EmailForm: FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const onValid = useCallback(async (data: IContactForm) => {
    if (!data || !data.name || !data.email || !data.message)
      alert('양식을 채워주세요;)');

    try {
      const response = await axios.post(`${PATH}/api/sendemail`, {
        name: data.name,
        email: data.email,
        message: data.message,
      });
      console.log(response.data);
      alert('메일 전송이 완료되었습니다.');
      setName('');
      setEmail('');
      setMessage('');
    } catch (err: any) {
      console.error(err);
      alert('메일 전송에 실패했습니다. 다시 시도해주세요.');
    }
  }, []);

  const onSubmit = () => {
    const data: IContactForm = { name, email, message };
    onValid(data);
  };

  return (
    <Container>
      <ZippuImage src="/ogimage.png" />
      <h2>Contact Our Team</h2>
      <LabelAndInputContaier>
        <label>Zippu 닉네임</label>
        <CustomInput
          id="nickname"
          placeholder="노지각"
          value={name}
          onChange={(e) => setName(e.currentTarget.value)}
        />
      </LabelAndInputContaier>
      <LabelAndInputContaier>
        <label>Email</label>
        <CustomInput
          id="email"
          type="email"
          placeholder="example@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
        />
      </LabelAndInputContaier>
      <LabelAndInputContaier>
        <label>Message</label>
        <TextArea
          id="message"
          name="content"
          cols={40}
          rows={8}
          placeholder="탈퇴이유를 입력해주세요."
          value={message}
          onChange={(e) => setMessage(e.currentTarget.value)}
        />
      </LabelAndInputContaier>
      <Button disabled={!name || !email || !message} onClick={onSubmit}>
        제출하기
      </Button>
    </Container>
  );
};

export default EmailForm;
