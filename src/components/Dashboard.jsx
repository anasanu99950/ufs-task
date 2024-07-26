// import React from "react";
// import { Link } from "react-router-dom";

// const Dashboard = () => {
//   return (
//     <div className="bg-gray-200 text-foreground p-4 sm:p-[0px]">
//       <div className="bg-gray-600 p-5">
//         <header className="flex flex-col sm:flex-row justify-between items-start mb-6">
//           <div className="flex flex-col mb-4 sm:mb-0">
//             <div className="flex items-center mb-4">
//               <div className="w-8  bg-gray-300 mr-2">
              
//               </div>
//               <h1 className="text-2xl text-white font-bold">Empire</h1>
//             </div>
//             <h1 className="text-2xl font-bold text-white">Welcome back, Johnson👋</h1>
//           <p className="text-gray-400">Dashboard</p>
//           </div>
//           <div className="flex flex-col items-start sm:items-end">
//             <div className="flex items-center mb-4 space-x-2">
//               <ion-icon name="notifications-outline" className="w-6 h-6 text-gray-300"></ion-icon>
//               <button className="ml-auto mr-[-1500px] flex items-center gap-1 border rounded-md px-4 py-2 text-gray-800">
//             Admin
//         </button>
//             </div>
//             <div className="flex gap-4">
//           <button className="bg-gray-700 px-4 py-2 rounded"> <ul> <li>
//                   <Link to="/" className="text-muted text-white">
//                     Dashboard
//                   </Link>
//                 </li></ul></button>
//                 <button className="bg-gray-800 px-4 py-2 rounded"> <ul> <li>
//                   <Link to="Student" className="text-muted text-white">
//                     Student
//                   </Link>
//                 </li></ul></button>
//                 <button className="bg-gray-800 px-4 py-2 rounded"> <ul> <li>
//                   <Link to="Application" className="text-muted text-white">
//                     Application
//                   </Link>
//                 </li></ul></button>
//         </div>
//           </div>
//         </header>

//         {/* Adding margin-top to move the cards down */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-" style={{ marginTop: '60px' }}>
//           {[
//             { title: "Total Added Students", value: "3200", change: "20% ↑" },
//             { title: "Converted Students", value: "3200", change: "20% ↑" },
//             { title: "Active Students", value: "2800", change: "15% ↑" },
//             { title: "Graduation Rate", value: "95%", change: "5% ↑" },
//           ].map((item, index) => (
//             <div
//               key={index}
//               className="bg-white p-6 rounded-[10px] shadow relative h-48 flex flex-col justify-between"
//             >
//               <div className="absolute top-2 left-2 w-8 h-8 bg-gray-300 rounded-full">
//                 {/* Logo placeholder */}
//               </div>
//               <h2 className="text-lg font-semibold mt-6">{item.title}</h2>
//               <div className="flex justify-between items-baseline">
//                 <p className="text-3xl font-bold">{item.value}</p>
//                 <p className="text-green-500">{item.change}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="flex flex-col lg:flex-row gap-6 mb-6">
//         <section className="bg-card p-6 rounded shadow flex-1 h-[650px] flex flex-col justify-between">
//           <div>
//             <h2 className="text-xl font-semibold mb-4">Agency Revenue Summary</h2>
//             <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
//               <p className="text-3xl font-bold flex items-center">
//                 ₹ 5,424
//                 <span className="text-green-500 text-lg ml-2">1.13% ↑ VS last year</span>
//               </p>
//               <div className="flex flex-wrap gap-2 mt-2 sm:mt-0">
//                 <button className="bg-primary text-primary-foreground px-4 py-1 rounded text-sm">
//                   Annually
//                 </button>
//                 <button className="bg-muted text-muted-foreground px-4 py-1 rounded text-sm">
//                   Monthly
//                 </button>
//                 <button className="bg-muted text-muted-foreground px-4 py-1 rounded text-sm">
//                   Weekly
//                 </button>
//               </div>
//             </div>
//           </div>
//           <div className="my-6 flex-grow">
//             <svg viewBox="0 0 400 200" className="w-full h-full">
//               <defs>
//                 <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
//                   <stop offset="0%" stopColor="#4ade80" stopOpacity="0.4" />
//                   <stop offset="100%" stopColor="#4ade80" stopOpacity="0.1" />
//                 </linearGradient>
//               </defs>
//               <path
//                 d="M0 180 L40 160 L80 170 L120 140 L160 150 L200 100 L240 120 L280 90 L320 110 L360 80 L400 70 L400 200 L0 200 Z"
//                 fill="url(#gradient)"
//               />
//               <path
//                 d="M0 180 L40 160 L80 170 L120 140 L160 150 L200 100 L240 120 L280 90 L320 110 L360 80 L400 70"
//                 fill="none"
//                 stroke="#4ade80"
//                 strokeWidth="3"
//               />
//               <circle cx="200" cy="100" r="5" fill="#4ade80" />
//               <text x="205" y="95" fill="#4ade80" fontSize="12">₹3,500</text>
//             </svg>
//           </div>
//           <div className="flex justify-between mb-4">
//             <span>14 Sep</span>
//             <span>₹ 3,500</span>
//           </div>
//         </section>

//         <section className="bg-card bg-gray-200 p-6 rounded shadow flex-1 h-[650px] flex flex-col">
//           <h2 className="text-xl font-semibold mb-4">Country Application Summary</h2>
//           <p className="text-3xl font-bold mb-6">6,345 Students</p>
//           <div className="flex-grow space-y-6">
//             {[
//               { name: "University of Toronto", percentage: 36 },
//               { name: "University of British Columbia (UBC)", percentage: 24 },
//               { name: "McGill University", percentage: 22 },
//               { name: "University of Alberta", percentage: 18 },
//             ].map((university, index) => (
//               <div key={index}>
//                 <div className="flex justify-between mb-2">
//                   <span className="text-sm sm:text-base">{university.name}</span>
//                   <span>{university.percentage}%</span>
//                 </div>
//                 <div className="bg-zinc-300 rounded h-2">
//                   <div
//                     className="bg-green-500 h-2 rounded"
//                     style={{ width: `${university.percentage}%` }}
//                   ></div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="bg-gray-200 text-foreground p-4 sm:p-[0px]">
      <div className="bg-gray-600 p-5 h-[400px]">
        <header className="flex flex-col sm:flex-row justify-between items-start mb-6">
          <div className="flex flex-col mb-4 sm:mb-0">
            <div className="flex items-center mb-4">
              <div className="w-8 bg-gray-300 mr-2"></div>
              <h1 className="text-2xl text-white font-bold">Empire</h1>
            </div>
            <h1 className="text-2xl font-bold text-white">Welcome back, Johnson👋</h1>
            <p className="text-gray-400">Dashboard</p>
          </div>
          <div className="flex flex-col items-start sm:items-end">
            <div className="flex items-center mb-4 space-x-2">
              <ion-icon name="notifications-outline" className="w-6 h-6 text-gray-300"></ion-icon>
              <button className="ml-auto mr-[-1500px] flex items-center gap-1 border rounded-md px-4 py-2 text-gray-800">
                Admin
              </button>
            </div>
            <div className="flex gap-4">
              <button className="bg-gray-700 px-4 py-2 rounded">
                <ul>
                  <li>
                    <Link to="/" className="text-muted text-white">
                      Dashboard
                    </Link>
                  </li>
                </ul>
              </button>
              <button className="bg-gray-800 px-4 py-2 rounded">
                <ul>
                  <li>
                    <Link to="Student" className="text-muted text-white">
                      Student
                    </Link>
                  </li>
                </ul>
              </button>
              <button className="bg-gray-800 px-4 py-2 rounded">
                <ul>
                  <li>
                    <Link to="Application" className="text-muted text-white">
                      Application
                    </Link>
                  </li>
                </ul>
              </button>
            </div>
          </div>
        </header>
        </div>

        {/* Move the cards down by 20px */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6" style={{ marginTop: '-80px' }}>
          {[
            { title: "Total Added Students", value: "3200", change: "20% ↑" },
            { title: "Converted Students", value: "3200", change: "20% ↑" },
            { title: "Active Students", value: "2800", change: "15% ↑" },
            { title: "Graduation Rate", value: "95%", change: "5% ↑" },
          ].map((item, index) => (
            <div key={index}>
              <div className="bg-white p-6 rounded-[10px] shadow relative h-48 flex flex-col justify-between">
                <div className="absolute top-2 left-2 w-8 h-8 bg-gray-300 rounded-full">
                  {/* Logo placeholder */}
                </div>
                <h2 className="text-lg font-semibold mt-6">{item.title}</h2>
                <div className="flex justify-between items-baseline">
                  <p className="text-3xl font-bold">{item.value}</p>
                  <p className="text-green-500">{item.change}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      

      <div className="flex flex-col lg:flex-row gap-6 mb-6">
        <section className="bg-card p-6 rounded shadow flex-1 h-[650px] flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-semibold mb-4">Agency Revenue Summary</h2>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
              <p className="text-3xl font-bold flex items-center">
                ₹ 5,424
                <span className="text-green-500 text-lg ml-2">1.13% ↑ VS last year</span>
              </p>
              <div className="flex flex-wrap gap-2 mt-2 sm:mt-0">
                <button className="bg-primary text-primary-foreground px-4 py-1 rounded text-sm">
                  Annually
                </button>
                <button className="bg-muted text-muted-foreground px-4 py-1 rounded text-sm">
                  Monthly
                </button>
                <button className="bg-muted text-muted-foreground px-4 py-1 rounded text-sm">
                  Weekly
                </button>
              </div>
            </div>
          </div>
          <div className="my-6 flex-grow">
            <svg viewBox="0 0 400 200" className="w-full h-full">
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#4ade80" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#4ade80" stopOpacity="0.1" />
                </linearGradient>
              </defs>
              <path
                d="M0 180 L40 160 L80 170 L120 140 L160 150 L200 100 L240 120 L280 90 L320 110 L360 80 L400 70 L400 200 L0 200 Z"
                fill="url(#gradient)"
              />
              <path
                d="M0 180 L40 160 L80 170 L120 140 L160 150 L200 100 L240 120 L280 90 L320 110 L360 80 L400 70"
                fill="none"
                stroke="#4ade80"
                strokeWidth="3"
              />
              <circle cx="200" cy="100" r="5" fill="#4ade80" />
              <text x="205" y="95" fill="#4ade80" fontSize="12">₹3,500</text>
            </svg>
          </div>
          <div className="flex justify-between mb-4">
            <span>14 Sep</span>
            <span>₹ 3,500</span>
          </div>
        </section>

        <section className="bg-card bg-gray-200 p-6 rounded shadow flex-1 h-[650px] flex flex-col">
          <h2 className="text-xl font-semibold mb-4">Country Application Summary</h2>
          <p className="text-3xl font-bold mb-6">6,345 Students</p>
          <div className="flex-grow space-y-6">
            {[
              { name: "University of Toronto", percentage: 36 },
              { name: "University of British Columbia (UBC)", percentage: 24 },
              { name: "McGill University", percentage: 22 },
              { name: "University of Alberta", percentage: 18 },
            ].map((university, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span className="text-sm sm:text-base">{university.name}</span>
                  <span>{university.percentage}%</span>
                </div>
                <div className="bg-zinc-300 rounded h-2">
                  <div
                    className="bg-green-500 h-2 rounded"
                    style={{ width: `${university.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
