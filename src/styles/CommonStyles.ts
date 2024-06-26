import styled from "styled-components";

type ContainerProps = {
    margin?: string;
    padding?: string;
    width?: string;
};

export const Container = styled.div<ContainerProps>`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    margin: ${(props) => props.margin};
    padding: ${(props) => props.padding};
    width: ${(props) => props.width};
`;