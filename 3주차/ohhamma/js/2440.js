let input = require('fs').readFileSync('/dev/stdin').toString();

let N = Number(input);

result = '';

for (let i=0; i<N; i++) {
  for (let j=0; j<N-i; j++) {
      result += '*';
  }
  result += '\n';
}

console.log(result);