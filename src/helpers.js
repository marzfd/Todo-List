export function showResults(res, err, results) {
  if (err) res.status(500).send(JSON.stringify({ error: err.message}));
  res.status(200).send(JSON.stringify(results));
}

export function invalidRequest(res) {
  res.status(400).send(JSON.stringify({ error: 'Invalid Request !' }));
}