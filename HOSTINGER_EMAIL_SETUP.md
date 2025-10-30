# Hostinger Email Setup Guide

## Step 1: Create Environment File

Create a `.env.local` file in your project root with the following content:

```env
HOSTINGER_EMAIL=your-email@yourdomain.com
HOSTINGER_EMAIL_PASSWORD=your-email-password
```

**Important:** Replace with your actual Hostinger email credentials.

## Step 2: Get Your Hostinger Email Credentials

1. **Log in to Hostinger**: Go to https://www.hostinger.com and log in to your account.

2. **Access Email Accounts**:
   - Click on "hPanel" or your hosting control panel
   - Navigate to "Email" section
   - Create or select your email account (e.g., info@yourdomain.com)

3. **Note Your Credentials**:
   - Email address: e.g., info@techsazone.com
   - Email password: (the password you set when creating the email account)
   - SMTP Host: smtp.hostinger.com
   - SMTP Port: 465 (SSL) or 587 (TLS)

## Step 3: Update .env.local File

Replace the placeholder values in your `.env.local` file:

```env
HOSTINGER_EMAIL=info@techsazone.com
HOSTINGER_EMAIL_PASSWORD=YourSecurePassword123!
```

## Step 4: Test the Contact Form

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Navigate to: http://localhost:3000/contact

3. Fill out and submit the contact form

4. Check your Hostinger email inbox for the submission

## Step 5: Deploy to Production

When deploying to production (Vercel, Netlify, etc.):

1. Add the environment variables in your hosting platform's dashboard
2. Go to your project settings
3. Find "Environment Variables" section
4. Add:
   - `HOSTINGER_EMAIL`
   - `HOSTINGER_EMAIL_PASSWORD`
5. Redeploy your application

## Troubleshooting

### Issue: "Invalid login"
- Make sure you're using the correct email and password
- Verify the email account exists in Hostinger
- Try resetting the email password

### Issue: "Connection timeout"
- Check that port 465 is not blocked by firewall
- Verify SMTP settings in Hostinger account
- Try using port 587 with TLS instead

### Issue: "Can't send email"
- Make sure `.env.local` is in your `.gitignore` file
- Restart your development server after updating `.env.local`
- Check server logs for detailed error messages

## Email Configuration in pages/api/contact.js

The current setup uses:
- **SMTP Host**: smtp.hostinger.com
- **Port**: 465
- **Security**: SSL/TLS

If you need to use alternative ports, update `pages/api/contact.js`:

For port 587 with TLS:
```javascript
port: 587,
secure: false,
```

## Security Notes

⚠️ **Important:**
- Never commit `.env.local` to version control
- Use strong, unique passwords for your email account
- Regularly update your email password
- Consider using app-specific passwords for better security

## Next Steps

After setting up:
1. Test the contact form locally
2. Verify emails are received in your Hostinger mailbox
3. Configure email forwarding if you want to receive copies in another inbox
4. Set up email filters for better organization

## Support

If you encounter issues:
- Check Hostinger's SMTP documentation
- Verify your email account is active
- Test SMTP settings using an email client first
- Contact Hostinger support if problems persist

