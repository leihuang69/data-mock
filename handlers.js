import jwt from 'jsonwebtoken'

const generateAuthToken = ({email, password}) => {
    var access = 'auth';
    var token = jwt.sign({email, access}, "QHWuyT/uL*PYfT4ff9tg").toString();
      return token;
  };

  // 注册路由处理
 export const signUpHandler = (req, res) => {
    const {email, password} = req.body
    const token = generateAuthToken({email, password})
    res.header('x-auth', token).send("you are logged in!");
}