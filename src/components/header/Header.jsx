import { useState } from 'react'
import './header.css'
import './floatingDots.css'
import TheWhiteSpaceSaga from './preview_projects/TheWhiteSpaceSaga';

function Header() {
    const [activeSelection, serActiveSelection] = useState(0);

    const handleCarouselClick = (index) => {
        serActiveSelection(index);
    };

    const getStyle = (index) => {
        if (activeSelection === index) {
            return {
                display: 'flex',
                animation: 'slideInFromRight 0.8s ease-out'
            };
        }
        return { display: 'none' };
    };

  return (
    <>
        <header id="home">
            <h3>Project Showcase</h3>
            <div className="header__project-container">
                <section className="header__section-home" style={getStyle(0)}>
                    <p>Select a project from below for a preview</p>
                    <p>Projects are also listed further down</p>
                </section>
                <section className="header__project-whitespace" style={getStyle(1)}>
                    <TheWhiteSpaceSaga />
                </section>

                <section className="header__project-snapshot" style={getStyle(2)}>
                    <p>Snapshot Journey</p>
                </section>

                <section className="header__project-insanity" style={getStyle(3)}>
                    <p>CSS Insanity</p>
                </section>
            </div>
            <section className="header__project-carousel">
                <button onClick={() => handleCarouselClick(1)}>The Whitespace Saga</button>
                <button onClick={() => handleCarouselClick(2)}>Snapshot Journey</button>
                <button onClick={() => handleCarouselClick(3)}>CSS Insanity</button>
            </section>
        </header>
    </>
  )
}

export default Header