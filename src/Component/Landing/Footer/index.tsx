// components
import Text from "../../Shared/Text";
import { Divider } from '@mui/material';
// style
import './Footer.scss'
// constants
import { FooterConstants } from "../../../Constants/constants";

export const Footer = () => {
    return (
        <div className="footer">
            <div className="divider">
                <Divider variant="middle" />
            </div>
            <Text variant="h2">{FooterConstants.title}</Text>
            <footer className="footer-container">
                <div className="footer-left">
                    <a href="#">{FooterConstants.footer.link1}</a>
                    <span className="separator">•</span>
                    <a href="#">{FooterConstants.footer.link2}</a>
                    <span className="separator">•</span>
                    <a href="#">{FooterConstants.footer.link3}</a>
                </div>
                <div className="footer-right">
                    &copy;{FooterConstants.copyright}
                </div>
            </footer>
        </div>
    );
}