class Ticker extends HTMLElement {

    constructor() {
        super();
        const root = this.attachShadow({ mode: 'closed' });

        setInterval(() => {
            const date = new Date();
            const formattedDate = new Intl.DateTimeFormat('pl-PL', { dateStyle: 'full', timeStyle: 'long' }).format(date);

            root.textContent = formattedDate;

            const event = new CustomEvent('tick', {detail: formattedDate})
            this.dispatchEvent(event);
        }, 1000);
    }

}

window.customElements.define('custom-ticker', Ticker)