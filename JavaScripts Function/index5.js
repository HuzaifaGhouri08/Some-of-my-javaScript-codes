let subjects = ['Physics', 'Computer', 'Islamiat', 'English', 'Math'];
subjects.sort(function (mix) {
return 0.5 - Math.random();
});
document.write(subjects);
