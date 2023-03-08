import styled from 'styled-components';

const StylesContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	@media screen and (min-width: 768px) {
		display: grid;
	}
`;
export { StylesContainer };
