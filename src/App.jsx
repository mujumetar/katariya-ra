import { useState, useEffect } from 'react'
import { TrendingUp, BarChart3, Users, Mail, CheckCircle, ArrowRight, Sparkles, Star, Zap, Award, Globe } from 'lucide-react'
import { toast, ToastContainer } from 'react-toastify'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

// Header Component
function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 
      ${scrolled ? 'bg-black bg-opacity-10 backdrop-blur-xl border-opacity-10' : 'bg-transparent'}`}
    >
      <div className="container mx-auto px-4 sm:px-6 py-4 sm:py-5 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-2xl blur-sm opacity-75"></div>
            <div className="relative w-40 h-12 bg-gradient-to-br rounded-2xl flex items-center justify-center shadow-xl">
              <img
                src="https://katariyaresearchanalyst.com/assets/img/kk.png"
                alt="Katariya Research Analyst Logo"
                className="w-32"  // Fixed: Changed w-30 to w-32 (valid Tailwind class)
              />
            </div>
          </div>
        </Link>

        {/* Desktop Navigation (Uncommented and fixed) */}
        {/* <nav className="hidden md:flex gap-10">
          {['services', 'about', 'contact'].map((item) => (
            <Link
              key={item}
              to={`/${item}`}
              className={`font-semibold text-sm tracking-wide transition-all
                ${scrolled
                  ? 'text-gray-300 hover:text-cyan-400'
                  : 'text-white hover:text-cyan-300'
                }`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          ))}
        </nav> */}

        {/* Hamburger Button (sm only) */}
        {/* <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden relative w-10 h-10 flex flex-col justify-center items-center gap-1"
        >
          <span
            className={`h-0.5 w-6 bg-white transition-transform duration-300
              ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}
          />
          <span
            className={`h-0.5 w-6 bg-white transition-opacity duration-300
              ${menuOpen ? 'opacity-0' : 'opacity-100'}`}
          />
          <span
            className={`h-0.5 w-6 bg-white transition-transform duration-300
              ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}
          />
        </button> */}
      </div>

      {/* Mobile Menu (Uncommented and fixed) */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500
        ${menuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="mx-6 mb-4 rounded-2xl bg-black/80 backdrop-blur-xl border border-white/10 shadow-2xl">
          {['services', 'about', 'contact'].map((item) => (
            <Link
              key={item}
              to={`/${item}`}
              className="block w-full text-left px-6 py-4 text-sm font-semibold text-gray-300 hover:text-cyan-400 transition"
              onClick={() => setMenuOpen(false)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          ))}
        </div>
      </div>
    </header>
  )
}

// Hero Component (Now used on home page)
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Advanced animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-blue-950 to-purple-950"></div>
        <div className="absolute w-full h-full">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse animation-delay-4000"></div>
          <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-pink-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse animation-delay-6000"></div>
        </div>
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10 pt-20">
        {/* Premium badge */}
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-2 rounded-full mb-8 shadow-2xl shadow-cyan-500/50 border border-cyan-400/30">
          <Sparkles className="w-4 h-4 text-white animate-pulse" />
          <span className="text-white text-xs sm:text-sm font-bold tracking-wide">AI-POWERED INTELLIGENCE PLATFORM</span>
          <Sparkles className="w-4 h-4 text-white animate-pulse" />
        </div>

        {/* Main headline with gradient */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 leading-tight">
          <span className="block text-white mb-2">Transform Data</span>
          <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient">
            Into Dominance
          </span>
        </h2>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl mb-10 sm:mb-12 text-gray-300 max-w-3xl mx-auto px-2">
          Elite market intelligence that transforms complexity into clarity.
          <span className="text-cyan-400 font-semibold"> Make decisions that matter.</span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12 sm:mb-16">
          <Link
            to="/services"
            className="group relative bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-2xl font-bold text-base hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 flex items-center gap-3 overflow-hidden"
          >
            <span className="relative z-10">Explore Premium Services</span>
            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-2 transition-transform" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </Link>
          <Link
            to="/contact"
            className="group bg-white bg-opacity-10 backdrop-blur-xl border-2 border-white border-opacity-30 hover:text-yellow-500 px-8 py-4 rounded-2xl font-bold text-base hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-3"
          >
            Start Free Consultation
            <Zap className="w-5 h-5 group-hover:text-yellow-500 transition-colors" />
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 max-w-3xl mx-auto">
          <div className="bg-white bg-opacity-5 backdrop-blur-xl border border-white border-opacity-10 rounded-2xl p-6">
            <div className="text-4xl font-black text-cyan-400 mb-2">10+</div>
            <div className="text-gray-400 text-sm font-semibold">Years Excellence</div>
          </div>
          <div className="bg-white bg-opacity-5 backdrop-blur-xl border border-white border-opacity-10 rounded-2xl p-6">
            <div className="text-4xl font-black text-blue-400 mb-2">500+</div>
            <div className="text-gray-400 text-sm font-semibold">Premium Reports</div>
          </div>
          <div className="bg-white bg-opacity-5 backdrop-blur-xl border border-white border-opacity-10 rounded-2xl p-6">
            <div className="text-4xl font-black text-purple-400 mb-2">98%</div>
            <div className="text-gray-400 text-sm font-semibold">Success Rate</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white border-opacity-30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  )
}

// Services Component
function Services() {
  const [paymentStatus, setPaymentStatus] = useState('')
  const [razorpayLoaded, setRazorpayLoaded] = useState(false)
  const [price, setPrice] = useState(0)
  const [loadingPrice, setLoadingPrice] = useState(true)  // Added: Loading state for price

  useEffect(() => {
    const fetchPrice = async () => {
      try {
        const res = await fetch("https://katariya-core.onrender.com/", { mode: 'cors' })  // Added: Explicit CORS mode
        if (!res.ok) throw new Error('API error')
        const data = await res.json()
        setPrice(data.price || 0)
      } catch (err) {
        console.error(err)
        toast.error("Failed to load price. Check API.")
      } finally {
        setLoadingPrice(false)
      }
    }
    fetchPrice()
  }, [])

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://checkout.razorpay.com/v1/checkout.js'
    script.async = true
    script.onload = () => setRazorpayLoaded(true)
    document.body.appendChild(script)

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  const handlePayment = () => {
    if (!razorpayLoaded) {
      toast.info("Payment system is loading…")
      return
    }

    if (!price || price <= 0) {
      toast.error("Invalid payment amount")
      return
    }

    const options = {
      key: "rzp_test_RyDHMQIKCcSHug",
      amount: price * 100, // convert to paise
      currency: "INR",
      name: "Katariya Research Analyst",
      description: "Premium Consultation",
      handler: function (response) {
        console.log("Payment Success", response)
        toast.success("Payment Successful 🎉")
        setPaymentStatus("Payment successful!")
      },
      prefill: {
        name: "User",
        email: "user@example.com",
        contact: "9999999999"
      },
      theme: {
        color: "#06B6D4"
      }
    }

    const rzp = new window.Razorpay(options)
    rzp.open()
  }

  return (
    <section id="services" className="relative py-20 sm:py-32 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl opacity-10"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-xl px-6 py-3 rounded-full mb-6 border border-cyan-500/30">
            <BarChart3 className="w-5 h-5 text-cyan-400" />
            <span className="text-cyan-400 text-sm font-bold tracking-wider">PREMIUM SERVICES</span>
          </div>
          <h3 className="text-4xl md:text-5xl font-black mb-6 text-white">
            Elite Solutions
          </h3>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light">
            Transform your strategic vision with <span className="text-cyan-400 font-semibold">premium intelligence</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 mx-auto">
          

          {/* Consultation Card */}
          <div className="group relative">
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-3xl blur-xl opacity-25 group-hover:opacity-50 transition-opacity"></div>

            <div className="relative bg-gradient-to-br from-purple-900 via-pink-900 to-purple-900 p-10 rounded-3xl border border-purple-500/50 hover:border-purple-400 transition-all duration-500 h-full">
              {/* Badge */}
              <div className="absolute -top-4 right-8 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-5 py-2 rounded-full text-xs font-bold shadow-xl flex items-center gap-1">
                <Star className="w-3 h-3 fill-current" />
                PREMIUM
              </div>

              {/* Icon */}
              <div className="relative mb-8">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 rounded-2xl blur-lg opacity-50"></div>
                <div className="relative w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-600 rounded-2xl flex items-center justify-center shadow-2xl">
                  <Users className="w-10 h-10 text-white" />
                </div>
              </div>

              <h4 className="text-3xl sm:text-4xl font-black mb-4 text-white">PREMIUM SERVICE CHARGES</h4>
              <p className="text-purple-200 mb-6 text-base sm:text-lg leading-relaxed">
                𝐎𝐧𝐞 𝐭𝐢𝐦𝐞 𝐣𝐨𝐢𝐧 𝐀𝐧𝐝 𝐰𝐚𝐭𝐜𝐡 𝐨𝐮𝐫 𝐀𝐜𝐜𝐮𝐫𝐚𝐜𝐲 ✅🚀✨💫💸
              </p>

              {/* Price (with loading state) */}
              <div className="flex items-baseline mb-8">
                {loadingPrice ? (
                  <span className="text-3xl sm:text-4xl md:text-6xl font-black text-purple-300 animate-pulse">Loading...</span>
                ) : (
                  <>
                    <span className="text-3xl sm:text-4xl md:text-6xl font-black bg-gradient-to-r from-purple-300 to-pink-400 bg-clip-text text-transparent">₹{price}</span>
                    <span className="text-purple-300 ml-3 text-lg">/ Month</span>
                  </>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-10">
                <li className="flex items-start gap-4 text-purple-100">
                  <div className="mt-1 w-4 h-4 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                  </div>
                  <span className="text-sm sm:text-lg">𝕚𝕟𝕕𝕖𝕩 𝕠𝕡𝕥𝕚𝕠𝕟 (Nifty , Banknifty )</span>
                </li>
                <li className="flex items-start gap-4 text-purple-100">
                  <div className="mt-1 w-4 h-4 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                  </div>
                  <span className="text-sm sm:text-lg">𝕊𝕥𝕠ç𝕜 𝕠𝕡𝕥𝕚𝕠𝕟 🗞</span>
                </li>
                <li className="flex items-start gap-4 text-purple-100">
                  <div className="mt-1 w-4 h-4 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                  </div>
                  <span className="text-sm sm:text-lg">𝕔𝕠𝕞𝕞𝕠𝕕𝕚𝕥𝕚𝕪📊</span>
                </li>
              </ul>

              <button
                onClick={handlePayment}
                className="group w-full bg-white text-purple-900 px-4 py-3 sm:px-8 sm:py-5 rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-3"
                disabled={!razorpayLoaded || loadingPrice}
              >
                <span className='text-sm sm:text-lg'>{razorpayLoaded ? 'Book Elite Session' : 'Loading...'}</span>
                <ArrowRight className="w-4 h-4 sm:w-6 sm:h-6 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {paymentStatus && (
          <div className={`mt-12 p-6 rounded-2xl text-center font-bold text-lg backdrop-blur-xl border ${paymentStatus.includes('successful') ? 'bg-green-500/20 border-green-500/50 text-green-400' : 'bg-red-500/20 border-red-500/50 text-red-400'}`}>
            {paymentStatus}
          </div>
        )}
      </div>
    </section>
  )
}

// About Component (Removed duplicate stats to avoid redundancy with Hero)
function About() {
  return (
    <section id="about" className="relative py-32 bg-gradient-to-b from-black via-blue-950 to-black overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl opacity-10"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-xl px-6 py-3 rounded-full mb-6 border border-blue-500/30">
              <Award className="w-5 h-5 text-blue-400" />
              <span className="text-blue-400 text-sm font-bold tracking-wider">EXCELLENCE REDEFINED</span>
            </div>
            <h3 className="text-6xl md:text-7xl font-black mb-6 text-white">
              Meet Your
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Strategic Partner</span>
            </h3>
          </div>

          <div className="relative">
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl blur-2xl opacity-20"></div>

            <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-12 border border-gray-700">
              <div className="flex items-center justify-center mb-10">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-2xl opacity-50 animate-pulse"></div>
                  <div className="relative w-40 h-40 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-6xl font-black shadow-2xl border-4 border-white/10">
                    RA
                  </div>
                </div>
              </div>

              <p className="text-2xl text-white leading-relaxed mb-6 text-center font-light">
                With over <span className="font-black text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text">10 years</span> of elite experience in financial research and strategic market analysis, I specialize in transforming complex data ecosystems into clear, decisive actions.
              </p>

              <p className="text-xl text-gray-400 leading-relaxed text-center mb-12 font-light">
                From Fortune 500 companies to emerging disruptors, my insights have powered decisions worth billions. Let's unlock your competitive advantage together.
              </p>

              {/* Stats removed here to avoid duplication with Hero; move back if needed */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })
  const [submitStatus, setSubmitStatus] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    const data = new FormData()
    data.append("access_key", "29131fa0-ee9b-40c1-ab0a-ad718507d96a")
    data.append("name", formData.name)
    data.append("email", formData.email)
    data.append("message", formData.message)
    data.append("subject", "New Contact Form Submission")
    data.append("from_name", "Katariya Research Analyst")

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data
      })

      const result = await response.json()

      if (result.success) {
        setSubmitStatus("Message sent successfully 🚀")
        setFormData({ name: "", email: "", message: "" })
      } else {
        setSubmitStatus("Something went wrong. Try again.")
      }
    } catch (error) {
      setSubmitStatus("Network error. Please try later.")
    }

    setLoading(false)
    setTimeout(() => setSubmitStatus(""), 3000)
  }

  return (
    <section id="contact" className="relative py-32 bg-black overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950 to-black"></div>
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-cyan-500 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 backdrop-blur-xl px-6 py-3 rounded-full mb-6 border border-purple-500/30">
              <Mail className="w-5 h-5 text-purple-400" />
              <span className="text-purple-400 text-sm font-bold tracking-wider">
                CONNECT WITH EXCELLENCE
              </span>
            </div>
            <h3 className="text-6xl md:text-7xl font-black mb-6 text-white">
              Let's Create
            </h3>
            <p className="text-2xl text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text font-black">
              Something Extraordinary
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-3xl blur-2xl opacity-20"></div>

            <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-10 border border-gray-700 space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full p-5 bg-black bg-opacity-50 border border-gray-700 rounded-2xl text-white placeholder-gray-500 text-lg focus:outline-none focus:border-cyan-500"
                required
              />

              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full p-5 bg-black bg-opacity-50 border border-gray-700 rounded-2xl text-white placeholder-gray-500 text-lg focus:outline-none focus:border-cyan-500"
                required
              />

              <textarea
                rows="6"
                placeholder="Tell us about your vision..."
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full p-5 bg-black bg-opacity-50 border border-gray-700 rounded-2xl text-white placeholder-gray-500 text-lg focus:outline-none focus:border-cyan-500 resize-none"
                required
              />

              <button
                type="submit"
                disabled={loading}
                className="group w-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-8 py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 relative overflow-hidden hover:shadow-2xl hover:shadow-purple-500/50 transition-all disabled:opacity-60"
              >
                <span className="relative z-10">
                  {loading ? "Sending..." : "Send Message"}
                </span>
                <ArrowRight className="w-6 h-6 relative z-10 group-hover:translate-x-2 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>

              {submitStatus && (
                <p className="text-cyan-400 text-center font-bold text-lg">
                  {submitStatus}
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

// Footer Component
function Footer() {
  return (
    <footer className="relative bg-black text-gray-400 py-16 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-3 mb-6 md:mb-0">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-2xl blur-sm opacity-75"></div>
              <div className="relative w-40 h-12 bg-gradient-to-br rounded-2xl flex items-center justify-center shadow-xl">
                <img
                  src="https://katariyaresearchanalyst.com/assets/img/kk.png"
                  alt="Katariya Research Analyst Logo"
                  className="w-32"  // Fixed: Changed w-30 to w-32
                />
              </div>
            </div>
          </div>
          <div className="text-center md:text-right">
            <p className="text-gray-500 mb-2">
              &copy; 2026 Katariya Research Analyst Hub. All rights reserved.
            </p>
            <p className="text-xs text-gray-600">
              Empowering decisions through intelligence
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [price, setPrice] = useState("")
  const [updating, setUpdating] = useState(false)
  const [loginError, setLoginError] = useState("")

  useEffect(() => {
    if (localStorage.getItem("adminAuthenticated") === "true") {
      setIsAuthenticated(true)
      loadPrice()
    }
  }, [])

const loadPrice = async () => {
  try {
    const res = await fetch("https://katariya-core.onrender.com/", { mode: 'cors' });
    if (!res.ok) {
      throw new Error(`API error: ${res.status} - ${await res.text()}`);
    }
    const data = await res.json();
    setPrice(data.price || "");
  } catch (err) {
    console.error("Load price error:", err.message);
    toast.error(`Failed to load price: ${err.message}`);
  }
};
  const handleLogin = (e) => {
    e.preventDefault()
    const ADMIN_USER = "admin"
    const ADMIN_PASS = "katariya2026"  // Slightly improved: Change this to something stronger and move to env vars in production!

    if (username === ADMIN_USER && password === ADMIN_PASS) {
      localStorage.setItem("adminAuthenticated", "true")
      setIsAuthenticated(true)
      loadPrice()
      setLoginError("")
    } else {
      setLoginError("Invalid credentials")
    }
  }

  const handleLogout = () => {
    localStorage.removeItem("adminAuthenticated")
    setIsAuthenticated(false)
    setPrice("")
    setUsername("")
    setPassword("")
  }

const updatePrice = async () => {
  if (!price || price <= 0) {
    toast.error("Enter a valid price");
    return;
  }
  setUpdating(true);
  try {
    const res = await fetch("https://katariya-core.onrender.com/", {
      method: "PUT",
      mode: 'cors',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ price: Number(price) })
    });
    if (!res.ok) {
      throw new Error(`API error: ${res.status} - ${await res.text()}`);
    }
    toast.success("Price updated successfully");
    loadPrice();
  } catch (err) {
    console.error("Update price error:", err.message);
    toast.error(`Update failed: ${err.message}`);
  }
  setUpdating(false);
};

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center px-4">
        <div className="bg-gray-900 p-10 rounded-3xl border border-gray-700 shadow-2xl max-w-md w-full">
          <h2 className="text-4xl font-black text-white text-center mb-8">Admin Login</h2>
          <form onSubmit={handleLogin} className="space-y-6">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-4 bg-black/50 border border-gray-700 rounded-2xl text-white placeholder-gray-500 focus:border-cyan-500 transition"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-4 bg-black/50 border border-gray-700 rounded-2xl text-white placeholder-gray-500 focus:border-cyan-500 transition"
              required
            />
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-4 rounded-2xl font-bold hover:shadow-2xl hover:shadow-cyan-500/50 transition"
            >
              Login
            </button>
            {loginError && <p className="text-red-500 text-center">{loginError}</p>}
          </form>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black py-20 px-4">
      <div className="container mx-auto max-w-2xl">
        <h2 className="text-5xl font-black text-white text-center mb-12">Admin Dashboard</h2>
        <div className="bg-gray-900 p-10 rounded-3xl border border-gray-700">
          <h3 className="text-3xl font-bold text-white mb-8">Update Service Price</h3>
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="flex-1 p-4 bg-black/50 border border-gray-700 rounded-2xl text-white"
              placeholder="New price (INR)"
            />
            <button
              onClick={updatePrice}
              disabled={updating}
              className="bg-cyan-500 text-black px-8 py-4 rounded-2xl font-bold disabled:opacity-60"
            >
              {updating ? "Saving..." : "Save"}
            </button>
          </div>
          <button
            onClick={handleLogout}
            className="w-full bg-red-600 text-white py-4 rounded-2xl font-bold"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  )
}

// Main App with routing (Fixed: Integrated Hero on home, uncommented routes)
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black">
        <Header />
        <Routes>
          <Route path="/" element={<><Services /></>} />  // Fixed: Home now includes Hero + Services
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />  // Uncommented
          <Route path="/contact" element={<Contact />} />  // Uncommented
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
        <Footer />
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          pauseOnHover
          draggable
          theme="dark"
        />
      </div>
    </Router>
  )
}

export default App;