'use strict';
/* 0.검색창을 만든다.
    검색창의 구성요소를 만든다.
    구성요소는 
        - 검색어 입력 필드
        - 검색 버튼
        - 검색한 키워드를 한눈에 볼 수 있는 로그창
            - 로그 창의 키워드는 해시 태그 형태로 표시한다.*/
const s = search_window {
    input : document.createElement('.input');
    button : document.createElement('.SearchBtn');
    log : document.createElement('.log');
    hashTag : document.createElement('.hashtag');
}
// 변수, 객체, 함수 작성법
/*
	#변수
	const a = "";
	let b = "";

	#객체
	{}; <= 이렇게 작성한 모든 코드는 객체이며, 객체는 이름을 갖지 않습니다.
	
	#함수
	function name(given){ 

		...blah blah // 이 함수의 할 일

		return something; 
	};
	function 키워드로 시작하고, 
	이름 - name - 을 가질 수 있고, 
	외부로부터 어떤 것을 받아서 - given - 사용할 수 있고, 
	return 키워드로 무언가를 내보낼 - something - 수 있습니다.

	문법이 엄격하지 않아
	given, something은 생략할 수 있습니다. 

	이 작성법은 형식이라 그대로 따르지 않으면 컴퓨터가 읽지 못합니다. 

	1.
	const search_window = { ... };
	const s = search_window;

	2.
	const s = search_window { ... };

	3.
	const s = search_window = { ... };

	2는 규칙에 맞지 않습니다.
	3은 규칙에 맞아 보이나, search_window를 정의한 - const or let - 적이 없지요.
	
	4.
	let search_window;
	const s = search_window = { ... };

	3을 수정한다면 4처럼 할 수 있습니다.

	주입식으로 말씀드리면, 

	숫자가 아닌 a to z로 무언가를 적을 때에, "", '', ``을 사용하지 않는다면 먼저 정의하세요. 

	"", '', ``를 사용한 a to z를 문자열이라고 하고
	그 이외엔 모두 변수, 키워드(= 예약어 : js가 고유명사로 정한 단어로 용도가 정해져있어 다른 용도로는 사용할 수 없습니다.)로 다뤄집니다. 

	const d = naver
	const e = "naver"

	d는 naver란 변수를 값으로 하고, e는 "naver"란 문자열을 값으로 합니다.
	변수는 사용하기 전에 꼭 정의해야 하고요. 

	기본 문법에 관한 링크들을 드릴께요.
	https://opentutorials.org/course/743/6582

	자바스크립트 기본 카테고리에서 객체까지만 보시면 될 것 같아요.
*/

const keyword = s.input.value;
const hash_tag = s.hashTag;
const onAdd = function onAdd(text) {
    /* 2.입력 필드는 비운다.*/
    s.input.value = '';
    /*3.해당 검색어를 로그 창에 표시한다.*/ 
    s.log.innerText = keyword + hash_tag;
    /*6. 로그에리아의 아이들 중에  지금 서치필드에 밸류값과 텍스트가 
    같은 아이가 있다면 아무짓도 하지마. */
    if(s.input.value === textInlog) {
		// comment : 여기가 그 아무짓에 해당하는 자리. 
        return;
    }
	// return이 생략됨.
}
 /*1. 검색어를 입력한 뒤 검색 버튼을 클릭 또는 엔터 키를 누르면*/ 
s.input.addEventListener('click', onAdd());
s.input.addEventListener('keypress(enter)', onAdd());
/* 
addEventListener는 실행시킬 함수를 2번째 인자로 받아요. 그래서 
onAdd면 실행시킬 함수를 받는 게 되지만, 
onAdd()면 onAdd 함수가 호출되며 내보낸 것을 인자로 받게 되죠. 

위의 함수 설명에서 return something은 생략이 가능하다고 했는데요.
something으로 아무것도 적지 않았다면 undefined를 내보내도록 되어 있어요.

생략할 뿐 코드 동작에 return이 없는 것 역시 아니고요.

따라서 위 코드에 addEventListener는 실행시킬 함수가 아닌 undefined를 받게 되어 원하는 대로 동작하지 않고, 또 문법 오류가 날 거예요.
*/
const textInLog = s.log.innerText;
/*5. 태그의 내용을 입력 필드에 표시한다.  */
const remove_text = function removeText() {
s.log.textInLog = '';
s.input.appendChild(textInLog);
}

/*  4.반대로 로그 창의 태그를 클릭하면*/

s.log.innerText.addEventListener('click', removeText());

// 앞으로 스크립트를 작성하시면 html에 참조해서 브라우저로 열어보신 뒤에 꼭 console 창을 통해 오류가 있는지 확인해보세요. 
// 오류가 있다면 그 오류를 수정하고, 해결 방법을 모르겠다면 제게 물어보시면 됩니다. 
