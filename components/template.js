const template = document.createElement('template')
template.className = ''
template.innerHTML = `
<style>
</style>

<!-- INSERT HTML HERE -->
`

class Component extends HTMLElement {
        constructor () {
                super()

                const shadowRoot = this.attachShadow({ mode: 'open' })

                this.render()
        }

        // Fires when an instance was inserted into the document
        connectedCallback () {}

        // Fires when an instance was removed from the document
        disconnectedCallback () {}

        // Fires when an attribute was added, removed, or updated
        attributeChangedCallback (attrName, oldVal, newVal) {}

        // Fires when an element is moved to a new document
        adoptedCallback () {}

        render () {
                this.shadowRoot.append(template.content.cloneNode(true))
        }
}

window.customElements.define('<GLOBAL-TAG-NAME>', Component)

