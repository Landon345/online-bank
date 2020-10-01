import styled, { CreateStyled } from "@emotion/styled";

type Theme = {
  colors: {
    Background: string;
    BackgroundHover: string;
    Headline: string;
    Paragraph: string;
    LightParagraph: string;
    Button: string;
    ButtonHover: string;
    ButtonText: string;
    Hr: string;
    ImageHover: string;

    CardBackground: string;
    CardHeadline: string;
    CardParagraph: string;
    CardHighlight: string;
    CardTagBackground: string;
    CardTagText: string;

    Stroke: string;
    Main: string;
    Highlight: string;
    Secondary: string;
    Tertiary: string;
  };
};

export default styled as CreateStyled<Theme>;
