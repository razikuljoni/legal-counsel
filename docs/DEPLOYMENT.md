# Production Deployment Guide

## 1. Environment Configuration

Ensure production environment variables are properly configured in your deployment hosting platform.

| Variable Name | Required | Description | Sample Value |
| :--- | :--- | :--- | :--- |
| `GEMINI_API_KEY` | **Yes** | Google Gemini API key for AI feature activation | `AIzaSy...` |
| `APP_URL` | **Yes** | Fully qualified URL of deployed application | `https://legal-counsel-indol.vercel.app` |
| `NODE_ENV` | **Yes** | Environment target | `production` |

---

## 2. Pre-Deployment Check

Run local checks prior to pushing to main branch:

```bash
# 1. Typecheck
pnpm typecheck

# 2. Linting
pnpm lint

# 3. Production Build Test
pnpm build
```

---

## 3. Hosting Platform Configurations

### Vercel Deployment (Recommended)

1. Connect GitHub repository to Vercel.
2. Configure Environment Variables (`GEMINI_API_KEY`, `APP_URL`).
3. Set Framework Preset: **Next.js**.
4. Deploy.

### Docker Container Deployment

Use Dockerfile strategy for Cloud Run or custom Kubernetes environments:

```dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm install --frozen-lockfile
COPY . .
RUN pnpm build

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV production
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
EXPOSE 3000
CMD ["node", "server.js"]
```

---

## 4. Verification Post-Deployment

- Test homepage layout and fonts rendering.
- Verify consultation modal form submit flow.
- Confirm SSL certificate and HTTPS redirection.
- Validate Lighthouse web vitals and mobile viewport compatibility.
