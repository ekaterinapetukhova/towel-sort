var _ = require("lodash");
// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (typeof matrix === "object") {
        for (let i = 0; i < matrix.length; i++) {
            let arr = matrix[i];

            if (matrix.indexOf(arr) % 2 !== 0) {
                arr = arr.reverse();
            }

            matrix.splice(i, 1, arr);
        }

        matrix = _.flattenDeep(matrix);
    } else {
        matrix = [];
    }
    return matrix;
};
