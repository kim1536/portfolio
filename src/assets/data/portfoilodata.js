const portfolioData = {
	portfolioList: [
		{
			name: "일본 북양은행 데이터 마이그레이션",
			period: "2021.10 - 2021.11",
			link: "",
			description: ".일본 북양은행 담당자와 회의를 통해 고객으로부터 받은 csv파일을 가지고  데이터 마이그레이션",
			tech: ["JAVA", "Docker", "MySQL", "GitHub"],
		},
		{
			name: "모멘토 (개발 임시 중단)",
			logo: "momentor",
			period: "2022.01 - 2022.10",
			link:'https://mockup.momentorapps.com/company/dashboard/employment',
			description: "장애인과 기업의 구직 채용 연계 서비스입니다."
			+ " 1. storybook이용하여  UI 컴포넌트 구현."
			+ " 2. Recoil과 React Query를 통한 상태관리 구축."
			+ " 3. Atomic디자인 패턴으로 아키텍처 구축."
			+ " 4. Route53, CloudFront, S3 설정 후 gitlab CI/CD를 구축하여 AWS에 배포.",
			tech: ["AWS", "Node.js", "React", "Recoil", "NestJS", "TypeScript", "REST API", "GitLab"],
		},
		{
			name: "회사(가치와 여유) 홈페이지",
			logo: "company",
			period: "2022.05 - 2022.05",
			link:'https://www.gcnyy.com/',
			description: "회사 홈페이지 제작",
			tech: ["HTML5", "Sass", "jQuery", "AWS"],
		},
		{
			name: "Locale 도입",
			period: "2022.10 - 2022.10",
			link: "",
			description: "기존 솔루션의 언어팩 추가",
			tech: ["AngularJS", "Spring Boot", "Java", "SVN"],
		},
		{
			name: "AML 불법자금세탁방지 솔루션",
			period: "2022.10 - 2023.4",
			link: "",
			description: "1. 업무처리건수 따른 일, 월, 년단위로 막대그래프로 확인 가능하도록 구현. "
			+ "2. 거래안정도의상태 별 건수를 원그래프로 확인 가능하도록 구현. "
			+ "3. 보고서 작성 포맷 생성 및 PDF로 저장 되도록 구현. "
			+ "4. 사용자 목록, 추가, 사용자 상세정보 확인, 수정, 삭제 기능 구현.",
			tech: ["AngularJS", "Spring Boot", "Java", "Oracle", "MySQL", "GitHub"],
		},
	],
};

export default portfolioData;
