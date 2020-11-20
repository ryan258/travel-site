exports.handler = function (event, context, callback) {
  // here we can send typical server side actions
  const secretContent = `
  <h3>Welcome to the secret area.</h3>
  <p>Here we can tell you manny is not afraid, and the cow is a lie.</p>
  `;
  //event has info about the incoming request
  let body;

  if (event.body) {
    body = JSON.parse(event.body);
  } else {
    body = {};
  }

  if (body.password == 'javascript') {
    callback(null, {
      statusCode: 200,
      body: secretContent,
    });
  } else {
    callback(null, {
      statusCode: 401,
    });
  }
};
