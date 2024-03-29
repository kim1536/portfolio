import React from "react";
import data from "../../assets/data/skilldata";
import styled from "styled-components";

function LanguageSkillsWrap() {
	const skillsList = data.languageList.map((list, idx) => (
		<div className="skill-list" key={idx}>
			<div className="skill-label">
				<img src={`${process.env.PUBLIC_URL}/images/logo/${list.img}.svg`} alt=''/> : {list.label}
				</div>
			<ul className="skill-detail">
				<li>{list.level}</li>
			</ul>
		</div>
	));
	return (
		<StyledSkillsWrap>
			{skillsList}
		</StyledSkillsWrap>
		);
}

const StyledSkillsWrap = styled.div`
	display: flex;
	flex-wrap: wrap;
	.skill-list {
		width: calc(33% - 30px);
		margin: 0 15px 30px;
		padding: 20px 30px 20px 30px;
		border: 1px solid #252525;
		border-radius: 5px;
		cursor: default;
		.skill-label {
			display: flex;
			align-items: center;
			font-size: 20px;
			margin-bottom: 10px;
			i {
				width: 55px;
				height: 55px;
				vertical-align: text-top;
				padding-right: 10px;
			}
		}
		.skill-detail {
			li {
				position: relative;
				padding: 0 0 0 20px;
				font-size: 16px;
				color: rgb(255 255 255 / 80%);
				&::before {
					content: "";
					position: absolute;
					left: 0;
					top: 11px;
					width: 10px;
					height: 1px;
					background: ${(props) => props.theme.mainColor};
				}
			}
		}
	}
	@media ${(props) => props.theme.laptop} {
		width: 85%;
		margin: auto;
		.skill-list {
			width: calc(50% - 30px);
		}
	}
	@media ${(props) => props.theme.mobile} {
		width: 90%;
		.skill-list {
			width: calc(100% - 30px);
		}
	}
	.skill-list {
		position: relative;
		&::before,
		&::after {
			content: "";
			box-sizing: inherit;
			position: absolute;
			width: 100%;
			height: 100%;
			border: 1px solid transparent;
			width: 0;
			height: 0;
			border-radius: 5px;
		}
		&::before {
			top: 0;
			left: 0;
		}
		&::after {
			bottom: 0;
			right: 0;
		}
		&:hover {
			&::before,
			&::after {
				width: 100%;
				height: 100%;
			}
			&::before {
				border-top-color: ${(props) => props.theme.mainColor};
				border-right-color: ${(props) => props.theme.mainColor};
				transition: width 0.15s ease-out, height 0.15s ease-out 0.15s;
			}
			&::after {
				border-bottom-color: ${(props) => props.theme.mainColor};
				border-left-color: ${(props) => props.theme.mainColor};
				transition: border-color 0s ease-out 0.3s, width 0.15s ease-out 0.3s, height 0.15s ease-out 0.45s;
			}
		}
	}
`;

export default LanguageSkillsWrap;
