import React from "react";
import PageHeader from "../molecules/PageHeader";
import PortfolioMain from "../organisms/PortfolioMain";

function ProjectsPage() {
	return (
		<main id="projects">
			<PageHeader titleBg="Works">
				<span className="point">Projects</span>
			</PageHeader>
			<section>
				<PortfolioMain />
			</section>
		</main>
	);
}


export default ProjectsPage;
