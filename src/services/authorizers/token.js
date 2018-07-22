const jwt = require('jsonwebtoken');
const { promisify } = require('core/helpers');

const sign = promisify(jwt.sign.bind(jwt));
const verify = promisify(jwt.verify.bind(jwt));

const { SECRET_KEY: secret = 'jwt-secret', JWT_EXPIRE: expiresIn = 86400000 } = process.env;

const signToken = (data, options = {}) => sign(data, secret, { expiresIn, ...options });
const verifyToken = token => verify(token, secret);

module.exports = {
  signToken,
  verifyToken
};

/**
 * Token
 * Only give user token's file name
 * Actual token is jwt, which stored in file
 * Why store jwt in file? (Instead of send back jwt as token)
 * Security. When token leaked, removing token file invalid leaked token
 * @param code
 * @param email
 * @returns {*}
 */
// export const tinyToken = ({ code, email }) => {
//   try {
//     const token = genToken({ code, email });
//     const fileName = genFileName({ code, email });
//     storeToken({ token, fileName });
//     return { token: fileName };
//   } catch (err) {
//     _(err);
//     return { err };
//   }
// };

// signToken({name: 'anh'}).then(console.log);
// const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYW5oIiwiaWF0IjoxNTMyMjQ1NDU1LCJleHAiOjE2MTg2NDU0NTV9.umWuaWt446ZIxNJQQTua7YIW9yVnxKxA4o-qFSeWhuQ';
// verifyToken(token).then(console.log);
