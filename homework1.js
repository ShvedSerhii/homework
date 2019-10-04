"use strict";

function max(array) {
    let result = array[0];
    for (let i = 1; i < array.length; ++i) {
        if (isNaN(+array[i])) continue;
        result = result > array[i] ? result : array[i];
    }
    return result;
}

function min(array) {
    let result = array[0];
    for (let i = 1; i < array.length; ++i) {
        if (isNaN(+array[i])) continue;
        result = result < array[i] ? result : array[i];
    }
    return result;
}

function sum(array) {
    let result = 0;
    for (let i = 0; i < array.length; ++i) {
        if (isNaN(+array[i])) continue;
        result += array[i];
    }
    return result;
}