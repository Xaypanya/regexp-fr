const dataSet1 = [
    { name: 'chopper', age: 3, height: 34, weight: 8 },
    { name: 'harrodharry', age: 5, height: 45, weight: 20 },
    { name: 'pilot', age: 9, height: 82, weight: 18 },
    { name: 'elmo', age: 1, height: 15, weight: 10 },
    { name: 'magnum', age: 10, height: 87, weight: 9 },
    { name: 'babebabe', age: 3, height: 45, weight: 10 },
    { name: 'toby', age: 4, height: 23, weight: 3 }
];

const maxDuplicateCount = dataSet1.reduce((maxCount, individual) => {
    const duplicateCount = [...individual.name].reduce((count, char, index, array) => (
        count + array.slice(index + 1).filter(c => c === char).length
    ), 0);
    return Math.max(maxCount, duplicateCount);
}, 0);

const individualsWithMostDuplicates = dataSet1.filter(individual => {
    const duplicateCount = [...individual.name].reduce((count, char, index, array) => (
        count + array.slice(index + 1).filter(c => c === char).length
    ), 0);
    return duplicateCount === maxDuplicateCount;
});

console.log(`Individuals with the most duplicate characters in their name:`);
console.log(individualsWithMostDuplicates);

let dataSet2 =  [
    { txID: 1, name: 'chopper', workHrs: 8, date: '2020-01-01' },
    { txID: 2, name: 'harrodharry', workHrs: 7, date: '2020-01-01' },
    { txID: 3, name: 'pilot', workHrs: 5, date: '2020-01-03' },
    { txID: 4, name: 'chopper', workHrs: 9, date: '2020-01-04' },
    { txID: 5, name: 'harrodharry', workHrs: 2, date: '2020-01-05' },
    { txID: 6, name: 'pilot', workHrs: 4, date: '2020-01-05' },
    { txID: 7, name: 'elmo', workHrs: 8, date: '2020-01-05' },
    { txID: 8, name: 'pilot', workHrs: 1, date: '2020-01-05' },
    { txID: 9, name: 'pilot', workHrs: 9, date: '2020-01-09' },
    { txID: 10, name: 'elmo', workHrs: 5, date: '2020-01-10' },
    { txID: 11, name: 'magnum', workHrs: 3, date: '2020-01-10' },
    { txID: 12, name: 'babebabe', workHrs: 6, date: '2020-01-12' },
    { txID: 13, name: 'toby', workHrs: 8, date: '2020-01-13' },
    { txID: 14, name: 'babebabe', workHrs: 9, date: '2020-01-13' },
    { txID: 15, name: 'babebabe', workHrs: 1, date: '2020-01-13' },
];