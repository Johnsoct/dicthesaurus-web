import styles from '../styles/terminal.sass?inline'

const template = document.createElement('template')
template.className = ""
template.innerHTML = `
<style>
${styles}
</style>
<!-- INSERT HTML HERE -->
<div class="Terminal">
        <!-- Terminal top bar -->
        <div class="Terminal__menu-bar">
                <div></div>
                <div class="Terminal__menu-bar-title">
                  <label>~/dicthesaurus</label>
                </div>
                <div class="Terminal__menu-bar-icons">
                        <svg
                                class="Terminal__menu-icon mr-2"
                                viewBox="0 0 16 16"
                                xmlns="http://www.w3.org/2000/svg"
                        >
                                <path d="m 4 10.007812 h 8 v 1.988282 h -8 z m 0 0" />
                        </svg>
                        <svg
                                class="Terminal__menu-icon mr-2"
                                viewBox="0 0 16 16"
                                xmlns="http://www.w3.org/2000/svg"
                        >
                                <path d="m 3.988281 3.992188 v 8.011718 h 8.011719 v -8.011718 z m 2 2 h 4.011719 v 4.011718 h -4.011719 z m 0 0"/>
                        </svg>
                        <svg
                                class="Terminal__menu-icon"
                                viewBox="0 0 16 16"
                                xmlns="http://www.w3.org/2000/svg"
                        >
                                <path d="m 4 4 h 1 h 0.03125 c 0.253906 0.011719 0.511719 0.128906 0.6875 0.3125 l 2.28125 2.28125 l 2.3125 -2.28125 c 0.265625 -0.230469 0.445312 -0.304688 0.6875 -0.3125 h 1 v 1 c 0 0.285156 -0.035156 0.550781 -0.25 0.75 l -2.28125 2.28125 l 2.25 2.25 c 0.1875 0.1875 0.28125 0.453125 0.28125 0.71875 v 1 h -1 c -0.265625 0 -0.53125 -0.09375 -0.71875 -0.28125 l -2.28125 -2.28125 l -2.28125 2.28125 c -0.1875 0.1875 -0.453125 0.28125 -0.71875 0.28125 h -1 v -1 c 0 -0.265625 0.09375 -0.53125 0.28125 -0.71875 l 2.28125 -2.25 l -2.28125 -2.28125 c -0.210938 -0.195312 -0.304688 -0.46875 -0.28125 -0.75 z m 0 0"/>
                        </svg>
                </div>
        </div>

        <!-- Terminal body -->
        <div class="Terminal__body">
                <slot></slot>
        </div>
</div>
`

class TerminalMockup extends HTMLElement {
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

window.customElements.define('terminal-mockup', TerminalMockup)
