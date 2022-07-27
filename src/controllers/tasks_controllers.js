import Fruit from "../models/Fruit";

export const renderElements = async (req, res) => {
  try {
    const fruits = await Fruit.find().lean();
    res.render("index", { fruits: fruits });
  } catch (error) {
    console.log(error);
  }
};

export const renderModify = async (req, res) => {
  try {
    const fruits = await Fruit.find().lean();
    res.render("modify", { fruits: fruits });
  } catch (error) {
    console.log(error);
  }
};

export const addFruit = async (req, res) => {
  try {
    const fruit = Fruit(req.body);
    const fruit_saved = await fruit.save();
    console.log(fruit_saved);
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};

export const renderEdit = async (req, res) => {
  try {
    const fruit_by_id = await Fruit.findById(req.params.id).lean();
    res.render("edit", { fruit_by_id });
  } catch (error) {
    console.log(error);
  }
};

export const updateFruits = async (req, res) => {
  try {
    const { id } = req.params;
    await Fruit.findByIdAndUpdate(id, req.body);
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};

export const deleteFruit = async (req, res) => {
  try {
    const { id } = req.params;
    await Fruit.findByIdAndDelete(id);
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};
