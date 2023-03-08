import { cardsInfo } from '../../constants/cards-info';
import Card from '../card/Card';
import { StylesContainer } from './styles';

const CardContainer = () => {
	return (
		<StylesContainer>
			{cardsInfo.map(card => {
				return <Card key={card.id} {...card}></Card>;
			})}
		</StylesContainer>
	);
};

export default CardContainer;
