# Certifications Section Edit Plan

**Information Gathered:**
- File analyzed: portfolio-v2-dark.html (current structure: Navbar → Hero → Skills → Projects → Contact → Footer)
- Theme: Dark background (#110720) with teal accents (#14b8a6)
- Sections use `.section`, `.container`, `.section-title`
- Grid systems: `.skills-grid`, `.projects-grid`, `.contact-grid`
- Existing responsive breakpoints: 1280px, 1024px, 768px, 480px
- No existing certifications section

**Plan:**
1. **Insert Certifications section** after Projects (before Contact)
2. **CSS Styles:**
   - `.certifications-grid`: 2-column grid (responsive)
   - `.cert-item`: Card style matching theme
   - `.cert-eye`: Eye icon with hover (scale + color)
   - `.cert-modal`: Centered modal with overlay
3. **HTML Structure:**
   ```
   <section id="certifications">
     <div class="container">
       <h2>Certifications</h2>
       <div class="certifications-grid">
         4 cert items with data-cert="placeholder.pdf"
       </div>
     </div>
   </section>
   <div class="cert-modal">...</div>
   ```
4. **JavaScript:**
   - Modal open/close functionality
   - Event listeners for eye icons and close

**Dependent Files:** portfolio-v2-dark.html

**Follow-up:** Add actual certificate PDFs/images later

Ready to implement. Confirm before editing?

