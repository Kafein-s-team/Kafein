import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'
import logo from '../assets/logo.png'
import './App.css'

const menuItems = {
  coffee: [
    { name: 'Espresso', price: '2.50' },
    { name: 'Americano', price: '3.00' },
    { name: 'Latte', price: '3.50' },
    { name: 'Cappuccino', price: '3.50' },
    { name: 'Flat White', price: '3.50' },
    { name: 'Cold Brew', price: '4.00' },
  ],
  pastries: [
    { name: 'Croissant', price: '3.00', desc: 'Butter, golden crust' },
    { name: 'Pain au Chocolat', price: '3.50', desc: 'Dark chocolate' },
    { name: 'Biscuit', price: '2.50', desc: 'Homemade cookie' },
    { name: 'Tarte', price: '4.50', desc: 'Seasonal tart' },
  ],
}

const locations = [
  { name: 'Kafein Alma', address: 'Galeries des argousiers 3b, 1200 Woluwe-Saint-Lambert', hours: 'Lun-Ven: 8h-17h | Sam-Dim: Fermé' },
]

const reviews = [
  { text: "The best coffee on campus! Great specialty coffee and amazing homemade pastries. The team is super friendly.", author: "Student @ Alma" },
  { text: "My go-to spot for studying. Cozy atmosphere, excellent coffee, and the pastries are to die for!", author: "Marie D." },
  { text: "Found this gem near Place Carnoy. The quality is incredible and the staff makes you feel at home.", author: "Thomas L." },
]

const features = ['Specialty Coffee', 'Fresh Pastries', 'Cozy Space', 'Homemade', 'Local Roasts', 'Student Friendly']

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen)

  return (
    <div className="app">
      <motion.nav 
        className="navbar"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div 
          className="logo"
          whileHover={{ scale: 1.05 }}
        >
          <img src={logo} alt="Kafein" className="logo-img" />
        </motion.div>
        
        <motion.button 
          className="mobile-menu-toggle"
          onClick={toggleMenu}
          whileTap={{ scale: 0.95 }}
        >
          <span className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}></span>
        </motion.button>

        <div className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          {['Menu', 'Locations', 'About'].map((link, i) => (
            <motion.a 
              key={link}
              href={`#${link.toLowerCase()}`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              whileHover={{ color: '#d4a574' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link}
            </motion.a>
          ))}
        </div>
      </motion.nav>

      <section ref={heroRef} className="hero">
        <motion.div 
          className="hero-bg"
          style={{ y }}
        />
        
        <motion.div 
          className="hero-shapes"
          style={{ opacity }}
        >
          <motion.div 
            className="shape shape-1"
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.div 
            className="shape shape-2"
            animate={{ 
              rotate: [0, -360],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>

        <div className="hero-content">
          <motion.h1 
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            Life Begins<br/>
            <motion.span 
              className="highlight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              After Coffee
            </motion.span>
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="hero-logo"
          >
            <img src={logo} alt="Kafein" />
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Asian-inspired specialty coffee & homemade pastries in the heart of Woluwe-Saint-Lambert
          </motion.p>
          
          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.a 
              href="#menu" 
              className="btn-primary"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              Explore Menu
            </motion.a>
            <motion.a 
              href="#locations" 
              className="btn-secondary"
              whileHover={{ scale: 1.05, borderColor: '#d4a574', color: '#d4a574' }}
              whileTap={{ scale: 0.98 }}
            >
              Our Locations
            </motion.a>
          </motion.div>

          <motion.div 
            className="scroll-indicator"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span>↓</span>
          </motion.div>
        </div>
      </section>

      <motion.section 
        className="features"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="feature-grid">
          {features.map((feature, i) => (
            <motion.div 
              key={i}
              className="feature-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05, color: '#d4a574' }}
            >
              <span className="feature-icon">✓</span>
              {feature}
            </motion.div>
          ))}
        </div>
      </motion.section>

      <section id="menu" className="menu-section">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Find and Get What You Love
          </motion.h2>
        </motion.div>

        <div className="menu-grid">
          {menuItems.coffee.length > 0 && (
            <motion.div 
              className="menu-category"
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.h3 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Coffee
              </motion.h3>
              <div className="menu-items">
                {menuItems.coffee.map((item, i) => (
                  <motion.div 
                    key={i}
                    className="menu-item"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ 
                      x: 10,
                      borderBottomColor: '#d4a574'
                    }}
                  >
                    <span className="item-name">{item.name}</span>
                    <span className="item-price">€{item.price}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          <motion.div 
            className="menu-category"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <motion.h3
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              Pâtisseries Maison
            </motion.h3>
            <div className="menu-items">
              {menuItems.pastries.map((item, i) => (
                <motion.div 
                  key={i}
                  className="menu-item"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.3 }}
                  whileHover={{ 
                    x: 10,
                    borderBottomColor: '#d4a574'
                  }}
                >
                  <div className="item-info">
                    <span className="item-name">{item.name}</span>
                    <span className="item-desc">{item.desc}</span>
                  </div>
                  <span className="item-price">€{item.price}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="about" className="about-section">
        <motion.div 
          className="about-content"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Good Vibes. Great Coffee.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            At Kafein, we serve great coffee and delicious homemade pastries with care and passion, creating a warm, cozy space that feels like home.
          </motion.p>
          
          <div className="about-grid">
            {[
              { title: 'Great Coffee, Tasty Sips', desc: 'Locally roasted beans, expertly brewed' },
              { title: 'Warm, Cozy Atmosphere', desc: 'Perfect for work or relaxation' },
              { title: 'Speedy Service with a Smile', desc: 'Friendly baristas, always ready' },
              { title: 'Local & Sustainable', desc: 'Community-focused, eco-friendly' }
            ].map((item, i) => (
              <motion.div 
                key={i}
                className="about-item"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.15 }}
                whileHover={{ y: -5 }}
              >
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="testimonials">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>What People Love About Us</h2>
        </motion.div>
        
        <div className="reviews-grid">
          {reviews.map((review, i) => (
            <motion.div 
              key={i}
              className="review-card"
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              whileHover={{ 
                y: -10,
                boxShadow: '0 20px 40px rgba(212, 165, 116, 0.15)'
              }}
            >
              <motion.p 
                className="review-text"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                "{review.text}"
              </motion.p>
              <motion.p 
                className="review-author"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                — {review.author}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="locations" className="locations-section">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>Visit Us</h2>
          <p className="section-subtitle">Find a Kafein nearby</p>
        </motion.div>

        <div className="locations-grid">
          {locations.map((loc, i) => (
            <motion.div 
              key={i}
              className="location-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ 
                y: -15,
                boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3)'
              }}
            >
              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                {loc.name}
              </motion.h3>
              <motion.p 
                className="address"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                {loc.address}
              </motion.p>
              <motion.p 
                className="hours"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                {loc.hours}
              </motion.p>
              <motion.a 
                href="#" 
                className="directions-btn"
                whileHover={{ 
                  scale: 1.05,
                  borderColor: '#d4a574',
                  color: '#d4a574'
                }}
                whileTap={{ scale: 0.98 }}
              >
                Get Directions
              </motion.a>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="contact-section">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Need Help?
          </motion.h2>
          <div className="contact-grid">
            {[
              { title: 'General Inquiries', content: 'contact@kafein-alma.be' },
              { title: 'Follow Us', content: '@kafei_bxl' }
            ].map((item, i) => (
              <motion.div 
                key={i}
                className="contact-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.2 }}
                whileHover={{ y: -5 }}
              >
                <h4>{item.title}</h4>
                <motion.a 
                  href="#"
                  whileHover={{ color: '#d4a574' }}
                >
                  {item.content}
                </motion.a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <motion.footer 
        className="footer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <motion.p
          animate={{ 
            textShadow: ["0 0 0 rgba(255,255,255,0)", "0 0 20px rgba(212,165,116,0.3)", "0 0 0 rgba(255,255,255,0)"]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          © 2025 Kafein Alma
        </motion.p>
      </motion.footer>
    </div>
  )
}

export default App