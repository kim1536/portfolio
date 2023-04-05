import React from "react";
import MainMenu from "../organisms/MainMenu";
import Preloader from "../molecules/Preloader";

function PageWrap(props) {
	const { children } = props;

	return (
		<div>
			<Preloader />
			<MainMenu page={props.page} />
			<>{children}</>
		</div>
	);
}

export default PageWrap;
