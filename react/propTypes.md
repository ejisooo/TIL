propTypes
==========
> function Btn() => Btn이 전달받는 유일안 인자 = prop(object이므로 {}를 열어)
```javascript
function Btn({text, big}){
	return (
		<button 
		  style={{
                         backgroundColor:"tomato",
			 color:"#fff",
			 borderRadius:"20px",
			 padding:"10px 20px",
			 border:"0",
			 fontSize: big ? 18 : 12,
		  }}>
		  {text}
		</button>
	);
};

function App(){
   return(
      <div>
         <Btn text="saveChange"/>
         <Btn text="Continue"/>
      </div>
   );
};
```
> Btn() 함수를 불러서 text를 첫번째 인자로 보냄  
> App은 btn을 렌더링하는 컴포넌트

```javascript
function Btn({text, propsName}){
	return(
		<button
		   onClick={propsName}(1)
		   style={{
			 backgroundColor:"tomato",
			 border:"0",
			 borderRadius:"8px",
			 padding:"10px 20px",
			 color:"#fff",
		   }}>
		   {text}
		</button>
	);
};

//const MemorizedBtn = React.memo(Btn);컴포넌트들이 다시 그려질 때 컨트롤 가능하다
```javascript
Btn.propTypes = {
   text:PropTypes.string.isRequired,
   fontSize:PropTypes.number,
}
```
> 이 Prop들을 정확히 갖고 render될 것을 확실히 하고 싶을 때
> 파라미터를 잘못 넘겨도 확인할 수 없는 문제점. PropTypes라는 모듈의 도움.
> Props 타입이 뭐고 모양인지 설명. 어떤 prop둘울 받는지 검사하는게 가능하게끔 도와줌

function App(){
	const [value, setValue] = React.useState("save Changes");
	const changeValue = () =>{
		setValue("Revert Change");//값을 재설정
	}
	return(
	<div>
	    <Btn text={value} propsName={changeValue} />	
		<Btn text="click" />
	</div>
	);
};
const content = document.getElementById("content");
ReactDOM.render(<App />, content);
```
> App 속 Btn에게 준 onClick(propsName이라고 작성해둔)은 event가 아니라 prop 이름일뿐이고 function Btn으로 전달됨  
> event 주려면 function Btn 안에 있는 html 요소애 줘야해(1)  
> prop가 바뀌면 부모 컴포넌트가 변경되면서 전체 렌더링 됨. prop가 바뀌지않은 Btn도 렌더링 되는데 이걸 막을 수 있음:React.memo();
