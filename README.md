# NVC (Non-Violent Communication)

A web-based practice tool for learning and mastering Marshall Rosenberg's **Non-Violent Communication** process. The app is available in 5 languages: English, French, German, Italian, and Vietnamese.

## Features

- **Interactive NVC Practice**: A simple form-based tool to build compassionate communication statements
- **Four Core Components**: Observation, Feeling, Need, Request
- **Multi-language Support**: English, Français, Deutsch, Italiano, Tiếng Việt with flag icons
- **QR Code Sharing**: Dynamically generated QR code to share the app across devices
- **Responsive Design**: Fully mobile-friendly interface
- **Process Manager**: Runs on PM2 for reliable process management
- **Static Assets**: Fast-loading front-end with minimal dependencies

## Live Deployment

**App URL**: http://23.88.40.233:7000

The app is currently running on a remote Hetzner server (ARM-based) with PM2 process management.

## Local Development

### Prerequisites
- Node.js 18+
- npm

### Installation

```bash
git clone https://github.com/dbd311/nvc.git
cd nvc
npm install
```

### Run Locally

```bash
npm start
```

The app will be available at `http://localhost:3000`

## Deployment

### Remote Deployment with Ansible

Before deploying, edit `inventory.ini` with your remote server details:

```ini
[webservers]
app-server ansible_host=YOUR_SERVER_IP ansible_user=YOUR_SSH_USER
```

Then run:

```bash
ansible-playbook deploy.yml
```

The playbook will:
- Check for Node.js installation (or install if required)
- Sync app files to `/var/www/nvc` on the remote server
- Install npm dependencies
- Install PM2 globally
- Start the app with PM2 on port 7000

### Check Deployment Status

```bash
# Check PM2 status on remote server
ansible app-server -i inventory.ini -m shell -a "pm2 status"

# View app logs
ansible app-server -i inventory.ini -m shell -a "pm2 logs nvc"
```

## Project Structure

```
ncv/
├── index.html           # Main HTML page with translation keys
├── script.js            # Translation logic, QR code generation, form handling
├── styles.css           # Responsive CSS with dark theme
├── server.js            # Express.js server (port 3000)
├── qrcode.min.js        # QR code generation library
├── package.json         # Dependencies and scripts
├── README.md            # This file
├── ansible.cfg          # Ansible configuration
├── inventory.ini        # Ansible inventory (host definitions)
├── deploy.yml           # Ansible playbook for deployment
└── .gitignore           # Git ignore patterns
```

## Translation Structure

All UI text is managed via translation keys in `script.js`:

- **English (en)**: Default language
- **Français (fr)**: French translation
- **Deutsch (de)**: German translation
- **Italiano (it)**: Italian translation
- **Tiếng Việt (vi)**: Vietnamese translation

Language selection is persisted in the UI dropdown with flag emojis.

## The Four NVC Components

1. **Observation**: Describe what happened without judgment or interpretation
2. **Feeling**: Share how you feel in response to the observation
3. **Need**: Connect your feeling to an unmet need or value
4. **Request**: Ask for a clear, positive action to meet your need

## API Overview

The app is a static web application served by Express.js. All interactions happen in the browser.

- `GET /` → Serves `index.html`
- Static files: CSS, JS, QR code library

## Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- QR code generation: JavaScript (client-side, no server-side QR rendering)

## License

MIT

## Author

Built as a learning tool for Non-Violent Communication practice.
