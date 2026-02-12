export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

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
            throw new Error('SLACK_WEBHOOK_URL is not defined');
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
}
