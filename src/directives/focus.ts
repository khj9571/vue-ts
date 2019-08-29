import { DirectiveOptions } from 'vue'

const directive: DirectiveOptions = {
    inserted(el, node) {
        el.focus();
    }
};

export default directive;