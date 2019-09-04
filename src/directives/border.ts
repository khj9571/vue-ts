import { DirectiveOptions } from 'vue'

const directive: DirectiveOptions = {
    inserted(el, node) {
        el.style.border = 'solid 1px black';
    }
};

export default directive;