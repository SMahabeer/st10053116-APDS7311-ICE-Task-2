const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
  
    res.status(statusCode);
  
    res.json({
      message: err.message,
      stack: err.stack,
    });
  };
  
  module.exports = {
    errorHandler,
  };

  const setTodo = (req, res) => {
    if (!req.body.text) {
      res.status(400);
      throw new Error('Please add text field');
    }
    res.status(200).json({message: 'Set todo'})
  }