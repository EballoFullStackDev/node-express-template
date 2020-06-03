const express = require("express");
const router = express.Router();
const User = require("../../models/user");
const helper = require('../../helper/helpers');

router.post("/add", async (req, res) => {
  const newUser = new User({
    name: req.body.name,
    age: req.body.age,
  });
  const user = await newUser.save();
  try {
    res.json(user);
  } catch (err) {
    res.json(err);
  }
});

router.get("/getAll", async (req, res) => {
  const users = await User.find();
  try {
    res.json(users);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving notes.",
    });
  }
});

router.get("/get/:id", async (req, res) => {
  const user = await User.findById(req.params.id);
  const friends = user.friends.map(friend => friend);
  console.log(friends);
  try {
    res.json(user);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving notes.",
    });
  }
});

router.delete("/:id", async (req, res) => {
  const user = await User.findByIdAndRemove(req.params.id);
  try {
    res.json(user);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving notes.",
    }); 
  }
});

router.put("/:id", async (req, res) => {
  const value = helper.example(req.params.id);
  const user = await User.findByIdAndUpdate(req.params.id, 
    {
      name: req.body.name, 
      age: req.body.age, 
      $push: {
        friends: req.body.friends
      }
    },
   {new:true});
  try {
    res.send(user);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving notes.",
    }); 
  }
});

router.get("/exist", async (req, res) => {
  const user = await User.exists(req.body);
  try {
    res.send(user);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving notes.",
    }); 
  }
});


module.exports = router;
