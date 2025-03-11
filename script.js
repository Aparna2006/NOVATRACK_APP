// Handle Complaint Submission
document.getElementById('complaint-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const complaintType = document.getElementById('complaint-type').value;
    const description = document.getElementById('description').value;
    
    // Simulate a unique Complaint ID (In real app, this should be from backend)
    const complaintID = Math.floor(Math.random() * 10000);
    
    // Store complaint (In real app, store this data in a database)
    localStorage.setItem(`complaint-${complaintID}`, JSON.stringify({
        type: complaintType,
        description: description
    }));

    // Display confirmation message
    document.getElementById('confirmation-message').innerHTML = `
        <p>Complaint submitted successfully! Your Complaint ID is: <strong>${complaintID}</strong></p>
    `;
    document.getElementById('complaint-form').reset();
});

// Handle Complaint Tracking
document.getElementById('track-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const complaintID = document.getElementById('complaint-id').value;
    
    // Retrieve complaint data from localStorage (In real app, fetch from database)
    const complaintData = JSON.parse(localStorage.getItem(`complaint-${complaintID}`));

    if (complaintData) {
        document.getElementById('track-result').innerHTML = `
            <p>Complaint Type: ${complaintData.type}</p>
            <p>Description: ${complaintData.description}</p>
        `;
    } else {
        document.getElementById('track-result').innerHTML = `
            <p>No complaint found with ID: ${complaintID}</p>
        `;
    }
});
