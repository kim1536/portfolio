import React from "react";
import Preloader from "../molecules/Preloader";
import MainMenu from "../organisms/MainMenu";
import AboutPage from "../pages/AboutPage";
import ProjectsPage from "../pages/ProjectsPage";
import HomeTxtWrap from "../organisms/HomeTxtWrap";
import styled from "styled-components";

function Home() {
	return (
		<StyledDiv id='home'>
			<Preloader />
			<MainMenu/>
			<HomeTxtWrap />
			<AboutPage />
			<ProjectsPage />
		</StyledDiv>
	);
} 

export default Home;

const StyledDiv = styled.div`
	overflow: hidden;
	@media ${(props) => props.theme.mobile} {
		overflow: auto; 
	}
`;
