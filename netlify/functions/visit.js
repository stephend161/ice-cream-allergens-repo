let count = 0;

exports.handler = async function(event, context) {
  count += 1;

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ count }),
  };
};
