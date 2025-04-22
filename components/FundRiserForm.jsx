import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createProject } from '../redux/interactions';
import { parseAmount } from '../helper/helper';

const FundRiserForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    targetAmount: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { title, description, targetAmount } = formData;
    
    if (!title || !description || !targetAmount) {
      alert('Please fill in all fields');
      return;
    }

    try {
      const parsedAmount = parseAmount(targetAmount);
      const success = await createProject(dispatch, title, description, targetAmount);
      if (success) {
        setFormData({
          title: '',
          description: '',
          targetAmount: '',
        });
      }
    } catch (error) {
      alert('Invalid amount format. Please enter a valid number.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="card space-y-4">
      <h2 className="text-2xl font-bold mb-4">Create New Project</h2>
      
      <div>
        <label className="block text-gray-700 mb-2">Project Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="input-field"
          placeholder="Enter project title"
        />
      </div>

      <div>
        <label className="block text-gray-700 mb-2">Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="input-field h-32"
          placeholder="Enter project description"
        />
      </div>

      <div>
        <label className="block text-gray-700 mb-2">Target Amount (ETH)</label>
        <input
          type="number"
          name="targetAmount"
          value={formData.targetAmount}
          onChange={handleChange}
          className="input-field"
          placeholder="Enter target amount in ETH"
          step="0.01"
          min="0"
        />
      </div>

      <button type="submit" className="btn-primary w-full">
        Create Project
      </button>
    </form>
  );
};

export default FundRiserForm; 