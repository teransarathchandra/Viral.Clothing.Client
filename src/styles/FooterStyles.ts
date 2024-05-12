import styled from 'styled-components';

export const FooterContainer = styled.footer`
    background-color: #111111;
    color: #ffffff;
    padding: 3rem 7rem;
`;

export const FooterColumns = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    align-items: baseline;
    justify-items: center;
    gap: 2rem;
`;

interface FooterColumnProps {
    opacity?: number;
    fontWeight?: string | number;
}

export const FooterColumn = styled.div<FooterColumnProps>`
    flex: 1;
    width: 100%;
    text-align: left;
    opacity: ${({ opacity }) => opacity ?? 1};
    margin-bottom: .8rem;

    /* h4, h5 { 
        font-weight: ${({ fontWeight }) => fontWeight ?? 'bold'};
        margin-bottom: 1rem;
    } */

    a {
        font-weight: ${({ fontWeight }) => fontWeight ?? 'bold'};
        color: #ffffff;
        font-size: 13px;
        text-decoration: none;

    &:hover {
            opacity: 1;
        }
    }
`;

export const SocialIcons = styled.div`
    display: flex;
    align-items: center;
    justify-content: right;
    width: 100%;
`;

export const SocialIcon = styled.a`
    margin-left: 1rem;
    font-size: 1.2rem;
    color: #ffffff;

    &:hover {
        opacity: 0.8;
    }
`;

export const Copyright = styled.div`
    text-align: center;
    margin-top: 3rem;
    font-size: 0.9rem;
    opacity: 0.6;
`;