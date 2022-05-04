import { useState } from 'react';

const App = () => {
  const [formValues, setFormValues] = useState([{ name: '', email: '' }]);

  let handleChange = (i, e) => {
    let newFormValues = [...formValues];
    newFormValues[i][e.target.name] = e.target.value;
    setFormValues(newFormValues);
  };

  let addFormFields = () => {
    setFormValues([...formValues, { name: '', email: '' }]);
  };

  let removeFormFields = i => {
    let newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues);
  };

  let handleSubmit = event => {
    event.preventDefault();
    alert(JSON.stringify(formValues));
  };

  console.log(formValues);

  return (
    <form onSubmit={handleSubmit}>
      {formValues.map((element, index) => (
        <div key={index}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={element.name || ''}
            onChange={e => handleChange(index, e)}
          />
          <label>Email</label>
          <input
            type="text"
            name="email"
            value={element.email || ''}
            onChange={e => handleChange(index, e)}
          />
          {index ? (
            <button type="button" onClick={() => removeFormFields(index)}>
              Remove
            </button>
          ) : null}
        </div>
      ))}
      <div>
        <button type="button" onClick={() => addFormFields()}>
          Add
        </button>
        <button className="button submit" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default App;
