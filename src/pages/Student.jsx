import React, { useState } from 'react';
import { Search, ChevronDown, Plus, Filter } from 'lucide-react';
import { Link, useNavigate } from "react-router-dom";

const StudentDashboard = () => {
  const navigate = useNavigate();

  const initialStudents = [
    { id: 1, enrolled: true, followUpOn: '03/03/2024', name: 'Anoop Nair', mobile: '9898998767', remark: 'Remark', department: 'Department', status: 'Ready to Apply', assignedTo: 'Suresh Kumar' },
    { id: 2, enrolled: true, followUpOn: '03/03/2024', name: 'Anoop Nair', mobile: '9898998767', remark: 'Remark', department: 'Department', status: 'Accepted', assignedTo: 'Suresh Kumar' },
    { id: 3, enrolled: true, followUpOn: '03/03/2024', name: 'Anoop Nair', mobile: '9898998767', remark: 'Remark', department: 'Department', status: 'Accepted', assignedTo: 'Suresh Kumar' },
    { id: 4, enrolled: true, followUpOn: '03/03/2024', name: 'Anoop Nair', mobile: '9898998767', remark: 'Remark', department: 'Department', status: 'Tution fees paid', assignedTo: 'Suresh Kumar' },
    { id: 5, enrolled: true, followUpOn: '03/03/2024', name: 'Anoop Nair', mobile: '9898998767', remark: 'Remark', department: 'Department', status: 'Ready to Apply', assignedTo: 'Suresh Kumar' },
    { id: 6, enrolled: true, followUpOn: '03/03/2024', name: 'Anoop Nair', mobile: '9898998767', remark: 'Remark', department: 'Department', status: 'Accepted', assignedTo: 'Suresh Kumar' },
    { id: 7, enrolled: true, followUpOn: '03/03/2024', name: 'Anoop Nair', mobile: '9898998767', remark: 'Remark', department: 'Department', status: 'Ready to Apply', assignedTo: 'Suresh Kumar' },
    { id: 8, enrolled: true, followUpOn: '03/03/2024', name: 'Anoop Nair', mobile: '9898998767', remark: 'Remark', department: 'Department', status: 'Ready to Apply', assignedTo: 'Suresh Kumar' },
    // Other students...
  ];

  const [students, setStudents] = useState(initialStudents);

  const addStudent = (newStudent) => {
    newStudent.id = students.length + 1;
    setStudents([...students, newStudent]);
  };

  return (
    <div className="min-h-screen text-white">
      <div className="bg-gray-600 h-[300px] flex justify-between items-center mb-8 p-4 flex-col sm:flex-row">
        <div className="flex flex-col mb-4">
          <div className="flex items-center mb-4">
            <h1 className="text-2xl text-white font-bold">Empire</h1>
            <button className="ml-auto flex items-center gap-1 border rounded-md px-4 py-2 text-gray-800">
              Admin
            </button>
          </div>
          <h1 className="text-2xl font-bold text-white">Welcome back, Johnson👋</h1>
          <p className="text-gray-400">Dashboard</p>
        </div>
        <div className="flex gap-4 flex-wrap justify-center">
          <Link to="/" className="bg-gray-700 px-4 py-2 rounded text-muted text-white">Dashboard</Link>
          <button className="bg-gray-700 px-4 py-2 rounded">Student</button>
          <button className="bg-gray-800 px-4 py-2 rounded">Applications</button>
        </div>
      </div>
      <div className="bg-gray-200 rounded-lg p-6 text-gray-800 mx-4 sm:mx-8 mt-[-70px]">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">1,200 Students</h2>
          <div className="flex flex-col sm:flex-row gap-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input type="text" placeholder="Search student..." className="pl-10 pr-4 py-2 border rounded-md w-full sm:w-auto" />
            </div>
            <button className="flex items-center gap-1 border rounded-md px-4 py-2">
              Assigned to: All
              <ChevronDown size={16} />
            </button>
            <button onClick={() => navigate('/add-student')} className="flex items-center gap-1 border rounded-md px-4 py-2 text-blue-600">
              <Plus size={16} />
              Add student
            </button>
            <button className="flex items-center gap-1 bg-blue-600 text-white rounded-md px-4 py-2">
              <Filter size={16} />
              Filter
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <div className="flex bg-gray-100 border-b font-semibold">
            <div className="flex-1 py-2 px-4 text-left">#</div>
            <div className="flex-1 py-2 px-4 text-left">Enrolled</div>
            <div className="flex-1 py-2 px-4 text-left">Follow Up On</div>
            <div className="flex-1 py-2 px-4 text-left">Student</div>
            <div className="flex-1 py-2 px-4 text-left">Mobile</div>
            <div className="flex-1 py-2 px-4 text-left">Remark</div>
            <div className="flex-1 py-2 px-4 text-left">Department</div>
            <div className="flex-1 py-2 px-4 text-left">Status</div>
            <div className="flex-1 py-2 px-4 text-left">Assigned to</div>
          </div>
          {students.map((student) => (
            <div key={student.id} className="flex border-b hover:bg-gray-50">
              <div className="flex-1 py-2 px-4">{student.id}</div>
              <div className="flex-1 py-2 px-4">
                <input type="checkbox" checked={student.enrolled} readOnly className="rounded" />
              </div>
              <div className="flex-1 py-2 px-4">{student.followUpOn}</div>
              <div className="flex-1 py-2 px-4 text-blue-600">{student.name}</div>
              <div className="flex-1 py-2 px-4">{student.mobile}</div>
              <div className="flex-1 py-2 px-4">{student.remark}</div>
              <div className="flex-1 py-2 px-4">{student.department}</div>
              <div className={`flex-1 py-2 px-4 ${
                student.status === 'Ready to Apply' ? 'bg-orange-100 text-orange-800' :
                student.status === 'Accepted' ? 'bg-green-100 text-green-800' :
                student.status === 'Tution fees paid' ? 'bg-blue-100 text-blue-800' :
                'bg-gray-100 text-gray-800'
              }`}>
                {student.status}
              </div>
              <div className="flex-1 py-2 px-4">{student.assignedTo}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
