React.useState
==============

```javascript
const [counter, setCounter] = React.useState(초기값);
const onClick = () =>{
   setCounter(counter + 1);
   setCounter((current) => current + 1); //더 안전한 방법. 현재 state 값을 기분으로 다음 state를 구하고 싶을 때
};
};
```
> React.useState 함수는 counter 같은 데이터를 숫자형 데이터로 건네주고 값을 바꿀 함수도 줌.  
> counter = data, setCounter = 값을 바꿀 함수, 값을 업데이트하고 리렌더링해줌


```javascript
function MinutesToHours(){
	const [amount, setAmount] = React.useState(0);
	const [inverted, setInverted] = React.useState(false);

	const onChange = (event) =>{
		setAmount(event.target.value);//event 발생했을 때 값을 업데이트 해주고 ui에 보여줌
	};
	const reset = () =>{
		setAmount(0);
	} 
	const onInvert = () =>{
		setInverted((current) => !current);
		//현재의 것과 반대로
	}

	return(
		<div>
		   <div>
			  <label htmlFor="amount">amount</label>
		      <input 
		        type="number" 
			    id="amount" 
			    onChange={onChange} 
			    value={inverted ? amount*60 : amount}  
			    placeholder="amount"
				disabled={inverted} />
		   </div>
		   <div>
			  <label htmlFor="hours">hours</label>
		      <input 
		        type="number" 
			    id="hours"
			    value={inverted ? amount : Math.round(amount / 60)} 
			    placeholder="hours"
				onChange={onChange} 
				disabled={!inverted} />
		   </div>

		   <button onClick={reset}>reset</button>
		   <button onClick={onInvert}>{inverted ? "turn back" : "flip"}</button>
	    </div>
	);
};
//inverted는 hours input에 입력한다는 것, disabled 상태라는거
function KmToMiles(){
	const [amount, setAmount] = React.useState(0);
	const [inverted, setInverted] = React.useState(false);

	const onChange = (event) =>{
		setAmount(event.target.value);
	};
	const reset = () =>{
		setAmount(0);
	} 
	const onInvert = () =>{
		setInverted((current) => !current);
		//현재의 것과 반대로
	}

	return(
		<div>
		   <div>
			  <label htmlFor="amount">km</label>
		      <input 
		        type="number" 
			    id="amount" 
			    onChange={onChange} 
			    value={inverted ? amount*1000 : amount}  
			    placeholder="amount"
				disabled={inverted} />
		   </div>
		   <div>
			  <label htmlFor="hours">miles</label>
		      <input 
		        type="number" 
			    id="hours"
			    value={inverted ? amount : Math.round(amount / 1000)} 
			    placeholder="hours"
				onChange={onChange} 
				disabled={!inverted} />
		   </div>

		   <button onClick={reset}>reset</button>
		   <button onClick={onInvert}>{inverted ? "turn back" : "flip"}</button>
	    </div>
	);
};

function App(){
	const [index, setIndex] = React.useState("xx");
	const onSelect = (event) =>{
		setIndex(event.target.value);
	}
	return(
		<div>
		    <h2>converter</h2>
		    <select value={index} onChange={onSelect}>
				<option value="xx" >select your units</option>
			    <option value="0" >MinutesToHours</option>
			    <option value="1">KmToMiles</option>
		    </select>
			<hr />
			{index === "xx" ? "pleas select your units" : null}
			{index === "0" ? <MinutesToHours /> : null}
			{index === "1" ? <KmToMiles /> : null}
	    </div>
	);
}
const root = document.getElementById("root");
ReactDOM.render(<App />, root);
```
 
> input 안에 value 넣는 이유? input 값을 외부에서도 수정하기위해  
> __삼항연산자:__ value={inverted ? amount : Math.round(amount / 60)} : inverted가 맞으면 amount 그대로, 아니면 60으로 나누고  
> inverted는 true or false  
> :onFlip 버튼을 클릭하면 함수 실행 -> (current => !current) 현재 값을 받아서 반대의 값을 내놓는다(지금 hours가 false라면 true가 되는거고 )  

```
disabled={flipped === true}  
input에 그냥 disabled = {false}라고 하면 모름  
disabled={flipped === true}라고 해줘야 위에서 작성해둔  
const [flipped, setFlipped] = React.useState(false);  
const onFlip = () =>{setFlipped((current) => !current);	} 이벤트가 실행됨
```
