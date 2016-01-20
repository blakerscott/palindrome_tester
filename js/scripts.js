var palindrome = function(str) {

    // could be refactor as such:
    // return str.split('').reverse().join('');

    var strArray = str.split('');
    var reversedArray = strArray.reverse();
    var reversedStr = reversedArray.join('');

    return reversedStr === str;



}
