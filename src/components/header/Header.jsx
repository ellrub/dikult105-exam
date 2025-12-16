import { useState } from 'react'
import './header.css'
import './floatingDots.css'

const buttons = document.querySelectorAll('.header__project-nav button');
const sections = {
    0: document.querySelector('.header__section-home'),
    1: document.querySelector('.header__project-whitespace'),
    2: document.querySelector('.header__project-snapshot'),
    3: document.querySelector('.header__project-insanity')
}

let currentSelection = 0;

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        sections[currentSelection].style.display = 'none';
        const targetIndex = index + 1;
        sections[targetIndex].style.display = 'flex';
        sections[targetIndex].style.animation = 'slideInFromRight 0.8s ease-out';

        currentSelection = targetIndex;
    });
});

function Header() {

  return (
    <>
        <header id="home">
            <h3>Project Showcase</h3>
            <div className="header__project-container">
                <section className="header__section-home">
                    <p>Select a project from below for a preview</p>
                    <p>Projects are also listed further down</p>
                </section>
                <section className="header__project-whitespace">
                    <p>The Whitespace Saga</p>
                    <div className="floating-dot"></div>
                    <div className="floating-dot"></div>
                    <div className="floating-dot"></div>
                    <div className="floating-dot"></div>
                    <div className="floating-dot"></div>
                    <div className="floating-dot"></div>
                    <div className="floating-dot"></div>
                    <div className="floating-dot"></div>
                    <div className="floating-dot"></div>
                    <div className="floating-dot"></div>
                    <div className="floating-dot"></div>
                    <div className="floating-dot"></div>
                    <div className="floating-dot"></div>
                    <div className="floating-dot"></div>
                    <div className="floating-dot"></div>
                    <div className="floating-dot"></div>
                    <div className="floating-dot"></div>
                    <div className="floating-dot"></div>
                </section>

                <section className="header__project-snapshot">
                    <p>Snapshot Journey</p>
                </section>

                <section className="header__project-insanity">
                    <p>CSS Insanity</p>
                </section>
            </div>
            <section className="header__project-nav">
                <button>The Whitespace Saga</button>
                <button>Snapshot Journey</button>
                <button>CSS Insanity</button>
            </section>
        </header>
    </>
  )
}

export default Header