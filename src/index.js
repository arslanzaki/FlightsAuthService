const express = require("express");
const bodyParser = require("body-parser");
const { PORT } = require("./config/serverConfig");
const apiRoutes = require("./routes/index");

// const UserRepository = require("./repository/user-repository");
// const UserService = require("./services/user-service");
const app = express();

const prepareAndStartServer = () => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use("/api", apiRoutes);
  app.listen(PORT, async () => {
    console.log(`Server Started On PORT ${PORT}`);
    // const repo = new UserRepository();
    // const response = await repo.getById(2);
    // console.log(response);
    // const service = new UserService();
    // const newToken = service.createToken({ email: "test@testmail.com", id: 5 });
    // console.log("New Token Is: ", newToken);
    // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAdGVzdG1haWwuY29tIiwiaWQiOjUsImlhdCI6MTY5NzM4ODU5NiwiZXhwIjoxNjk3MzkyMTk2fQ.pXKvuaUmt2eRhu2sJh2-SPESZnwr4MJoP8_NnfAZuDw"
    // const response = service.verifyToken(token);
    // console.log("Response Is ", response)

  });
};

prepareAndStartServer();
