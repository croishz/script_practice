'use strict';
/* scenario 

    검색창을 만든다.
    #코드의 행위는 크게 두가지.
    #정의
     # 담는 것
    #호출
     # 정의()

    const 정의1 = element, text, number, undefined, null, symbol, object, array

    const search_window1 = document.createElement("검색창1");

    검색창의 구성요소를 만든다.
    const search_window_character = {
        input : document.createElement("input"),
        button : document.createElement("검색 버튼"),
        log : document.createElement("로그 창"),
        hashtag : document.createElement("해시 태그")
    }
    const s = search_window_character;
    구성요소는 
        - 검색어 입력 필드
        - 검색 버튼
        - 검색한 키워드를 한눈에 볼 수 있는 로그창
            - 로그 창의 키워드는 해시 태그 형태로 표시한다.//??

    const job_button = ;

    const callback = function job1(zandi){
        // console.log(zandi);
        // console.log(s.input.value); djlaskjdal
        // console.log(s.log.innerText); "dsfhskjd" 
        const empty = "";
        const keyword = s.input.value
        const accumulater = s.log.innerText
        s.input.value = empty; 1.
        s.log.innerText = accumulater + keyword; 2.
         
    };
    s.button click addEventListener.  callback
    s.button.addEventLitsener("click", callback);

    검색어를 입력한 뒤 검색 버튼을 클릭 또는 엔터 키를 누르면 
    1.입력 필드는 비운다.
    2.해당 검색어:value 를 로그창에 적는다:innerText =.
    
    반대로 로그 창의 태그를 클릭하면 
    1. 태그의 내용을 입력 필드에 표시한다. 

    추가 조건
    - 같은 검색어는 다시 태그로 만들지 않을 것.
*/
const serach_field = document.querySelector('.input-field');
const search_btn = document.querySelector('.search-button');
const logArea = document.querySelector('.log-area');

function onAdd() {
    //1. 입력 필드는 비운다.
    //2. 해당 검색어를 로그 창에 표시한다.
    const text = serach_field.value;
    serach_field.value='';
    logArea.appendChild(text);
    logArea.appendChild(hashTag#);
    if (serach_field.value = text) {
        return;
    }
    //로그에리아의 아이들 중에  지금 서치필드에 밸류값과 텍스트가 같은 
    //아이가 있다면 아무짓도 하지마. 
}

function putItBack() {
//1. 태그의 내용을 입력 필드에 표시한다. 
logArea.removeChild(text);
serach_field.appendChild(text);
}

search_btn.addEventListener('click', () => {
    onAdd();
})

search_btn.addEventListener('keypress', (enter) => {
    onAdd();
})

logArea.appended_child.addEventListener('click', () => {
    putItBack();
})

로그창의태그.addEventListener('click', () => {
    putItBack();
    
})



const search_window_character = {
    input : document.createElement("input"),
    button : document.createElement("검색 버튼"),
    log : document.createElement("로그 창"),
    hashtag : document.createElement("해시 태그");
}

const search_window = {
    
}