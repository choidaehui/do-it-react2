
const path = require("path");

module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        // scss 확장자 파일만을 적용하도록 파일 검사 규칙(test)을 추가
        loaders: ["sass-loader"],
        // sass-loader로 sass구문을 css로 변환
        include: path.resolve(__dirname, "../")
      }
    ]
  }
};