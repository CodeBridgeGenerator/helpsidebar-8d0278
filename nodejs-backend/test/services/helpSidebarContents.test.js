const assert = require("assert");
const app = require("../../src/app");

describe("helpSidebarContents service", () => {
  let thisService;
  let helpSidebarContentCreated;

  beforeEach(async () => {
    thisService = await app.service("helpSidebarContents");
  });

  it("registered the service", () => {
    assert.ok(thisService, "Registered the service (helpSidebarContents)");
  });

  describe("#create", () => {
    const options = {"serviceNames":"new value","purpose":"new value","path":"new value","features":"new value","guide":"new value","content":"new value"};

    beforeEach(async () => {
      helpSidebarContentCreated = await thisService.create(options);
    });

    it("should create a new helpSidebarContent", () => {
      assert.strictEqual(helpSidebarContentCreated.serviceNames, options.serviceNames);
assert.strictEqual(helpSidebarContentCreated.purpose, options.purpose);
assert.strictEqual(helpSidebarContentCreated.path, options.path);
assert.strictEqual(helpSidebarContentCreated.features, options.features);
assert.strictEqual(helpSidebarContentCreated.guide, options.guide);
assert.strictEqual(helpSidebarContentCreated.content, options.content);
    });
  });

  describe("#get", () => {
    it("should retrieve a helpSidebarContent by ID", async () => {
      const retrieved = await thisService.get(helpSidebarContentCreated._id);
      assert.strictEqual(retrieved._id, helpSidebarContentCreated._id);
    });
  });

  describe("#update", () => {
    let helpSidebarContentUpdated;
    const options = {"serviceNames":"updated value","purpose":"updated value","path":"updated value","features":"updated value","guide":"updated value","content":"updated value"};

    beforeEach(async () => {
      helpSidebarContentUpdated = await thisService.update(helpSidebarContentCreated._id, options);
    });

    it("should update an existing helpSidebarContent ", async () => {
      assert.strictEqual(helpSidebarContentUpdated.serviceNames, options.serviceNames);
assert.strictEqual(helpSidebarContentUpdated.purpose, options.purpose);
assert.strictEqual(helpSidebarContentUpdated.path, options.path);
assert.strictEqual(helpSidebarContentUpdated.features, options.features);
assert.strictEqual(helpSidebarContentUpdated.guide, options.guide);
assert.strictEqual(helpSidebarContentUpdated.content, options.content);
    });
  });

  describe("#delete", () => {
  let helpSidebarContentDeleted;
    beforeEach(async () => {
      helpSidebarContentDeleted = await thisService.remove(helpSidebarContentCreated._id);
    });

    it("should delete a helpSidebarContent", async () => {
      assert.strictEqual(helpSidebarContentDeleted._id, helpSidebarContentCreated._id);
    });
  });
});