document.addEventListener("DOMContentLoaded", () => {
  // Mobile Navigation Toggle
  const mobileNavToggle = document.querySelector(".mobile-nav-toggle")
  const nav = document.querySelector("nav ul")

  mobileNavToggle.addEventListener("click", () => {
    nav.classList.toggle("show")
  })

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href")
      const targetElement = document.querySelector(targetId)

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        })
      }

      // Close mobile menu after clicking a link
      if (window.innerWidth <= 768) {
        nav.classList.remove("show")
      }
    })
  })

  // Equipment slider functionality
  const slides = [
    {
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DJI_20250304093308_0072_D.JPG-BbjtZHhEBRW5rbMSImQR4JFGOk3CRc.jpeg",
      alt: "Incline Bench and Dumbbell Area",
      caption: "Extensive Free Weight Area with Professional Equipment",
    },
    {
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DJI_20250304094534_0074_D.JPG-tS3IoBn6F3nWwlO4F8RbQAEBDhCxKg.jpeg",
      alt: "Power Racks and Squat Stations",
      caption: "Multiple Power Racks for Serious Strength Training",
    },
    {
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DJI_20250304093410_0073_D.JPG-79rrCrgNV65hHmxT1or7LSftFLbOzi.jpeg",
      alt: "Olympic Lifting Platform",
      caption: "Dedicated Olympic Lifting Area with Competition Plates",
    },
    {
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DJI_20250304094634_0077_D.JPG-G6TEA6UPQEYbilLUANr7FGa1D60CO0.jpeg",
      alt: "Cardio Equipment Area",
      caption: "High-End Cardio Equipment Including Rogue Echo Bikes",
    },
    {
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DJI_20250304094623_0076_D.JPG-AiXTo34nFCJ5eBf0fr7eV5X97VKkJV.jpeg",
      alt: "Hammer Strength Equipment",
      caption: "Professional Grade Hammer Strength Machines",
    },
    {
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DJI_20250304094556_0075_D.JPG-6GI5lFd95NuK0PiHWXLgDEAgP1UAZb.jpeg",
      alt: "Competition Bench Area",
      caption: "Competition-Grade Bench Press Stations",
    },
    {
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DJI_20250304094648_0078_D.JPG-GRXs94PrubcGrumO4411O9OhgB2SE1.jpeg",
      alt: "Machine Training Area",
      caption: "Comprehensive Machine and Functional Training Area",
    },
  ]

  let currentSlide = 0
  const sliderContainer = document.querySelector(".equipment-slider")
  const dotsContainer = document.querySelector(".slider-dots")

  // Clear existing dots
  dotsContainer.innerHTML = ""

  // Create dots based on number of slides
  slides.forEach((_, index) => {
    const dot = document.createElement("span")
    dot.classList.add("dot")
    if (index === 0) dot.classList.add("active")
    dotsContainer.appendChild(dot)
  })

  const dots = document.querySelectorAll(".dot")

  // First, ensure the image-placeholder has the correct background color
  const imageContainer = sliderContainer.querySelector(".image-placeholder")
  if (imageContainer) {
    imageContainer.style.backgroundColor = "var(--vintage-black)"
  }

  // Update the showSlide function to include a preview of the next image
  function showSlide(index) {
    const imageContainer = sliderContainer.querySelector(".image-placeholder")

    // Calculate the index of the next slide
    const nextIndex = (index + 1) % slides.length

    // Create the main image and the preview of the next image
    imageContainer.innerHTML = `
    <div style="display: flex; position: relative; width: 100%; background-color: var(--vintage-black); max-height: 400px; overflow: hidden;">
      <div style="flex: 1; background-color: var(--vintage-black);">
        <img src="${slides[index].image}" 
             alt="${slides[index].alt}" 
             style="width: 100%; height: 400px; object-fit: cover; border-radius: 8px 0 0 8px;">
      </div>
      <div style="width: 80px; position: relative; overflow: hidden; border-radius: 0 8px 8px 0; background-color: var(--vintage-black);">
        <img src="${slides[nextIndex].image}" 
             alt="Preview of next image" 
             style="width: 200px; height: 400px; object-fit: cover; filter: blur(5px); opacity: 0.7; transform: scale(1.1); position: absolute; right: 0; top: 0;">
        <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); color: white; font-size: 24px;">
          <i data-lucide="chevron-right" style="width: 30px; height: 30px;"></i>
        </div>
      </div>
    </div>
    <p style="text-align: center; margin-top: 1rem; color: var(--vintage-white); background-color: var(--vintage-black);">
      ${slides[index].caption}
    </p>
  `

    // Initialize the Lucide icon in the preview
    lucide.createIcons()

    // Reset all dots
    dots.forEach((dot) => dot.classList.remove("active"))
    // Activate current dot
    dots[index].classList.add("active")
  }

  // Initialize slider
  showSlide(currentSlide)

  // Next button click
  document.querySelector(".next-btn").addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % slides.length
    showSlide(currentSlide)
  })

  // Previous button click
  document.querySelector(".prev-btn").addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length
    showSlide(currentSlide)
  })

  // Dot clicks
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      currentSlide = index
      showSlide(currentSlide)
    })
  })

  // Auto advance slides every 5 seconds
  setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length
    showSlide(currentSlide)
  }, 5000)

  // Social Media Popups
  const joinCommunityButton = document.getElementById("join-community-btn")
  const socialMediaPopups = document.getElementById("social-media-popups")
  const socialMediaClose = socialMediaPopups ? socialMediaPopups.querySelector(".close") : null

  // Show social media popups when "JOIN OUR COMMUNITY" button is clicked
  if (joinCommunityButton) {
    joinCommunityButton.addEventListener("click", (e) => {
      e.preventDefault()
      e.stopPropagation()
      socialMediaPopups.style.display = "block"

      // Initialize Lucide icons in the popup
      lucide.createIcons()
    })
  }

  // Close social media popups - improved for mobile
  if (socialMediaClose) {
    socialMediaClose.addEventListener("click", (e) => {
      e.preventDefault()
      e.stopPropagation()
      socialMediaPopups.style.display = "none"
    })
  }

  // Close social media popups when clicking outside
  window.addEventListener("click", (e) => {
    if (socialMediaPopups && e.target === socialMediaPopups) {
      socialMediaPopups.style.display = "none"
    }
  })

  // Remove the conflicting CTA button code and keep the original
  // CTA Buttons
  document.querySelectorAll(".cta-button").forEach((button) => {
    if (button.id !== "join-community-btn") {
      button.addEventListener("click", () => {
        alert("This would open a booking/signup form in a real implementation.")
      })
    }
  })

  // Add touch support for equipment slider
  if (sliderContainer) {
    let touchStartX = 0
    let touchEndX = 0

    sliderContainer.addEventListener(
      "touchstart",
      (e) => {
        touchStartX = e.changedTouches[0].screenX
      },
      false,
    )

    sliderContainer.addEventListener(
      "touchend",
      (e) => {
        touchEndX = e.changedTouches[0].screenX
        handleSwipe()
      },
      false,
    )

    function handleSwipe() {
      if (touchEndX < touchStartX - 50) {
        // Swipe left - next slide
        currentSlide = (currentSlide + 1) % slides.length
        showSlide(currentSlide)
      }

      if (touchEndX > touchStartX + 50) {
        // Swipe right - previous slide
        currentSlide = (currentSlide - 1 + slides.length) % slides.length
        showSlide(currentSlide)
      }
    }
  }

  // Add retro effect to titles on scroll
  const titles = document.querySelectorAll(".section-title")

  function checkScroll() {
    titles.forEach((title) => {
      const titlePosition = title.getBoundingClientRect().top
      const screenPosition = window.innerHeight / 1.3

      if (titlePosition < screenPosition) {
        title.style.textShadow = "3px 3px 0px var(--primary-color)"
        title.style.transform = "scale(1.05)"
        title.style.transition = "all 0.5s ease"
      }
    })
  }

  // Check on scroll
  window.addEventListener("scroll", checkScroll)

  // Check on load
  checkScroll()

  // Timeline functionality
  function timeline() {
    var timelineItems = document.querySelectorAll(".timeline-item")
    var timelineContainer = document.querySelector(".timeline-container")

    function isElementInViewport(el) {
      var rect = el.getBoundingClientRect()
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      )
    }

    function callbackFunc() {
      for (var i = 0; i < timelineItems.length; i++) {
        if (isElementInViewport(timelineItems[i])) {
          timelineItems[i].classList.add("timeline-item--active")
        }
      }
    }

    window.addEventListener("load", callbackFunc)
    window.addEventListener("scroll", callbackFunc)
  }

  timeline()
})

// Initialize Lucide icons
const lucide = window.lucide
lucide.createIcons()


