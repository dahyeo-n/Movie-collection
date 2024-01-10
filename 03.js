// include() : 문자열에서 search string이 발견되면 true 아니면 false 값 반환!
// ↓ Include() 메서드를 사용하여 문자열에 다른 문자열이 포함되어 있는지 여부 확인


// '도' 문자열이 있는지
let movieName = '범죄도시';
console.log(movieName.includes('도')); // true

// str에 Script가 포함되어 있는지 확인
let str = 'JavaScript String';
console.log(str.includes('Script')); // true





// filter
let array = [3, 5, 11, 0, 9, 'string'];
let result = array.filter((value) => value < 10)
console.log(result); // output: array [3, 5, 0, 9]


const friends = [
    {
      name: '양주진',
    },
    {
      name: '오영제',
    },
    {
      name: '서준형',
    }
  ];
  
  // 동일한 이름 뽑아내기
  const happyPeoplename = friends.filter((friend) => {
    return friend.name === '양주진';
  })
  
  console.log('이름은 ', happyPeoplename);


  // 평균 구하기
  function solution(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    let avg = sum / arr.length;
    return avg;
  }