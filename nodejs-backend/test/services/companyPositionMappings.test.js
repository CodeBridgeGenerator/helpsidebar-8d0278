const assert = require("assert");
const app = require("../../src/app");

describe("companyPositionMappings service", () => {
  let thisService;
  let companyPositionMappingCreated;

  beforeEach(async () => {
    thisService = await app.service("companyPositionMappings");
  });

  it("registered the service", () => {
    assert.ok(thisService, "Registered the service (companyPositionMappings)");
  });

  describe("#create", () => {
    const options = {"company":"aasdfasdfasdfadsfadfa","positions":"aasdfasdfasdfadsfadfa","mappingType":"new value"};

    beforeEach(async () => {
      companyPositionMappingCreated = await thisService.create(options);
    });

    it("should create a new companyPositionMapping", () => {
      assert.strictEqual(companyPositionMappingCreated.company, options.company);
assert.strictEqual(companyPositionMappingCreated.positions, options.positions);
assert.strictEqual(companyPositionMappingCreated.mappingType, options.mappingType);
    });
  });

  describe("#get", () => {
    it("should retrieve a companyPositionMapping by ID", async () => {
      const retrieved = await thisService.get(companyPositionMappingCreated._id);
      assert.strictEqual(retrieved._id, companyPositionMappingCreated._id);
    });
  });

  describe("#update", () => {
    let companyPositionMappingUpdated;
    const options = {"company":"345345345345345345345","positions":"345345345345345345345","mappingType":"updated value"};

    beforeEach(async () => {
      companyPositionMappingUpdated = await thisService.update(companyPositionMappingCreated._id, options);
    });

    it("should update an existing companyPositionMapping ", async () => {
      assert.strictEqual(companyPositionMappingUpdated.company, options.company);
assert.strictEqual(companyPositionMappingUpdated.positions, options.positions);
assert.strictEqual(companyPositionMappingUpdated.mappingType, options.mappingType);
    });
  });

  describe("#delete", () => {
  let companyPositionMappingDeleted;
    beforeEach(async () => {
      companyPositionMappingDeleted = await thisService.remove(companyPositionMappingCreated._id);
    });

    it("should delete a companyPositionMapping", async () => {
      assert.strictEqual(companyPositionMappingDeleted._id, companyPositionMappingCreated._id);
    });
  });
});