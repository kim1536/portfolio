import React from "react";
import styled, { keyframes } from "styled-components";
import Heading from "../atoms/Heading";

function AboutTxtWrap() {
	return (
		<StyledHome>
			<div className="left">
				<div className="color-block"></div>
			</div>
			<div className="right">
				<div className="tit-wrap">
					<Heading level="2">HI! HOW ARE YOU?</Heading>
					<Heading>
						I'M{" "}
						<span className="message">
							<strong>KWONIL KIM</strong>
							<strong>WEB DEVELOPER</strong>
						</span>
					</Heading>
					<p>
						안녕하세요. 저는 김권일입니다.
						<br />
						새로운 기술에 관심이 많으며 동료들과의 커뮤니케이션과 상호 피드백 및 리뷰를 좋아합니다. 현재 프론트엔드 개발자로 구직중입니다. 맡은 일에 자부심을 갖고 도전을 경험할 수 있는 회사에서 일하고 싶습니다.
					</p>
				</div>
				<section>
					<Heading level="2">PERSONAL INFOS</Heading>
					<ul>
						<li>
							<span>Name : </span>김권일
						</li>
						<li>
							<span>Age : </span>30, 1993.03
						</li>
						<li>
							<span>Address : </span>서울시 은평구
						</li>
						<li>
							<span>Email : </span>rnjsdlf0322@gmail.com
						</li>
					
					</ul>
				</section>
			</div>
		</StyledHome>
	);
}

const messageslide = keyframes`
	0% {
		top: 0;
		width: 0;
	}
	1% {
		width: 0;
	}
	11% {
		width: 100%;
	}
	22% {
		width: 100%;
	}
	32% {
		top: 0;
		width: 0;
	}
	33% {
		top: -4.5rem;
	}
	34% {
		width: 0;
	}
	44% {
		width: 100%;
	}
	55% {
		width: 100%;
	}
	65% {
		top: -4.5rem;
		width: 0;
	}
	66%{
		top: -9rem;
	}
	67% {
		width: 0;
	}
	77% {
		width: 100%;
	}
	99% {
		top: -9rem;
		width: 0;
	}
	100% {
		top: 0;
		width: 0;
	}
`;
const messageslideMo = keyframes`
	0% {
		top: 0;
		width: 0;
	}
	1% {
		width: 0;
	}
	11% {
		width: 100%;
	}
	22% {
		width: 100%;
	}
	32% {
		top: 0;
		width: 0;
	}
	33% {
		top: -3.5rem;
	}
	34% {
		width: 0;
	}
	44% {
		width: 100%;
	}
	55% {
		width: 100%;
	}
	65% {
		top: -3.5rem;
		width: 0;
	}
	66%{
		top: -7rem;
	}
	67% {
		width: 0;
	}
	77% {
		width: 100%;
	}
	89% {
		width: 100%;
	}
	99% {
		top: -7rem;
		width: 0;
	}
	100% {
		top: 0;
		width: 0;
	}
`;
const StyledHome = styled.main`
	display: flex;
	height: 100vh;
	max-width: 1600px;
	margin: auto;
	.left {
		flex: 0 0 35%;
		position: relative;
		max-width: 600px;
		background-color: #000030;
		&::after {
			content: "";
			display: inline-block;
			position: fixed;
			top: 0;
			left: calc(50% - 1440px);
			z-index: -1;
			width: 50%;
			max-width: 1000px;
			height: 100%;
			background-color: ${(props) => props.theme.mainColor};
		}
		.color-block {
			position: absolute;
			top: -60%;
			left: -30vw;
			z-index: 0;
			width: 50vw;
			height: 200%;
			transform: rotate(20deg);
			background-color: ${(props) => props.theme.mainColor};
		}
	}
	.right {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		padding: 0 10% 0 7%;
		.tit-wrap {
			margin-bottom: 60px;
			h2 {
				font-size: 22px;
			}
			h1 {
				margin-bottom: 20px;
				font-size: 45px;
				font-weight: bold;
				white-space: nowrap;
				overflow: hidden;
				position: relative;
				.message {
					display: block;
					overflow: hidden;
					position: absolute;
					top: 0;
					left: 80px;
					animation: ${messageslide} 8s ease-in-out infinite;
					strong {
						display: block;
						color: ${(props) => props.theme.mainColor};
					}
				}
			}
			p {
				font-size: 16px;
				line-height: 1.6;
				padding: 0 15% 0 0;
				max-width: 670px;
				word-break: keep-all;
			}
		}
		section {
			margin-bottom: 40px;
			h2 {
				margin-bottom: 20px;
				font-size: 26px;
				font-weight: 600;
			}
			ul {
				display: flex;
				flex-wrap: wrap;
				li {
					width: 50%;
					padding-bottom: 10px;
					font-size: 16px;
					font-weight: 500;
					color: ${(props) => props.theme.mainColor};
					span {
						font-weight: 400;
						opacity: 0.8;
						color: #fff;
					}
				}
			}
		}
		.more-btn {
			padding: 0px 40px;
			border-radius: 26px;
			background-color: ${(props) => props.theme.mainColor};
			font-size: 15px;
			font-weight: 500;
			color: #fff;
			line-height: 46px;
			letter-spacing: 0.5px;
		}
	}
	@media ${(props) => props.theme.laptop} {
		.left {
			.color-block {
				top: -60%;
				left: -25vw;
				width: 40vw;
				height: 200%;
				transform: rotate(-9deg);
			}
		}
		.right {
			padding-right: 5%;
			.tit-wrap {
				margin-bottom: 40px;
				h1 {
					margin-bottom: 10px;
					letter-spacing: -0.5px;
				}
			}
			section {
				h2 {
					margin-bottom: 10px;
				}
				ul {
					li {
						width: 100%;
					}
				}
			}
		}
	}
	@media ${(props) => props.theme.mobile} {
		flex-wrap: wrap;
		.left {
			flex: none;
			width: 100%;
			overflow: hidden;
			.color-block {
				left: -40vw;
				width: 80vw;
				min-width: 250px;
				transform: rotate(-12deg);
			}
		}
		.right {
			width: 100%;
			flex: none;
			margin: 5vh 0;
			padding-bottom: 5vh;
			.tit-wrap {
				h1 {
					font-size: 35px;
					.message {
						left: 60px;
						animation: ${messageslideMo} 8s ease-in-out infinite;
					}
				}
				h2 {
					font-size: 20px;
				}
				p {
					padding-right: 5%;
				}
			}
		}
	}
`;

export default AboutTxtWrap;
