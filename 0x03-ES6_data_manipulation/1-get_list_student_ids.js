export default function getListStudentIds(students) {
  // check arg is an array before using map
  if (Array.isArray(students)) {
    return students.map((results) => results.id);
  }
  return [];
}
