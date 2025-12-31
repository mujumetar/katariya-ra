import { useState, useEffect } from 'react'
import { TrendingUp, BarChart3, Users, Mail, CheckCircle, ArrowRight, Sparkles, Star, Zap, Award, Globe } from 'lucide-react'
import { toast, ToastContainer } from 'react-toastify'

// Header Component

function Header({ scrollToSection }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (section) => {
    scrollToSection(section)
    setMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 
      ${scrolled ? 'bg-black bg-opacity-10 backdrop-blur-xl border-opacity-10' : 'bg-transparent'}`}
    >
      <div className="container mx-auto px-4 sm:px-6 py-4 sm:py-5 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-2xl blur-sm opacity-75"></div>
            <div className="relative w-40 h-12 bg-gradient-to-br rounded-2xl flex items-center justify-center shadow-xl">
              <img
                src="https://katariyaresearchanalyst.com/assets/img/kk.png"
                alt="logo"
                className="w-30"
              />
            </div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-10">
          {['services', 'about', 'contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className={`font-semibold text-sm tracking-wide transition-all
                ${scrolled
                  ? 'text-gray-300 hover:text-cyan-400'
                  : 'text-white hover:text-cyan-300'
                }`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
        </nav>

        {/* Hamburger Button (sm only) */}
        <button
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
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500
        ${menuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="mx-6 mb-4 rounded-2xl bg-black/80 backdrop-blur-xl border border-white/10 shadow-2xl">
          {['services', 'about', 'contact'].map((item) => (
            <button
              key={item}
              onClick={() => handleNavClick(item)}
              className="block w-full text-left px-6 py-4 text-sm font-semibold text-gray-300 hover:text-cyan-400 transition"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </header>
  )
}

// Hero Component
function Hero({ scrollToSection }) {
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
          <button
            onClick={() => scrollToSection('services')}
            className="group relative bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-2xl font-bold text-base hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 flex items-center gap-3 overflow-hidden"
          >
            <span className="relative z-10">Explore Premium Services</span>
            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-2 transition-transform" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="group bg-white bg-opacity-10 backdrop-blur-xl border-2 border-white border-opacity-30 hover:text-yellow-500 px-8 py-4 rounded-2xl font-bold text-base hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-3"
          >
            Start Free Consultation
            <Zap className="w-5 h-5 group-hover:text-yellow-500 transition-colors" />
          </button>
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

  const handlePayment = (amount, description) => {
    if (!razorpayLoaded) {
      toast.info('Payment system is loading, please try again in a moment.')
      return
    }

    const options = {
      key: 'rzp_test_RyDHMQIKCcSHug',
      amount: amount,
      currency: 'INR',
      name: 'Katariya Research Analyst',
      description: description,
      handler: function (response) {
        toast.success('Payment successful! 🎉')
        setPaymentStatus('Payment successful! You will receive your purchase via email shortly.')
      },
      prefill: {
        name: 'User Name',
        email: 'user@example.com',
        contact: '9999999999'
      },
      theme: {
        color: '#06B6D4'
      },
      modal: {
        ondismiss: function () {
          setPaymentStatus('Payment cancelled')
          toast.warn('Payment cancelled')
        }
      }
    }

    try {
      const rzp = new window.Razorpay(options)
      rzp.open()
    } catch (error) {
      console.error('Razorpay error:', error)
      toast.error('Payment failed. Please try again.')
    }

  }

  return (
    <section id="services" className="relative py-20 sm:py-32  bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
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

        <div className="grid md:grid-cols-2 gap-10  mx-auto">
          {/* Market Research Card */}


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

              <h4 className="text-3xl sm:text-4xl font-black mb-4 text-white">Elite Consultation</h4>
              <p className="text-purple-200 mb-6 text-base sm:text-lg leading-relaxed">
                Exclusive 1-on-1 strategic guidance from industry veterans with proven track records
              </p>

              {/* Price */}
              <div className="flex items-baseline mb-8">
                <span className="text-3xl sm:text-4xl md:text-6xl font-black bg-gradient-to-r from-purple-300 to-pink-400 bg-clip-text text-transparent">₹1000</span>
                <span className="text-purple-300 ml-3 text-lg">/session</span>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-10">
                <li className="flex items-start gap-4 text-purple-100">
                  <div className="mt-1 w-4 h-4 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                  </div>
                  <span className="text-sm sm:text-lg">90-minute executive session</span>
                </li>
                <li className="flex items-start gap-4 text-purple-100">
                  <div className="mt-1 w-4 h-4 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                  </div>
                  <span className="text-sm sm:text-lg">Custom strategic roadmap</span>
                </li>
                <li className="flex items-start gap-4 text-purple-100">
                  <div className="mt-1 w-4 h-4 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                  </div>
                  <span className="text-sm sm:text-lg">Priority email support (30 days)</span>
                </li>
                <li className="flex items-start gap-4 text-purple-100">
                  <div className="mt-1 w-4 h-4 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                  </div>
                  <span className="text-sm sm:text-lg">Exclusive industry insights</span>
                </li>
              </ul>

              <button
                onClick={() => handlePayment(100000, 'Consultation Session')}
                className="group w-full bg-white text-purple-900 px-4 py-3 sm:px-8 sm:py-5 rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-3"
                disabled={!razorpayLoaded}
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

// About Component
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

              <div className="grid md:grid-cols-4 gap-6">
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition"></div>
                  <div className="relative text-center p-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700">
                    <Globe className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                    <div className="text-5xl font-black text-white mb-2">10+</div>
                    <div className="text-gray-400 font-semibold text-sm">Years Leading</div>
                  </div>
                </div>
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition"></div>
                  <div className="relative text-center p-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700">
                    <BarChart3 className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                    <div className="text-5xl font-black text-white mb-2">500+</div>
                    <div className="text-gray-400 font-semibold text-sm">Elite Reports</div>
                  </div>
                </div>
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition"></div>
                  <div className="relative text-center p-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700">
                    <Star className="w-8 h-8 text-purple-400 mx-auto mb-3 fill-current" />
                    <div className="text-5xl font-black text-white mb-2">98%</div>
                    <div className="text-gray-400 font-semibold text-sm">Success Rate</div>
                  </div>
                </div>
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-cyan-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition"></div>
                  <div className="relative text-center p-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700">
                    <Zap className="w-8 h-8 text-pink-400 mx-auto mb-3" />
                    <div className="text-5xl font-black text-white mb-2">24h</div>
                    <div className="text-gray-400 font-semibold text-sm">Fast Delivery</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Contact Component
// function Contact() {
//   const [formData, setFormData] = useState({ name: '', email: '', message: '' })
//   const [submitStatus, setSubmitStatus] = useState('')

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     setSubmitStatus('Message sent successfully!')
//     setFormData({ name: '', email: '', message: '' })
//     setTimeout(() => setSubmitStatus(''), 3000)
//   }

//   return (
//     <section id="contact" className="relative py-32 bg-black overflow-hidden">
//       {/* Background */}
//       <div className="absolute inset-0">
//         <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950 to-black"></div>
//         <div className="absolute top-0 left-1/3 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl opacity-20"></div>
//         <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl opacity-20"></div>
//       </div>

//       <div className="container mx-auto px-6 relative z-10">
//         <div className="max-w-2xl mx-auto">
//           <div className="text-center mb-16">
//             <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 backdrop-blur-xl px-6 py-3 rounded-full mb-6 border border-purple-500/30">
//               <Mail className="w-5 h-5 text-purple-400" />
//               <span className="text-purple-400 text-sm font-bold tracking-wider">CONNECT WITH EXCELLENCE</span>
//             </div>
//             <h3 className="text-6xl md:text-7xl font-black mb-6 text-white">Let's Create</h3>
//             <p className="text-2xl text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text font-black">
//               Something Extraordinary
//             </p>
//           </div>

//           <div className="relative">
//             {/* Glow effect */}
//             <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-3xl blur-2xl opacity-20"></div>

//             <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-10 border border-gray-700">
//               <div className="space-y-6">
//                 <div className="relative">
//                   <input
//                     type="text"
//                     placeholder="Your Name"
//                     value={formData.name}
//                     onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                     className="w-full p-5 bg-black bg-opacity-50 backdrop-blur-xl border border-gray-700 rounded-2xl focus:outline-none focus:border-cyan-500 text-white placeholder-gray-500 text-lg transition-all"
//                     required
//                   />
//                 </div>
//                 <div className="relative">
//                   <input
//                     type="email"
//                     placeholder="Your Email"
//                     value={formData.email}
//                     onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                     className="w-full p-5 bg-black bg-opacity-50 backdrop-blur-xl border border-gray-700 rounded-2xl focus:outline-none focus:border-cyan-500 text-white placeholder-gray-500 text-lg transition-all"
//                     required
//                   />
//                 </div>
//                 <div className="relative">
//                   <textarea
//                     placeholder="Tell us about your vision..."
//                     value={formData.message}
//                     onChange={(e) => setFormData({ ...formData, message: e.target.value })}
//                     className="w-full p-5 bg-black bg-opacity-50 backdrop-blur-xl border border-gray-700 rounded-2xl focus:outline-none focus:border-cyan-500 text-white placeholder-gray-500 text-lg transition-all resize-none"
//                     rows="6"
//                     required
//                   />
//                 </div>
//                 <button
//                   onClick={handleSubmit}
//                   className="group w-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-8 py-5 rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 flex items-center justify-center gap-3 relative overflow-hidden"
//                 >
//                   <span className="relative z-10">Send Message</span>
//                   <ArrowRight className="w-6 h-6 relative z-10 group-hover:translate-x-2 transition-transform" />
//                   <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
//                 </button>
//                 {submitStatus && (
//                   <p className="text-cyan-400 text-center font-bold text-lg">{submitStatus}</p>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

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
                alt="logo"
                className="w-30"
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

// Main App Component
function App() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-black">
      <Header scrollToSection={scrollToSection} />
      <Hero scrollToSection={scrollToSection} />
      <Services />
      <About />
      <Contact />
      <Footer />

      {/* Toastify */}
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
  )
}

export default App  ;