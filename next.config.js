/** @type {import('next').NextConfig} */
var path = require('path');

const nextConfig = {
  reactStrictMode: false,
  serverRuntimeConfig: {
    // Will only be available on the server side
    nextauthSecret: process.env.NEXTAUTH_SECRET,
    nextauthUrl: process.env.NEXTAUTH_URL,
    mailFrom: process.env.MAIL_FROM,
    smtpHost: process.env.SMTP_HOST,
    smtpPort: process.env.SMTP_PORT,
    smtpUser: process.env.SMTP_USER,
    smtpPassword: process.env.SMTP_PASSWORD,
    smtpSecureEnabled: process.env.SMTP_SECURE_ENABLED === '1',
    posthogApiHost: process.env.POSTHOG_API_HOST,
    posthogApiKey: process.env.POSTHOG_API_KEY,
    telemetryDisabled: process.env.TELEMETRY_DISABLED === '1',
    githubClientId: process.env.GITHUB_CLIENT_ID,
    githubClientSecret: process.env.GITHUB_CLIENT_SECRET,
    googleClientId: process.env.GOOGLE_CLIENT_ID,
    googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    termsUrl: process.env.TERMS_URL,
    privacyUrl: process.env.PRIVACY_URL,
    publicImprintUrl: process.env.PUBLIC_IMPRINT_URL,
    publicPrivacyUrl: process.env.PUBLIC_PRIVACY_URL,
    emailVerificationDisabled: process.env.EMAIL_VERIFICATION_DISABLED === '1',
    passwordResetDisabled: process.env.PASSWORD_RESET_DISABLED === '1',
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/forms/',
        permanent: false,
      },
    ];
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.resolve.alias['react'] = path.resolve('./node_modules/react');
    // Important: return the modified config
    return config;
  },
};

module.exports = nextConfig;
