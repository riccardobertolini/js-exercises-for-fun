/*
Given an array a that contains only numbers in the range from 1 to a.length, find the first duplicate number 
for which the second occurrence has the minimal index. In other words, if there are more than 1 duplicated numbers, 
return the number for which the second occurrence has a smaller index than the second occurrence of the other number does. 
If there are no such elements, return -1.

*/
const removeDuplicates = (array) => array.reduce((prev, current) => prev
    .includes(current) ? prev : [...prev, current], []);

const findDuplicates = (array) => array.filter(item => array.filter(subitem =>
    subitem === item).length > 1);

const getIndexesDistance = (array, searchItems) => searchItems.map(search => {
    const getIndexes = array.map((item, index) => {
        if (item === search) return index;
    }).filter(item => item);

    const getDistance = getIndexes.reduce((prev, curr) => curr - prev,
        0);

    return Math.abs(getDistance);
});

const getMinimum = values => values.reduce((a, b) => Math.min(a, b));

function solution(a) {
    const duplicates = findDuplicates(a);
    const uniqueDuplicates = removeDuplicates(duplicates);

    if (uniqueDuplicates.length === 0) return -1;
    const indexesDistances = getIndexesDistance(a, uniqueDuplicates);
    const minorDistance = getMinimum(indexesDistances);
    const indexMinorDistance = indexesDistances.indexOf(minorDistance);

    return uniqueDuplicates[indexMinorDistance];
}
