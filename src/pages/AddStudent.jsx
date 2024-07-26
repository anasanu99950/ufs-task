import React from 'react';
import { useNavigate } from 'react-router-dom';

const StudentInformation = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/Student'); // Replace '/students' with the actual path to your student page
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Student Information</h2>
      
      <div className="mb-6">
        <ul className="flex border-b">
          <li className="mr-1">
            <a className="bg-white inline-block py-2 px-4 text-gray-700 hover:text-blue-800 font-semibold" href="#">Profile</a>
          </li>
          <li className="mr-1">
            <a className="bg-white inline-block py-2 px-4 text-gray-700 hover:text-blue-800 font-semibold" href="#">Qualification</a>
          </li>
          <li className="mr-1">
            <a className="bg-white inline-block py-2 px-4 text-gray-700 hover:text-blue-800 font-semibold" href="#">Language</a>
          </li>
          <li className="mr-1">
            <a className="bg-white inline-block py-2 px-4 text-gray-700 hover:text-blue-800 font-semibold" href="#">Application</a>
          </li>
          <li className="mr-1">
            <a className="bg-white inline-block py-2 px-4 text-gray-700 hover:text-blue-800 font-semibold" href="#">Fees Receipt</a>
          </li>
          {/* Add other tabs here */}
        </ul>
      </div>

      <form>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Student Name</label>
            <input type="text" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Mobile No</label>
            <input type="tel" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Counsellor Note</label>
          <input type="text" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-4">Additional Information</h3>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
              <input type="date" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Course</label>
              <select className="mt-1 block w-full border-gray-300 rounded-md shadow-sm">
                <option value="">Select Course</option>
                <option value="International Business">International Business</option>
                <option value="Computer Science">Computer Science</option>
                <option value="Graphic Design">Graphic Design</option>
                {/* Add more courses here */}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Country</label>
              <select className="mt-1 block w-full border-gray-300 rounded-md shadow-sm">
                <option value="">Select Country</option>
                <option value="Canada">Canada</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
                {/* Add more countries here */}
              </select>
            </div>
            {/* Add more fields here */}
          </div>
        </div>

        <div className="mt-6 gap-2 flex justify-end">
          <button type="button" onClick={handleBack} className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-900 hover:bg-blue-700">
            Back
          </button>
          <button type="submit" className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-blue-700">
            Delete
          </button>
          <button type="submit" className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default StudentInformation;
