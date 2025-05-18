
    module.exports = function (app) {
        const modelName = "help_sidebar_contents";
        const mongooseClient = app.get("mongooseClient");
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
            serviceNames: { type:  String , required: true, comment: "Service Names, p, false, true, true, true, true, true, true, , , , ," },
purpose: { type:  String , required: true, comment: "Purpose, p, false, true, true, true, true, true, true, , , , ," },
path: { type:  String , required: true, comment: "Path, p, false, true, true, true, true, true, true, , , , ," },
features: { type:  String , required: true, comment: "Features, p, false, true, true, true, true, true, true, , , , ," },
guide: { type:  String , required: true, comment: "Guide, p, false, true, true, true, true, true, true, , , , ," },
content: { type:  String , required: true, comment: "Content, p, false, true, true, true, true, true, true, , , , ," },

            createdBy: { type: Schema.Types.ObjectId, ref: "users", required: true },
            updatedBy: { type: Schema.Types.ObjectId, ref: "users", required: true }
          },
          {
            timestamps: true
        });
      
       
        if (mongooseClient.modelNames().includes(modelName)) {
          mongooseClient.deleteModel(modelName);
        }
        return mongooseClient.model(modelName, schema);
        
      };