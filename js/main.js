/*
JS에서 객체를 생성하는 방법 2가지
1. 객체리터럴식으로 생성
2. 생성자를 통한 인스턴스 생성

ES6에서의 객체지향
-동일한 형식의 객체를 대량으로 뽑아내야 될때 객체생성을 자동화
-생성자:객체를 생성해주는 함수
-인스턴스:생성자를 통해서 복사가 된 객체
-프로토타입:생성자 안에 자동으로 추가되는 공통의 저장공간(각 인스턴스에서 활용된 함수등록:매서드)
-같은 생성자를 통해서 복사된 인스턴스들은 prototype에 등록된 매서드를 공유
-생성자 안쪽의 this : 해당 생성자를 통해서 앞으로 복사될 인스턴스 객체를 지칭
*/
/*
class Student {
	constructor(name, age) {
		this.name = name;
		this.age = age;
		this.school = 'DCODELAB';
	}
	//프로토타입에 각 인스턴스들이 공통으로 활용할 함수 등록 (메서드)
	plusAge() {
		this.age = this.age + 1;
	}
}

//생성자를 통해서 2개의 인스턴스 객체 복사
const s1 = new Student('David', 20);
const s2 = new Student('Emily', 21);
console.log(s1, s2);

//인스턴스가 생성된 이후 프로토타입의 메서드를 호출해서 일괄적으로 인스턴스의 구조를 변경가능
[s1, s2].forEach((el) => el.plusAge());
console.log(s1, s2);
*/
/*
class Student {
	constructor(name, age) {
		this.name = name;
		this.age = age;
		this.school = 'DCODELAB';
	}

	plusAge() {
		this.age = this.age + 1;
	}

	renameSchool(txt) {
		this.school = txt;
	}
}

const s1 = new Student('David', 20);
const s2 = new Student('Emily', 21);
console.log(s1, s2);

[s1, s2].forEach((el) => {
	el.plusAge();
	el.renameSchool('ABC');
});
console.log(s1, s2);
*/

//--------------------------------------------------
/*
const now = new Date(); //현재 시간 인스턴스객체 반환
const year = now.getFullYear(); //시간인스턴스에서 메서드로 년도 반환
const month = now.getMonth(); //월의 값이 아닌 순서
const monthName = [
	'January',
	'Feburuary',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'Septmember',
	'October',
	'November',
	'December',
];
const date = now.getDate(); //일 반환
const day = now.getDay(); //순서가 반환 일:0, 월:1
const hour = now.getHours(); //시간반환
const min = now.getMinutes(); //분 반환
const sec = now.getSeconds(); //초 반환
const time = now.getTime(); //표준시가 지정된 시점으로부터의 밀리세컨드값이 반환
//console.log(time);

//특정 나라 표준시 구하는 방법
//우리나라시간대를 밀리세컨드로 반환후 - 밀리세컨드 시차
const timeGerman = time - 1000 * 60 * 60 * 8;

//해당 밀리세컨드값을 new Date()의 인수로 전달
//해당 밀리세컨드 시간값에 시간 인스턴스값이 수정되서 반환됨
const nowGerman = new Date(timeGerman);
console.log('한국시', now);
console.log('독일시', nowGerman);
*/
//--------------------------------------------
/*
특정 시간구간에 맞게 호출 메서드 (스크립트기능이 아닌 브라우저기능)
setTimeout(실행함수,지연시간) : 일정시간이후에 한번만 호출
setInterval(실행함수, 반복인터벌) : 일정시간마다 계속해서 반복호출

*/
/*
setTimeout(() => {
	console.log('5초마다실행');
}, 5000);
*/

const [btnStart, btnStop] = document.querySelectorAll('button');
//전역변수를 써야되는 경우
//특정 변수값이 서로다른 함수에서 공유되야될떄
//전역변수 쓰는 방법
//코드블록 밖에서 변수선언뒤 null이나 기본 자료값으로 초기화
//함수안쪽에서 새로 지역변수를 만드는 것이 아닌 기존 전역변수를 가져와서 새로운 값만 재할당
let timer = null;

timer = setInterval(() => {
	console.log('1초마다 반복실행');
}, 1000);

btnStop.addEventListener('click', () => {
	clearInterval(timer);
});

btnStart.addEventListener('click', () => {
	timer = setInterval(() => {
		console.log('1초마다 반복실행');
	}, 1000);
});
