## Features

- Displays the countdown to New Year's Eve.
- Automatically updates every second.
- Responsive design for various screen sizes.

## Technologies Used

- **HTML**: Structure of the webpage.
- **CSS**: Styling of the countdown timer.
- **JavaScript**: Logic to calculate and update the time remaining.

## How It Works

The `NewYear` function calculates the time remaining until the next New Year by:

1. Getting the current year using `new Date().getFullYear()`.
2. Creating a `Date` object for January 1st of the next year.
3. Subtracting the current date from the end date to get the time difference in milliseconds.
4. Converting the time difference into days, hours, minutes, and seconds.
5. Updating the HTML elements with the calculated time every second using `setInterval`.
