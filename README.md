Automating GitHub Push Notifications to Discord
Overview
This project creates an automated system to send GitHub push event notifications to a Discord channel using a webhook. Built with Node.js, it processes GitHub webhook payloads and delivers customizable messages, keeping your team updated on code changes in real-time.
How to Set It Up
Prerequisites

Node.js (version >=18.0.0)
A Discord server with a webhook URL
Access to a GitHub repository

Installation

Clone the Repository
git clone <repository-url>
cd <repository-folder>


Install Dependencies
npm install


Configure Environment

Create a .env file in the project root:DISCORD_WEBHOOK_URL=https://discord.com/api/webhooks/your-webhook-id/your-webhook-token


Do not commit the .env file; add it to .gitignore.


Start the Server Locally
npm start


For Render deployment, update index.js to use process.env.PORT || 9000 and deploy the code, configuring DISCORD_WEBHOOK_URL in Render's environment settings.


Set Up GitHub Webhook

Go to your GitHub repository > "Settings" > "Webhooks" > "Add webhook."
Payload URL: Use your server’s endpoint (e.g., https://your-server.onrender.com/github-webhook).
Content Type: application/json.
Trigger Events: Select "Let me select individual events" and check "Pushes" (customize events as needed; see below).
Save the webhook.



How It Works

Server Operation: The server.js script runs an Express server listening on /github-webhook. It extracts optional fields (username, repository name, commit message, commit URL) with fallbacks (e.g., "Someone", "Unknown Repository") and supports custom notes via ?message= or ?data= (defaults to "Asikur (default user)").
Discord Notification: Sends a formatted message to the DISCORD_WEBHOOK_URL, e.g., Someone pushed to Unknown Repository: No commit message (No commit URL) - Custom note: Asikur (default user).
Deployment: Host on Render or a similar platform, ensuring port compatibility.

Benefits

Real-Time Updates: Receive instant notifications on code pushes, eliminating manual checks.
Task Efficiency: Automates status updates, freeing developers to focus on coding rather than communication.
Customization: Add context with query parameters, tailoring messages to your needs.
Reliability: Handles incomplete payloads with defaults, ensuring consistent notifications.
Team Alignment: Keeps remote teams synchronized on project progress.
Scalability: Extend to multiple repositories or channels with additional webhooks.

How It Makes Tasks Easier

Reduced Manual Effort: No need to manually announce pushes in Discord; the system handles it automatically.
Faster Feedback: Team members see changes immediately, speeding up reviews and collaboration.
Simplified Monitoring: Centralizes push notifications in Discord, reducing the need to check GitHub repeatedly.
Custom Alerts: Quick adjustments via query parameters allow targeted communication without code changes.

Customizing Events on GitHub

Event Selection: In the GitHub webhook settings, choose "Let me select individual events" to trigger notifications for specific actions:
Pushes: Default setting for commit pushes (already implemented).
Pull Requests: Enable to notify on PR creation, updates, or merges.
Issues: Track issue creation or comments.
Releases: Notify on new releases.
Add multiple events as needed for comprehensive monitoring.


Payload Filtering: The script currently processes push events. To handle other events, extend index.js to parse different payload structures (e.g., payload.action for pull requests) and adjust the Discord message accordingly.
Multiple Webhooks: Create separate webhooks for different events or channels, each pointing to a unique server endpoint if required.

Usage

Push code to your GitHub repository to trigger the webhook.
Customize messages with ?message=Hello or ?data=Test in the webhook URL.
View notifications in your Discord channel.

Troubleshooting

404 Error: Verify the server is running and the webhook URL is correct. Check Render logs.
500 Error: Ensure DISCORD_WEBHOOK_URL is valid and accessible.
No Messages: Confirm the GitHub webhook is active and the event type matches the trigger.

Contributing
Submit issues or pull requests to improve this project!
License
This project is licensed under the ISC License.
