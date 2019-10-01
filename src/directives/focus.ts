import { DirectiveOptions } from 'vue'



/*
 * 마지막 글자를 * 처리한다. (ex. 홍길동 → 홍길*)
 */
function maskingName(strName: any) {
    if (strName === undefined || strName === '') {
        return '';
    }
    var pattern = /.$/; // 정규식
    return strName.replace(pattern, "*");
}

/*
 * 뒤에서 부터 3글자를 * 처리한다. (ex. 12가3456 → 12가3***)
 */
// function maskingCar(strCar:any) {
//     if (strCar == undefined || strCar === '') {
//         return '';
//     }
//     var pattern = /.{3}$/; // 정규식
//     return strCar.replace(pattern, "***");
// }

function maskingCar(strCar: any) {
    if (strCar == undefined || strCar === '') {
        return '';
    }

    return strCar.replace(/[0-9]/gi, '*')
}

const directive: DirectiveOptions = {
    inserted(el, binding, vnode) {

        console.log('포커스')
        console.log(el)
        console.log(binding);
        console.log(vnode);

        var element = $(el).find('input[type = text]');

        // propertychange change keyup paste input
        $(element).on("keyup", function (evt) {

            var value: any = $(this).val();
            if (value.length > 7) {
                var sp = value.split('-')
                sp[1] = maskingCar(sp[1]);

                $(this).val(sp.join('-'));
            }

        });
    }
};

export default directive;