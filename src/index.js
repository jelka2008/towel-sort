// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!matrix) return [];
    let i = -1;
    return matrix.reduce((rezArray, itemArray) => {
        i++;
        return rezArray.concat(i % 2 !== 1 ? itemArray : itemArray.reverse());
    }, []);
};
