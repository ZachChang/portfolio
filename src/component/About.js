import React from 'react';
import '../App.css';
import Headshot from '../dist/images/headshot.png';
import { Popup, List } from 'semantic-ui-react'
import { Link as Rlink} from 'react-router-dom';

class About extends React.Component {

	render () {
		return (
			<div className="about">
				{/* nav */}
				<div className="ui large secondary pointing menu" id="page-zero-menu">
					<div className="left item">
						<Rlink to={process.env.PUBLIC_URL + "/"}>
							<div className="item" id="page-zero-menu-content">Zach</div>
						</Rlink>
					</div>
				</div>
				<div className="about-content">
					<div className="ui middle stackable grid">
						<div className="row">
							<div className="five wide column">
								<img className="ui medium image" alt="my smile photo" src={Headshot} />
							</div>
							<div className="about-intro eleven wide right floated column ui grid container">
								<h1>Hi, I’m Zach Chang, a Digital Product Developer.</h1>
								<h3>I am a UI/UX designer and front-end developer with 3-year experience in the digital product development industry.</h3>
								<h3>During my graduate studies, I devoted to research the Persuasive Technology used in digital product development. In summer 2017, I received a sponsorship by Taiwan Innovation and Entrepreneurship Center, of which allowed me to visit to Silicon Valley to learn the new design trends in digital products and participate in many Startup events.</h3>
								<h3>With my previous experiences, I am familiar with researching with my UX expertise, then design the user interface, interaction, and business model based on the research. I am also familiar with using CSS Pre-processors such as SCSS to develop rich styling websites, and use ReactJS to implement basic functions. Since information technology industry is rapidly changing, I am highly adaptable and passionate about learning new knowledges and skills. As a Digital Product Developer, I enjoy applying programing, design and research to embrace any professional challenges.</h3>
								<h3>If you are looking for a digital product developer, feel free to
									<Popup trigger={<span className="contact"> contact me.</span>} flowing hoverable>
											<i className="far fa-envelope"></i> zachdesign01@gmail.com
									</Popup>
								</h3>
							</div>
						</div>
					</div>
					<div className="ability ui middle stackable grid">
						<div className="row">
							<div className="eight wide column">
								<h2>SKILLS</h2>
								<h3>User interface, User experience, Information architecture, Rapid prototyping, Responsive web, Data visualization, and building beauty and valuable websites</h3>
							</div>
							<div className="eight wide column">
								<h2>TOOLS</h2>
								<h3 className="tools-title">Front-end</h3>
								<h3>HTML, CSS(Sass/SCSS), Javascript (React), Git</h3>
								<h3 className="tools-title">Design</h3>
								<h3>Sketch, Axure, Invision, Figma, Adobe illustrator</h3>
							</div>
						</div>
					</div>
					<div className="experience">
						<div className="row">
							<div className="ex-title wide column">
								<h2>EXPERIENCE</h2>
							</div>
						</div>
						<div className="ex-content ui middle stackable grid">
							<div className="row">
								<div className="three wide column" id="year">
								<h3>07/2017 - 07/2018</h3>
								</div>
								<div className="thirteen wide column">
									<h3 className="title">Alternative Military Service of Culture - Taiwan Ministry of Culture</h3>
								</div>
							</div>
						</div>
						<div className="ex-content ui middle stackable grid">
							<div className="row">
								<div className="three wide column" id="year">
								<h3>10/2016 - 07/2018</h3>
								</div>
								<div className="thirteen wide column">
									<h3 className="title">Product Developer - Yellgar</h3>
									<h3 className="detail">Honors:</h3>
									<List bulleted>
									    <List.Item><h3 className="detail">N3XT Con 2017 pitch competition top 10 finalists, Los Angeles, CA</h3></List.Item>
									    <List.Item><h3 className="detail">2017 Silicon Valley Long Stay Program sponsored by Taiwan innovation and 	entrepreneurship centerand</h3></List.Item>
									</List>
								</div>
							</div>
						</div>
						<div className="ex-content ui middle stackable grid">
							<div className="row">
								<div className="three wide column" id="year">
								<h3>09/2014 - 02/2017</h3>
								</div>
								<div className="thirteen wide column">
									<h3 className="title">Master of Engineering (MEng), Industrial Design - National Cheng Kung University</h3>
									<h3 className="detail">Honors:</h3>
									<List bulleted>
									    <List.Item><h3 className="detail">Honorable Mention Award in People Track - 2016 International Conference 	on Taiwan Computer-Human Interaction, oral presentation, Taipei, Taiwan</h3></List.Item>
									    <List.Item><h3 className="detail">Finalist Award - 2015 Future City Workshop, helding by MIT Media Lab and 	Institute for Information Industry, Taipei, Taiwan</h3></List.Item>
									</List>
								</div>
							</div>
						</div>
						<div className="ex-content ui middle stackable grid">
							<div className="row">
								<div className="three wide column" id="year">
								<h3>09/2010 - 07/2014</h3>
								</div>
								<div className="thirteen wide column">
									<h3 className="title">Bachelor of Engineering (BE), Electrical Engineering - National Dong Hwa University</h3>
									<h3 className="detail">Honors:</h3>
									<List bulleted>
									    <List.Item><h3 className="detail">Second Place Award - 2014 Society of Internet of Things: Prototyping Award, Taipei, Taiwan</h3></List.Item>
									    <List.Item><h3 className="detail">Honorable Mention Award - 2013 The Freescale Cup: Intelligent Car Racing, Hualien, Taiwan</h3></List.Item>
									</List>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default About;
