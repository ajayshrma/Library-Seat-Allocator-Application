document.addEventListener('DOMContentLoaded', async function () {
  // const userformbtn = document.getElementById('userformid');
  // userformbtn.addEventListener('click', function () {
  //   // Redirect to seats.html
  //   window.location.href = './demo.html';
  // });
  
  try {
    const response = await fetch('http://localhost:5000/api/getSeats');

    if (response.ok) {
      const seats = await response.json();
      console.log('Fetched seats:', seats);
      displaySeats(seats);
    } else {
      console.error('Failed to fetch seats');
    }
  } catch (error) {
    console.error('Error fetching seats:', error);
  }

  function displaySeats(seats) {
    const seatsListContainer = document.getElementById('seatsList');

    // Clear existing content
    seatsListContainer.innerHTML = '';

    // Create a table to display seats
    const seatsTable = document.createElement('table');
    seatsTable.classList.add('seats-table');

    // Create table header
    const headerRow = seatsTable.insertRow(0);
    const seatNumberHeader = headerRow.insertCell(0);
    const isBookedHeader = headerRow.insertCell(1);
    const actionsHeader = headerRow.insertCell(2);

    seatNumberHeader.textContent = 'Seat No.';
    isBookedHeader.textContent = 'Status';
    actionsHeader.textContent = 'Actions';

    // Style for header cells
    seatNumberHeader.style.textAlign = 'center';
    isBookedHeader.style.textAlign = 'center';
    actionsHeader.style.textAlign = 'center';
  
    // Create table rows for each seat
    seats.forEach((seat, index) => {
      const seatRow = seatsTable.insertRow(index + 1);

      const seatNumberCell = seatRow.insertCell(0);
      const isBookedCell = seatRow.insertCell(1);
      const actionsCell = seatRow.insertCell(2);

      seatNumberCell.textContent = seat.seatNumber;
      isBookedCell.textContent = seat.isBooked ? 'Booked' : 'Left';
      isBookedCell.style.color = seat.isBooked ? 'green' : 'red';
      isBookedCell.style.fontWeight = 'bold';
      isBookedCell.style.textAlign = 'center';

      // Style for action cells
      actionsCell.style.textAlign = 'center';

      // Create a "View" button for each seat
      const viewButton = document.createElement('button');
      viewButton.textContent = 'View';
      viewButton.classList.add('view-button');
      viewButton.addEventListener('click', () => handleViewButtonClick(seat));

      // Create an "Edit" button for each seat
      const editButton = document.createElement('button');
      editButton.textContent = 'Edit Seat';
      editButton.classList.add('edit-button');
      editButton.addEventListener('click', () => handleEditButtonClick(seat._id)); 

      // Append both buttons to the actions cell
      actionsCell.appendChild(viewButton);
      actionsCell.appendChild(editButton);
    });

    seatsListContainer.appendChild(seatsTable);
  }

  function handleEditButtonClick(seatId) {
    // Open userform.html in a new window or pop-up
    window.location.href = `./userform.html?seatId=${seatId}`;
  }

  function handleViewButtonClick(seat) {
    // Display an alert with user details

     // Display user details in the modal
     const modalBody = document.getElementById('viewModalBody');
     modalBody.innerHTML = `<p><strong>Name:</strong> ${seat.assignedTo.userName}</p>
                            <p><strong>Number:</strong> ${seat.assignedTo.userNumber}</p>
                            <p><strong>Start Date:</strong> ${seat.assignedTo.startDate}</p>
                            <p><strong>End Date:</strong> ${seat.assignedTo.endDate}</p>`;
 
     // Show the modal
     $('#viewModal').modal('show');
  }
});
