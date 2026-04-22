import Card from "./components/Card"

const App = () => {

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
    pay: "$120/hr",
    company: "Google",
    brandLogo: "https://img.logo.dev/google.com?token=pk_ChG4-uffRfyBYXcUUk0AFQ&retina=true",
    post: "Senior UI Developer"
  },
  {
    pay: "$110/hr",
    company: "Amazon",
    brandLogo: "https://img.logo.dev/amazon.com?token=pk_ChG4-uffRfyBYXcUUk0AFQ&retina=true",
    post: "Frontend Engineer"
  },
  {
    pay: "$130/hr",
    company: "Meta",
    brandLogo: "https://img.logo.dev/meta.com?token=pk_ChG4-uffRfyBYXcUUk0AFQ&retina=true",
    post: "React Developer"
  },
  {
    pay: "$140/hr",
    company: "Apple",
    brandLogo: "https://img.logo.dev/apple.com?token=pk_ChG4-uffRfyBYXcUUk0AFQ&retina=true",
    post: "iOS Developer"
  },
  {
    pay: "$150/hr",
    company: "Netflix",
    brandLogo: "https://img.logo.dev/netflix.com?token=pk_ChG4-uffRfyBYXcUUk0AFQ&retina=true",
    post: "Senior Backend Engineer"
  },
  {
    pay: "$115/hr",
    company: "Microsoft",
    brandLogo: "https://img.logo.dev/microsoft.com?token=pk_ChG4-uffRfyBYXcUUk0AFQ&retina=true",
    post: "Full Stack Developer"
  },
  {
    pay: "$105/hr",
    company: "Adobe",
    brandLogo: "https://img.logo.dev/adobe.com?token=pk_ChG4-uffRfyBYXcUUk0AFQ&retina=true",
    post: "UI/UX Engineer"
  },
  {
    pay: "$125/hr",
    company: "Uber",
    brandLogo: "https://img.logo.dev/uber.com?token=pk_ChG4-uffRfyBYXcUUk0AFQ&retina=true",
    post: "Data Engineer"
  },
  {
    pay: "$135/hr",
    company: "Tesla",
    brandLogo: "https://img.logo.dev/tesla.com?token=pk_ChG4-uffRfyBYXcUUk0AFQ&retina=true",
    post: "Embedded Systems Engineer"
  },
  {
    pay: "$118/hr",
    company: "LinkedIn",
    brandLogo: "https://img.logo.dev/linkedin.com?token=pk_ChG4-uffRfyBYXcUUk0AFQ&retina=true",
    post: "DevOps Engineer"
  }
];

  return (
    <div className='parent'>
      
      {jobs.map(function (val, idx) {

        return <div key={idx}>
          <Card pay={val.pay} post={val.post} brandLogo={val.brandLogo} />
        </div>
      })}

    </div>
  )
}

export default App