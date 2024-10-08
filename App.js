import React, { useState } from 'react';
import './App.css';

function App() {
  const [currentSection, setCurrentSection] = useState('home');
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleNavClick = (section) => {
    setCurrentSection(section);
  };

  // Function to handle event click and set the selected event
  const handleJoinEvent = (eventDetails) => {
    setSelectedEvent(eventDetails);
    setCurrentSection('joinEvent');
  };

  return (
    <div className="App">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="navbar-brand">
          <a href="#" onClick={() => handleNavClick('home')}>
            <img src="https://img.icons8.com/?size=160&id=H6LtluKL4nwE&format=png" alt="Campus Events Manager Logo" className="logo-image" />
            Campus Events Manager
          </a>
        </div>

        <ul className="navbar-menu">
          <li><a href="#home" onClick={() => handleNavClick('home')}>Home</a></li>
          <li><a href="#events" onClick={() => handleNavClick('events')}>Events</a></li>
          <li><a href="#about" onClick={() => handleNavClick('about')}>About</a></li>
          <li><a href="#contact" onClick={() => handleNavClick('contact')}>Contact</a></li>
          <li><a href="#login" onClick={() => handleNavClick('login')}>Login</a></li>
        </ul>
      </nav>

      {/* Home Section */}
      {currentSection === 'home' && (
        <div className="home-content">
          {/* General Home Content */}
          <section id="home" className="content-section">
            <h2 id="black">Explore and participate in various events organized by our college!</h2>
          </section>

          {/* Events Section within Home */}
          <section className="content-section">
            <h2>Upcoming Events</h2>
            <div className="event-container">
              <div className="event-box">
                <h3>Tech Innovaters</h3>
                <p>A showcase of the latest tech advancements. Network with industry leaders and explore emerging trends.</p>
                <button onClick={() => handleJoinEvent({ name: 'Event 1', description: 'A gathering of tech enthusiasts and industry leaders showcasing the latest advancements in technology.' })}>
                  Join Event
                </button>
              </div>
              <div className="event-box">
                <h3>Annual Art Gala</h3>
                <p>Celebrate visual arts with exhibitions from renowned artists. Enjoy creativity, art appreciation, and a lively atmosphere.</p>
                <button onClick={() => handleJoinEvent({ name: 'Event 2', description: 'A vibrant event celebrating visual arts, featuring exhibitions from renowned artists.' })}>
                  Join Event
                </button>
              </div>
              <div className="event-box">
                <h3>Summer Music Fest</h3>
                <p>An outdoor festival featuring popular bands and solo artists. Enjoy live music, food, and vibrant, exciting fun throughout the day.</p>
                <button onClick={() => handleJoinEvent({ name: 'Event 3', description: 'An outdoor music festival featuring performances by popular bands and solo artists.' })}>
                  Join Event
                </button>
              </div>
              <div className="event-box">
                <h3>Startup Pitch Day</h3>
                <p>Emerging startups present their ideas to investors. Gain insights and explore potential funding opportunities for ventures.</p>
                <button onClick={() => handleJoinEvent({ name: 'Event 4', description: 'A platform for emerging startups to present their ideas to investors and industry experts.' })}>
                  Join Event
                </button>
              </div>
            </div>
          </section>

          {/* About Section within Home */}
          <section class = "aboutbody">
          <section class="about-section">
          <div class="about-tabs">
            <h1 class="about-header">About Us</h1>
            <div class="about-tab-link current" data-tab="about-tab-1"><i class="fas fa-bullseye"></i> Our Mission</div>
            <div id="about-tab-1" class="about-tab-content current">
                <p>
                    The Campus Events Manager is a dedicated platform created to enhance the student experience by providing easy access to all the events happening across the college. Our mission is to encourage active participation, foster community engagement, and ensure that students are always informed about the various activities and opportunities available to them. Whether it's a workshop, a cultural fest, a guest lecture, or an online seminar, we aim to bring the college community closer through our comprehensive event management system.
                </p>
            </div>

            <div class="about-tab-link" data-tab="about-tab-2"><i class="fas fa-eye"></i> Our Vision</div>
            <div id="about-tab-2" class="about-tab-content">
                <p>
                    We envision a vibrant campus where students are continuously engaged, learning, and connecting through various events. By offering a streamlined and user-friendly platform, we aim to make event discovery and participation as seamless as possible. Our goal is to be the central hub for all campus-related activities, ensuring that no one misses out on any exciting opportunity.
                </p>
            </div>

            <div class="about-tab-link" data-tab="about-tab-3"><i class="fas fa-gift"></i> What We Offer</div>
            <div id="about-tab-3" class="about-tab-content">
                <ul>
                    <li><strong>Enhanced Management :</strong> Simplifies participation, encouraging more students and staff to get involved in college events.</li>
                    <li><strong>Streamlined Processes :</strong> Automates registration, ticketing, and communication, saving time and reducing administrative workload.</li>
                    <li><strong>Improved Communication :</strong> The platform keeps the college community informed about upcoming events and changes, ensuring everyone stays engaged with campus activities.</li>
                </ul>
            </div>

            <div class="about-tab-link" data-tab="about-tab-4"><i class="fas fa-users"></i> Join Us</div>
            <div id="about-tab-4" class="about-tab-content">
                <p>
                    Be a part of the Campus Events Manager community and make the most of your time on campus. Whether you are a student looking to participate or a club organizing an event, our platform is here to serve your needs.
                </p>
            </div>
        </div>
    </section>
    </section>

          {/* Contact Section within Home */}
          <div class="contact-us-section">
        <div class="contact-us-tabs">
            <h2>Connect with Us</h2>

            <ul class="tabs">
                <li class="tab-link current" data-tab="tab-1">General Inquiries</li>
                <li class="tab-link" data-tab="tab-2">Support</li>
                <li class="tab-link" data-tab="tab-3">Event Organizers</li>
                <li class="tab-link" data-tab="tab-4">Follow Us</li>
                <li class="tab-link" data-tab="tab-5">Feedback</li>
            </ul>

            <div id="tab-1" class="tab-content current card">
                <h3>General Inquiries</h3>
                <p>If you have general questions about our Campus Events Manager platform, we're here to help! Whether you're a student, faculty member, or community partner, we're happy to answer any questions you may have. You might reach out to us for a variety of reasons, such as:</p>
                <ul>
                    <li>Understanding the features and benefits of our event management system.</li>
                    <li>Inquiring about how to get your event featured or highlighted on our platform.</li>
                    <li>Asking about partnerships, sponsorships, or collaborations with our team.</li>
                    <li>Requesting more information on how our platform can help your student organization.</li>
                    <li>Seeking general advice on navigating our platform or utilizing specific tools.</li>
                </ul>
                <p>Our team is committed to ensuring you have the information you need to make the most of our services. Feel free to send your questions to our general inquiry email, and we'll respond as quickly as possible:</p>
                <p><strong>Email:</strong> <a href="mailto:events@campusmanager.edu">events@campusmanager.edu</a></p>
                <p>We look forward to connecting with you!</p>
            </div>

            <div id="tab-2" class="tab-content card">
                <h3>Support</h3>
                <p>Our support team is dedicated to helping you resolve any issues you may encounter while using our platform. Here’s how we can assist you:</p>
                <ul>
                    <li>Technical issues such as login problems, bugs, or errors.</li>
                    <li>Questions about your account, including password resets and profile updates.</li>
                    <li>Guidance on using specific features or tools within the platform.</li>
                    <li>Troubleshooting problems with event creation, editing, or management.</li>
                    <li>Assistance with integrating third-party services or plugins.</li>
                </ul>
                <p>We strive to provide timely and effective support to ensure your experience with our platform is smooth and enjoyable. Please reach out to our support team at:</p>
                <p><strong>Email:</strong> <a href="mailto:support@campusmanager.edu">support@campusmanager.edu</a></p>
                <p>We're here to help!</p>
            </div>

            <div id="tab-3" class="tab-content card">
                <h3>Event Organizers</h3>
                <p>Are you a club, organization, or individual looking to host an event on campus? Our event coordination team is here to support you. Here’s what we can help with:</p>
                <ul>
                    <li>Guidance on how to list your event on our platform.</li>
                    <li>Best practices for promoting your event to reach a wider audience.</li>
                    <li>Information on securing venues and coordinating logistics.</li>
                    <li>Assistance with creating engaging event content and visuals.</li>
                    <li>Tips on managing event registrations and tracking attendance.</li>
                </ul>
                <p>Our goal is to help you create successful and impactful events that enrich the campus community. For more information, contact our event coordination team:</p>
                <p><strong>Email:</strong> <a href="mailto:organizers@campusmanager.edu">organizers@campusmanager.edu</a></p>
                <p>Let's work together to make your event a success!</p>
            </div>

            <div id="tab-4" class="tab-content card">
                <h3>Follow Us</h3>
                <p>Stay connected with us to receive the latest updates, news, and event information. Follow us on social media to:</p>
                <ul>
                    <li>Get real-time announcements about upcoming events and activities.</li>
                    <li>See photos and highlights from past events.</li>
                    <li>Participate in community discussions and engage with other students.</li>
                    <li>Share your own event experiences and photos.</li>
                    <li>Stay informed about campus happenings and important dates.</li>
                </ul>
                <p>Join our online community and never miss out on what's happening around campus. Follow us on:</p>
                <p>
                    <a href="#"><img src = "https://img.icons8.com/?size=96&id=16713&format=png"/></a>  <a href="#"><img src = "https://img.icons8.com/?size=96&id=Xy10Jcu1L2Su&format=png"/></a> | <a href="#"><img src = "https://img.icons8.com/?size=96&id=xuvGCOXi8Wyg&format=png"/></a>
                </p>
                <p>We look forward to connecting with you!</p>
            </div>

            <div id="tab-5" class="tab-content card">
                <h3>Feedback</h3>
                <p>Your feedback is invaluable to us as we continually strive to improve our platform and services. We welcome your thoughts, suggestions, and comments on:</p>
                <ul>
                    <li>Your overall experience using the Campus Events Manager.</li>
                    <li>Ideas for new features or improvements.</li>
                    <li>Feedback on specific events or experiences.</li>
                    <li>Suggestions for additional support resources or information.</li>
                    <li>General comments about what you love or what can be better.</li>
                </ul>
                <p>Please use the form below to send us your feedback. We are committed to making your experience with our platform as positive and productive as possible:</p>
                <p><strong>Email:</strong> <a href="mailto:feedback@campusmanager.edu">feedback@campusmanager.edu</a></p>
                <p>Thank you for helping us grow and improve!</p>
            </div>
        </div>
    </div>
    
        </div>
      )}

      {/* Events Section */}
      {currentSection === 'events' && (
        <section id="events" className="content-section">
          <h2 id="red">Upcoming Events</h2>
          <div className="event-container">
            <div className="event-box">
              <h3>Tech Innovators</h3>
              <p>A showcase of the latest tech advancements. Network with industry leaders and explore emerging trends.</p>
              <button onClick={() => handleJoinEvent({ name: 'Event 1', description: 'A gathering of tech enthusiasts and industry leaders showcasing the latest advancements in technology.' })}>
                Join Event
              </button>
            </div>
            <div className="event-box">
              <h3>Annual Art Gala</h3>
              <p>Celebrate visual arts with exhibitions from renowned artists. Enjoy creativity, art appreciation, and a lively atmosphere.</p>
              <button onClick={() => handleJoinEvent({ name: 'Event 2', description: 'A vibrant event celebrating visual arts, featuring exhibitions from renowned artists.' })}>
                Join Event
              </button>
            </div>
            <div className="event-box">
              <h3>Summer Music Fest</h3>
              <p>An outdoor festival featuring popular bands and solo artists. Enjoy live music, food, and vibrant, exciting fun throughout the day.</p>
              <button onClick={() => handleJoinEvent({ name: 'Event 3', description: 'An outdoor music festival featuring performances by popular bands and solo artists.' })}>
                Join Event
              </button>
            </div>
            <div className="event-box">
              <h3>Startup Pitch Day</h3>
              <p>Emerging startups present their ideas to investors. Gain insights and explore potential funding opportunities for ventures.</p>
              <button onClick={() => handleJoinEvent({ name: 'Event 4', description: 'A platform for emerging startups to present their ideas to investors and industry experts.' })}>
                Join Event
              </button>
            </div>
            <div className="event-box">
              <h3>Cultural Heritage Fair</h3>
              <p>Experience global cultures through performances, food, and crafts. Enjoy diverse traditions and interactive exhibits.</p>
              <button onClick={() => handleJoinEvent({ name: 'Event 5', description: 'A unique culinary experience where attendees can learn from top chefs and taste gourmet dishes.' })}>
                Join Event
              </button>
            </div>
            <div className="event-box">
              <h3>Health & Wellness Expo</h3>
              <p>Explore health and wellness through workshops, fitness classes, and exhibits. Learn about healthy living and products.</p>
              <button onClick={() => handleJoinEvent({ name: 'Event 6', description: 'A sports tournament bringing together teams from different colleges for a series of exciting competitions.' })}>
                Join Event
              </button>
            </div>
            <div className="event-box">
              <h3>Entrepreneurship Workshop</h3>
              <p>A hands-on workshop for aspiring entrepreneurs. Learn business strategies, startup management, and gain practical skills.</p>
              <button onClick={() => handleJoinEvent({ name: 'Event 7', description: 'A coding bootcamp designed to help participants learn new programming skills and techniques.' })}>
                Join Event
              </button>
              </div>
              <div className="event-box">
              <h3>Environmental Awareness</h3>
              <p>A seminar on environmental issues and sustainability. Participate in discussions and activities promoting ecological conservation.</p>
              <button onClick={() => handleJoinEvent({ name: 'Event 8', description: 'An environmental awareness workshop focusing on sustainable practices and green technologies.' })}>
                Join Event
              </button>
            </div>
          </div>
        </section>
      )}
      

      {/* Join Event Form Section */}
      {currentSection === 'joinEvent' && (
        <section id="join-form" className="content-section">
          <h3>Join Event</h3>
          <form>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" className="input-large" required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" className="input-large" required />

            <label htmlFor="student-id">Student ID:</label>
            <input type="text" id="student-id" name="student-id" className="input-large" required />

            <label htmlFor="comments">Comments:</label>
            <textarea id="comments" name="comments" className="input-large"></textarea>

            <button type="submit">Submit</button>
          </form>
        </section>
      )}

      

          {/* About Section */}
      {currentSection === 'about' && (
        <section id="about" className="content-section">
          <h1 class = "Aboutus">About Us</h1>
          <h3>Our Mission</h3>
          <p>
            The Campus Events Manager is a dedicated platform created to enhance the student experience by providing easy access to all the events happening across the college. Our mission is to encourage active participation, foster community engagement, and ensure that students are always informed about the various activities and opportunities available to them. Whether it's a workshop, a cultural fest, a guest lecture, or an online seminar, we aim to bring the college community closer through our comprehensive event management system.
          </p>
          <h3>Our Vision</h3>
          <p>
            We envision a vibrant campus where students are continuously engaged, learning, and connecting through various events. By offering a streamlined and user-friendly platform, we aim to make event discovery and participation as seamless as possible. Our goal is to be the central hub for all campus-related activities, ensuring that no one misses out on any exciting opportunity.
          </p>

          <h3>What We Offer</h3>
          <ul>
            <li><strong>Enhanced Management :</strong> Simplifies participation, encouraging more students and staff to get involved in college events.</li>
            <li><strong>Streamlined Processes :</strong> Automates registration, ticketing, and communication, saving time and reducing administrative workload.</li>
            <li><strong>Improved Communication :</strong> The platform keeps the college community informed about upcoming events and changes, ensuring everyone stays engaged with campus activities.</li>
          </ul>
        </section>
      )}

      {/* Contact Section */}
      {currentSection === 'contact' && (
        <section id="contact" className="content-section">
          <h1 class = "Contactus">Contact Us</h1>
          <h3>General Inquiries</h3>
          <p>
            For general questions about the Campus Events Manager, feel free to email us at:
            <a href="mailto:events@campusmanager.edu"> events@campusmanager.edu</a>
          </p>
          <h3>Support</h3>
          <p>
            If you need help or have encountered an issue with our platform, our support team is ready to assist you. Contact us at: 
            <a href="mailto:support@campusmanager.edu"> support@campusmanager.edu</a>
          </p>

          <h3>Event Organizers</h3>
          <p>
            Are you a club or organization looking to promote your event through our platform? Reach out to our event coordination team: 
            <a href="mailto:organizers@campusmanager.edu"> organizers@campusmanager.edu</a>
          </p>

          <h3>Follow Us</h3>
          <p>
            Stay updated with the latest news and events by following us on social media:<br />
            <a href="#">Facebook</a> | <a href="#">Twitter</a> | <a href="#">Instagram</a>
          </p>

          <h3>Feedback</h3>
          <p>
            Your feedback is valuable to us. Please use the form below to send us your suggestions and comments. We are committed to improving our services and making your experience as pleasant as possible.
          </p>
        </section>
      )}

{currentSection === 'login' && (
  <div class = "loginbody">
        <div class="login-container">
          <h2>Login</h2>
          <form action="#" method="post">
          <div class="input-container">
                <img src="https://img.icons8.com/?size=512&id=59808&format=png" alt="User Icon"/>
                <input type="text" placeholder="Username" name="username" required/>
          </div>
          <div class="input-container">
                <img src="https://img.icons8.com/?size=512&id=59743&format=png" alt="Password Icon"/>
                <input type="password" placeholder="Password" name="password" required/>
          </div>
          <button type="submit">Login</button>
        </form>
        <a href="#">Forgot your password?</a>
        </div>
        </div>
      )}

    </div>
  );
}

export default App;
