# JavaScript Basic

- JavaScript 기본기를 배우며 놓치고 있는 부분을 천천히 빠르게 확인하고 실력을 다시 다져본다.

### 진행날짜

- 2023-10-10 ~ ...

## setTimeout

- `setTimeout()`
- `setInterval()`

## 문자열 검사 정규식

- `'문자'.includes('찾을단어')`

```javaScript
/abc/.test('abcdef')
/[a-d]/.test('aefg')  //true // a-z 까지 아무문자 하나가 포함되어있는지
/[가-다]/.test('다라마바')  //true // 가-다 까지 아무문자 하나 포함되어있는지
/[a-zA-Z]/.test('반가워요')  //false // 아무 영어 하나
/[a-zA-Z]/.test('반가워요a') //true // 아무 영어 하나
/[ㄱ-ㅎ가-힣ㅏ-ㅣ]/.test('반가워요')  //true // 아무 한글 하나
/\S/.test('abcde')   // 아무문자하나
/^a/.test('abcde')   //true // a로 시작하는지
/e$/.test('abcde') //true  // e로 끝나는지
/(e|f)/.test('abcde')   //true
/a+/ // a로 된 문자열
/\S+t/  // 아무문자열 + 마지막 t
/\S+@\S+\.\S+/
```

## 캐러셀 (이미지 슬라이드)

#### 순서

1. 애니메이션 시작전 화면 만들기
2. 애니메이션 종료 후 화면 만들기
3. 언제 종료화면으로 변할지 JS 코드 작성
4. transition 추가

### 배운거

```javaScript
.slide-container {
  width: 300vw;
  transition: all 1s;
  transform: translateX(-100vw);
}
$('.slide-2').on('click', function() {
  $('.slide-container').css('transform', 'translateX(-100vw)');
});
```

## 스크롤 이벤트

```javaScript
var 스크롤양 = document.querySelector('.lorem').scrollTop;  //
var 실제높이 = document.querySelector('.lorem').scrollHeight;   // 실제높이라 가장큼
var 높이 = document.querySelector('.lorem').clientHeight;   // 보이는 크기라 스크롤양은 이것 뺀만큼의 크기까지.
```

- 응용하면 스크롤 얼마나 내렸는지 진척도 UI 만들수 있음.

## 탭기능

- bootstrap을 이용하면 대충해도 디자인이 깔끔.
- jquery 는 배열에 붙이면 지가 알아서 for문 돌려서 다 붙여줌.
- 이벤트 버블링을 잘 이용하면 짧은 코드로.
- dataSet까지 이용하면 더 깔끔한 코드로.
