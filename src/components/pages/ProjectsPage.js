import React from "react";
import PageWrap from "../templates/PageWrap";
import PageHeader from "../molecules/PageHeader";
import PortfolioMain from "../organisms/PortfolioMain";

function ProjectsPage() {
	return (
		<PageWrap page="projects">
			<main>
				<PageHeader titleBg="Works">
					<span className="point">Projects</span>
				</PageHeader>
				<section>
					<PortfolioMain />
				</section>
			</main>
		</PageWrap>
	);
}


export default ProjectsPage;
