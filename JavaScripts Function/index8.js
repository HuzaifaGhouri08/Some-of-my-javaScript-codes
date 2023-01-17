let employees = [
"Bilal",
"Zahra",
"Ali",
"Sufyan",
"Waqas",
"Salman",
"Ayesha",
];

function fn(workers) {
return employees[(Math.random() * employees.length) | 0];
}
document.write(fn());
