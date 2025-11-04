import React, { Component } from 'react';
import Link from 'next/link';

class TabsContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTabIndex: 0
        };
        this.tabs = ['tab1', 'tab2', 'tab3', 'tab4', 'tab5', 'tab6'];
        this.intervalId = null;
        this.isTransitioning = false;
    }

    componentDidMount() {
        // Initialize first tab with proper styles
        const firstTab = document.getElementById('tab1');
        if (firstTab) {
            firstTab.style.opacity = "1";
            firstTab.style.transform = "translateY(0)";
        }
        
        // Start auto-cycling every 3 seconds
        this.startAutoCycle();
    }

    componentWillUnmount() {
        // Clear interval when component unmounts
        this.stopAutoCycle();
    }

    startAutoCycle = () => {
        // Clear any existing interval
        this.stopAutoCycle();
        
        // Start auto-cycle with interval
        this.intervalId = setInterval(() => {
            this.autoSwitchTab();
        }, 3000);
    }

    stopAutoCycle = () => {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
    }

    autoSwitchTab = () => {
        // Wait for any ongoing transitions to complete before switching
        if (this.isTransitioning) {
            return;
        }
        
        this.isTransitioning = true;
        const nextTabIndex = (this.state.currentTabIndex + 1) % this.tabs.length;
        const tabName = this.tabs[nextTabIndex];
        
        // Find the corresponding li element
        const tabLinks = document.querySelectorAll('.boosting-list-tab .tabs li');
        if (tabLinks[nextTabIndex]) {
            // Create a synthetic event-like object
            const syntheticEvent = {
                currentTarget: tabLinks[nextTabIndex],
                isAutoSwitch: true
            };
            this.openTabSection(syntheticEvent, tabName);
            
            // Reset transition flag after transition completes (400ms + 100ms buffer)
            setTimeout(() => {
                this.isTransitioning = false;
            }, 500);
        } else {
            this.isTransitioning = false;
        }
    }

    openTabSection = (evt, tabNmae) => {
        let i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabs_item");
        
        // Use requestAnimationFrame for smoother animations
        requestAnimationFrame(() => {
            // Fade out all tabs smoothly
            for (i = 0; i < tabcontent.length; i++) {
                tabcontent[i].style.opacity = "0";
                tabcontent[i].style.transform = "translateY(10px)";
            }

            tablinks = document.querySelectorAll('.boosting-list-tab .tabs li');
            for (i = 0; i < tablinks.length; i++) {
                tablinks[i].className = tablinks[i].className.replace("current", "").trim();
            }

            // After fade out, switch content and fade in
            setTimeout(() => {
                requestAnimationFrame(() => {
                    // Hide all tabs
                    for (i = 0; i < tabcontent.length; i++) {
                        tabcontent[i].style.display = "none";
                    }

                    // Show and fade in the target tab
                    const targetTab = document.getElementById(tabNmae);
                    if (targetTab) {
                        targetTab.style.display = "block";
                        // Trigger reflow for smooth transition
                        targetTab.offsetHeight;
                        
                        // Use requestAnimationFrame for the fade-in
                        requestAnimationFrame(() => {
                            targetTab.style.opacity = "1";
                            targetTab.style.transform = "translateY(0)";
                        });
                    }

                    // Update active tab link
                    if (evt && evt.currentTarget) {
                        evt.currentTarget.className += " current";
                    }

                    // Update current tab index
                    const tabIndex = this.tabs.indexOf(tabNmae);
                    if (tabIndex !== -1) {
                        this.setState({ currentTabIndex: tabIndex });
                    }
                });
            }, 200); // Half of transition duration for smooth fade
        });

        // Reset auto-cycle only when user manually clicks (not on auto-switch)
        if (evt && evt.currentTarget && !evt.isAutoSwitch) {
            this.stopAutoCycle();
            this.startAutoCycle();
        }
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
                                            <Link href="/portfolio" className="default-btn-one">
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
                                            <Link href="/portfolio" className="default-btn-one">
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
                                            <Link href="/portfolio" className="default-btn-one">
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
                                            <Link href="/portfolio" className="default-btn-one">
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
                                            <Link href="/portfolio" className="default-btn-one">
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
                                            <Link href="/portfolio" className="default-btn-one">
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