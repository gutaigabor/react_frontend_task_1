import { HStack } from "@chakra-ui/react";
import Star from "../Star";

interface StarRatingProps {
    rating: number,
    count?: number,
    size?: number,
    uniqueId?: string
}

export const StarRating = (props: StarRatingProps) => {
  /* ----- Initialize ----- */
  const { rating, count, size, uniqueId } = props;

  /* ----- Functions ----- */
  const fillStar = (index: number): string => {
    const fraction = rating - Math.floor(rating);
    const full = Math.floor(rating);
    const fillPercent = fraction * 200;

    if (index < full) {
      return '200%';
    }

    if (index > full || fillPercent === 0) {
      return '0.1%';
    }

    return `${Math.round(fillPercent)}%`;
  }

  /* ----- Render ----- */
  return (
    <HStack spacing={"2px"}>
      {[...Array(count || 5)].map((_star, index) => {
        return (
          <Star key={index} fill={fillStar(index)} size={size} index={index} uniqueId={uniqueId}/>
        );
      })}
    </HStack>
  );
}
