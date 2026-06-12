console.log("Debasish Lenka Portfolio Loaded Successfully 🚀");

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

function downloadCV() {
  window.open('files/Debasish_Lenka_CV.pdf', '_blank');
}

function startProject() {
  document.querySelector('#contact').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function openLinkedIn() {
  window.open('https://linkedin.com/in/debasish-lenka-0a9815352', '_blank');
}

function openProject(projectId) {
  const projects = {
    1: 'projects/network-infrastructure.html',
    2: 'projects/o365-administration.html',
    3: 'projects/helpdesk-support.html',
    4: 'projects/cisco-meraki-mx75.html',
    5: 'projects/unifi-access-points.html',
    6: 'projects/manageengine-dlp.html'
  };
  window.open(projects[projectId], '_blank');
}

function flipCert(certCard) {
  certCard.classList.toggle('flipped');
}

function minimizeOthers(currentElement) {
  const allItems = document.querySelectorAll('.experience-item');
  allItems.forEach(item => {
    if (item !== currentElement) {
      item.classList.add('minimized');
    }
  });
}

function restoreOthers() {
  const allItems = document.querySelectorAll('.experience-item');
  allItems.forEach(item => {
    item.classList.remove('minimized');
  });
}

function moveTooltip(event) {
  const tooltip = document.getElementById('experienceTooltip');
  if (tooltip.style.display === 'block') {
    tooltip.style.left = (event.pageX + 10) + 'px';
    tooltip.style.top = (event.pageY + 10) + 'px';
  }
}

function showExperienceTooltip(element, expId) {
  const experiences = {
    1: {
      title: "Technical Support Engineer",
      company: "Dietary Business Intelligence",
      roles: [
        "Configured L2/L3 switches and Cisco Meraki Firewall",
        "Managed wireless networks (Access Points - Unifi)",
        "Ensured IT compliance, data security, and system uptime",
        "Provided L1 & L2 support for desktops, networks, and firewall",
        "Administered Office 365 and Azure Active Directory"
      ]
    },
    2: {
      title: "Executive",
      company: "Thyrocare Technologies",
      roles: [
        "Worked with laboratory information systems (LIS)",
        "Managed test processing and report management",
        "Handled system-based reporting and data entry",
        "Ensured data accuracy and quality control"
      ]
    },
    3: {
      title: "Field Technician",
      company: "Rajkumari Foundation",
      roles: [
        "Performed first-level troubleshooting",
        "Coordinated escalations with vendors and technical teams",
        "Ensured proper documentation and preventive checks",
        "Assisted in installation and basic configuration",
        "Ensured adherence to quality standards and timelines"
      ]
    }
  };
  
  const exp = experiences[expId];
  const tooltip = document.getElementById('experienceTooltip');
  
  tooltip.innerHTML = `
    <h4>${exp.title}</h4>
    <p class="company-name">${exp.company}</p>
    <ul class="tooltip-roles">
      ${exp.roles.map(role => `<li>${role}</li>`).join('')}
    </ul>
  `;
  
  tooltip.style.display = 'block';
}

function hideExperienceTooltip() {
  document.getElementById('experienceTooltip').style.display = 'none';
}

function getInTouch() {
  window.open('mailto:debasishlenka@myyahoo.com?subject=Contact Inquiry&body=Hi Debasish, I would like to get in touch with you regarding technical support services.', '_blank');
}

function submitForm(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  
  const subject = `Contact from ${name}`;
  const body = `Name: ${name}%0AEmail: ${email}%0A%0AMessage:%0A${message}`;
  
  window.open(`mailto:debasishlenka@myyahoo.com?subject=${subject}&body=${body}`, '_blank');
  
  // Reset form
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('message').value = '';
  
  alert('Thank you! Your message has been prepared. Please send the email from your email client.');
}

// Visitor Counter
function updateVisitorCount() {
  let visitors = localStorage.getItem('visitorCount');
  if (!visitors) {
    visitors = 0;
  }
  visitors = parseInt(visitors) + 1;
  localStorage.setItem('visitorCount', visitors);
  
  // Animate counter like speedometer
  let current = 0;
  const increment = visitors / 50;
  const timer = setInterval(() => {
    current += increment;
    if (current >= visitors) {
      current = visitors;
      clearInterval(timer);
    }
    document.getElementById('visitor-count').textContent = Math.floor(current).toLocaleString();
  }, 30);
}

// Initialize visitor counter when page loads
document.addEventListener('DOMContentLoaded', updateVisitorCount);

// Clear form after submission
function clearForm() {
  setTimeout(() => {
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
  }, 1000);
}

function showExpandedExperience(element) {
  const expanded = element.querySelector('.experience-expanded');
  if (expanded) {
    expanded.style.display = 'block';
    element.style.transform = 'scale(1.02)';
    element.style.zIndex = '10';
  }
}

function hideExpandedExperience(element) {
  const expanded = element.querySelector('.experience-expanded');
  if (expanded) {
    expanded.style.display = 'none';
    element.style.transform = 'scale(1)';
    element.style.zIndex = '1';
  }
}