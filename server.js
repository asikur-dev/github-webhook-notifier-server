const express = require('express');
const fetch = require('node-fetch');
const app = express();
app.use(express.json());

const DISCORD_WEBHOOK_URL = process.env.DISCORD_WEBHOOK_URL;

app.post('/github-webhook', async (req, res) => {
  const payload = req.body;
  const username = payload.sender.login; // GitHub username
  const repo = payload.repository.full_name;
  const commitMessage = payload.commits[0]?.message || 'No commit message';
  const commitUrl = payload.commits[0]?.url || '';

  const discordPayload = {
    username: 'GitHub Bot',
    content: `${username} pushed to ${repo}: ${commitMessage} (${commitUrl})`,
  };

  await fetch(DISCORD_WEBHOOK_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(discordPayload),
  });

  res.status(200).send('Webhook received');
});

app.listen(3000, () => console.log('Server running on port 3000'));
