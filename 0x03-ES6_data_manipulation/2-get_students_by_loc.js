export default function getStudentsByLocation(students, city) {
  // check arg is an array before using filter
  if (Object.getPrototypeOf(students) === Array.prototype) {
    return students.filter((results) => results.location === city);
  }
  return [];
}
