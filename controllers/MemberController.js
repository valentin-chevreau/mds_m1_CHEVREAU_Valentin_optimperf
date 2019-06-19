const Member = require("../models/Member");

// what to do to list all the members registred
exports.listAllMembers = (req, res) => {
  Member.find({}, (err, member) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).json(member);
  });
};

// what to do to list to create a new member
exports.createNewMember = (req, res) => {
  let member = new Member(req.body);
  member.save((err, member) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(201).json({ message: "Member successfully created", member});
  });
};

// what to do to display content of a specific member
exports.displayMember = (req, res) => {
  Member.findById(req.params.memberid, (err, member) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).json(member);
  });
};

// what to do to update content of a specific member
exports.updateMember = (req, res) => {
  Member.findOneAndUpdate(
    { _id: req.params.memberid },
    req.body,
    { new: true },
    (err, member) => {
      if (err) {
        res.status(500).send(err);
      }
      res.status(200).json({ message: "Member successfully updated", member });
    }
  );
};

// what to do to delete content of a specific member
exports.deleteMember = (req, res) => {
  Member.remove({ _id: req.params.memberid }, (err, member) => {
    if (err) {
      res.status(404).send(err);
    }
    res.status(200).json({ message: "Member successfully deleted", member });
  });
};
