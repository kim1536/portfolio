import React from "react";
import data from "../../assets/data/historydata";
import styled from "styled-components";
import Heading from "../atoms/Heading";

function HistoryWrap() {

	const historyList = data.historyList.map((list, idx) => (
		<li key={idx}>
			<div className="icon">
				{(data.historyList.length -1) === idx ? <i className="fa-solid fa-person-military-rifle"></i>: <i className="fas fa-graduation-cap"></i>}
				
			</div>
			<span className="time">{list.period}</span>
			<Heading level="4">
				{list.school}
				{list.department === undefined ? "" : <span className="place">{list.department}</span>}
			</Heading>
			{list.schoolKR === undefined ? "" : <Heading level="4">
				{list.schoolKR}
				{list.departmentKR === undefined ? "" : <span className="place">{list.departmentKR}</span>}
			</Heading>}
		</li>
	));

	return (
		<StyledExpWrap>
			<ul>{historyList}</ul>
		</StyledExpWrap>
	);
}

const StyledExpWrap = styled.div`
	display: flex;
    justify-content: center;
	> ul {
		> li {
			position: relative;
			padding: 0 20px 0 60px;
			margin: 0 0 50px;
			&::after {
				content: "";
				position: absolute;
				top: 0;
				left: 20px;
				bottom: 0;
				border-left: 1px solid #333;
			}
			.icon {
				position: absolute;
				left: 0;
				right: 0;
				z-index: 1;
				width: 40px;
				height: 40px;
				border-radius: 50%;
				text-align: center;
				line-height: 40px;
				background-color: ${(props) => props.theme.mainColor};
			}
			.time {
				display: inline-block;
				padding: 1px 10px;
				margin-bottom: 12px;
				border-radius: 20px;
				background-color: #252525;
				font-size: 12px;
				font-weight: 600;
				letter-spacing: 0.6px;
				opacity: 0.8;
			}
			> h4 {
				margin: 7px 0 10px;
				font-size: 18px;
				font-weight: 500;
				opacity: 0.8;
				span {
					position: relative;
					padding-left: 26px;
					font-size: 15px;
					font-weight: 600;
					opacity: 0.6;
					&::before {
						position: absolute;
						content: "";
						width: 10px;
						height: 2px;
						background-color: #fff;
						left: 7px;
						top: 9px;
						opacity: 0.8;
					}
				}
			}
			> p {
				font-size: 14px;
			}
		}
	}
	

	@media ${(props) => props.theme.laptop} {
		width: 85%;
		margin: auto;
		> div {
		}
	}
	@media ${(props) => props.theme.mobile} {
		flex-wrap: wrap;
		width: 90%;

		> div {
			width: 100%;
			> ul {
				> li {
					padding: 0 50px 0 50px;
				}
			}
		}
	}
`;

export default HistoryWrap;
