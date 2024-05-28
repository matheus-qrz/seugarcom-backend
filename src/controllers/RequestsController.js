const { Request } = require("../models/Requests.js");

const requestController = {
  create: async (req, res) => {
    const { type, items, attendant, addProduct, valueTotal } = req.body;
    if (!items || !valueTotal || !addProduct)
      return next(
        new ErrorHandler("Please, fill all the information required.")
      );

    try {
      // var newItem = [];
      // items.forEach(function (item) {
      //   newItem.push(item.id);
      // });

      // console.log("New item added: ", newItem[0]);

      await Request.create(
        type,
        items,
        attendant,
        valueItem,
        valueTotal,
        addProduct
      );
      res.status(200).json({
        success: true,
        message: "Request created successfuly",
      });
    } catch (error) {
      if (error.name === "ValidationError") {
        const validationErrors = Object.values(err.errors).map(
          (err) => err.message
        );

        return next(new ErrorHandler(validationErrors.join(" , "), 400));
      }
      console.log("Erro: ", error);
    }
  },

  update: async (req, res) => {
    const { items, valueTotal, addProduct, removeProduct, modifyItem } =
      req.body;
    if (!items)
      return next(
        new ErrorHandler("Please, fill all the information required.")
      );

    // var newItem = [];
    // items.forEach(function (item) {
    //   newItem.push(item.id);
    // });

    // console.log("New item added: ", newItem[0]);

    try {
      await Request.update(
        items,
        valueTotal,
        addProduct,
        removeProduct,
        modifyItem
      );
      res.status(200).json({
        success: true,
        message: "Request created successfuly",
      });
    } catch (error) {
      if (error.name === "ValidationError") {
        const validationErrors = Object.values(err.errors).map(
          (err) => err.message
        );

        return next(new ErrorHandler(validationErrors.join(" , "), 400));
      }
      console.log("Erro: ", error);
    }
  },
};

module.exports = { requestController };
