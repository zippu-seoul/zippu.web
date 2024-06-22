const nodemailer = require('nodemailer');

// 메일 주소 및 앱 비밀번호 선언하기 (gmail)
const email = process.env.NEXT_PUBLIC_EMAIL;
const pass = process.env.NEXT_PUBLIC_PASSWORD;

// transporter 생성하기
export const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: email,
    pass,
  },
});

// 메일 옵션 정하기
// 유저의 메일이 아닌 우리 팀 메일 계정을 통해 송수신을 총괄할 것이므로, mailOption의 송수신 계정을 email로 통일한다.
// https://stackoverflow.com/questions/26948516/nodemailer-invalid-login
export const mailOptions = {
  from: email, // 송신할 이메일
  to: email, // 수신할 이메일
};
