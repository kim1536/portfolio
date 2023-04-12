import React from "react";
import styled, { keyframes } from "styled-components";
import Heading from "../atoms/Heading";

function HomeTxtWrap() {
	return (
		<StyledHome>
			<div className="left">
				<div className="color-block"></div>
			</div>
			<div className="right">
				<div className="tit-wrap">
					<Heading>
						HI! I'M
						<span className="message">
							<strong>KWONIL KIM</strong>
							<strong>WEB DEVELOPER</strong>
						</span>
					</Heading>
					<Heading level="2">2년차 웹개발자 입니다.</Heading>
					<p>
						안녕하세요. 고등학교까지 일본에서 생활 해 온 김권일입니다.
						<br />
						항상 새로운 기술에 흥미를 갖고, 빠르게 습득하고, 자기성찰을 게을리하지 않으며, 끊임없이 발전하는 개발자가 되기 위해서 열심히 노력하고 있습니다.
					</p>
					<br />
					<p>
						初めまして。高校まで日本で暮らしていました。 キムコンイルです。
						<br />
						常に新しい技術に興味を持ち、いち早く習得し、自己研磨を怠らず、絶えず発展する開発者になるために一生懸命努力しています。
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
							<span>Address : </span>서울시 동작구
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
	12% {
		width: 0;
	}
	30% {
		width: 100%;
	}
	36% {
		width: 100%;
	}
	50% {
		top: 0;
		width: 0;
	}
	60% {
		top: -4.5rem;
	}
	61% {
		width: 0;
	}
	75% {
		width: 100%;
	}
	99% {
		top: -4.5rem;
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
	12% {
		width: 0;
	}
	24% {
		width: 100%;
	}
	36% {
		width: 100%;
	}
	50% {
		top: 0;
		width: 0;
	}
	65% {
		top: -3.5rem;
	}
	66% {
		width: 0;
	}
	75% {
		width: 100%;
	}
	99% {
		top: -3.5rem;
		width: 0;
	}
	100% {
		top: 0;
		width: 0;
	}
`;
const StyledHome = styled.main`
	display: flex;
	max-width: 1600px;
	margin: auto;
	.left {
		flex: 0 0 25%;
		max-width: 600px;
		background-color: #000030;
		.color-block {
			position: absolute;
			top: -55%;
			left: -30vw;
			z-index: 0;
			width: 50vw;
			height: 160%;
			transform: rotate(35deg);
			background-color: ${(props) => props.theme.mainColor};
		}
	}
	.right {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		z-index: 1;
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
					left: 150px;
					animation: ${messageslide} 8s ease-in-out infinite;
					strong {
						text-shadow:
								-1px -1px 0 #000030, 
								1px -1px 0 #000030, 
								-1px 1px 0 #000030, 
								1px 1px 0 #000030;
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
				font-weight: 600;
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
				top: -65%;
				left: -45vw;
				width: 60vw;
				height: 190%;
				transform: rotate(35deg);
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
				top: -80%;
				left: -50%;
				width: 70vw;
				transform: rotate(25deg);
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
						left: 110px;
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

export default HomeTxtWrap;
