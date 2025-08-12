# Netlify CMS Authentication Setup Guide

## 🔐 Complete Authentication Configuration

This guide provides step-by-step instructions for setting up comprehensive authentication for your Netlify CMS, including GitHub login, Google login, and password reset functionality.

## 📋 Prerequisites

1. **Netlify Account**: Ensure your site is deployed on Netlify
2. **GitHub Repository**: Your code should be in a GitHub repository
3. **Domain Access**: Admin access to your Netlify site settings

## 🚀 Step 1: Enable Netlify Identity

### In Netlify Dashboard:

1. **Navigate to your site** in the Netlify dashboard
2. **Go to Identity tab** in the site settings
3. **Click "Enable Identity"** to activate the service
4. **Configure Identity settings**:
   - **Registration**: Set to "Invite only" for security
   - **External providers**: Enable GitHub and Google
   - **Email templates**: Customize as needed

### Configure Registration Settings:
```
Registration preferences: Invite only
Email confirmation: Required
```

## 🔑 Step 2: Set Up External Authentication Providers

### GitHub OAuth Setup:

1. **Go to GitHub** → Settings → Developer settings → OAuth Apps
2. **Create a new OAuth App** with these settings:
   - **Application name**: `Bharatvan CMS`
   - **Homepage URL**: `https://your-site-name.netlify.app`
   - **Authorization callback URL**: `https://your-site-name.netlify.app/.netlify/identity/callback`
3. **Copy the Client ID and Client Secret**
4. **In Netlify Identity settings**:
   - Enable GitHub provider
   - Add your GitHub Client ID and Client Secret

### Google OAuth Setup:

1. **Go to Google Cloud Console** → APIs & Services → Credentials
2. **Create OAuth 2.0 Client ID** with these settings:
   - **Application type**: Web application
   - **Name**: `Bharatvan CMS`
   - **Authorized JavaScript origins**: `https://your-site-name.netlify.app`
   - **Authorized redirect URIs**: `https://your-site-name.netlify.app/.netlify/identity/callback`
3. **Copy the Client ID and Client Secret**
4. **In Netlify Identity settings**:
   - Enable Google provider
   - Add your Google Client ID and Client Secret

## ⚙️ Step 3: Configure Git Gateway

### Enable Git Gateway:

1. **In Netlify Identity settings**
2. **Scroll to Git Gateway section**
3. **Click "Enable Git Gateway"**
4. **Select your GitHub repository**
5. **Set branch to "main" or your default branch**

### Repository Permissions:
Ensure the Netlify app has access to your GitHub repository with these permissions:
- **Read access**: Repository contents
- **Write access**: Repository contents (for content updates)
- **Admin access**: Repository settings (for webhook management)

## 👥 Step 4: Invite Users

### Add CMS Users:

1. **In Netlify Identity tab**
2. **Click "Invite users"**
3. **Enter email addresses** of content managers
4. **Send invitations**

### User Roles (Optional):
You can set up custom roles for different access levels:
- **Admin**: Full CMS access
- **Editor**: Content editing only
- **Contributor**: Limited content access

## 🔧 Step 5: Test Authentication

### Local Testing:

1. **Start development server**: `npm run dev`
2. **Navigate to**: `http://localhost:5174/admin/`
3. **Test local backend** (should work without authentication)

### Production Testing:

1. **Deploy your site** to Netlify
2. **Navigate to**: `https://your-site-name.netlify.app/admin/`
3. **Test authentication flow**:
   - Click "Login with Netlify Identity"
   - Try GitHub login
   - Try Google login
   - Test password reset functionality

## 🔄 Password Reset Functionality

### Automatic Setup:
The password reset functionality is automatically enabled with Netlify Identity:

1. **Users can click "Forgot Password"** on the login screen
2. **Email with reset link** is sent automatically
3. **Users follow the link** to reset their password
4. **New password is set** and they can log in

### Custom Email Templates:
You can customize the password reset email in Netlify Identity settings:
1. Go to **Identity** → **Emails**
2. Customize the **Password recovery** template
3. Add your branding and messaging

## 🛡️ Security Best Practices

### Recommended Settings:

1. **Enable email confirmation** for new users
2. **Set registration to "Invite only"**
3. **Use strong password requirements**
4. **Enable two-factor authentication** (if available)
5. **Regularly review user access**

### Content Security Policy:
The CSP headers are configured in `netlify.toml` to allow:
- Netlify Identity scripts and styles
- CMS functionality
- External authentication providers

## 🔍 Troubleshooting

### Common Issues:

#### "Authentication failed" error:
- **Check**: Netlify Identity is enabled
- **Verify**: Git Gateway is configured
- **Ensure**: User has been invited

#### "Cannot connect to Git Gateway":
- **Check**: Repository permissions
- **Verify**: Branch name is correct
- **Ensure**: Netlify app has GitHub access

#### OAuth provider errors:
- **Check**: Client ID and Secret are correct
- **Verify**: Callback URLs match exactly
- **Ensure**: OAuth app is active

### Debug Steps:

1. **Check browser console** for JavaScript errors
2. **Verify network requests** in browser dev tools
3. **Check Netlify function logs** for backend errors
4. **Test with different browsers** and incognito mode

## 📞 Support

For additional help:
- **Netlify Documentation**: https://docs.netlify.com/visitor-access/identity/
- **Decap CMS Documentation**: https://decapcms.org/docs/authentication-backends/
- **GitHub OAuth Documentation**: https://docs.github.com/en/developers/apps/building-oauth-apps
- **Google OAuth Documentation**: https://developers.google.com/identity/protocols/oauth2

## ✅ Verification Checklist

- [ ] Netlify Identity enabled
- [ ] GitHub OAuth configured
- [ ] Google OAuth configured
- [ ] Git Gateway enabled
- [ ] Users invited
- [ ] Local testing successful
- [ ] Production testing successful
- [ ] Password reset tested
- [ ] Security settings configured
- [ ] Documentation updated

## 🎯 Next Steps

After completing authentication setup:
1. **Train content managers** on CMS usage
2. **Set up content workflows** and approval processes
3. **Configure backup strategies** for content
4. **Monitor usage** and user feedback
5. **Regular security reviews** and updates
