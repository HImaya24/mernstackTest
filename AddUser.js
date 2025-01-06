import React,{useState} from 'react'
import'./AddUser.css'

function AddUser() {
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        email: '',
        age: ''
      });
      // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted: ", formData);

    // Here you can call an API or perform other operations
    // Example: fetch('/api/users', { method: 'POST', body: formData })
    
    // Clear form fields after submission (optional)
    setFormData({
      name: '',
      address: '',
      email: '',
      age: ''
    });

    alert('User added successfully!');
  };
  return (
    <div>
      <h2>Add User</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>
        
        <button type="submit">Add User</button>
      </form>
    </div>
  )
}

export default AddUser
