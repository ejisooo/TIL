input event
-----------
#### 1. input에 change event를 주면 입력 후 포커스를 잃을 때 발생
#### 2. oninput은 키보드를 누를 때 발생
#### 3. onfocus는 input을 click 했을 때

###### 사용했던 예시:
```javascript
  const handleSubmit = (e) => {
	e.preventDefault();
	const input = document.querySelector("input[type=text]");
	const clickBtn = document.querySelector(".click-btn");
	const slideTopBox = document.querySelector(".slide-top-box")

	slideTopBox.classList.add("show");
	clickBtn.style.display = "none";
	input.onfocus = function(){
	   slideTopBox.classList.remove("show");
	   clickBtn.style.display = "block";
	}
```
