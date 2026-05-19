// ============================================================
//  EduBot – AI College Enquiry Chatbot
// ============================================================

const KB = {
  admissions: {
    keywords: ["admission","apply","enroll","eligibility","entrance","application","join","registration","cutoff","merit"],
    title: "Admissions",
    response: `<h3>🎓 Admissions at People University</h3>
<table class="info-table">
  <tr><td>UG Eligibility</td><td>10+2 with 60%+ (PCM/PCB)</td></tr>
  <tr><td>PG Eligibility</td><td>Bachelor's with 55%+ CGPA</td></tr>
  <tr><td>Entrance Exams</td><td>JEE Main / MHT-CET / CUET</td></tr>
  <tr><td>Application Mode</td><td>Online (peopleuniversity.edu.in)</td></tr>
  <tr><td>Last Date (UG)</td><td>June 30, 2025</td></tr>
  <tr><td>Last Date (PG)</td><td>July 15, 2025</td></tr>
</table>
<div class="tag-row"><span class="tag">Merit-based</span><span class="tag">Management Quota</span><span class="tag">NRI Quota</span></div>`
  },
  courses: {
    keywords: ["course","program","branch","department","study","degree","bca","mca","bsc","msc","science","arts","commerce"],
    title: "General Courses",
    response: `<h3>📚 Programs Offered</h3>
<p>We offer specialized programs across various disciplines:</p>
<ul>
  <li><strong>B.Tech</strong> (CSE, ECE, EEE, Mechanical, Civil)</li>
  <li><strong>MBA</strong> (Marketing, Finance, HR)</li>
  <li><strong>Ph.D</strong> in major disciplines</li>
</ul>
<p style="margin-top:8px;font-size:0.82rem;color:#8890a8">💡 Ask me specifically about "B.Tech Specializations" or "MBA Specializations" for details!</p>`
  },
  btech: {
    keywords: ["btech","b.tech","engineering","cse","ece","eee","mechanical","civil"],
    title: "B.Tech Specializations",
    response: `<h3>🖥️ B.Tech Programs & Specializations</h3>
<strong>B.Tech CSE Specializations:</strong>
<ul>
  <li>Artificial Intelligence & ML</li>
  <li>Data Science</li>
  <li>Cyber Security</li>
  <li>Cloud Computing</li>
</ul>
<strong>Other B.Tech Branches:</strong>
<ul>
  <li>ECE</li>
  <li>EEE</li>
  <li>Mechanical</li>
  <li>Civil</li>
</ul>`
  },
  mba: {
    keywords: ["mba","management","marketing","finance","hr","human resources"],
    title: "MBA Specializations",
    response: `<h3>📊 MBA Specializations</h3>
<p>Our 2-year MBA program offers the following specializations:</p>
<ul>
  <li>Marketing</li>
  <li>Finance</li>
  <li>Human Resources (HR)</li>
</ul>`
  },
  phd: {
    keywords: ["phd","doctoral","research","doctorate"],
    title: "Ph.D Specializations",
    response: `<h3>🔬 Ph.D Specializations</h3>
<ul>
  <li>Computer Science</li>
  <li>Mechanical Engineering</li>
  <li>Management Studies</li>
  <li>Applied Sciences</li>
  <li>Economics</li>
</ul>`
  },
  fees: {
    keywords: ["fee","fees","cost","tuition","payment","installment","annual","semester","charge","expense","price","affordable"],
    title: "Fees Structure",
    response: `<h3>💳 Fee Structure (2026 Academic Year)</h3>
<table class="info-table">
  <tr><td>B.Tech CSE (All Specs)</td><td>₹3,50,000/yr</td></tr>
  <tr><td>B.Tech (ECE/EEE/Mech/Civil)</td><td>₹2,20,000/yr</td></tr>
  <tr><td>BCA / B.Sc / BBA</td><td>₹1,20,000/yr</td></tr>
  <tr><td>MBA</td><td>₹5,50,000/yr</td></tr>
  <tr><td>M.Tech / MCA</td><td>₹1,80,000/yr</td></tr>
  <tr><td>Ph.D Programs</td><td>₹90,000/yr</td></tr>
</table>
<p style="margin-top:8px;font-size:0.82rem;color:#8890a8">💡 Fees can be paid in 2 installments per semester. DD/Online/UPI accepted.</p>`
  },
  hostel: {
    keywords: ["hostel","accommodation","dorm","dormitory","room","mess","pg","boys","girls","stay","living","residential"],
    title: "Hostel",
    response: `<h3>🏠 Hostel Facilities</h3>
<table class="info-table">
  <tr><td>Capacity</td><td>3,000 students</td></tr>
  <tr><td>Boys Hostels</td><td>5 blocks (A–E)</td></tr>
  <tr><td>Girls Hostels</td><td>3 blocks (F–H)</td></tr>
  <tr><td>Room Types</td><td>Single / Double / Triple</td></tr>
  <tr><td>Hostel Fee</td><td>₹60,000–₹90,000/year</td></tr>
  <tr><td>Mess Fee</td><td>₹36,000/year</td></tr>
</table>
<ul style="margin-top:8px">
  <li>24×7 Wi-Fi, CCTV & Security</li>
  <li>Laundry, Gym & Common Room</li>
  <li>Medical room on campus</li>
</ul>`
  },
  placements: {
    keywords: ["placement","job","recruit","salary","package","company","lpa","ctc","internship","hire","career","campus","offer","letter"],
    title: "Placements",
    response: `<h3>💼 Placement Highlights 2024</h3>
<table class="info-table">
  <tr><td>Placement Rate</td><td>95%</td></tr>
  <tr><td>Highest Package</td><td>₹48 LPA</td></tr>
  <tr><td>Average Package</td><td>₹12.4 LPA</td></tr>
  <tr><td>Companies Visited</td><td>200+</td></tr>
  <tr><td>Offers Made</td><td>2,800+</td></tr>
</table>
<strong>Top Recruiters:</strong>
<div class="tag-row">
  <span class="tag">Google</span><span class="tag">Microsoft</span><span class="tag">Amazon</span>
  <span class="tag">Infosys</span><span class="tag">TCS</span><span class="tag">Wipro</span>
  <span class="tag">Deloitte</span><span class="tag">Accenture</span>
</div>`
  },
  scholarships: {
    keywords: ["scholarship","merit","financial aid","free","waiver","stipend","grant","bursary","fund","discount","concession"],
    title: "Scholarships",
    response: `<h3>🏆 Scholarship Programs</h3>
<ul>
  <li><strong>Well Study Scholars:</strong> Up to 100% fee waiver for well-studying students</li>
  <li><strong>Merit Scholarship:</strong> Up to 100% fee waiver for rank ≤ 100 in JEE/MHT-CET</li>
  <li><strong>Sports Quota:</strong> 50% fee waiver for national-level athletes</li>
  <li><strong>SC/ST/OBC:</strong> Government scholarships + college concession</li>
  <li><strong>Girl Child Scheme:</strong> 25% tuition fee waiver</li>
  <li><strong>Alumni Scholarship:</strong> ₹25,000/year for meritorious students</li>
  <li><strong>Research Fellowship:</strong> ₹15,000/month for Ph.D scholars</li>
</ul>
<p style="margin-top:8px;font-size:0.82rem;color:#8890a8">📝 Apply via student portal after admission confirmation.</p>`
  },
  facilities: {
    keywords: ["facility","facilities","lab","library","sports","gym","cafeteria","canteen","wifi","internet","infrastructure","medical","bank","atm"],
    title: "Campus Facilities",
    response: `<h3>🏛️ Campus Facilities</h3>
<ul>
  <li>🔬 30+ Advanced Research & Computing Labs</li>
  <li>📖 Central Library (1.5 Lakh+ books, e-journals)</li>
  <li>⚽ Multi-sport Ground (Cricket, Football, Basketball)</li>
  <li>🏊 Olympic-size Swimming Pool</li>
  <li>🍽️ 4 Cafeterias + Food Court</li>
  <li>🏥 24×7 Medical Center & Ambulance</li>
  <li>🏦 SBI & HDFC ATM on campus</li>
  <li>🎭 Auditorium (2,500 capacity)</li>
  <li>📡 Campus-wide Gigabit Wi-Fi</li>
</ul>`
  },
  activities: {
    keywords: ["club","activity","activities","fest","cultural","technical","event"],
    title: "Clubs & Activities",
    response: `<h3>🎭 Student Clubs & Activities</h3>
<p>We have a vibrant campus life with over 20 active student clubs:</p>
<ul>
  <li><strong>Technical Clubs:</strong> Coding Club, Robotics Society, GDSC</li>
  <li><strong>Cultural Clubs:</strong> Dance, Drama, Music, Fine Arts</li>
  <li><strong>Other Clubs:</strong> Debate Society, Photography, E-Cell</li>
</ul>
<p style="margin-top:8px;font-size:0.82rem;color:#8890a8">🎉 Every year we host <strong>TechFest</strong> (Technical) and <strong>Aura</strong> (Cultural Fest)!</p>`
  },
  contact: {
    keywords: ["contact","address","phone","email","call","location","office","website","reach","visit","enquiry","helpline","number"],
    title: "Contact Info",
    response: `<h3>📞 Contact People University</h3>
<table class="info-table">
  <tr><td>Address</td><td>Plot 42, Knowledge Park, Pune, Maharashtra – 411041</td></tr>
  <tr><td>Admissions</td><td>+91-20-4567-8900</td></tr>
  <tr><td>Toll-Free</td><td>1800-222-8080</td></tr>
  <tr><td>Email</td><td>admissions@peopleuniversity.edu.in</td></tr>
  <tr><td>Website</td><td>www.peopleuniversity.edu.in</td></tr>
  <tr><td>Office Hours</td><td>Mon–Sat, 9 AM – 5 PM</td></tr>
</table>`
  },
  principal: {
    keywords: ["principal","director","vice chancellor","chancellor","vc","head","dean","management","founder"],
    title: "Leadership",
    response: `<h3>👨‍💼 University Leadership</h3>
<table class="info-table">
  <tr><td>Chancellor</td><td>Dr. Ramesh Nair</td></tr>
  <tr><td>Vice Chancellor</td><td>Prof. Sunita Krishnan</td></tr>
  <tr><td>Registrar</td><td>Mr. Anil Mehta</td></tr>
  <tr><td>Dean Academics</td><td>Dr. Priya Sharma</td></tr>
  <tr><td>Dean Students</td><td>Dr. Vikram Patel</td></tr>
  <tr><td>Placement Officer</td><td>Ms. Neha Kulkarni</td></tr>
</table>`
  },
  exam: {
    keywords: ["exam","examination","result","grade","cgpa","marks","attendance","backlog","revaluation","schedule","timetable","semester"],
    title: "Examinations",
    response: `<h3>📝 Examination Policy</h3>
<table class="info-table">
  <tr><td>Pattern</td><td>Semester System (6+4 credits)</td></tr>
  <tr><td>Grading</td><td>CGPA (10-point scale)</td></tr>
  <tr><td>Min Attendance</td><td>75% mandatory</td></tr>
  <tr><td>Internal Marks</td><td>40 (20 CIE + 20 Assignment)</td></tr>
  <tr><td>External Marks</td><td>60 marks per subject</td></tr>
  <tr><td>Results</td><td>Within 30 days of exam</td></tr>
</table>
<ul style="margin-top:8px">
  <li>Online revaluation available within 15 days</li>
  <li>Supplementary exams in July & November</li>
</ul>`
  }
};

const FALLBACK = [
  "I'm not sure I understood that. Could you rephrase? Try asking about <strong>admissions, courses, fees, hostel, or placements</strong>.",
  "Hmm, let me think… I don't have specific info on that yet. You can contact us at <strong>admissions@peopleuniversity.edu.in</strong> for more details!",
  "Great question! For personalized assistance, call our helpline at <strong>1800-222-8080</strong> (Mon–Sat, 9 AM–5 PM).",
  "I'm still learning! Try asking me about <strong>scholarships, facilities, exam policy, or contact details</strong>."
];

// ── DOM Refs ──
const chatMessages = document.getElementById("messages");
const userInput    = document.getElementById("inp");
const sendBtn      = document.getElementById("sendBtn");
const quickReplies = document.getElementById("chips");
const clearChatBtn = document.getElementById("clearBtn");
const helpBtn      = document.getElementById("helpBtn");
const menuBtn      = document.getElementById("menuBtn");
const sidebar      = document.querySelector(".sidebar");
const sidebarClose = document.getElementById("sbClose");
const navBtns      = document.querySelectorAll(".nb");
const infoPanelContent = document.getElementById("infoBody");
const infoClose    = document.getElementById("infoClose");

let fallbackIndex = 0;

// ── Helpers ──
function getTime() {
  return new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

function scrollToBottom() {
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function autoResizeTextarea() {
  userInput.style.height = "auto";
  userInput.style.height = Math.min(userInput.scrollHeight, 120) + "px";
}

// ── Render Messages ──
function appendMessage(role, html, skipAnimation = false) {
  const wrap = document.createElement("div");
  wrap.className = `message ${role}${skipAnimation ? " no-anim" : ""}`;

  const avatar = document.createElement("div");
  avatar.className = "msg-avatar";
  avatar.textContent = role === "bot" ? "👩‍🎓" : "👤";

  const content = document.createElement("div");
  content.className = "msg-content";

  const bubble = document.createElement("div");
  bubble.className = "msg-bubble";
  bubble.innerHTML = html;

  const time = document.createElement("div");
  time.className = "msg-time";
  time.textContent = getTime();

  content.appendChild(bubble);
  content.appendChild(time);
  wrap.appendChild(avatar);
  wrap.appendChild(content);
  chatMessages.appendChild(wrap);
  scrollToBottom();
  return wrap;
}

function showTyping() {
  const wrap = document.createElement("div");
  wrap.className = "message bot";
  wrap.id = "typingIndicator";
  const avatar = document.createElement("div");
  avatar.className = "msg-avatar";
  avatar.textContent = "👩‍🎓";
  const bubble = document.createElement("div");
  bubble.className = "msg-bubble";
  bubble.innerHTML = `<div class="typing-indicator">
    <div class="typing-dot"></div>
    <div class="typing-dot"></div>
    <div class="typing-dot"></div>
  </div>`;
  wrap.appendChild(avatar);
  wrap.appendChild(bubble);
  chatMessages.appendChild(wrap);
  scrollToBottom();
}

function removeTyping() {
  const t = document.getElementById("typingIndicator");
  if (t) t.remove();
}

// ── Intent Detection ──
function detectIntent(text) {
  const lower = text.toLowerCase();
  let best = null, bestScore = 0;
  for (const [key, data] of Object.entries(KB)) {
    const score = data.keywords.filter(k => lower.includes(k)).length;
    if (score > bestScore) { bestScore = score; best = key; }
  }
  return bestScore > 0 ? best : null;
}

// ── Bot Reply ──
function botReply(userText) {
  showTyping();
  const delay = 900 + Math.random() * 700;
  setTimeout(() => {
    removeTyping();
    const intent = detectIntent(userText);
    if (intent) {
      appendMessage("bot", KB[intent].response);
      updateInfoPanel(intent);
      highlightNav(intent);
    } else {
      appendMessage("bot", FALLBACK[fallbackIndex % FALLBACK.length]);
      fallbackIndex++;
    }
  }, delay);
}

// ── Send Message ──
function sendMessage() {
  const text = userInput.value.trim();
  if (!text) return;
  appendMessage("user", text);
  userInput.value = "";
  autoResizeTextarea();
  botReply(text);
}

// ── Info Panel ──
const INFO_DETAILS = {
  admissions: `
    <div class="ir-section">
      <h4>Key Dates 2025</h4>
      <div class="ir"><span class="lbl">Application Opens</span><span class="val">Mar 1, 2025</span></div>
      <div class="ir"><span class="lbl">UG Last Date</span><span class="val">Jun 30, 2025</span></div>
      <div class="ir"><span class="lbl">PG Last Date</span><span class="val">Jul 15, 2025</span></div>
      <div class="ir"><span class="lbl">Counselling</span><span class="val">Aug 1–15, 2025</span></div>
      <div class="ir"><span class="lbl">Classes Start</span><span class="val">Aug 25, 2025</span></div>
    </div>
    <div class="ir-section">
      <h4>Accepted Exams</h4>
      <div class="ir"><span class="lbl">Engineering</span><span class="val">JEE Main / MHT-CET</span></div>
      <div class="ir"><span class="lbl">Management</span><span class="val">CAT / MAT / CMAT</span></div>
      <div class="ir"><span class="lbl">Science</span><span class="val">CUET / NEET</span></div>
    </div>`,
  courses: `
    <div class="ir-section">
      <h4>Overview</h4>
      <div class="ir"><span class="lbl">B.Tech</span><span class="val">4 Years</span></div>
      <div class="ir"><span class="lbl">MBA</span><span class="val">2 Years</span></div>
      <div class="ir"><span class="lbl">Ph.D</span><span class="val">3-5 Years</span></div>
    </div>`,
  btech: `
    <div class="ir-section">
      <h4>B.Tech Highlights</h4>
      <div class="ir"><span class="lbl">CSE (AI/ML)</span><span class="val"><span class="ibadge g">Top Rated</span></span></div>
      <div class="ir"><span class="lbl">ECE</span><span class="val"><span class="ibadge t">High Placement</span></span></div>
      <div class="ir"><span class="lbl">Duration</span><span class="val">4 Years</span></div>
    </div>`,
  mba: `
    <div class="ir-section">
      <h4>MBA Highlights</h4>
      <div class="ir"><span class="lbl">Finance</span><span class="val"><span class="ibadge b">AACSB</span></span></div>
      <div class="ir"><span class="lbl">Marketing</span><span class="val"><span class="ibadge g">Popular</span></span></div>
      <div class="ir"><span class="lbl">Duration</span><span class="val">2 Years</span></div>
    </div>`,
  phd: `
    <div class="ir-section">
      <h4>Ph.D Highlights</h4>
      <div class="ir"><span class="lbl">Computer Sci</span><span class="val">Research Focus</span></div>
      <div class="ir"><span class="lbl">Stipend</span><span class="val">₹15k/month</span></div>
      <div class="ir"><span class="lbl">Duration</span><span class="val">3-5 Years</span></div>
    </div>`,
  fees: `
    <div class="ir-section">
      <h4>Payment Options</h4>
      <div class="ir"><span class="lbl">Mode</span><span class="val">Online / DD / UPI</span></div>
      <div class="ir"><span class="lbl">Installments</span><span class="val">2 per semester</span></div>
      <div class="ir"><span class="lbl">EMI</span><span class="val">Available via HDFC</span></div>
      <div class="ir"><span class="lbl">Education Loan</span><span class="val">SBI / HDFC / Axis</span></div>
    </div>`,
  placements: `
    <div class="ir-section">
      <h4>Year-wise Stats</h4>
      <div class="ir"><span class="lbl">2024 Highest</span><span class="val">₹48 LPA</span></div>
      <div class="ir"><span class="lbl">2023 Highest</span><span class="val">₹42 LPA</span></div>
      <div class="ir"><span class="lbl">2024 Avg</span><span class="val">₹12.4 LPA</span></div>
      <div class="ir"><span class="lbl">2023 Avg</span><span class="val">₹10.8 LPA</span></div>
      <div class="ir"><span class="lbl">Placement %</span><span class="val"><span class="ibadge g">95%</span></span></div>
    </div>`,
  hostel: `
    <div class="ir-section">
      <h4>Room Charges / Year</h4>
      <div class="ir"><span class="lbl">Single AC Room</span><span class="val">₹90,000</span></div>
      <div class="ir"><span class="lbl">Double Sharing</span><span class="val">₹70,000</span></div>
      <div class="ir"><span class="lbl">Triple Sharing</span><span class="val">₹60,000</span></div>
      <div class="ir"><span class="lbl">Mess (Veg)</span><span class="val">₹36,000</span></div>
    </div>`,
  scholarships: `
    <div class="ir-section">
      <h4>Eligibility Summary</h4>
      <div class="ir"><span class="lbl">Well Study Scholars</span><span class="val">Up to 100% waiver</span></div>
      <div class="ir"><span class="lbl">Merit (100%)</span><span class="val">JEE Rank ≤ 100</span></div>
      <div class="ir"><span class="lbl">Merit (50%)</span><span class="val">JEE Rank 101–500</span></div>
      <div class="ir"><span class="lbl">Sports</span><span class="val">National Level</span></div>
      <div class="ir"><span class="lbl">Girl Child</span><span class="val">25% waiver, all girls</span></div>
    </div>`,
  facilities: `
    <div class="ir-section">
      <h4>Infrastructure</h4>
      <div class="ir"><span class="lbl">Campus Area</span><span class="val">180 Acres</span></div>
      <div class="ir"><span class="lbl">Classrooms</span><span class="val">200+ Smart Rooms</span></div>
      <div class="ir"><span class="lbl">Labs</span><span class="val">30+ Advanced Labs</span></div>
      <div class="ir"><span class="lbl">Library Books</span><span class="val">1.5 Lakh+</span></div>
      <div class="ir"><span class="lbl">Wi-Fi Speed</span><span class="val">1 Gbps Campus-wide</span></div>
    </div>`,
  activities: `
    <div class="ir-section">
      <h4>Student Life</h4>
      <div class="ir"><span class="lbl">TechFest</span><span class="val">March 2026</span></div>
      <div class="ir"><span class="lbl">Aura Fest</span><span class="val">October 2026</span></div>
      <div class="ir"><span class="lbl">Total Clubs</span><span class="val">20+</span></div>
    </div>`,
  contact: `
    <div class="ir-section">
      <h4>Reach Us</h4>
      <div class="ir"><span class="lbl">Admissions</span><span class="val">+91-20-4567-8900</span></div>
      <div class="ir"><span class="lbl">Toll-Free</span><span class="val">1800-222-8080</span></div>
      <div class="ir"><span class="lbl">WhatsApp</span><span class="val">+91-98765-43210</span></div>
      <div class="ir"><span class="lbl">Hours</span><span class="val">Mon–Sat 9–5 PM</span></div>
    </div>`
};

function updateInfoPanel(topic) {
  if (INFO_DETAILS[topic]) {
    infoPanelContent.innerHTML = INFO_DETAILS[topic];
    document.getElementById("info").style.display = "";
  }
}

function highlightNav(topic) {
  navBtns.forEach(b => b.classList.remove("active"));
  const target = document.querySelector(`.nb[data-id="${topic}"]`);
  if (target) target.classList.add("active");
}

// ── Events ──
sendBtn.addEventListener("click", sendMessage);

userInput.addEventListener("keydown", e => {
  if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendMessage(); }
});

userInput.addEventListener("input", autoResizeTextarea);

quickReplies.querySelectorAll(".chip").forEach(chip => {
  chip.addEventListener("click", () => {
    userInput.value = chip.dataset.q;
    sendMessage();
  });
});

navBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    navBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    const msg = btn.dataset.q;
    appendMessage("user", msg);
    botReply(msg);
    if (window.innerWidth <= 768) sidebar.classList.remove("open");
  });
});

clearChatBtn.addEventListener("click", () => {
  chatMessages.innerHTML = "";
  renderWelcome();
});

helpBtn.addEventListener("click", () => {
  appendMessage("user", "Help! What can you do?");
  setTimeout(() => {
    appendMessage("bot", `<h3>👩‍🎓 What EduBot Can Help With</h3>
<ul>
  <li>🎓 <strong>Admissions</strong> – Eligibility, dates, quota</li>
  <li>📚 <strong>Courses</strong> – UG, PG, Ph.D programs</li>
  <li>💳 <strong>Fees</strong> – Tuition, hostel, installments</li>
  <li>🏠 <strong>Hostel</strong> – Rooms, mess, facilities</li>
  <li>💼 <strong>Placements</strong> – Stats, companies, packages</li>
  <li>🏆 <strong>Scholarships</strong> – Merit, sports, govt. schemes</li>
  <li>🏛️ <strong>Facilities</strong> – Labs, library, sports</li>
  <li>📞 <strong>Contact</strong> – Address, phone, email</li>
</ul>
<p style="margin-top:8px;font-size:0.82rem;color:#8890a8">Just type naturally or use the sidebar/chips to navigate!</p>`);
  }, 800);
});

menuBtn.addEventListener("click", () => sidebar.classList.toggle("open"));
sidebarClose.addEventListener("click", () => sidebar.classList.remove("open"));
if (infoClose) infoClose.addEventListener("click", () => document.getElementById("info").style.display = "none");

// ── Welcome Message ──
function renderWelcome() {
  const banner = document.createElement("div");
  banner.className = "welcome-banner";
  banner.innerHTML = `
    <div class="wb-avatar">🎓</div>
    <h2>Hi! I'm EduBot</h2>
    <p>Your AI-powered guide to <strong>People University</strong>. Ask me anything about admissions, courses, fees, hostel, placements, and more!</p>
    <div class="welcome-chips">
      <button class="welcome-chip" data-q="How to apply for admission?">How to apply?</button>
      <button class="welcome-chip" data-q="What courses are offered?">Courses offered</button>
      <button class="welcome-chip" data-q="What is the fee structure?">Fee structure</button>
      <button class="welcome-chip" data-q="Tell me about placements">Placements</button>
    </div>`;
  chatMessages.appendChild(banner);
  banner.querySelectorAll(".welcome-chip").forEach(chip => {
    chip.addEventListener("click", () => {
      userInput.value = chip.dataset.q;
      sendMessage();
    });
  });
  scrollToBottom();
}

// ── Init ──
renderWelcome();
updateInfoPanel("admissions");
