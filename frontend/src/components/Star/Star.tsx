import { Icon } from "@chakra-ui/react";
import { IconContext } from "react-icons";
import { RiStarFill } from "react-icons/ri";

interface StarProps {
  fill: string;
  size?: number;
  index?: number,
  uniqueId?: string
}

export const Star = (props: StarProps) => {
  /* ----- Initialize ----- */
  const { fill, size, index, uniqueId } = props;

  /* ----- Render ----- */
  return (
    <Icon w='20px' h='20px' verticalAlign="center">
      <defs>
        <linearGradient id={`myGradient${uniqueId}_${index}`} x1={fill} x2={fill === '0' ? '200%' : '0%'}>
          <stop offset="50%"  stopColor="black"/>
          <stop offset="50%" stopColor="gold" />
        </linearGradient>
      </defs>
      <IconContext.Provider value={{ attr: {fill: `url('#myGradient${uniqueId}_${index}')`}}}>
          <RiStarFill
            size={size || '100%'}
          />
      </IconContext.Provider>
    </Icon>
  );
}
