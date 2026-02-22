# MarketScope AI

Bain-quality market intelligence reports in 3 minutes. Powered by Claude AI with real-time web search.

## Deploy to Vercel (5 minutes)

### Step 1: Get Your API Key
1. Go to https://console.anthropic.com
2. Create account → API Keys → Create Key
3. Copy the key (starts with `sk-ant-`)
4. Add $20 in credits under Billing

### Step 2: Push to GitHub
1. Create a new repo at https://github.com/new named `marketscope-ai`
2. In terminal:
```bash
cd marketscope-ai
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/marketscope-ai.git
git branch -M main
git push -u origin main
```

### Step 3: Deploy to Vercel
1. Go to https://vercel.com → Sign in with GitHub
2. Click "Add New Project" → Import `marketscope-ai`
3. Add Environment Variable: `ANTHROPIC_API_KEY` = your key
4. Click Deploy → Live in 2 minutes

## Local Development
```bash
npm install
npm run dev
```
Open http://localhost:3000

## Cost: ~$0.33 per report
