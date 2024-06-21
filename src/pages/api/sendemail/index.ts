import { NextApiRequest, NextApiResponse } from 'next';
import { transporter, mailOptions } from '../../../../nodemailer';
import { IContactForm } from 'src/components/email-form/email';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  // Post

  if (req.method === 'POST') {
    const data: IContactForm = req.body;

    if (!data || !data.name || !data.email || !data.message) {
      return res.status(400).send({ message: 'Bad request' });
    }

    // 메일 제목 형식에 활용할 fixTime 객체 선언 : 전송 시간 기록
    const fixTime = new Date().toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });

    // transperter 활용해 이메일 전송
    try {
      await transporter.sendMail({
        ...mailOptions,
        ...{
          text: ` 닉네임: ${data.name} \n email: ${data.email} \n 내용: ${data.message}`,
        },
        subject: `${fixTime} /계정삭제 요청/${data.email}`,
      });
      return res.status(200).json({ success: true });
    } catch (err: any) {
      return res.status(400).json({ message: err.message });
    }
  }

  return res.status(400).json({ message: 'Bad request' });
}
