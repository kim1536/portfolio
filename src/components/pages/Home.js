import React from "react";
import MainMenu from "../organisms/MainMenu";
import Preloader from "../molecules/Preloader";
import HomeTxtWrap from "../organisms/HomeTxtWrap";
import styled from "styled-components";

function Home() {
	return (
		<StyledDiv>
			<Preloader />
			<HomeTxtWrap />
			<MainMenu page="home" />
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
