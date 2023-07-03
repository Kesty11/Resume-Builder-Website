// Handle form submission
document.getElementById('resumeForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get form values
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const degree = document.getElementById('degree').value;
    const university = document.getElementById('university').value;
    const gradYear = document.getElementById('gradYear').value;
    const company = document.getElementById('company').value;
    const position = document.getElementById('position').value;
    const workStartDate = document.getElementById('workStartDate').value;
    const workEndDate = document.getElementById('workEndDate').value;
  
    // Generate resume preview
    const resumePreview = `
      <h2>Personal Information</h2>
      <p><strong>Name:</strong> ${fullName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
  
      <h2>Education</h2>
      <p><strong>Degree:</strong> ${degree}</p>
      <p><strong>University:</strong> ${university}</p>
      <p><strong>Graduation Year:</strong> ${gradYear}</p>
  
      <h2>Work Experience</h2>
      <p><strong>Company:</strong> ${company}</p>
      <p><strong>Position:</strong> ${position}</p>
      <p><strong>Start Date:</strong> ${workStartDate}</p>
      <p><strong>End Date:</strong> ${workEndDate}</p>
    `;
  
    // Display resume preview
    document.getElementById('resumePreview').innerHTML = resumePreview;
  });
  