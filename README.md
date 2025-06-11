# GitHub to Discord Push Notification

An automated system to send GitHub **push event** notifications to a Discord channel using webhooks. Built with **Node.js**, this project listens to GitHub webhook payloads and sends customizable messages to keep your team updated in real-time.

---

## 🚀 Features

* **Real-time notifications** for GitHub push events
* **Customizable messages** via query parameters
* **Robust fallbacks** for missing payload data
* **Easy to deploy** on platforms like Render
* **Support for multiple GitHub events** with extensibility

---

## 🔧 Prerequisites

* Node.js (>= 18.0.0)
* A Discord server with a webhook URL
* Access to a GitHub repository

---

## 📦 Installation

```bash
git clone <repository-url>
cd <repository-folder>
npm install
```

---

## ⚙️ Configuration

Create a `.env` file in the root:

```env
DISCORD_WEBHOOK_URL=https://discord.com/api/webhooks/your-webhook-id/your-webhook-token
```

> ⚠️ Do **NOT** commit `.env` — add it to `.gitignore`

---

## 🖥️ Running the Server Locally

```bash
npm start
```

### 🟢 Render Deployment

* Ensure your server listens to `process.env.PORT || 9000`
* Set `DISCORD_WEBHOOK_URL` in Render’s environment settings
* Deploy the project to Render

---

## 🔗 GitHub Webhook Setup

1. Go to your GitHub repository → **Settings** → **Webhooks** → **Add webhook**
2. **Payload URL**: `https://your-server.onrender.com/github-webhook`
3. **Content Type**: `application/json`
4. **Events to Trigger**: Select `Let me select individual events` and check `Pushes`
5. **Save** the webhook

---

## ⚙️ How It Works

### Server Operation

* The server runs on `/github-webhook`
* Extracts commit data: username, repository name, commit message, URL
* Supports optional query string: `?message=` or `?data=` (default: `Asikur (default user)`)

### Discord Notification

* Sends message to `DISCORD_WEBHOOK_URL`
* Format:

  ```
  Someone pushed to Unknown Repository: No commit message (No commit URL) - Custom note: Asikur (default user)
  ```

### Extending Support

* Add event handlers in `index.js` for other GitHub events (e.g., pull requests, issues, releases)
* Use `payload.action` or `payload` structure to customize the message

---

## 🎯 Benefits

* 📡 **Instant Updates**: Avoid manual status updates
* ⚙️ **Efficient Workflow**: Streamlined team communication
* ✏️ **Custom Notes**: Add context with `?message=` or `?data=`
* 🔄 **Reliable Defaults**: Handles missing GitHub fields
* 📢 **Scalable Integration**: Supports multiple channels or repositories

---

## 📈 Use Cases

* 🚀 Push to GitHub → Auto notify on Discord
* 🔧 Pass custom notes with push using query parameters
* 🧑‍💻 Collaborate better with real-time updates

---

## 🧪 Troubleshooting

* **404 Error**: Ensure server is running and endpoint URL is correct
* **500 Error**: Check `DISCORD_WEBHOOK_URL` validity
* **No Notification**: Confirm GitHub webhook is active and push event is selected

---

## 🧩 Customizing Events

Go to **Webhook Settings → Let me select individual events**:

* ✅ Pushes *(default implemented)*
* 🔃 Pull Requests
* 🐞 Issues
* 🚀 Releases

Update `index.js` to parse and send messages for those events accordingly.

---

## 🤝 Contributing

Pull requests and issue reports are welcome!

---

## 📜 License

This project is licensed under the **ISC License**.
