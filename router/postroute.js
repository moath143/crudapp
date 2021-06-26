const express = require("express");
const router = express.Router();
const postModel = require("../model/postdb");

router.post("/addnewpost", (req, res) => {
  const newPost = new postModel({
    title: req.body.title,
    imageUrl: req.body.imageUrl,
    desc: req.body.desc,
    postid: req.body.postid,
  });

  newPost.save((err) => {
    if (!err) {
      res.send("new post is saved successful");
      // console.log('new post is saved successful')
    } else {
      res.send("new post is not saved");
      // console.log('new post is not saved')
    }
  });
});

router.get("/postlist", (req, res) => {
  postModel.find({}, (doc, err) => {
    if (!err) {
      res.send(doc);
    } else res.send(err);
  });
});

router.post("/getdatapost", (req, res) => {
  postModel.find({ postid: req.body.postid }, (doc, err) => {
    if (!err) {
      res.send(doc);
    } else {
      res.send(err);
    }
  });
});

router.post("/updatepost", (req, res) => {
  postModel.findOneAndUpdate(
    { postid: req.body.postid },
    {
      title: req.body.title,
      imageUrl: req.body.imageUrl,
      desc: req.body.desc,
    },
    (doc, err) => {
      if (!err) {
        res.send(doc);
      } else {
        res.send(err);
      }
    }
  );
});

router.post("/deletepost", (req, res) => {
  postModel.findOneAndDelete({ postid: req.body.postid }, (err) => {
    if (!err) {
      res.send("delete is success");
    } else {
      res.send("delete is failed");
    }
  });
});

module.exports = router;
