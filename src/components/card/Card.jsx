import {
	StyledCard,
	StyledHeader,
	StyledImage,
	StyledName,
	StyledStudies,
	StyledTitle,
	StyleSubtitle
} from './styles';

const Card = ({
	icon,
	name,
	title,
	subtitle,
	color,
	gridColumn,
	gridRow,
	bgColor
}) => {
	return (
		<StyledCard
			bgColor={bgColor}
			color={color}
			gridRow={gridRow}
			gridColumn={gridColumn}
		>
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
