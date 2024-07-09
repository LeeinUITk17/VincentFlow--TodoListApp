const nodemailer = require("nodemailer");
const {
    mailreply,
}= require('../helpers/mailreply');
const {
    addbooking,
}=require('../services/booking.service');

const dotenv = require('dotenv');
dotenv.config();

class BookingController{
    constructor() {
        this.transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GOOGLE_MAIL_USER ,
                pass: process.env.GOOGLE_MAIL_PASSWORDS
            }
        });
    }
    sendbooking = async (req, res, next) => {
        console.log(req.body);
        try {
            const { Name, Time, People, Note,Email } = req.body;
            const replyContent = mailreply(Name, Time, People, Note);        
            const mailOptions = {
                from: process.env.GOOGLE_MAIL_USER,
                to: Email,
                subject: `Thank you for your reservation, ${Name}!`, 
                html: `${replyContent}`, 
            };
            await this.transporter.sendMail(mailOptions);
            await addbooking(req.body);
            return res.status(200).send('Email sent!');
        } catch (error) {
            console.error('Error sending email:', error);
            res.status(500).send('Error sending email');
            return res.status(500).send('Error sending email');
        } 
    }
}
module.exports=new BookingController();