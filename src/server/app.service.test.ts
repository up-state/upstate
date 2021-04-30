import { AppService } from "./app.service";

describe("AppService", () => {
  describe("getHello", () => {
    it(" hello world message", () => {
      expect(new AppService().getHello()).toEqual("Hello World!");
    });
  });
});
