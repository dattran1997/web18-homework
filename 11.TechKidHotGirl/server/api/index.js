const express = require('express');
const userRouter = require('./user/routes');
const postRouter = require('./post/routes');

const apiRouter = express.Router();

apiRouter.use('/api/users',userRouter);
apiRouter.use('/api/post',postRouter);

module.exports = apiRouter;