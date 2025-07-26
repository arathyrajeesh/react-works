// import logo from './logo.svg';
import './App.css';

const person = [
  { name: "Arathy", age: 19, job: "Software Engineer" },
  { name: "Gopika", age: 21, job: "Graphic Designer" },
  { name: "Aparna", age: 22, job: "Project Manager" },
  { name: "Krishnapriya", age: 34, job: "Software Developer" },
];
function App() {
  return (      
  <div>
      <h1>Person details</h1>
      <div className="container">
        {person.map((item) => (
          <div className="person-card">
            <h3>{item.name}</h3>
            <p><strong>Age:</strong> {item.age}</p>
            <p><strong>Job:</strong> {item.job}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default App;
