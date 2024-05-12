import { FooterContainer, FooterColumns, FooterColumn, Copyright, SocialIcons, SocialIcon } from '@styles/FooterStyles'
import { FaFacebook, FaPinterest, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <FooterContainer>
            <FooterColumns>
                <FooterColumn>
                    <a href='/'>MENU</a>
                </FooterColumn>
                <FooterColumn>
                    <a href='/'>SUPPORT</a>
                </FooterColumn>
                <FooterColumn>
                    <a href='/'>ABOUT US</a>
                </FooterColumn>
                <FooterColumn>
                    <a href='/'>PROMOTIONS & DISCOUNTS</a>
                </FooterColumn>
                <SocialIcons>
                    <SocialIcon href="#"><FaXTwitter /></SocialIcon>
                    <SocialIcon href="#"><FaFacebook /></SocialIcon>
                    <SocialIcon href="#"><FaPinterest /></SocialIcon>
                    <SocialIcon href="#"><FaInstagram /></SocialIcon>
                </SocialIcons>
            </FooterColumns>
            <FooterColumns>
                <FooterColumn>
                    <a href='/'>HOME</a>
                </FooterColumn>
                <FooterColumn fontWeight="400" opacity={0.6}>
                    <a href='/'>Get Help</a>
                </FooterColumn>
                <FooterColumn fontWeight="400" opacity={0.6}>
                    <a href='/'>About Viral</a>
                </FooterColumn>
                <FooterColumn fontWeight="400" opacity={0.6}>
                    <a href='/'>Birthday</a>
                </FooterColumn>
            </FooterColumns>
            <FooterColumns>
                <FooterColumn>
                    <a href='/'>MEN'S</a>
                </FooterColumn>
                <FooterColumn fontWeight="400" opacity={0.6}>
                    <a href='/'>Shipping and Delivery</a>
                </FooterColumn>
                <FooterColumn fontWeight="400" opacity={0.6}>
                    <a href='/'>Careers</a>
                </FooterColumn>
            </FooterColumns>
            <FooterColumns>
                <FooterColumn>
                    <a href='/'>WOMEN'S</a>
                </FooterColumn>
                <FooterColumn fontWeight="400" opacity={0.6}>
                    <a href='/'>Order Status</a>
                </FooterColumn>
                <FooterColumn fontWeight="400" opacity={0.6}>
                    <a href='/'>Purpose</a>
                </FooterColumn>
            </FooterColumns>
            <FooterColumns>
                <FooterColumn>
                    <a href='/'>LATEST</a>
                </FooterColumn>
                <FooterColumn fontWeight="400" opacity={0.6}>
                    <a href='/'>Contact Us</a>
                </FooterColumn>
                <FooterColumn fontWeight="400" opacity={0.6}>
                    <a href='/'>News</a>
                </FooterColumn>
            </FooterColumns>
            <Copyright>
                Copyright © 2024, Viral. All Rights Reserved <br />
                Designed & Developed by <strong>Aura</strong>
            </Copyright>
        </FooterContainer>
    )
}

export default Footer
