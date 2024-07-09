const mongoose=require('mongoose');
const bookingmodel=require('../models/booking.model');
const addbooking=async(body)=>{
    return await bookingmodel.create(body);
}
const getbooking=async()=>{ 
   return await bookingmodel.find();
}
const getbookingbyid=async(id)=>{
    return await bookingmodel.findById(id).exec();
}
const detelebooking=async(id)=>{
    return await bookingmodel.deleteOne({_id: new mongoose.Types.ObjectId(id)});
}

const getStatusCounts = async () => {
    const items = await bookingmodel.find({});
    const statusCounts = {
      All: items.length,
      Active: items.filter((item) => item.status === 'active').length,
      Inactive: items.filter((item) => item.status === 'inactive').length,
    };
    return statusCounts;
  };
  module.exports={
        addbooking,
        getbooking,
        getbookingbyid,
        detelebooking, 
        getStatusCounts,
  }