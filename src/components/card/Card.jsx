import {
	StyledCard,
	StyledHeader,
	StyledImage,
	StyledName,
	StyledStudies,
	StyledTitle,
	StyleSubtitle
} from './styles';

const Card = ({ icon, name, title, subtitle, color, subColor, bgColor }) => {
	return (
		<StyledCard bgColor={bgColor} color={color}>
			<StyledHeader>
				<StyledImage src={icon} alt='' />

				<div>
					<StyledName>{name}</StyledName>
					<StyledStudies>Verified Graduate</StyledStudies>
				</div>
			</StyledHeader>
			<div>
				<StyledTitle color={color}>{title}</StyledTitle>
				<StyleSubtitle>{subtitle}</StyleSubtitle>
			</div>
		</StyledCard>
	);
};

export default Card;
