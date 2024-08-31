import React, { useState } from 'react';
import './App.css';

function App() {
  const [currentSection, setCurrentSection] = useState('home'); // State to manage which section is visible

  const handleNavClick = (section) => {
    setCurrentSection(section);
  };

  return (
    <div className="App">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="navbar-brand">
          <a href="#" onClick={() => handleNavClick('home')}>Campus Events Manager</a>
        </div>
        <ul className="navbar-menu">
          <li><a href="#home" onClick={() => handleNavClick('home')}>Home</a></li>
          <li><a href="#events" onClick={() => handleNavClick('events')}>Events</a></li>
          <li><a href="#about" onClick={() => handleNavClick('about')}>About</a></li>
          <li><a href="#contact" onClick={() => handleNavClick('contact')}>Contact</a></li>
        </ul>
      </nav>

      {/* Home Section */}
      {currentSection === 'home' && (
        <div className="home-content">
          {/* General Home Content */}
          <section id="home" className="content-section">
            <h2 id = "black">Explore and participate in various events organized by our college!</h2>
          </section>

          {/* Events Section within Home */}
          <section className="content-section">
            <h2 id = "red">Upcoming Events</h2>
            <div className="event-container">
              <div className="event-box">
                <h3>Event 1</h3>
                <p>A gathering of tech enthusiasts and industry leaders showcasing the latest advancements in technology.</p>
                <button onClick={() => setCurrentSection('joinEvent')}>Join Event</button>
              </div>
              <div className="event-box">
                <h3>Event 2</h3>
                <p>A vibrant event celebrating visual arts, featuring exhibitions from renowned artists. Enjoy an evening of creativity and art appreciation.</p>
                <button onClick={() => setCurrentSection('joinEvent')}>Join Event</button>
              </div>
              <div className="event-box">
                <h3>Event 3</h3>
                <p>An outdoor music festival featuring performances by popular bands and solo artists. Enjoy live music, food, and a lively atmosphere.</p>
                <button onClick={() => setCurrentSection('joinEvent')}>Join Event</button>
              </div>
            </div>
          </section>

          {/* About Section within Home */}
          <section className="content-section">
            <h2 id = "red">About Us</h2>
            <h3 id = "yellow">Our Mission</h3>
            <p>
              The Campus Events Manager is a dedicated platform created to enhance the student experience by providing easy access to all the events happening across the college. Our mission is to encourage active participation, foster community engagement, and ensure that students are always informed about the various activities and opportunities available to them. Whether it's a workshop, a cultural fest, a guest lecture, or an online seminar, we aim to bring the college community closer through our comprehensive event management system.
            </p>

            <h3 id = "yellow">Our Vision</h3>
            <p>
              We envision a vibrant campus where students are continuously engaged, learning, and connecting through various events. By offering a streamlined and user-friendly platform, we aim to make event discovery and participation as seamless as possible. Our goal is to be the central hub for all campus-related activities, ensuring that no one misses out on any exciting opportunity.
            </p>

            <h3 id = "yellow">What We Offer</h3>
            <ul>
              <li>Easy Event Discovery: Quickly find events based on categories like academic, cultural, sports, and online webinars.</li>
              <li>Simple Registration: Register for events with just a few clicks, and keep track of your upcoming events.</li>
              <li>Stay Informed: Receive updates and reminders about the events you are interested in.</li>
              <li>Community Engagement: A platform to meet new people, learn new skills, and make the most of your college life.</li>
            </ul>

            <h3 id = "yellow">Join Us</h3>
            <p>
              Be a part of the Campus Events Manager community and make the most of your time on campus. Whether you are a student looking to participate or a club organizing an event, our platform is here to serve your needs.
            </p>
          </section>

          {/* Contact Section within Home */}
          <section className="content-section">
            <h2 id = "red">Contact Us</h2>

            <h3 id = "yellow">General Inquiries</h3>
            <p>
              For general questions about the Campus Events Manager, feel free to email us at: 
              <a href="mailto:events@campusmanager.edu"> events@campusmanager.edu</a>
            </p>

            <h3 id = "yellow">Support</h3>
            <p>
              If you need help or have encountered an issue with our platform, our support team is ready to assist you. Contact us at: 
              <a href="mailto:support@campusmanager.edu"> support@campusmanager.edu</a>
            </p>

            <h3 id = "yellow">Event Organizers</h3>
            <p>
              Are you a club or organization looking to promote your event through our platform? Reach out to our event coordination team: 
              <a href="mailto:organizers@campusmanager.edu"> organizers@campusmanager.edu</a>
            </p>

            <h3 id = "yellow">Follow Us</h3>
            <p>
              Stay updated with the latest news and events by following us on social media:<br />
              <a href="#">Facebook</a> | <a href="#">Twitter</a> | <a href="#">Instagram</a>
            </p>

            <h3 id = "yellow">Feedback</h3>
            <p>
              Your feedback is valuable to us. Please use the form below to send us your suggestions and comments. We are committed to improving our services and making your experience as pleasant as possible.
            </p>
          </section>
        </div>
      )}

      {/* Events Section */}
      {currentSection === 'events' && (
        <section id="events" className="content-section">
          <h2 id = "red">Upcoming Events</h2>
          <div className="event-container">
            <div className="event-box">
              <h3>Event 1</h3>
              <p>A gathering of tech enthusiasts and industry leaders showcasing the latest advancements in technology.</p>
              <button onClick={() => setCurrentSection('joinEvent')}>Join Event</button>
            </div>
            <div className="event-box">
              <h3>Event 2</h3>
              <p>A vibrant event celebrating visual arts, featuring exhibitions from renowned artists. Enjoy an evening of creativity and art appreciation.
              </p>
              <button onClick={() => setCurrentSection('joinEvent')}>Join Event</button>
            </div>
            <div className="event-box">
              <h3>Event 3</h3>
              <p>An outdoor music festival featuring performances by popular bands and solo artists. Enjoy live music, food, and a lively atmosphere.
              </p>
              <button onClick={() => setCurrentSection('joinEvent')}>Join Event</button>
            </div>
            <div className="event-box">
              <h3>Event 4</h3>
              <p>A platform for emerging startups to present their ideas to investors and industry experts. Gain insights and potential funding opportunities for new ventures.
              </p>
              <button onClick={() => setCurrentSection('joinEvent')}>Join Event</button>
            </div>
            <div className="event-box">
              <h3>Event 5</h3>
              <p>An event highlighting diverse cultural traditions through performances, food, and crafts. Experience the richness of global cultures in one place.
              </p>
              <button onClick={() => setCurrentSection('joinEvent')}>Join Event</button>
            </div>
            <div className="event-box">
              <h3>Event 6</h3>
              <p>A comprehensive event focusing on health and wellness with workshops, fitness classes, and exhibits. Learn about healthy living and explore wellness products.
              </p>
              <button onClick={() => setCurrentSection('joinEvent')}>Join Event</button>
            </div>
            <div className="event-box">
              <h3>Event 7</h3>
              <p>A hands-on workshop designed for aspiring entrepreneurs to learn about business strategies and startup management. Gain practical skills and expert advice.
              </p>
              <button onClick={() => setCurrentSection('joinEvent')}>Join Event</button>
            </div>
            <div className="event-box">
              <h3>Event 8</h3>
              <p>A seminar dedicated to environmental issues and sustainability practices.Promoting ecological conservation and awareness.</p>
              <button onClick={() => setCurrentSection('joinEvent')}>Join Event</button>
            </div>
            </div>

          {/* Form to Join Event */}
          {currentSection === 'joinEvent' && (
            <div id="join-form" className="form-container">
              <h3>Join Event</h3>
              <form>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="student-id">Student ID:</label>
                <input type="text" id="student-id" name="student-id" required />

                <label htmlFor="comments">Comments:</label>
                <textarea id="comments" name="comments"></textarea>

                <button type="submit">Submit</button>
              </form>
            </div>
          )}
        </section>
      )}

      {/* About Section */}
      {currentSection === 'about' && (
        <section id="about" className="content-section">
          <h2 id = "red">About Us</h2>
          <h3 id = "yellow">Our Mission</h3>
          <p>
            The Campus Events Manager is a dedicated platform created to enhance the student experience by providing easy access to all the events happening across the college. Our mission is to encourage active participation, foster community engagement, and ensure that students are always informed about the various activities and opportunities available to them. Whether it's a workshop, a cultural fest, a guest lecture, or an online seminar, we aim to bring the college community closer through our comprehensive event management system.
          </p>

          <h3 id = "yellow">Our Vision</h3>
          <p>
            We envision a vibrant campus where students are continuously engaged, learning, and connecting through various events. By offering a streamlined and user-friendly platform, we aim to make event discovery and participation as seamless as possible. Our goal is to be the central hub for all campus-related activities, ensuring that no one misses out on any exciting opportunity.
          </p>

          <h3 id = "yellow">What We Offer</h3>
          <ul>
            <li>Easy Event Discovery: Quickly find events based on categories like academic, cultural, sports, and online webinars.</li>
            <li>Simple Registration: Register for events with just a few clicks, and keep track of your upcoming events.</li>
            <li>Stay Informed: Receive updates and reminders about the events you are interested in.</li>
            <li>Community Engagement: A platform to meet new people, learn new skills, and make the most of your college life.</li>
          </ul>

          <h3 id = "yellow">Join Us</h3>
          <p>
            Be a part of the Campus Events Manager community and make the most of your time on campus. Whether you are a student looking to participate or a club organizing an event, our platform is here to serve your needs.
          </p>
        </section>
      )}

      {/* Contact Section */}
      {currentSection === 'contact' && (
        <section id="contact" className="content-section">
          <h2 id = "red">Contact Us</h2>

          <h3 id = "yellow">General Inquiries</h3>
          <p>
            For general questions about the Campus Events Manager, feel free to email us at: 
            <a href="mailto:events@campusmanager.edu"> events@campusmanager.edu</a>
          </p>

          <h3 id = "yellow">Support</h3>
          <p>
            If you need help or have encountered an issue with our platform, our support team is ready to assist you. Contact us at: 
            <a href="mailto:support@campusmanager.edu"> support@campusmanager.edu</a>
          </p>

          <h3 id = "yellow">Event Organizers</h3>
          <p>
            Are you a club or organization looking to promote your event through our platform? Reach out to our event coordination team: 
            <a href="mailto:organizers@campusmanager.edu"> organizers@campusmanager.edu</a>
          </p>

          <h3 id = "yellow">Follow Us</h3>
          <p>
            Stay updated with the latest news and events by following us on social media:<br />
            <a href="#">Facebook</a> | <a href="#">Twitter</a> | <a href="#">Instagram</a>
          </p>

          <h3 id = "yellow">Feedback</h3>
          <p>
            Your feedback is valuable to us. Please use the form below to send us your suggestions and comments. We are committed to improving our services and making your experience as pleasant as possible.
          </p>
        </section>
      )}
    </div>
  );
}

export default App;
