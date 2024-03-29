const skillData = {
	skillList: [
		{
			label: "HTML/CSS",
			detail: ["원하는 UI를 실용적이고, 익숙하게 만들어 낼 수 있습니다.", "Css 최신 문법이 숙지되어 있고 Css 프리프로세서 Sass를 사용할 수 있습니다."],
			icon: "fab fa-html5",
		},
		{
			label: "jQuery",
			detail: ["다양한 속성과 메소드를 능숙하게 사용이 가능합니다.", "Ajax을 활용하여 비동기 통신으로 데이터 요청을 할 수 있습니다."],
			icon: "fab fa-node-js",
		},
		{
			label: "Javascript/Typescript",
			detail: ["ES6와 이후의 자바스크립트 문법을 사용할 수 있습니다.", "타입에 대한 이해를 하고 있고, 인터페이스의 사용이 가능합니다."],
			icon: "fab fa-js-square",
		},
		{
			label: "React",
			detail: ["컴포넌트 생명주기와 속성을 사용할 수 있습니다.", "recoil과 React Query를 사용하여 상태관리를 할 수 있습니다.", "StoryBook이용하여  UI 컴포넌트 구현이 가능합니다."],
			icon: "fab fa-react",
		},
		{
			label: "Node.js",
			detail: ["Node.js가 작동하는 법에 대해 이해하고 있습니다.", "express 프레임워크를 사용하여 Restful API 서버를 만들 수 있습니다."],
			icon: "fab fa-node",
		},
		{
			label: "Git/Github",
			detail: ["git flow가 무엇인지 알고 있으며 왜 사용해야 하는지 이해하고 있습니다.", "깃과 깃헙을 사용하여 다른 개발자들과 협업을 할 수 있습니다."],
			icon: "fab fa-git-square",
		},
		{
			label: "AWS",
			detail: ["웹 클라우드 서버를 구축하기 위한 전체적인 흐름을 이해하고 있습니다.", "S3 & CloudFront & Route 53을 활용한 정적 웹 호스팅이 가능합니다."],
			icon: "fa-brands fa-aws",
		},
		{
			label: "NestJS",
			detail: ["NestJS가 작동하는 법에 대해 이해하고 있습니다.","모델, 컨트롤러, 서비스를 나누어 구조화된 서버를 만들 수 있습니다."],
			img:"nestjs"
		},
	],

	languageList: [
		{
			label: "한국어",
			level: "중상급",
			img:"hangul",
		},
		{
			label: "일본어",
			level: "네이티브",
			img:"hiragana",
		},
	],

	educationList: [
		{
			period: "2020.11 - 2021.06",
			position: "JAVA WEB Programming 과정",
			company: "코세아인재개발원",
			explain: "Java, Jsp&Servlet, Spring, iBatis, oracle SQL등을 배웠으며 MVC패턴으로 WEB 개발 및 기술을 습득하였습니다.",
		},
	],
	
	certificateList: [
		{
			period: "2017.07",
			position: "한국어능력시험 TOPIK II (고급)",
			company: "교육부 국립국제교육원",
		},
		{
			period: "2021.06",
			position: "정보처리기사",
			company: "한국산업인력공단",
		},
	],
};

export default skillData;
