document.addEventListener('DOMContentLoaded', function () {
   
//    const userForm = document.getElementById('userForm');
    const button = document.getElementById('submit');

     // Get seatNumber from the query parameter
     


    button.addEventListener('click', async function (event) {
        const urlParams = new URLSearchParams(window.location.search);
        const seatId = urlParams.get('seatId');

        // Get form values
        const userName = document.getElementById('userName').value;
        const userNumber = document.getElementById('userNumber').value;
        const startDate = document.getElementById('startDate').value;
        const endDate = document.getElementById('endDate').value;

        // Construct the data object for user form submission
        const userFormData = {
            userName,
            userNumber,
            startDate,
            endDate,
            seatId,
        };

        try {
            // Send the data to the backend for updating user form
            const response = await fetch('http://localhost:5000/api/updateUser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userFormData),
            });

            if (response.ok) {
                console.log('User form submitted successfully.');
                
                // // Redirect to the seats.html page after successful submission
                // window.location.href = 'seats.html';
            } else {
                console.error('Failed to submit user form.');
            }
        } catch (error) {
            console.error('Error submitting user form:', error);
        }
    });
});


