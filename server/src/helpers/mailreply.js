const mailreply = (name, time, number, note) => {
    const message = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
            background-color: #f4f4f4;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .header {
            text-align: center;
            margin-bottom: 20px;
        }
        .header h1 {
            margin: 0;
            font-size: 24px;
            color: #333;
        }
        .details {
            margin-bottom: 20px;
        }
        .details p {
            margin: 5px 0;
            font-size: 16px;
            color: #555;
        }
        .footer {
            text-align: center;
            margin-top: 20px;
        }
        .footer p {
            margin: 0;
            font-size: 14px;
            color: #777;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Your Reservation Details</h1>
        </div>
        <div class="details">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Reservation Time:</strong> ${time}</p>
            <p><strong>Number of Guests:</strong> ${number}</p>
            <p><strong>Special Notes:</strong> ${note}</p>
        </div>
        <div class="footer">
            <p>We look forward to welcoming you and your guests. If you have any further requests or need to make any changes to your reservation, please do not hesitate to contact us.</p>
            <p>Best Regards,<br> DudeBooking</p>
        </div>
    </div>
</body>
</html>
    `;

    return message;
};

module.exports = {
    mailreply,
};
