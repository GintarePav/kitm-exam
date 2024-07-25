const Dish = require("../models/dishModel");

exports.createDish = async (req, res) => {
  try {
    const newDish = await Dish.create({ ...req.body });
    res.status(201).json({
      status: "success",
      data: newDish,
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err.message,
    });
  }
};

exports.getAllDishes = async (req, res) => {
  try {
    const dishes = await Dish.find({}); //.populate("likes");
    if (dishes.length === 0) {
      res.status(204).json({
        status: "success",
        message: "empty collection",
      });
    } else {
      res.status(200).json({
        status: "success",
        quantity: dishes.length,
        data: dishes,
      });
    }
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err.message,
    });
  }
};

exports.getTodaysDishes = async (req, res) => {
  try {
    const today = Date().slice(0, 3);
    const todaysDishes = await Dish.find({ day: `${today}` }); //.populate("likes");
    if (todaysDishes.length === 0) {
      res.status(204).json({
        status: "success",
        message: "no dish's day is today",
      });
    } else {
      res.status(200).json({
        status: "success",
        quantity: todaysDishes.length,
        data: todaysDishes,
      });
    }
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err.message,
    });
  }
};

exports.editDish = async (req, res) => {
  try {
    const dish = await Dish.findByIdAndUpdate(req.params.dishId, req.body, {
      runValidators: true,
    });
    res.status(200).json({
      status: "success",
      data: dish,
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err.message,
    });
  }
};

exports.deleteDish = async (req, res) => {
  try {
    await Dish.findByIdAndDelete(req.params.dishId);
    res.status(200).json({
      status: "success",
      message: "dish deleted",
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err.message,
    });
  }
};
