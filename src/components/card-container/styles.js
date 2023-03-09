import styled from 'styled-components';

const StylesContainer = styled.div`
	width: 90%;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	@media screen and (min-width: 768px) {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		grid-template-rows: repeat(2, 350px);
		gap: 1rem;
		margin-right: auto;
		margin-left: auto;
	}
`;
export { StylesContainer };
