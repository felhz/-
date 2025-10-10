// 创建http服务器
const http = require('http');
const { getJWTToken } = require('@coze/api');
const fs = require('fs');
const { join } = require('path');

const privateKey = fs.readFileSync(
    join(__dirname, '/private_key.pem'),
  );

// const jwtToken = getJWTToken({
//     privateKey: privateKey.toString(),
//     baseURL:'https://api.coze.cn',
//     appId:'1241919122907',
//     aud:new URL(config.coze_api_base).host,
//     keyid:'QJdLj4QqofCHSoZiQMjyh2rzbooJ7Bx43u6CxikLkx4',
// });

const server = http.createServer(async (req, res) => {
    const jwtToken = await getJWTToken({
        privateKey: privateKey.toString(),
        baseURL:'https://api.coze.cn',
        appId:'1241919122907',
        aud:new URL('https://api.coze.cn').host,
        keyid:'_Y3mJk2fWBX0bgvGSyXGnEaxfv-KoXoADfATe2FgvVk',
    });
    res.end(jwtToken);
});

server.listen(4000, () => {
    console.log('Server is running on port 4000');
});
