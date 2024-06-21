import styled from '@emotion/styled';
import { FC } from 'react';

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

const EmailForm: FC = () => {
  return (
    <Container>
      <ZippuImage src="/ogimage.png" />
      <h2>Contact Our Team</h2>
      <LabelAndInputContaier>
        <label>이름</label>
        <CustomInput placeholder="노지각" />
      </LabelAndInputContaier>
      <LabelAndInputContaier>
        <label>Email</label>
        <CustomInput type="email" placeholder="example@gmail.com" />
      </LabelAndInputContaier>
      <LabelAndInputContaier>
        <label>Message</label>
        <TextArea
          name="content"
          cols={40}
          rows={8}
          placeholder="문의사항을 입력해주세요."
        />
      </LabelAndInputContaier>
      <Button>제출하기</Button>
    </Container>
  );
};

export default EmailForm;
