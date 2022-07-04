TIL(Today I learned) 
=======
* ##  __toast 기능__

#### 1. 위치는 left로 조절
```css
#toast{
  position:fixed;
  bottom:100px;
  left:100%;
  transform:translateX(-50%);
  border-radius:25px;
  background:#666;
  color:#fff;
  padding:15px;
  opacity:0;
  transition:all .4s;
}
#toast.show{
  opacity:1;
  left:50%;
}
```

```javascript
const toast = document.getElementById('toast');  // id가 toast인 요소 div
let isToastShown = false;

document.getElementById('toastButton').addEventListener('click', function () {
     if (isToastShown) return;   // 토스트 메시지가 띄어져 있다면 함수를 끝냄
     isToastShown = true;
     toast.classList.add('show'); 
    
     setTimeout(function(){
        toast.classList.remove("show");
        isToastShown = false;
     }, 2000);
})
```

#### 참고자료: <https://steemit.com/kr/@zzcd/html-css-javascript-10--1542038609794>
