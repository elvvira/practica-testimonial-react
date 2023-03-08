import styled from 'styled-components';

const StyledCard = styled.div`
	width: 90%;
	border-radius: 1rem;
	background-color: ${({ bgColor }) => bgColor};
	padding: 2rem;
	margin-right: auto;
	margin-left: auto;
	color: ${({ color }) => color};
	@media screen and (min-width: 768px) {
		grid-column: ${({ gridColumn }) => gridColumn};
	}
`;

const StyledHeader = styled.div`
	display: flex;
	gap: 1rem;
	align-items: center;
`;

const StyledImage = styled.img`
	border-radius: 3rem;
	width: 40px;
	height: 40px;
	border: 1px solid white;
`;
const StyledName = styled.h2`
	font-size: 1rem;
	margin-bottom: 0;
	font-weight: 400;
`;
const StyledStudies = styled.p`
	font-size: 0.8rem;
	margin-top: 0;
	font-weight: 300;
	color: #cfcfcf;
`;
const StyledTitle = styled.p`
	font-size: 1.3rem;
	color: ${({ color }) => color};
`;
const StyleSubtitle = styled.p`
	font-size: 0.8rem;
	color: #cfcfcf;
`;
export {
	StyledCard,
	StyledImage,
	StyledHeader,
	StyledName,
	StyledStudies,
	StyledTitle,
	StyleSubtitle
};
