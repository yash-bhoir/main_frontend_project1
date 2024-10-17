const AboutUs = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-8 bg-black text-white">
      <div className="w-full md:w-1/2 bg-gray-900 rounded-l-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-4 text-center md:text-left">About Us</h1>
        <p className="mb-4">
          Welcome to our website! We are dedicated to providing the best services for our community.
          Our team is passionate about making a difference in people's lives through our innovative
          solutions.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
        <p className="mb-4">
          Our mission is to create a platform that connects people and services efficiently.
          We aim to improve accessibility and usability for everyone.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Our Vision</h2>
        <p className="mb-4">
          We envision a future where technology bridges gaps and fosters connections.
          Our goal is to empower individuals and organizations to thrive in a digital world.
        </p>
        
        <h2 className="text-2xl font-semibold mb-2">Get in Touch</h2>
        <p>If you have any questions or feedback, feel free to reach out!</p>
      </div>

      <div className="w-full md:w-1/2 bg-gray-900 rounded-r-xl shadow-lg p-8 flex flex-col items-center">
        <h2 className="text-2xl font-semibold mb-4 text-center">Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
          {/* Team member cards */}
          {teamMembers.map((member) => (
            <div key={member.name} className="bg-gray-800 rounded-lg p-4 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p>{member.role}</p>
              </div>
              <img src={member.photo} alt={member.name} className="w-24 h-24 object-cover rounded-lg ml-4" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const teamMembers = [
  {
    name: "John Doe",
    role: "CEO",
    photo: "https://via.placeholder.com/150",
  },
  {
    name: "Jane Smith",
    role: "CTO",
    photo: "https://via.placeholder.com/150",
  },
  {
    name: "Alice Johnson",
    role: "Marketing Manager",
    photo: "https://via.placeholder.com/150",
  },
  {
    name: "Bob Brown",
    role: "Lead Developer",
    photo: "https://via.placeholder.com/150",
  },
];

export default AboutUs;
