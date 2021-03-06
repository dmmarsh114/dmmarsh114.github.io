import React from 'react';

import './About.css';
import './Skills.css';

import { Col, Row, Container } from 'reactstrap';

import reactIcon from '../../Assets/Skill Icons/icons8-react-50.png';
import tsIcon from '../../Assets/Skill Icons/icons8-typescript-50-3.png';
import cSharpIcon from '../../Assets/Skill Icons/icons8-c-sharp-logo-50.png';
import nodeIcon from '../../Assets/Skill Icons/icons8-node-js-50.png';
import sqlIcon from '../../Assets/Skill Icons/icons8-database-50.png';


const About = () => {

    const skills = [
        { name: 'React', icon: reactIcon },
        { name: 'TypeScript', icon: tsIcon },
        { name: 'C#', icon: cSharpIcon },
        { name: 'Node.js', icon: nodeIcon },
        { name: 'SQL', icon: sqlIcon }
    ];

    const mapSkills = () => {
        return skills.map((skill, index) => {
            return (
                <li key={index}>
                    <img className='skillIcon' src={skill.icon} />
                    <p className='skillName'>{skill.name} </p>
                </li>
            );
        });
    }

    return (
        <div id='aboutSection' className='aboutTotal'>
            <div className='about'>
                <h1 className='sectionHeader'>Introduction</h1>
                <hr className='sectionHr' />
                <Container>
                    <Row>
                        <Col>
                            <div className='aboutText'>
                                <p>Hello, I’m Daniel Marsh!</p>
                                <p>I am a full-stack developer who has been training nearly full-time since January. I have completed a Web Development course at <a href='https://elevenfifty.org/about/' target='blank' className='aboutLink'>the Eleven Fifty Academy</a>, as well as Salesforce’s Pathfinder program. I am currently taking a Software Development course at Eleven Fifty.</p>
                            </div>
                        </Col>
                        <Col>
                            <div className='skills'>
                                <ul>
                                    {mapSkills()}
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default About;