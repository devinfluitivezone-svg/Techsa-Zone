import React, { Component } from 'react';
import Link from 'next/link';

class TabsContent extends Component {

    openTabSection = (evt, tabNmae) => {
        let i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabs_item");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }

        tablinks = document.getElementsByTagName("li");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace("current", "");
        }

        document.getElementById(tabNmae).style.display = "block";
        evt.currentTarget.className += "current";
    }

    render() {
        return (
            <section className="tab-section">
                <div className="container">
                    <div className="section-title">
                        <span>What We Do</span>
                        <h3>Build. Market. Scale Your Digital Products</h3>
                    </div>

                    <div className="tab boosting-list-tab">
                        {/* Tabs Nav */}
                        <ul className="tabs">
                            <li
                                className="current"
                                onClick={(e) => this.openTabSection(e, 'tab1')}
                            >
                                <i className="flaticon-analysis-2"></i>
                                <span>Web Development</span>
                            </li>
                            <li onClick={(e) => this.openTabSection(e, 'tab2')} className="bg-eff7e9">
                                <i className="flaticon-hand"></i>
                                <span>Mobile App Development</span>
                            </li>
                            <li onClick={(e) => this.openTabSection(e, 'tab3')} className="bg-fff8f0">
                                <i className="flaticon-digital-marketing"></i>
                                <span>Digital Marketing</span>
                            </li>
                            <li onClick={(e) => this.openTabSection(e, 'tab4')} className="bg-ecfaf7">
                                <i className="flaticon-email"></i>
                                <span>Graphic Design & Branding</span>
                            </li>
                            <li onClick={(e) => this.openTabSection(e, 'tab5')} className="bg-f2f0fb">
                                <i className="flaticon-network"></i>
                                <span>UI/UX Design</span>
                            </li>
                            <li onClick={(e) => this.openTabSection(e, 'tab6')} className="bg-c5ebf9">
                                <i className="flaticon-analysis-1"></i>
                                <span>Software Testing & QA</span>
                            </li>
                        </ul>

                        <div className="tab_content">
                            {/* Tabs Item 01 */}
                            <div id="tab1" className="tabs_item">
                                <div className="row align-items-center">
                                    <div className="col-lg-5">
                                        <div className="tab-image">
                                            <img src="/images/tab/1.jpg" alt="image" />
                                        </div>
                                    </div>

                                    <div className="col-lg-7">
                                        <div className="content">
                                            <h2>Web Development</h2>
                                            <p>We engineer fast, secure, SEO‑ready websites and web apps. From corporate sites to e‑commerce, our builds use modern stacks, accessibility best practices, and conversion‑focused UX to turn visitors into customers.</p>
                                        </div>

                                        <div className="row">
                                            <div className="col-lg-6 col-md-6">
                                                <div className="tab-text-content">
                                                    <i className="flaticon-analysis-2"></i>
                                                    <p>Modern tech stacks, clean architecture, and scalable infrastructure for long‑term reliability.</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="tab-text-content">
                                                    <i className="flaticon-analysis-2"></i>
                                                    <p>Performance, security, and SEO optimizations baked in from day one.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="tab-btn">
                                            <Link href="/single-service" className="default-btn-one">
                                                Discover More
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="tab-shape">
                                    <img src="/images/tab/shape.png" alt="image" />
                                </div>
                            </div>

                            {/* Tabs Item 02 */}
                            <div id="tab2" className="tabs_item">
                                <div className="row align-items-center">
                                    <div className="col-lg-5">
                                        <div className="tab-image">
                                            <img src="/images/tab/2.jpg" alt="image" />
                                        </div>
                                    </div>

                                    <div className="col-lg-7">
                                        <div className="content">
                                            <h2>Mobile App Development</h2>
                                            <p>We craft native and cross‑platform apps for iOS and Android with a UX‑first approach and seamless API integrations. We handle publishing, analytics, and continuous improvements for stable growth.</p>
                                        </div>

                                        <div className="row">
                                            <div className="col-lg-6 col-md-6">
                                                <div className="tab-text-content">
                                                    <i className="flaticon-analysis-2"></i>
                                                    <p>Robust architecture, offline support, and analytics for real‑world reliability.</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="tab-text-content">
                                                    <i className="flaticon-analysis-2"></i>
                                                    <p>App store compliance, monitoring, and iterative updates that delight users.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="tab-btn">
                                            <Link href="/single-service" className="default-btn-one">
                                                Discover More
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="tab-shape">
                                    <div className="tab-shape">
                                        <img src="/images/tab/shape.png" alt="image" />
                                    </div>
                                </div>
                            </div>
                        
                            {/* Tabs Item 03 */}
                            <div id="tab3" className="tabs_item">
                                <div className="row align-items-center">
                                    <div className="col-lg-5">
                                        <div className="tab-image">
                                            <img src="/images/tab/3.jpg" alt="image" />
                                        </div>
                                    </div>

                                    <div className="col-lg-7">
                                        <div className="content">
                                            <h2>Digital Marketing</h2>
                                            <p>Full‑funnel growth across SEO, PPC, social, content, and email. We plan, execute, and optimize campaigns that increase qualified traffic, leads, and revenue—with transparent reporting.</p>
                                        </div>

                                        <div className="row">
                                            <div className="col-lg-6 col-md-6">
                                                <div className="tab-text-content">
                                                    <i className="flaticon-analysis-2"></i>
                                                    <p>Data‑driven strategy and keyword research that compound organic growth.</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="tab-text-content">
                                                    <i className="flaticon-analysis-2"></i>
                                                    <p>Performance tracking and CRO to turn clicks into customers.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="tab-btn">
                                            <Link href="/single-service" className="default-btn-one">
                                                Discover More
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="tab-shape">
                                    <img src="/images/tab/shape.png" alt="image" />
                                </div>
                            </div>

                            {/* Tabs Item 04 */}
                            <div id="tab4" className="tabs_item">
                                <div className="row align-items-center">
                                    <div className="col-lg-5">
                                        <div className="tab-image">
                                            <img src="/images/tab/4.jpg" alt="image" />
                                        </div>
                                    </div>

                                    <div className="col-lg-7">
                                        <div className="content">
                                            <h2>Graphic Design & Branding</h2>
                                            <p>We design memorable brand identities and marketing assets. From logos and style guides to campaign creatives, we build cohesive systems that elevate recognition and trust across web, social, and print.</p>
                                        </div>

                                        <div className="row">
                                            <div className="col-lg-6 col-md-6">
                                                <div className="tab-text-content">
                                                    <i className="flaticon-analysis-2"></i>
                                                    <p>Brand strategy, logo systems, and visual guidelines for consistency at scale.</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="tab-text-content">
                                                    <i className="flaticon-analysis-2"></i>
                                                    <p>High‑impact ads, social assets, and print collateral that drive action.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="tab-btn">
                                            <Link href="/single-service" className="default-btn-one">
                                                Discover More
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="tab-shape">
                                    <img src="/images/tab/shape.png" alt="image" />
                                </div>
                            </div>
                        
                            {/* Tabs Item 05 */}
                            <div id="tab5" className="tabs_item">
                                <div className="row align-items-center">
                                    <div className="col-lg-5">
                                        <div className="tab-image">
                                            <img src="/images/tab/5.jpg" alt="image" />
                                        </div>
                                    </div>

                                    <div className="col-lg-7">
                                        <div className="content">
                                            <h2>UI/UX Design</h2>
                                            <p>Research‑driven UX with wireframes, prototypes, and usability testing. We craft intuitive interfaces that reduce friction and increase engagement across web and mobile.</p>
                                        </div>

                                        <div className="row">
                                            <div className="col-lg-6 col-md-6">
                                                <div className="tab-text-content">
                                                    <i className="flaticon-analysis-2"></i>
                                                    <p>User research and flows that align product value with user needs.</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="tab-text-content">
                                                    <i className="flaticon-analysis-2"></i>
                                                    <p>Interactive prototypes and tests to validate before engineering.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="tab-btn">
                                            <Link href="/single-service" className="default-btn-one">
                                                Discover More
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="tab-shape">
                                    <img src="/images/tab/shape.png" alt="image" />
                                </div>
                            </div>

                            {/* Tabs Item 06 */}
                            <div id="tab6" className="tabs_item">
                                <div className="row align-items-center">
                                    <div className="col-lg-5">
                                        <div className="tab-image">
                                            <img src="/images/tab/6.jpg" alt="image" />
                                        </div>
                                    </div>

                                    <div className="col-lg-7">
                                        <div className="content">
                                            <h2>Software Testing & QA</h2>
                                            <p>End‑to‑end quality assurance: manual and automated testing, regression and performance suites, and cross‑browser/device coverage integrated into CI for reliable releases.</p>
                                        </div>

                                        <div className="row">
                                            <div className="col-lg-6 col-md-6">
                                                <div className="tab-text-content">
                                                    <i className="flaticon-analysis-2"></i>
                                                    <p>Automation and regression testing that safeguard core user flows.</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="tab-text-content">
                                                    <i className="flaticon-analysis-2"></i>
                                                    <p>Performance, accessibility, and device labs to ensure stability at scale.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="tab-btn">
                                            <Link href="/single-service" className="default-btn-one">
                                                Discover More
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="tab-shape">
                                    <img src="/images/tab/shape.png" alt="image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default TabsContent;