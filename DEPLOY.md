# Deployment Guide - Sirocco Restaurant Website

This guide outlines the steps to deploy the Sirocco Restaurant Website to Vercel.

## Prerequisites

- A [Vercel](https://vercel.com) account.
- A [Supabase](https://supabase.com) project with the database schema set up.
- The project code pushed to a Git repository (GitHub, GitLab, or Bitbucket).

## Deployment Steps

1.  **Push to Git**: Ensure your project code is committed and pushed to your remote repository.
2.  **Import to Vercel**:
    - Log in to Vercel.
    - Click "Add New..." -> "Project".
    - Select your Git repository.
3.  **Configure Environment Variables**:
    - In the "Configure Project" screen, expand the "Environment Variables" section.
    - Add the following variables (copy them from your local `.env.local` or Supabase dashboard):
        - `NEXT_PUBLIC_SUPABASE_URL`: Your Supabase Project URL.
        - `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Your Supabase Anon Key.
4.  **Deploy**:
    - Click "Deploy".
    - Vercel will build and deploy your application.

## Post-Deployment

- **Verify Functionality**: Visit the deployed URL and check:
    - Homepage loads correctly.
    - Menu items are displayed.
    - Authentication (Login/Signup) works.
    - Reservations form submits successfully.
- **Supabase Auth Redirects**:
    - Go to your Supabase Dashboard -> Authentication -> URL Configuration.
    - Add your Vercel production URL (e.g., `https://your-project.vercel.app`) to the "Site URL" and "Redirect URLs".

## Troubleshooting

- **Build Errors**: Check the Vercel logs for any build-time errors. Ensure all dependencies are in `package.json`.
- **Runtime Errors**: If pages crash, check the browser console or Vercel function logs.
- **Missing Data**: Verify that your Supabase environment variables are correct and that the database has data (you may need to run SQL scripts if you haven't already).
