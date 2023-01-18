"IN-BUILD FUNCTION"
let subjects = ['Physics', 'Computer', 'Islamiat', 'English', 'Math'];
subjects.sort(function (mix) {
return 0.5 - Math.random();
});
document.write(subjects);

"OUTSIDE"
let subjects = ['Physics', 'Computer', 'Islamiat', 'English', 'Math'];
function rand(mix) {
return 0.5 - Math.random();
}
subjects.sort(rand);
document.write(subjects);
