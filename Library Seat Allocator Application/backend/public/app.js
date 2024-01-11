document.addEventListener('DOMContentLoaded', function () {
  const createButton = document.getElementById('createButton'); // Use 'createButton' instead of 'createSeatForm'

  const seatsButton = document.getElementById('seatsButton');
  seatsButton.addEventListener('click', function () {
    // Redirect to seats.html
    window.location.href = './seats.html';
  });

  createButton.addEventListener('click', async function (event) { // Use 'createButton' here as well
    event.preventDefault();

    // Get form values for creating seats
    const totalSeats = document.getElementById('totalSeats').value;

    // Construct the data object for creating seats
    const seatFormData = {
      totalSeats: parseInt(totalSeats),
    };

    try {
      // Send the data to the backend for creating seats
      const response = await fetch('http://localhost:5000/api/createSeats', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(seatFormData),
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log(`Successfully created ${totalSeats} seats.`);
      } else {
        console.error("Failed to send data to the server");
      }
    } catch (error) {
      console.error('Error sending data to the server:', error);
    }
  });
});
