const student = [
    { id: 21, name: 'Rohim' },
    { id: 22, name: 'Maana' },
    { id: 23, name: 'Karim' },
    { id: 24, name: 'Nahi' }
];

const output = [];
for (let i = 0; i < student.length; i++) {
    const element = student[i];
    const result = element.name;
    output.push(result);
}
console.log(output);

const name = student.map(s => s.name);
const ids = student.map(s => s.id);
const ids1 = student.filter(s => s.id > 22);
const idsone = student.find(s => s.id > 22);
console.log(name);
console.log(ids);
console.log(ids1);
console.log(idsone);