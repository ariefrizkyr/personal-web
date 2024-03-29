import JiraIcon from './tools/jira.svg';
import ConfluenceIcon from './tools/confluence.svg';
import GoogleAnalyticsIcon from './tools/google-analytics.svg';
import GoogleTagManagerIcon from './tools/google-tag-manager.svg';
import GoogleOptimizeIcon from './tools/google-optimize.svg';
import MetabaseIcon from './tools/metabase.svg';
import VisualStudioCodeIcon from './tools/visual-studio-code.svg';
import FigmaIcon from './tools/figma.svg';
import PostmanIcon from './tools/postman.svg';
import HTMLIcon from './stack/html.svg';
import CSSIcon from './stack/css.svg';
import JavascriptIcon from './stack/javascript.svg';
import AngularIcon from './stack/angular.svg';
import ReactIcon from './stack/react.svg';
import RoRIcon from './stack/ruby-on-rails.svg';
import PostgreSQLIcon from './stack/postgresql.svg';
import MagentoIcon from './stack/magento.svg';
import WordPressIcon from './stack/wordpress.svg';

function About() {
    return (
        <div className="container">
            <h1 className="font-extrabold text-4xl md:text-6xl text-gray-800 text-center">About</h1>
        
            <div className="flex justify-center mt-6">
                <article className="prose md:prose-lg">
                    <p>
                        Arief R Ramadhan is currently working as a Product Manager at Spenmo. He has been working in full product development cycle from research, ideation, development, to iteration.
                    </p>

                    <p>
                        He has huge passion for product management, user experience, and software development. He has been working both as Software Engineer and UX Designer before becoming a Product Manager.
                    </p>

                    <p>
                        In his spare time, he loves to do programming, inline skating, running, badminton (once per week, at least), traveling, and hiking (no hike in the last 2 years, tbh 🤪).
                    </p>

                    <h3 className="text-center">
                        Tools
                    </h3>
                    
                    <div className="flex justify-center md:justify-between space-x-6 flex-wrap">
                        <img src={JiraIcon} className="h-8 w-8" alt="Jira"></img>
                        <img src={ConfluenceIcon} className="h-8 w-8" alt="Confluence"></img>
                        <img src={GoogleAnalyticsIcon} className="h-8 w-8" alt="Google Analytics"></img>
                        <img src={GoogleTagManagerIcon} className="h-8 w-8" alt="Google Tag Manager"></img>
                        <img src={GoogleOptimizeIcon} className="h-8 w-8" alt="Google Optimize"></img>
                        <img src={FigmaIcon} className="h-8 w-8" alt="Figma"></img>
                        <img src={VisualStudioCodeIcon} className="h-8 w-8" alt="Visual Studio Code"></img>
                        <img src={PostmanIcon} className="h-8 w-8" alt="Postman"></img>
                        <img src={MetabaseIcon} className="h-8 w-8" alt="Metabase"></img>
                    </div>
                    
                    <h3 className="text-center">
                        Technology Stack
                    </h3>

                    <div className="flex justify-center md:justify-between space-x-6 flex-wrap">
                        <img src={HTMLIcon} className="h-8 w-8" alt="HTML"></img>
                        <img src={CSSIcon} className="h-8 w-8" alt="CSS"></img>
                        <img src={JavascriptIcon} className="h-8 w-8" alt="Javascript"></img>
                        <img src={AngularIcon} className="h-8 w-8" alt="Angular"></img>
                        <img src={ReactIcon} className="h-8 w-8" alt="React"></img>
                        <img src={RoRIcon} className="h-8 w-8" alt="Ruby on Rails"></img>
                        <img src={PostgreSQLIcon} className="h-8 w-8" alt="PostgreSQL"></img>
                        <img src={MagentoIcon} className="h-8 w-8" alt="Magento"></img>
                        <img src={WordPressIcon} className="h-8 w-8" alt="WordPress"></img>
                    </div>
                </article>
            </div>
        </div>
    );
}

export default About;