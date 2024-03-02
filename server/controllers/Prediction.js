const runPredictScript = require("../prediction_ml_model/model_access_script");

exports.predict = async (req, res) => {
  try {
    const data = req.body;
    console.log(data);

    const inputJson = JSON.stringify(data);

    runPredictScript(inputJson, (err, result) => {
      if (err) {
        console.error("The error is", err);
      } else {
        console.log("The result is", result);
        res.json({
          success: true,
          message: "Prediction done successfully",
          result: result.prediction,
        });
      }
    });

    console.log("This is sent by postman", data);
  } catch (e) {
    console.log(e);
  }
};
