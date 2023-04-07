import React, { useState, useEffect } from "react";
import styled from "styled-components";

function MainMenu() {
	const [Load, setLoad] = useState(false);
	const [pages1, setPages1] = useState(true)
	const [pages2, setPages2] = useState(false)
	const [pages3, setPages3] = useState(false)
	const [scrollPosition, setScrollPosition] = useState(0);

	useEffect(() => {
		setTimeout(() => {
			setLoad(true);
		}, 700);
		return () => setLoad(false);
	}, []);

	useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
	
	useEffect(() => {
		const about = document.getElementById('about');
		const projects = document.getElementById('projects');
		const aboutElTop = about.offsetTop;
		const projectsElTop = projects.offsetTop;
		
		if (scrollPosition <= (aboutElTop/2)) {
			setPages1(true)
    }
		else {
			setPages1(false)
		}
    if (scrollPosition >= (aboutElTop*0.5)) {
			setPages2(true)
    }
		else {
			setPages2(false)
		}
		if(scrollPosition >= (projectsElTop*0.9)){
			setPages3(true)
			setPages2(false)
		}else {
			setPages3(false)
		}
  }, [scrollPosition]);

	return (
		<StyledHeader className={`${Load ? "on" : ""}`}>
			<ul>
				<li className={pages1 ? "active" : ""}>
					<a href="#home">
						<span>Home</span>
						<i className="fas fa-home"></i>
					</a>
				</li>
				<li className={pages2 ? "active" : ""}>
					<a href="#about">
						<span>About</span>
						<i className="fas fa-user"></i>
					</a>
				</li>
				<li className={pages3 ? "active" : ""}>
					<a href="#projects">
						<span>Projects</span>
						<i className="fas fa-tasks"></i>
					</a>
				</li>
				<li>
					{/* eslint-disable-next-line react/jsx-no-target-blank */}
					<a href="https://github.com/kim1536" target="_blank">
						<span>Github</span>
						<i className="fab fa-github"></i>
					</a>
				</li>
			</ul>
		</StyledHeader>
	);
}

const StyledHeader = styled.header`
	position: fixed;
	right: 20px;
	top: 60px;
	bottom: 0;
	z-index: 100;
	opacity: 0;
	&.on {
		top: 0;
		opacity: 1;
		transition: all 0.85s;
	}
	ul {
		display: flex;
		justify-content: center;
		align-items: flex-end;
		flex-direction: column;
		height: 100%;
		li {
			position: relative;
			&:not(:last-child) {
				margin: 0 0 20px 0;
			}
			&.active {
				a {
					background-color: ${(props) => props.theme.mainColor};
				}
			}
			&:hover {
				a {
					padding: 13px 14px 13px 25px;
					background-color: ${(props) => props.theme.mainColor};
					span {
						position: relative;
						opacity: 1;
						padding-right: 10px;
						color: #fff;
					}
				}
			}
			a {
				display: inline-block;
				padding: 13px 14px;
				border-radius: 30px;
				background: #000030;
				transition: all 0.2s;
				span {
					position: absolute;
					right: 0px;
					display: inline-block;
					opacity: 0;
					font-size: 16px;
					font-weight: 600;
					letter-spacing: 0.5px;
					line-height: 1.2;
					text-transform: uppercase;
					vertical-align: text-top;
					transition: opacity 0.3s ease, padding 0.3s ease;
					color: transparent;
				}
				i {
					width: 25px;
					height: 25px;
					font-size: 20px;
					text-align: center;
					line-height: 25px;
				}
			}
		}
	}
`;

export default MainMenu;
