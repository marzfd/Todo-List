export function showResults(res, results) {
  try {
    res.status(200).json(JSON.stringify(results[0]));
  }
  catch (err) {
    res.status(500).send(JSON.stringify({ error: err.message }));
  }
}

export function invalidRequest(res) {
  res.status(400).send(JSON.stringify({ error: 'Invalid Request !' }));
}