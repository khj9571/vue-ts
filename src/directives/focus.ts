import { DirectiveOptions } from 'vue'

const directive: DirectiveOptions = {
    inserted(el, node) {

        console.log(el)

        el.focus();
    }
};

export default directive;