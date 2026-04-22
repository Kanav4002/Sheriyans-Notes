import React from 'react';
import Card from './components/Card';
// import User from './components/User';

const App = () => {

  // const names = ['Kanav', 'Kannan', 'Kunal', 'Piyush', 'Mahira'];
  // const names = [
  //   {
  //     user: 'Kanav',
  //     age: 21
  //   },
  //   {
  //     user: 'Kannan',
  //     age: 21
  //   },
  //   {
  //     user: 'Kunal',
  //     age: 21
  //   }, 
  //   {
  //     user: 'Piyush',
  //     age: 21
  //   }, 
  //   {
  //     user: 'Mahira',
  //     age: 21
  //   }
  // ];

  // names.map(function (val) {
  //   console.log(val.user);
  // });

  // returns an array of objects
  // console.log(names);

    const LOGO_DEV_PUBLIC_KEY = 'pk_ChG4-uffRfyBYXcUUk0AFQ';

    function CompanyLogo({ domain }) {
      return (
        <img
          src={`https://img.logo.dev/${domain}?token=${LOGO_DEV_PUBLIC_KEY}`}
          alt="Company logo"
        />
      );
    }

    const jobs = [
    {
      brandLogo: "https://img.logo.dev/google.com?token=pk_ChG4-uffRfyBYXcUUk0AFQ&retina=true",
      company: "Google",
      datePosted: "5 days ago",
      post: "Frontend Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$45/hr",
      location: "Bangalore, India"
    },
    {
      brandLogo: "https://img.logo.dev/amazon.com?token=pk_ChG4-uffRfyBYXcUUk0AFQ&retina=true",
      company: "Amazon",
      datePosted: "2 weeks ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$50/hr",
      location: "Hyderabad, India"
    },
    {
      brandLogo: "https://img.logo.dev/meta.com?token=pk_ChG4-uffRfyBYXcUUk0AFQ&retina=true",
      company: "Meta",
      datePosted: "10 days ago",
      post: "React Developer",
      tag1: "Part Time",
      tag2: "Junior Level",
      pay: "$40/hr",
      location: "Remote"
    },
    {
      brandLogo: "https://img.logo.dev/apple.com?token=pk_ChG4-uffRfyBYXcUUk0AFQ&retina=true",
      company: "Apple",
      datePosted: "3 weeks ago",
      post: "iOS Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$70/hr",
      location: "Mumbai, India"
    },
    {
      brandLogo: "https://img.logo.dev/netflix.com?token=pk_ChG4-uffRfyBYXcUUk0AFQ&retina=true",
      company: "Netflix",
      datePosted: "1 week ago",
      post: "Backend Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$80/hr",
      location: "Remote"
    },
    {
      brandLogo: "https://img.logo.dev/microsoft.com?token=pk_ChG4-uffRfyBYXcUUk0AFQ&retina=true",
      company: "Microsoft",
      datePosted: "4 days ago",
      post: "Full Stack Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$55/hr",
      location: "Noida, India"
    },
    {
      brandLogo: "https://img.logo.dev/adobe.com?token=pk_ChG4-uffRfyBYXcUUk0AFQ&retina=true",
      company: "Adobe",
      datePosted: "6 days ago",
      post: "UI/UX Engineer",
      tag1: "Part Time",
      tag2: "Junior Level",
      pay: "$35/hr",
      location: "Bangalore, India"
    },
    {
      brandLogo: "https://img.logo.dev/uber.com?token=pk_ChG4-uffRfyBYXcUUk0AFQ&retina=true",
      company: "Uber",
      datePosted: "2 days ago",
      post: "Data Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$60/hr",
      location: "Gurgaon, India"
    },
    {
      brandLogo: "https://img.logo.dev/tesla.com?token=pk_ChG4-uffRfyBYXcUUk0AFQ&retina=true",
      company: "Tesla",
      datePosted: "1 month ago",
      post: "Embedded Systems Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$75/hr",
      location: "Pune, India"
    },
    {
      brandLogo: "https://img.logo.dev/linkedin.com?token=pk_ChG4-uffRfyBYXcUUk0AFQ&retina=true",
      company: "LinkedIn",
      datePosted: "8 days ago",
      post: "DevOps Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$65/hr",
      location: "Remote"
    }
  ];

  // console.log(jobs);

  return (
    <div className='parent'>
      {/* <Card /> */}

      {jobs.map(function (val, idx) {
        console.log(idx);
        return <div key={idx}>
          <Card company={val.company} post={val.post} datePosted={val.datePosted} pay={val.pay} location={val.location} brandLogo={val.brandLogo}  />
        </div>
      })}

      {/* {names.map(function (val) {
        // return <h1>{name}</h1>
        // return <Card />
        return <User name={val} />
      })} */}

      {/* {names.forEach(function (val) {
        console.log(val);
        return <h1>{val}</h1>
      })} */}

      {/* <User name={names[0]} />
      <User name={names[1]} />
      <User name={names[2]} />
      <User name={names[3]} />
      <User name={names[4]} /> */}
    </div>
  )
};

export default App