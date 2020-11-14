const User = require("../models/user");

exports.createOrUpdateCampaign = async (req, res) => {
  const {
    email,
    app_secret,
    app_id,
    page_id,
    access_token,
    Keyword,
    flag,
  } = req.body;
  console.log("email ",email)
  console.log("email ",req.body.email)

  let doc = await User.findOneAndUpdate(
    { email: email },
    {
       $push:{
        campaigns: {
            app_id: app_id,
            app_secret: app_secret,
            access_token: access_token,
            page_id: page_id,
            keyword: Keyword,
            flag: flag,
          },
       }
    }
  );

  res.json("Update success");
};
