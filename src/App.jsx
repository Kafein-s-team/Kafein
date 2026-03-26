import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import banner from '../assets/banner.png'
import logo from '../assets/logo.png'
import './App.css'

const navigationLeftLinks = [
  { label: 'Accueil', href: '#top' },
  { label: 'A propos', href: '#about' },
]

const navigationRightLinks = [
  { label: 'Menu', href: '#menu' },
  { label: 'Evenements', href: '#entreprises' },
]

const googleReviews = [
  {
    author: 'Nikita G.',
    text: 'Les boissons sont incroyables et le cake aux pommes est délicieux. Le lieu est aussi très cosy pour travailler.',
  },
  {
    author: 'Marie',
    text: 'Super accueil, chouette ambiance et prix abordables. Le Flanders et les cookies ressortent particulièrement.',
  },
  {
    author: 'Alice G.',
    text: 'Très bons cafés de qualité, chaï réussi et cookies maison délicieux, avec un accueil chaleureux.',
  },
]

const featureItems = [
  'Café de spécialité',
  'Pâtisseries maison',
  'Campus Alma',
  'Lun-Ven 7h30-17h00',
  'Pause café pro',
  'Offre salée dès septembre',
]

const featureTickerGroups = [featureItems, featureItems, featureItems]

const menuCollections = {
  signatures: [
    {
      name: 'Canadian Coffee',
      price: '5.50',
      description: "Sirop d’érable, cannelle, lait, espresso",
    },
    {
      name: 'Flanders',
      price: '5.50',
      description: 'Chocolat chaud, crème chantilly, biscuit, poudre de cacao',
    },
    {
      name: 'Matcha Lover',
      price: '6.50',
      description: "Matcha, beurre de cacahuète, lait d’avoine",
    },
  ],
  teasAndMore: [
    {
      name: 'Thé infusions',
      price: '3.00',
      description: '7 parfums, légende berbère, fruit fantasy',
    },
    { name: 'Iced Tea Maison', price: '3.00' },
    { name: 'Limonade du jour', price: '3.00' },
    { name: 'Eau', price: '1.50' },
  ],
  drinks: [
    { name: 'Espresso', price: '2.50' },
    { name: 'Double espresso', price: '3.00' },
    { name: 'Coffee mug', price: '3.00' },
    { name: 'Cappuccino', price: '4.50' },
    { name: 'Latte', price: '4.50' },
    { name: 'Flat white', price: '4.50' },
    { name: 'Déca', price: '4.50' },
    { name: 'Mocaccino', price: '4.90' },
    { name: 'White mocaccino', price: '4.90' },
    { name: 'Chocolat chaud', price: '4.50' },
    { name: 'Chai latte', price: '4.50' },
    { name: 'Kafein chai latte', price: '5.00' },
    { name: 'Matcha', price: '5.00' },
    { name: 'Ube', price: '5.50' },
  ],
  sweets: [
    { name: 'Cake aux pommes', price: '3.80' },
    { name: 'Carotte cake', price: '3.80' },
    { name: "Cake à l’orange", price: '3.80' },
    { name: 'Cookie chocolat', price: '3.00' },
    { name: 'Cookie noix de pécan', price: '3.50' },
    { name: 'Brownies', price: '4.00' },
    { name: 'Banana bread', price: '3.80' },
    { name: 'Reeses', price: '2.50' },
    { name: 'Yaourt granola', price: '5.00' },
    { name: 'Cinnamon roll', price: '3.50' },
  ],
}

const customizations = [
  'Lait végétal : soja, avoine, amande, coco (+0.50€)',
  'Sirop : vanille, noisette, caramel, pain d’épice (+0.50€)',
  'Extra shot (+0.50€)',
  'Extra matcha (+1€)',
]

const heroPanels = [
  {
    label: 'Ambiance',
    title: 'Minimaliste, chaleureuse, fluide',
    description: 'Un lieu clair, calme et moderne pour prendre un café, travailler ou faire une pause entre deux rendez-vous.',
  },
  {
    label: 'À la carte',
    title: 'Signatures, matcha, douceurs maison',
    description: 'Une carte courte mais affirmée, pensée pour revenir souvent sans se lasser.',
  },
  {
    label: 'Pro',
    title: 'Pause café et commandes entreprises',
    description: 'Des formats faciles à adapter pour les réunions, accueils et événements d’équipe.',
  },
]

const ritualMoments = [
  {
    time: 'Matin',
    title: 'Le premier café se prend vite, mais bien',
    description: 'Espresso, latte, chai ou signature maison, avec une mise en place pensée pour le rythme du campus.',
  },
  {
    time: 'Midi',
    title: 'Une pause courte qui coupe vraiment la journée',
    description: 'Une boisson froide, une pâtisserie, un moment calme et une vraie respiration au milieu du flux.',
  },
  {
    time: 'Entreprise',
    title: 'Une offre simple à faire évoluer',
    description: 'Base sucrée aujourd’hui, extension salée demain, sans refaire tout le site ni toute la présentation.',
  },
]

const aboutCards = [
  {
    title: 'Café de spécialité',
    description: 'Une carte pensée autour du café de spécialité, servie rapidement et avec régularité.',
  },
  {
    title: 'Maison et gourmand',
    description: 'Cookies, brownies, cakes et autres douceurs faites maison pour accompagner chaque tasse.',
  },
  {
    title: 'Minimal et moderne',
    description: 'Une adresse simple, claire et chaleureuse au cœur de Woluwe-Saint-Lambert.',
  },
  {
    title: 'Facile à faire évoluer',
    description: 'Une base de site prévue pour suivre les ajouts saisonniers, dont une offre salée à partir de septembre.',
  },
]

const businessOptions = [
  {
    title: 'Petit déj',
    description: 'Café de spécialité et assortiment de pâtisseries maison pour lancer une réunion en douceur.',
  },
  {
    title: 'Pause café',
    description: 'Une formule simple pour bureaux, réunions et événements avec café, douceurs ou les deux.',
  },
  {
    title: 'Sur mesure',
    description: 'Commande adaptée au nombre de personnes, au budget et au rythme de votre événement.',
  },
]

const contactDetails = [
  { title: 'Adresse', content: 'Galeries des Argousiers 3b, 1200 Woluwe-Saint-Lambert' },
  { title: 'Horaires', content: 'Du lundi au vendredi de 7h30 à 17h00' },
  { title: 'Téléphone', content: '04 91 56 06 05', href: 'tel:0491560605' },
  { title: 'Email', content: 'Hozen2025@outlook.com', href: 'mailto:Hozen2025@outlook.com' },
]

const formSubmitEndpoint = 'https://formsubmit.co/ajax/Hozen2025@outlook.com'

const initialFormData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  company: '',
  eventType: 'pause cafe',
  date: '',
  guestCount: '',
  budget: '',
  notes: '',
  pastries: false,
  coffee: true,
}

const MotionForm = motion.form

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [formData, setFormData] = useState(initialFormData)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formMessage, setFormMessage] = useState('')
  const heroRef = useRef(null)

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsLoading(false)
    }, 1600)

    return () => window.clearTimeout(timer)
  }, [])

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })

  const contentY = useTransform(scrollYProgress, [0, 1], [0, 72])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.45])
  const opacity = useTransform(scrollYProgress, [0, 0.45], [1, 0])

  const toggleMenu = () => setMobileMenuOpen((current) => !current)

  const scrollToSection = (href) => {
    const target = document.querySelector(href)

    if (!target) {
      return
    }

    const startY = window.scrollY
    const targetY = target.getBoundingClientRect().top + window.scrollY - 92
    const distance = targetY - startY
    const duration = 850
    let startTime = null

    const easeInOutCubic = (value) => {
      if (value < 0.5) {
        return 4 * value * value * value
      }

      return 1 - Math.pow(-2 * value + 2, 3) / 2
    }

    const step = (timestamp) => {
      if (!startTime) {
        startTime = timestamp
      }

      const elapsed = timestamp - startTime
      const progress = Math.min(elapsed / duration, 1)
      const easedProgress = easeInOutCubic(progress)

      window.scrollTo(0, startY + distance * easedProgress)

      if (progress < 1) {
        window.requestAnimationFrame(step)
      }
    }

    window.requestAnimationFrame(step)
  }

  const handleNavClick = (event, href) => {
    event.preventDefault()
    setMobileMenuOpen(false)
    scrollToSection(href)
  }

  const handleFormChange = (event) => {
    const { name, value, type, checked } = event.target

    setFormData((current) => ({
      ...current,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleInquirySubmit = async (event) => {
    event.preventDefault()

    if (!formData.pastries && !formData.coffee) {
      setFormMessage('Choisis au moins café, pâtisseries ou les deux.')
      return
    }

    setIsSubmitting(true)
    setFormMessage('')

    const selectedServices = [
      formData.coffee ? 'Café de spécialité' : null,
      formData.pastries ? 'Pâtisseries maison' : null,
    ]
      .filter(Boolean)
      .join(' + ')

    const payload = new FormData()
    payload.append('Prénom', formData.firstName)
    payload.append('Nom', formData.lastName)
    payload.append('Email', formData.email)
    payload.append('Téléphone', formData.phone)
    payload.append('Entreprise', formData.company || 'Non renseignée')
    payload.append("Type d'événement", formData.eventType)
    payload.append('Date souhaitée', formData.date || 'À définir')
    payload.append('Nombre de personnes', formData.guestCount || 'À définir')
    payload.append('Intérêt', selectedServices)
    payload.append('Budget', formData.budget || 'À définir')
    payload.append('Notes', formData.notes || 'Aucune note supplémentaire')
    payload.append('_subject', 'Nouvelle demande entreprise - Kafein')
    payload.append('_template', 'table')
    payload.append('_captcha', 'false')
    payload.append('_replyto', formData.email)
    payload.append('_honey', '')

    try {
      const response = await fetch(formSubmitEndpoint, {
        method: 'POST',
        body: payload,
        headers: {
          Accept: 'application/json',
        },
      })

      if (!response.ok) {
        throw new Error('submit_failed')
      }

      setFormMessage('Merci, votre demande a bien été envoyée.')
      setFormData(initialFormData)
    } catch {
      setFormMessage("L'envoi a échoué. Réessaie dans un instant.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="app">
      <AnimatePresence>
        {isLoading ? (
          <motion.div
            className="site-loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.45, ease: 'easeOut' } }}
          >
            <motion.div
              className="site-loader-card"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12, transition: { duration: 0.3 } }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <div className="coffee-loader" aria-hidden="true">
                <span className="coffee-steam steam-1" />
                <span className="coffee-steam steam-2" />
                <span className="coffee-steam steam-3" />
                <div className="coffee-cup">
                  <div className="coffee-surface" />
                  <div className="coffee-handle" />
                </div>
                <div className="coffee-saucer" />
              </div>
              <p>Préparation de votre café...</p>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <motion.nav
        className="navbar"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="nav-shell">
          <div className="nav-group nav-group-left">
            {navigationLeftLinks.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 + index * 0.1 }}
                onClick={(event) => handleNavClick(event, link.href)}
              >
                {link.label}
              </motion.a>
            ))}
          </div>

          <motion.a
            className="logo"
            href="#top"
            whileHover={{ scale: 1.03 }}
            onClick={(event) => handleNavClick(event, '#top')}
          >
            <img src={logo} alt="Logo Kafein" className="logo-img" />
          </motion.a>

          <div className="nav-group nav-group-right">
            {navigationRightLinks.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55 + index * 0.1 }}
                onClick={(event) => handleNavClick(event, link.href)}
              >
                {link.label}
              </motion.a>
            ))}
          </div>
        </div>

        <motion.a
          className="mobile-nav-logo"
          href="#top"
          whileHover={{ scale: 1.03 }}
          onClick={(event) => handleNavClick(event, '#top')}
        >
          <img src={logo} alt="Logo Kafein" className="logo-img" />
        </motion.a>

        <motion.button
          className="mobile-menu-toggle"
          onClick={toggleMenu}
          whileTap={{ scale: 0.95 }}
          aria-label="Ouvrir le menu"
          aria-expanded={mobileMenuOpen}
          aria-controls="site-navigation"
        >
          <span className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}></span>
        </motion.button>

        <div id="site-navigation" className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          {[...navigationLeftLinks, ...navigationRightLinks].map((link, index) => (
            <motion.a
              key={link.href}
              href={link.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 + index * 0.08 }}
              onClick={(event) => handleNavClick(event, link.href)}
            >
              {link.label}
            </motion.a>
          ))}
        </div>
      </motion.nav>

      <section id="top" ref={heroRef} className="hero">
        <motion.div className="hero-bg" />

        <motion.div className="hero-shapes" style={{ opacity }}>
          <motion.div
            className="shape shape-1"
            animate={{ rotate: [0, 360], scale: [1, 1.08, 1] }}
            transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
          />
          <motion.div
            className="shape shape-2"
            animate={{ rotate: [0, -360], scale: [1, 1.14, 1] }}
            transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
          />
        </motion.div>

        <motion.div className="hero-content" style={{ y: contentY, opacity: contentOpacity }}>
          <motion.span
            className="eyebrow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Kafein / Woluwe-Saint-Lambert / Alma campus
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            Kafein, votre
            <br />
            <span className="highlight">café de spécialité</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Un café minimaliste et moderne au cœur du campus Alma, avec café de spécialité,
            pâtisseries maison et formules sur mesure pour les entreprises.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
            transition={{
              opacity: { delay: 0.45, duration: 0.8 },
              scale: { delay: 0.45, duration: 0.8 },
              y: { delay: 1.2, duration: 5.2, repeat: Infinity, ease: 'easeInOut' },
            }}
            className="hero-logo"
          >
            <img src={banner} alt="Signature Kafein" />
          </motion.div>

          <motion.div
            className="hero-meta"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
          >
            <div className="hero-detail">
              <span className="hero-label">Adresse</span>
              <span className="hero-value">Galeries des Argousiers 3b</span>
            </div>
            <div className="hero-detail">
              <span className="hero-label">Horaires</span>
              <span className="hero-value">Lun-Ven 7h30-17h00</span>
            </div>
            <div className="hero-detail">
              <span className="hero-label">Téléphone</span>
              <span className="hero-value">04 91 56 06 05</span>
            </div>
          </motion.div>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.a
              href="#menu"
              className="btn-primary"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Voir le menu
            </motion.a>
            <motion.a
              href="#entreprises"
              className="btn-secondary"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Demande entreprise
            </motion.a>
          </motion.div>

          <motion.div
            className="hero-panels"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.65 }}
          >
            {heroPanels.map((panel, index) => (
              <motion.div
                key={panel.title}
                className="hero-panel"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.75 + index * 0.12, duration: 0.6 }}
                whileHover={{ y: -4 }}
              >
                <span className="hero-panel-label">{panel.label}</span>
                <h3>{panel.title}</h3>
                <p>{panel.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="scroll-indicator"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="scroll-arrow">↓</span>
          </motion.div>
        </motion.div>
      </section>

      <motion.section
        className="features"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="feature-rail">
          <motion.div
            className="feature-marquee"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {featureTickerGroups.map((group, groupIndex) => (
              <div key={`group-${groupIndex}`} className="feature-grid" aria-hidden={groupIndex > 0}>
                {group.map((feature, index) => (
                  <span key={`${feature}-${groupIndex}-${index}`} className="feature-item">
                    <span className="feature-icon">/</span>
                    {feature}
                  </span>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <section className="ritual-section">
        <motion.div
          className="ritual-intro"
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <span className="eyebrow">Le rythme Kafein</span>
          <h2>Un lieu pensé pour les passages rapides, les vraies pauses et les besoins pro</h2>
          <p>
            Le site raconte maintenant mieux l’expérience: le café du matin, la respiration du midi,
            puis les formats entreprise qui prolongent Kafein hors du comptoir.
          </p>
        </motion.div>

        <div className="ritual-grid">
          {ritualMoments.map((moment, index) => (
            <motion.article
              key={moment.time}
              className="ritual-card"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7, delay: index * 0.12 }}
              whileHover={{ y: -6 }}
            >
              <span className="ritual-time">{moment.time}</span>
              <h3>{moment.title}</h3>
              <p>{moment.description}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="about" className="about-section">
        <motion.div
          className="about-content"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <h2>Un café pensé pour le quotidien</h2>
          <p>
            Kafein accueille étudiants, voisins, équipes et visiteurs autour d&apos;un service
            rapide, d&apos;un café soigné et d&apos;une ambiance claire et chaleureuse.
          </p>

          <div className="about-grid">
            {aboutCards.map((item, index) => (
              <motion.div
                key={item.title}
                className="about-item"
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.18 + index * 0.12 }}
                whileHover={{ y: -4 }}
              >
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="menu" className="menu-section">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
        >
          <h2>Le menu Kafein</h2>
          <p className="section-subtitle">
            Une carte centrée sur le café de spécialité et les gourmandises maison.
          </p>
        </motion.div>

        <div className="menu-layout">
          <motion.div
            className="menu-grid"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <div className="menu-column">
              <div className="menu-category">
                <h3>Signatures</h3>
                <div className="menu-items">
                  {menuCollections.signatures.map((item, index) => (
                    <motion.div
                      key={item.name}
                      className="menu-item"
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.08 }}
                    >
                      <div className="item-info">
                        <span className="item-name">{item.name}</span>
                        <span className="item-desc">{item.description}</span>
                      </div>
                      <span className="item-price">{item.price}€</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="menu-category">
                <h3>Thés et autres</h3>
                <div className="menu-items">
                  {menuCollections.teasAndMore.map((item, index) => (
                    <motion.div
                      key={item.name}
                      className="menu-item"
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.08 + 0.12 }}
                    >
                      <div className="item-info">
                        <span className="item-name">{item.name}</span>
                        {item.description ? <span className="item-desc">{item.description}</span> : null}
                      </div>
                      <span className="item-price">{item.price}€</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="menu-note">
                <h4>Personnalisez votre boisson</h4>
                <ul className="menu-note-list">
                  {customizations.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="menu-column">
              <div className="menu-category">
                <h3>Boissons</h3>
                <div className="menu-items">
                  {menuCollections.drinks.map((item, index) => (
                    <motion.div
                      key={item.name}
                      className="menu-item"
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.04 }}
                    >
                      <span className="item-name">{item.name}</span>
                      <span className="item-price">{item.price}€</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="menu-cold-note">
                <p>Nos boissons sont aussi disponibles en version froide.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="menu-sweets"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.16 }}
          >
            <div className="menu-sweets-header">
              <h3>Nos douceurs maison</h3>
              <p>La sélection sucrée visible sur la carte actuelle.</p>
            </div>
            <div className="menu-sweets-grid">
              {menuCollections.sweets.map((item, index) => (
                <motion.div
                  key={item.name}
                  className="menu-item"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.03 }}
                >
                  <span className="item-name">{item.name}</span>
                  <span className="item-price">{item.price}€</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="reviews-section">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
        >
          <h2>Avis Google</h2>
          <p className="section-subtitle">
            Quelques retours clients visibles sur la fiche Google de Kafein Specialty Coffee.
          </p>
        </motion.div>

        <div className="reviews-grid">
          {googleReviews.map((review, index) => (
            <motion.article
              key={review.author}
              className="review-card"
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7, delay: index * 0.12 }}
              whileHover={{ y: -5 }}
            >
              <div className="review-stars" aria-hidden="true">
                <span>★★★★★</span>
              </div>
              <p className="review-text">“{review.text}”</p>
              <p className="review-author">{review.author}</p>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="reviews-cta"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <a
            className="btn-secondary"
            href="https://www.google.com/maps/place/Kafein+Specialty+Coffee/data=!4m7!3m6!1s0x47c3ddf4b59f7f03:0x9f5771578d07a5f7!8m2!3d50.8503085!4d4.4509869!16s%2Fg%2F11xvxvsry1!19sChIJA3-ftfTdw0cR96UHjVdxV58?authuser=0&hl=fr&rclk=1"
            target="_blank"
            rel="noreferrer"
          >
            Voir la fiche Google
          </a>
        </motion.div>
      </section>

      <section id="entreprises" className="business-section">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2>Formules entreprises</h2>
          <p className="section-subtitle">
            Kafein apporte une touche douce à vos réunions, pauses café et événements.
          </p>
        </motion.div>

        <div className="business-layout">
          <motion.div
            className="business-copy"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <p className="business-intro">
              Cakes, cookies, brownies et autres gourmandises maison, accompagnés d&apos;un café de
              spécialité. Parfait pour vos moments pro, de la pause café simple à la formule plus
              complète.
            </p>

            <div className="business-cards">
              {businessOptions.map((option, index) => (
                <motion.div
                  key={option.title}
                  className="business-card"
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.12 }}
                >
                  <h3>{option.title}</h3>
                  <p>{option.description}</p>
                </motion.div>
              ))}
            </div>

            <ul className="business-list">
              <li>Choix entre pâtisseries, café de spécialité, ou les deux.</li>
              <li>Formats adaptés au nombre de personnes et à la date souhaitée.</li>
              <li>Base idéale pour intégrer facilement de nouvelles offres salées plus tard.</li>
            </ul>
          </motion.div>

          <MotionForm
            className="business-form"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.12 }}
            onSubmit={handleInquirySubmit}
          >
            <div className="form-intro">
              <h3>Parlez-nous de votre besoin</h3>
              <p>Une demande claire, rapide à lire, et facile à traiter pour une réponse sur mesure.</p>
            </div>

            <div className="form-grid">
              <label className="form-field">
                <span>Prénom</span>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleFormChange}
                  required
                />
              </label>

              <label className="form-field">
                <span>Nom</span>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleFormChange}
                  required
                />
              </label>

              <label className="form-field">
                <span>Email</span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  required
                />
              </label>

              <label className="form-field">
                <span>Téléphone</span>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleFormChange}
                  required
                />
              </label>

              <label className="form-field">
                <span>Entreprise</span>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleFormChange}
                />
              </label>

              <label className="form-field">
                <span>Type d&apos;événement</span>
                <select name="eventType" value={formData.eventType} onChange={handleFormChange}>
                  <option value="petit déjeuner">Petit déj</option>
                  <option value="pause café">Pause café</option>
                  <option value="autre">Autre</option>
                </select>
              </label>

              <label className="form-field">
                <span>Date souhaitée</span>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleFormChange}
                />
              </label>

              <label className="form-field">
                <span>Nombre de personnes</span>
                <input
                  type="number"
                  min="1"
                  name="guestCount"
                  value={formData.guestCount}
                  onChange={handleFormChange}
                />
              </label>

              <label className="form-field full-width">
                <span>Budget</span>
                <input
                  type="text"
                  name="budget"
                  value={formData.budget}
                  onChange={handleFormChange}
                  placeholder="Ex: 150 EUR"
                />
              </label>
            </div>

            <fieldset className="service-options">
              <legend>Je suis intéressé par</legend>
              <div className="service-grid">
                <label className="checkbox-option">
                  <input
                    type="checkbox"
                    name="pastries"
                    checked={formData.pastries}
                    onChange={handleFormChange}
                  />
                  <span>Pâtisseries maison</span>
                </label>
                <label className="checkbox-option">
                  <input
                    type="checkbox"
                    name="coffee"
                    checked={formData.coffee}
                    onChange={handleFormChange}
                  />
                  <span>Café de spécialité</span>
                </label>
              </div>
            </fieldset>

            <label className="form-field full-width">
              <span>Notes spéciales</span>
              <textarea
                name="notes"
                rows="5"
                value={formData.notes}
                onChange={handleFormChange}
                placeholder="Contexte, horaire, demandes particulières..."
              />
            </label>

            <button type="submit" className="btn-primary submit-button" disabled={isSubmitting}>
              {isSubmitting ? 'Envoi en cours...' : 'Envoyer la demande'}
            </button>

            <p className="form-caption">
              Une fois validé, le formulaire envoie directement la demande sans ouvrir de messagerie.
            </p>
            <p className="form-message" aria-live="polite">
              {formMessage}
            </p>
          </MotionForm>
        </div>
      </section>

      <section id="locations" className="location-section">
        <motion.div
          className="location-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="location-copy">
            <span className="eyebrow">Sur place</span>
            <h2>Retrouvez Kafein à Woluwe-Saint-Lambert</h2>
            <p>
              Installé au cœur du campus Alma, Kafein sert café de spécialité et douceurs maison
              du lundi au vendredi.
            </p>
          </div>

          <div className="location-meta">
            <div>
              <h3>Adresse</h3>
              <p>Galeries des Argousiers 3b, 1200 Woluwe-Saint-Lambert</p>
            </div>
            <div>
              <h3>Horaires</h3>
              <p>Du lundi au vendredi de 7h30 à 17h00</p>
            </div>
          </div>

          <motion.a
            href="https://www.google.com/maps/search/?api=1&query=Galeries%20des%20Argousiers%203b%2C%201200%20Woluwe-Saint-Lambert"
            className="btn-secondary location-button"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Ouvrir l&apos;adresse
          </motion.a>
        </motion.div>
      </section>

      <section id="contact" className="contact-section">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2>Contact</h2>
          <p className="section-subtitle">
            Pour une visite, une question ou une demande pro, tout est ici.
          </p>
        </motion.div>

        <div className="contact-grid">
          {contactDetails.map((item, index) => (
            <motion.div
              key={item.title}
              className="contact-item"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <h3>{item.title}</h3>
              {item.href ? (
                <a href={item.href}>{item.content}</a>
              ) : (
                <p>{item.content}</p>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      <motion.footer
        className="footer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <p>Kafein / 2026 / Café de spécialité et pâtisseries maison à Alma</p>
      </motion.footer>
    </div>
  )
}

export default App
