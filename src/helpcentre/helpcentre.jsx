import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './helpcentre.css';

function HelpCentre() {
    useEffect(() => {
        const handleScroll = (event) => {
            event.preventDefault();
            const targetId = event.currentTarget.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        };

        const links = document.querySelectorAll('a[href^="#"]');
        links.forEach(link => link.addEventListener('click', handleScroll));

        return () => {
            links.forEach(link => link.removeEventListener('click', handleScroll));
        };
    }, []);

    const toggleVisibility = () => {
        const tocList = document.querySelector('.toc-list');
        tocList.classList.toggle('hidden');
    };

    return (
        <div className="help-docs">
            <header className="header">

                <div className="logo-nav-child">
                    <Link to="/home">Customer</Link>&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to="/bookings">Bookings</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to="/payment">FAQ Payment</Link>&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to="/faq">FAQ Bookings</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to="/helpcentre">Helpcentre</Link>&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to="/customersupport">Customer Support</Link>
                </div>
            </header>
            <main>

                <h1>HelpCentre</h1>

                <section id="getting-started">
                    <h2>How to create a Troubleshooting Guide for your business</h2>
                    <p>Category: Knowledge Base Software</p>
                    <p>Last updated on Feb 26, 2024</p>
                    <p>No matter how great your business is, there will come a time when something goes wrong – it’s inevitable. A well-written troubleshooting guide can help minimize the stress and pressure on your employees by providing them with the tools to handle common issues efficiently.</p>
                    <p>This section provides initial setup instructions and an overview of how to begin using our services effectively.</p>
                </section>

                <section id="step-by-step">
                    <h2 className="toc-header" onClick={toggleVisibility}>Table of Contents</h2>
                    <ul className="toc-list hidden">
                        <div><a href="#troubleshooting">What is Troubleshooting?</a></div>
                        <div><a href="#approach">Common approaches to troubleshooting</a></div>
                        <div><a href="#approaches">Types of approaches to troubleshooting problems</a></div>
                        <div><a href="#methodology">Troubleshooting Methodologies</a></div>
                        <div><a href="#examples">Troubleshooting Examples</a></div>
                        <div><a href="#create-template">How to create a troubleshooting guide template</a></div>
                    </ul>
                </section>

                <section id="troubleshooting">
                    <h2>What is Troubleshooting?</h2>
                    <p>Troubleshooting is a form of problem-solving, often applied to the repair of failed processes or products on a machine or system. It involves self-diagnosis and proactive solutions to solve issues quickly and efficiently.</p>
                    <p>Let's look at some common troubleshooting approaches:</p>
                    <ul>
                        <div>The top-down approach: Start with a broad overview and narrow down to specific problems.</div>
                    </ul>
                    <p>Effective solutions and troubleshooting steps for common issues encountered by users:</p>
                </section>

                <section id="approach">
                    <h2>Let's take a look at some common approaches to troubleshooting problems.</h2>
                    <p>Types of approaches to troubleshooting problems</p>
                    <h3>The top-down approach</h3>
                    <p>The top-down approach as the name implies begins by identifying the highest level and working your way down to the specific problem. This approach works best for complex systems because it allows the troubleshooter to start with a broad overview of the system (basically to get familiarized with the system) and gradually narrow down the problem.</p>
                </section>

                <section id="faq">
                    <h2>Why is a Troubleshooting Guide Important?</h2>
                    <p>Before I go into why having a troubleshooting guide (manual) is important to your business, let me go into detail about what a troubleshooting guide is (you probably missed the short definition I gave)</p>
                    <p>A troubleshooting manual is a type of IT documentation that lists common problems a user might encounter while using a product and offers solutions to these problems. In a nutshell, it gathers information on every issue within a system and seeks to identify the symptoms and next steps.</p>
                    <p>Troubleshooting guides are undoubtedly very useful if your business provides software products or services. However, their use isn't restricted to the users alone, your employees will also benefit greatly from having a troubleshooting guide.</p>
                    <p>Let’s look at some of the reasons why troubleshooting guides are important for both customer service and internal teams.</p>
                </section>

                <section id="methodology">
                    <h2>The Top-Down Approach</h2>
                    <p>'The top-down approach' begins by identifying the highest level and working your way down to the specific problem. This approach is best for complex systems because it allows the troubleshooter to start with a broad overview of the system and gradually narrow down the problem.</p>
                    <svg width="300px" height="400px">
                        <defs>
                            <marker id="arrowhead" markerWidth="10" markerHeight="7"
                                refX="0" refY="3.5" orient="auto">
                                <polygon points="0 0, 10 3.5, 0 7" fill="#333" />
                            </marker>
                        </defs>

                        <rect x="75" y="30" width="190" height="50" stroke="black" fill="#f8f8f8" />
                        <text x="100" y="60" fontFamily="Arial" fontSize="14px">Level 1: Overview</text>

                        <rect x="75" y="110" width="190" height="50" stroke="black" fill="#f0f0f0" />
                        <text x="90" y="150" fontFamily="Arial" fontSize="14px">Level 2: Major Components</text>

                        <rect x="75" y="190" width="190" height="50" stroke="black" fill="#e8e8e8" />
                        <text x="95" y="220" fontFamily="Arial" fontSize="14px">Level 3: Subsystems</text>

                        <rect x="75" y="270" width="190" height="50" stroke="black" fill="#e0e0e0" />
                        <text x="95" y="300" fontFamily="Arial" fontSize="14px">Level 4: Specific Issues</text>

                        <line x1="150" y1="80" x2="150" y2="110" stroke="#333" strokeWidth="2" markerEnd="url(#arrowhead)" />
                        <line x1="150" y1="160" x2="150" y2="190" stroke="#333" strokeWidth="2" markerEnd="url(#arrowhead)" />
                        <line x1="150" y1="240" x2="150" y2="270" stroke="#333" strokeWidth="2" markerEnd="url(#arrowhead)" />
                    </svg>
                </section>

                <section id="create-template">
                    <h3>How to Create a Troubleshooting Guide</h3>
                    <p>This section will guide you through the steps necessary to create an effective troubleshooting guide for your business.</p>

                    <h4>Introduction</h4>
                    <p>Welcome to our troubleshooting guide. This document is designed to help you quickly solve common issues you might encounter with our products. We recommend reading through each step carefully and following the instructions provided.</p>

                    <h4>Detailed Steps to Create Your Guide</h4>
                    <p>Creating a troubleshooting guide involves several key steps:</p>
                    <ul>
                        <div><strong>Identify Common Issues:</strong> Start by compiling a list of frequent problems users or customers face with your products or services.</div>
                        <div><strong>Describe the Symptoms:</strong> For each issue, describe the symptoms in detail. This will help users to identify the problem they are experiencing.</div>
                        <div><strong>Provide Clear Solutions:</strong> Outline step-by-step solutions to each issue. Ensure these are easy to understand and implement, even for users with limited technical knowledge.</div>
                        <div><strong>Use Helpful Imagery:</strong> Include screenshots, diagrams, or videos where possible to visually guide the user through the solution process.</div>
                        <div><strong>Test the Guide:</strong> Before publishing, test the guide to ensure that the instructions are clear and that the solutions work as expected.</div>
                    </ul>

                    <h4>Tips for Effective Troubleshooting</h4>
                    <p>To ensure your troubleshooting guide is as effective as possible, consider the following tips:</p>
                    <ul>
                        <div><strong>Be Concise:</strong> Use clear and concise language to avoid confusion.</div>
                        <div><strong>Stay Organized:</strong> Organize the content logically, perhaps categorizing issues by complexity or by product component.</div>
                        <div><strong>Update Regularly:</strong> Keep the guide updated with new solutions and feedback from users to maintain its effectiveness.</div>
                    </ul>

                    <h4>Common Pitfalls to Avoid</h4>
                    <p>When creating a troubleshooting guide, watch out for these common pitfalls:</p>
                    <ul>
                        <div><strong>Overcomplicating Solutions:</strong> Avoid using overly technical language or complex solutions that might frustrate users.</div>
                        <div><strong>Neglecting Feedback:</strong> Failing to incorporate user feedback can make your guide less useful. Always be open to making improvements based on user experiences.</div>
                        <div><strong>Lack of Testing:</strong> Not testing the guide can lead to errors and ineffective solutions. Ensure thorough testing before release.</div>
                    </ul>

                    {/* <a href="path/to/your-documentation.pdf" download>Download Troubleshooting Guide Template</a>
                    <iframe src="path/to/your-documentation.pdf" width="100%" height="500px"></iframe> */}
                    <h4>Using This Guide Effectively</h4>
                    <p>To make the most out of this troubleshooting guide, we suggest the following:</p>
                    <ul>
                        <div>Identify your issue from the list provided in the index section.</div>
                        <div>Follow the steps in order as they are laid out for each issue.</div>
                        <div>Utilize any supplementary resources or tools mentioned in the guide.</div>
                    </ul>

                    <h4>Need Further Assistance?</h4>
                    <p>If your issue is not resolved after following this guide, please don't hesitate to contact our support team. You can reach us at:</p>
                    <p>Email: support@yourcompany.com</p>
                    <p>Phone: 123-456-7890</p>

                    <h4>Feedback</h4>
                    <p>Your feedback is important to us. If you have suggestions on how to improve this guide, please let us know via our feedback form:</p>
                    <Link to="/feedback" target="_blank">Submit Feedback</Link>
                </section>
            </main>
        </div>
    );
}

export default HelpCentre;
