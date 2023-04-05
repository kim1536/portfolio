import React from "react";
import Header from "../organisms/Header";
import Preloader from "../molecules/Preloader";

function PageWrap(props) {
	const { children } = props;

	return (
		<div>
			<Preloader />
			<Header page={props.page} />
			<>{children}</>
		</div>
	);
}

export default PageWrap;
