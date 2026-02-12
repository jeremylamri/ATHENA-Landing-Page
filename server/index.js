
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import fetch from 'node-fetch'; // Standard fetch might be available in newer Node, but using explicit import if needed, or rely on global in Node 18+

// Load environment variables
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Serve static files from the React build directory
app.use(express.static(path.join(__dirname, '../dist')));

// API Route for Slack Integration
app.post('/api/slack', async (req, res) => {
    const { name, email, organization, role, subject, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    const slackMessage = {
        blocks: [
            {
                type: "header",
                text: {
                    type: "plain_text",
                    text: "📨 Nouveau Message de Contact",
                    emoji: true
                }
            },
            {
                type: "section",
                fields: [
                    {
                        type: "mrkdwn",
                        text: `*Nom:*\n${name}`
                    },
                    {
                        type: "mrkdwn",
                        text: `*Email:*\n${email}`
                    }
                ]
            },
            {
                type: "section",
                fields: [
                    {
                        type: "mrkdwn",
                        text: `*Organisation:*\n${organization || "N/A"}`
                    },
                    {
                        type: "mrkdwn",
                        text: `*Rôle:*\n${role || "N/A"}`
                    }
                ]
            },
            {
                type: "section",
                fields: [
                    {
                        type: "mrkdwn",
                        text: `*Sujet:*\n${subject || "N/A"}`
                    }
                ]
            },
            {
                type: "divider"
            },
            {
                type: "section",
                text: {
                    type: "mrkdwn",
                    text: `*Message:*\n${message}`
                }
            }
        ]
    };

    try {
        const webhookUrl = process.env.SLACK_WEBHOOK_URL;

        if (!webhookUrl) {
            console.error('SLACK_WEBHOOK_URL is not defined in environment variables.');
            return res.status(500).json({ error: 'Server configuration error' });
        }

        const response = await fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(slackMessage),
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Slack API error: ${response.status} ${errorText}`);
        }

        return res.status(200).json({ success: true });
    } catch (error) {
        console.error('Error sending to Slack:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Handle React routing, return all requests to React app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
