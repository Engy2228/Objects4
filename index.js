
const student = {
  fullName: 'Максим',
  experienceInMonths: 12,
  stack: ['HTML', 'CSS', 'JavaScript', 'React'],
}
console.log(student)
// console.log('jobName' in student)

function giveJobToStudent(student, jobName) {

  student.job = jobName; 

  alert(`Поздравляем! У студента ${student.fullName}а появилась новая работа! Теперь он ${jobName}`);

  // Возвращаем обновленный объект student
  return student;
}

// Тест функции

const updatedStudent = giveJobToStudent(student, 'веб-разработчик');

console.log(updatedStudent); 