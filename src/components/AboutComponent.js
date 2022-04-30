import React, {useRef, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem } from 'react-bootstrap';

function About(){
    const testRef = useRef();
    useEffect(() => {
        testRef.current.scrollIntoView({behavior: "smooth"});
    });
    return(
        <section id="aboutme">
            <div className="p-5 mb-4 rounded-3">
            <div ref={testRef} className="col-md-10 mx-auto fs-4 container-fluid py-5">
            <Breadcrumb>
                <BreadcrumbItem><Link to="/">Home</Link></BreadcrumbItem>
                <BreadcrumbItem active>Projects</BreadcrumbItem>
            </Breadcrumb>
                <h1 className="text-center display-5 fw-bold">About Ivan</h1>
                <p>I'm Ivan, and I'm a junior at Kabarak University studying Computer Science. I build successful websites that are fast, simple to use, and follow best practices.</p>
                <p>I work to create a better web: one that is fast, simple to use, beautiful, accessible to all, and free of frustration. Regardless of your specific business requirements, overcoming these challenges will increase your chances of success online.</p>
                <p>My primary experience is in back-end development, but I also enjoy design. Given that creating a modern website necessitates a combination of design, server technology, and the layer with which users interact, I believe that having experience in both design and development allows for the best user experiences.</p>

                <p>I take great pride in not only completing work to the high standard you expect, but also going the extra mile whenever possible. I enjoy learning about a company, its goals, and how I can best apply myself to ensure the success of your website.
                <p>Using continuous-integration methods and tools such as Git, I can quickly and efficiently join your team.</p>
                <h3>Philosophy</h3>
                I have faith in:

                <ul>
                <li>Prioritizing the user. Users who have a positive experience are more likely to complete the actions that lead to the achievement of your business objectives.</li>
                <li>Maintaining a thorough understanding of foundational technology and rely on tools and frameworks where they will best serve your needs, rather than treating them as the be-all and end-all.</li>
                </ul>
                After I understand your needs, I can apply my years of experience to recommend the best tools and development methods for you. Often, the most straightforward approach is the most effective. The long-term viability of web development is also important to me. We can reduce the footprint of what we produce on the web by ensuring that we work in the most efficient ways possible.</p>
                <p>The HeathIT hackathon was one of the successful hackathons I took part in this year. We were given a challenge to upgrade the entire web application, Child Protection information Management System(CPIMS) from Python 2.17 to 3.10 and Django 1.18 to Django 4.0 and generate tests. I was the team lead of Incognito, our team’s name and our team successfully delivered. I acquired unit testing skills, documentation practices in Python and advanced my git skills. <a href='https://github.com/uonafya/cpims-dcs-3.0.git' target="_blank" rel="noopener noreferrer">This is a link to the github repo</a></p>
            </div>
            </div>
        </section>
    );
}

export default About;