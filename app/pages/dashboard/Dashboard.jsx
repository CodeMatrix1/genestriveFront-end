import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer';
import Navbar2 from '../components/Navbar2';
import Sidebar from '../components/Sidebar';
import MainContent from '../components/MainContent';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { getAuth } from "firebase/auth";

function Dashboard(){
  const router = useRouter(); // Initialize with default name
  const [name, setName] = useState("John Doe"); // Initialize with default name // Initialize with default name
  const [grade, setGrade] = useState("");
  const [examtype, setExamType] = useState("");
  const [category, setCategory] = useState(""); // Initialize with default name

  // Define state variables for dashboard data
  const [totalTestsTaken, settotalTestsTaken] = useState(0); // Add state for total tests taken
  const [AverageAccuracy, setAverageAccuracy] = useState(0); // Add state for average accuracy
  const [WeakTopics, setWeakTopics] = useState([]); // Add state for weak topics
  const [Progress, setProgress] = useState({});
  const [recentActivities, setRecentActivities] = useState([]);
  const [topicsToFocus, setTopicsToFocus] = useState([]); // Corrected variable name for clarity
  const [loading, setLoading] = useState(true); // Add loading state
  const [error, setError] = useState(null); // Add error state

  const handleGradeChange = (event) => {
    setCategory(event.target.value);
    setGrade(event.target.value)
    setExamType("")
  };

  const handleExamTypeChange = (event) => {
    setCategory(event.target.value);
    setExamType(event.target.value)
    setGrade("")
  };

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        // Get Firebase ID token
        const auth = getAuth();
        const user = auth.currentUser;
        if (!user) {
          throw new Error("User not logged in");
        }

        const token = await user.getIdToken();

        const res = await axios.post('http://127.0.0.1:8000/dashboard-data',
          {
          category:category
        },
      {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );
        
        if (res.data) {
          const { totalTestsTaken, AverageAccuracy, Progress, recentActivities, topicsToFocus } = res.data;
          
          // Update state with fetched data
          settotalTestsTaken(totalTestsTaken || 0);
          setAverageAccuracy(AverageAccuracy || 0);
          setProgress(Progress || {});
          setWeakTopics(topicsToFocus?.length || 0);
          setRecentActivities(recentActivities || []);
          setTopicsToFocus(topicsToFocus || []);
        }
        setLoading(false);
      } catch (err) {
        console.error('Error fetching dashboard data:', err);
        setError(err);
        setLoading(false);
      }
    };
    
    fetchDashboardData();
  }, [category]);

  const resources = [
    {
      id: 1,
      title: "Mathematics Formula Sheet",
      description: "Comprehensive collection of important formulas",
      type: "PDF",
      subject: "Mathematics"
    },
    {
      id: 2,
      title: "Science Lab Manual",
      description: "Step-by-step guide for common experiments",
      type: "PDF",
      subject: "Science"
    },
    {
      id: 3,
      title: "History Timeline",
      description: "Chronological overview of important events",
      type: "PDF",
      subject: "History"
    },
    {
      id: 4,
      title: "Geography Maps",
      description: "Collection of important geographical maps",
      type: "PDF",
      subject: "Geography"
    }
  ];


  if(loading){
  return(
    <div>Loading...</div>
  )}


  return (
    <div className="bg-white flex flex-col min-h-screen">
      <Navbar2 />
      <div className="flex flex-col md:flex-row flex-grow">
        <Sidebar grade={grade} examtype={examtype} handleGradeChange={handleGradeChange} handleExamTypeChange={handleExamTypeChange} />
        <MainContent totalTestsTaken={totalTestsTaken} AverageAccuracy={AverageAccuracy} WeakTopics={WeakTopics} name={name} Progress={Progress} recentActivities={recentActivities} topicsToFocus={topicsToFocus} resources={resources} />
      </div>
      <button
        onClick={() => router.push(`/dashboard/generate-test?category=${encodeURIComponent(category)}`)}
        className="bg-blue-500 text-white p-2 m-4 rounded"
      >
        Go to Generate Test
      </button>
      <Footer />
    </div>
  );
};

export default Dashboard;
