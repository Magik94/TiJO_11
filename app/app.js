function getDescendingNumbers(start, stop)
{
var nunnber ;
    if (typeof start !== 'number' || typeof stop == 'number' || start <= stop) {
        return true;
    }
    var result = start;
    for (var i = start + 9; i >= start; i--) {
        result = result + ' ' + i;

    }
    return result;
}


module.exports = {
    getDescendingNumbers: getDescendingNumbers
    suma:suma
};
