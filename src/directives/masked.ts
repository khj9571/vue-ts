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

function maskingCar(strCar: any) {
    if (strCar == undefined || strCar === '') {
        return '';
    }

    return strCar.replace(/[0-9|\*]/gi, '*')
}

const directive: DirectiveOptions = {
    inserted(el, binding, vnode) {


       console.log('masked Directive')
       console.log('');

    //    var element = $(el).find('input[type = text]');

    //    $(element).on("keydown",function(evt) {

    //     //  var reg1 = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi;
    //     //  var reg2 =/[a-zA-Z]/gi;
         
    //     //  // console.log(reg1.test(evt.key))
    //     // //   console.log(reg2.test(evt.key))
    //     //   console.log(evt.key)
           
    //     //   if(evt.key == 'Process' || reg1.test(evt.key) || reg2.test(evt.key)) {
    //     //     evt.preventDefault();
    //     //   }
  
    //    });


    //    $(element).on("keyup", function (evt) {
      
    //         // var value: any = $(this).val();
    //         // var regexp = /[^0-9 | *]/g
    //         // var value = value.replace(regexp,'');
    //         // var marskedValue: any = maskingCar(value)
              
    //         // $(this).val(marskedValue);

    //        // $(this).val('111111111123');
    //     });

    },

    update(el, binding, vnode:any) {
        console.log("updated");
        console.log(vnode)
        $(el).val(maskingCar('1234'))

        // setTimeout(() => {
        //     $(element).val('12345')
        // }, 100);
        // console.log(element)
     }

    
};

export default directive;