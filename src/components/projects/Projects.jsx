import './projects.css'

function Projects() {

  return (
    <>
        <main>
            <h3 id="projects">Projects</h3>
            <section class="main__project-container">
                <article class="main__project-frame">
                    <h4>The Whitespace Saga</h4>
                    <img src="whitespace.png" alt="The whitespace saga cover" />
                    <a href="./pages/whitespace.html">Click here to check out the untold story about the Nolybabs</a>
                </article>
                <article class="main__project-frame">
                    <h4>Snapshot Journey</h4>
                    <img src="placeholder.png" alt="placeholder image" />
                    <a href="./pages/snapshot.html">Click her to check out DIKULT105 journey</a>
                </article>
                <article class="main__project-frame">
                    <h4>CSS Insanity</h4>
                    <img src="./images/insanity.png" alt="CSS Insanity cover" />
                    <a href="./pages/playing_around_with_css/horrible.html">Click here to have your eyes burned, and your sanity removed from this world</a>
                </article>
            </section>
        </main>
    </>
  )
}

export default Projects