import './App.css'

type Person = {
  name: string,
  age: number
}

type Employee = Person & { employeeId: number, department: string }

function isEmployee(person: Person | Employee): boolean {
  return !!(person as Employee).employeeId;
}

function validatePerson(person: Person | Employee): string {
  if (isEmployee(person))
    return (person as Employee).department;

  if (!isEmployee(person))
    return (person as Person).age.toString();

  return '';
}

const personA: Person = {
  name: 'dasdas',
  age: 28
}

const employeeA: Employee = {
  name: 'adsasdas',
  age: 56,
  employeeId: 1,
  department: 'departamnet'
}
function App() {
  const result = validatePerson(personA);
  const result2 = validatePerson(employeeA);

  return (
    <>
      <div>
        <p>{JSON.stringify(result)}</p>
        <p>{JSON.stringify(result2)}</p>
      </div>
    </>
  )
}

export default App
