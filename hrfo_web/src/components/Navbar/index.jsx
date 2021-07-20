import React from 'react'

export default function Navbar() {
    return (
        <header class="s-header">
        <div class="header-logo">
            <a class="site-logo" href="index.html">
            <img src="images/logo.png" alt="Homepage" />
            </a>
        </div>

        <nav class="header-nav">
            <a href="#0" class="header-nav__close" title="close"
            ><span>Close</span></a
            >

            <div class="header-nav__content">
            <h3>MENU</h3>

            <ul class="header-nav__list">
                <li class="current">
                <a class="smoothscroll" href="#home" title="home">Trang chủ</a>
                </li>
                <li>
                <a class="smoothscroll" href="#about" title="about"
                    >Về chúng tôi</a>
                </li>
                <li>
                <a class="smoothscroll" href="#services" title="services"
                    >JDs & Offers</a>
                </li>
                <li>
                <a class="smoothscroll" href="#works" title="works"
                    >Dự án & Công trình</a>
                </li>
                <li>
                <a class="smoothscroll" href="#contact" title="contact"
                    >Liên hệ</a>
                </li>
            </ul>
            </div>
        </nav>

        <a class="header-menu-toggle" href="#0">
            <span class="header-menu-text">Menu</span>
            <span class="header-menu-icon"></span>
        </a>
        </header>
    )
}
