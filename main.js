const str = `
010-1234-5678
jo@gmail.com
주소
The quick brown fox jumps over the lazy ...
`;


console.log(
  // str.match(/.{1,}(?=@)/g) //앞쪽일치패턴
  str.match(/(?<=@).{1,}/g) //뒤쪽일치패턴
)