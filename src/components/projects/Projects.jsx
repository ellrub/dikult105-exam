import './projects.css'

function Projects() {

  return (
    <>
        <main>
            <h3 id="projects">Projects</h3>
            <section class="main__project-container">
                <article class="main__project-frame">
                    <h4>The Whitespace Saga</h4>
                    <img src="src/assets/whitespace.png" alt="The whitespace saga cover" />
                    <a>Unfortunately, this has been discontined</a>
                    <a href="#">No Github page</a>
                </article>
                <article class="main__project-frame">
                    <h4>CSS Insanity</h4>
                    <img src="src/assets/insanity.png" alt="CSS Insanity cover" />
                    <a href="https://insanity-mu.vercel.app/">Click here to have your eyes burned, and your sanity removed from this world</a>
                    <a href="https://github.com/ellrub/insanity">CSS Insanity on Github</a>
                </article>
            </section>
        </main>
    </>
  )
}

export default Projects