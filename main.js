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
        return;
    }
}
 /*1. 검색어를 입력한 뒤 검색 버튼을 클릭 또는 엔터 키를 누르면*/ 
s.input.addEventListener('click', onAdd());
s.input.addEventListener('keypress(enter)', onAdd());

const textInLog = s.log.innerText;
/*5. 태그의 내용을 입력 필드에 표시한다.  */
const remove_text = function removeText() {
s.log.textInLog = '';
s.input.appendChild(textInLog);
}

/*  4.반대로 로그 창의 태그를 클릭하면*/

s.log.innerText.addEventListener('click', removeText());
