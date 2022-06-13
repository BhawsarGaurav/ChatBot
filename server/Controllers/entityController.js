const { EntityClient } = require("@google-cloud/dialogflow");

const CreateEntity = async (req, res) => {
  const { displayName, entities } = req.body;
  const projectId = process.env.PROJECTID;
  try {
    const agentPath = EntityClient.projectAgentPath(projectId);
    const entites = {
      displayName: displayName,
      kind: "KIND_MAP",
      entities: entities,
    };
    const request = {
      parent: agentPath,
      entityType: entites,
    };
    const [operation] = await EntityClient.createEntityType(request);
    const [response] = await operation.promise();
    return res.send(response);
  } catch (err) {
    console.log(err);
    return res.send(err);
  }
};
module.exports = { CreateEntity };
