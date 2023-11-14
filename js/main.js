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
console.log(time);
