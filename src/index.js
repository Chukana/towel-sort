// You should implement your task here.

module.exports = function towelSort(matrix) {
    let array1 = [];
    if (!matrix) return array1;
    if (matrix.length === 0) return array1;
    for (let i = 0; i < matrix.length; i++) {
        if (i % 2 !== 0) {
            matrix[i].reverse();
        }
        array1 = array1.concat(matrix[i]);
    }
    return array1;
};
