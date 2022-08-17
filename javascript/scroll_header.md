scroll header event
==============

> headerMoving(scroll up, down) 일 때 className 정해주기  
> 스크롤 할 때 y축 비교하고 up, down 주기
> scroll 내릴 때 prev < next = "down" className 추가(header 숨김)
> scroll 올릴 때 prev > next = ""


```javascript
const header = document.querySelector("header");
var headerMoving = function(direction){
    if(direction === "down"){
        header.className = "scrollDown"
    }else if(direction ==== "up"){
        header.className = "";
    }
};

var prevScrollTop = 0;
document.addEventListener("scroll", function(){
    var nextScrollTop = window.pageYOffset || 0 //현재 y축 or 0
    if(prevScrollTop < nextScrollTop){
        headerMoving("down")
    }else if(prevScrollTop > nextScrollTop){
        headerMoving("up")
    }
    prevScrollTop = nextScrollTop;
})

```

style과 class
-------------
#### className 과 classList

* className = class 속성값 전체를 바꿀 때
* classList = 개별 class를 조작하고 싶을 때(add/remove/toggle/contains)

#### style property 재지정하기

* style property에 값을 할당했다가 제거할 때 = elem.style.display = "" 빈 문자열 할당

#### getComputedStyle로 계산된 스타일 얻기(요소의 스타일 결정 값을 읽는 방법)

* style property를 사용해도 margin값을 읽을 수가 없다  
=> getComputedStyle 메서드 사용. getComputedStyle(element, [pseudo])
* element: 값을 읽을 요소, pseudo: 의사 요소가 필요한 경우, 빈 문자열이나 아무런 값을 입력 x = 요소 자체를 의미
