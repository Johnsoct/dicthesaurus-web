import './index.css'

const randomOptionWithinOptions = (options) => {
        const index = Math.floor(Math.random() * options.length)
        return options[index]
}


const headings = {
        main: [
                {
                        heading: "don't skip it; look it up",
                        subheading: "a lightweight, dead simple dictionary CLI",
                },

                {
                        heading: "don't skip it; look it up",
                        subheading: "a dictionary CLI for power users",
                },
                {
                        heading: "better comprehension; better you",
                        subheading: "a dictionary at your fingertips",
                },
                {
                        heading: "dicthesaurus",
                        subheading: "a dictionary and thesaurus CLI for power users",
                }
        ],

        secondary: [
                {
                        heading: "it's the easiest CLI you'll ever use",
                        subheading: ""
                }
        ]
}
const mainHeadings = randomOptionWithinOptions(headings.main)
const mainHeadingEl = document.querySelector('#MainHeader__heading')
const mainSubheadingEl = document.querySelector('#MainHeader__subheading')
const secondaryHeadings = randomOptionWithinOptions(headings.secondary)
const secondaryHeadingEl = document.querySelector('#SecondaryHeader__heading')
const secondarySubheadingEl = document.querySelector('#SecondaryHeader__subheading')

if (mainHeadingEl) {
        mainHeadingEl.textContent = mainHeadings.heading
}

if (mainSubheadingEl) {
        mainSubheadingEl.textContent = mainHeadings.subheading
}

if (secondaryHeadingEl) {
        secondaryHeadingEl.textContent = secondaryHeadings.heading
}

if (secondarySubheadingEl && secondaryHeadings.subheading) {
        secondarySubheadingEl = secondaryHeadings.subheading
}
