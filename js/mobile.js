function getThousand(num) {
    if (!num) {
        return '0.00';
    } else {
        var num = num.toString().split('.'),
            str = '';
        var temp = num[0].toString().split('').reverse();
        for (var i = 0, len = temp.length; i < len; i++) {
            if ((i + 1) % 3 == 0 && i != (len - 1)) {
                str = str + temp[i] + ',';
            } else {
                str += temp[i];
            }
        }
        return str.split('').reverse().join('') + (num[i] ? '.' + num[i] : '.00');
    }
}

$('.js-money').text(getThousand(89765.96));