const scheduleService = require('../services/scheduleService')

exports.getSchedule = async (req, res) => {
  try {
    const  idC  = req.params;
    const user = await scheduleService.getSchedule(idC);
    return res.status(200).json(user);

  } catch (error) {
    return res.status(500).json("get schedule error");
  }
};

exports.postSchedule = async (req,res)=>{
    try{
        const user = req.body;
        const schedule = await scheduleService.postSchedule(user)
        return res.status(200).json(schedule)
    } catch(err){
        res.status(500).json("post schedule error")
    }
}