# Google Analytics 4 Testing Guide

## ✅ Files Updated

1. **src/lib/analytics.ts** - Complete rewrite with comprehensive debugging
2. **index.tsx** - Analytics initialization before React render
3. **.env.local** - Contains `VITE_GA_ID=G-C493RSS5ZE`

---

## 🔍 How to Verify GA4 is Working

### Step 1: Check Browser Console

After restarting your dev server (`npm run dev`), open your browser to http://localhost:3000 and check the console.

You should see these logs **in blue**:

```
[GA4] 🚀 Attempting to initialize GA4...
[GA4] Environment check: { VITE_GA_ID: "G-C493RSS5ZE", ... }
[GA4] ✅ Valid measurement ID found: G-C493RSS5ZE
[GA4] ✅ dataLayer and gtag initialized
[GA4] 📥 Loading GA4 script from googletagmanager.com...
[GA4] ✅ Script tag injected into <head>
[GA4] ⚙️ Configuring GA4 with measurement ID: G-C493RSS5ZE
[GA4] ✅ GA4 config sent
[GA4] ✅ Test event "ga4_initialized" sent
[GA4] 🎉 INITIALIZATION COMPLETE
[GA4] 👀 Check Realtime report: https://analytics.google.com/analytics/web/#/p471471820/realtime/overview
```

If you see **red errors** instead, read the error message—it will tell you exactly what's wrong.

---

### Step 2: Verify Script Loaded in Network Tab

1. Open **DevTools** → **Network** tab
2. Filter by **JS** or search for `gtag`
3. Look for a request to:
   ```
   https://www.googletagmanager.com/gtag/js?id=G-C493RSS5ZE
   ```
4. It should show **Status: 200 OK**

---

### Step 3: Inspect Injected Script Tag

1. Open **DevTools** → **Elements** tab
2. Expand `<head>`
3. Look for this script tag:
   ```html
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-C493RSS5ZE"></script>
   ```

---

### Step 4: Check GA4 Realtime Dashboard

1. Open Google Analytics: https://analytics.google.com/
2. Navigate to **Realtime** → **Overview**
3. You should see:
   - **1 active user** (you!)
   - Recent events: `ga4_initialized`, `page_view`

**Direct Link:**
https://analytics.google.com/analytics/web/#/p471471820/realtime/overview

---

### Step 5: Test Custom Event Tracking

Perform a symptom search on your app (e.g., "joint pain").

Check the console for:
```
[GA4] 📊 Event tracked: { event: "symptom_search", params: { symptom: "joint pain", has_profile: false } }
[GA4] 📊 Event tracked: { event: "search_completed", params: { symptom: "joint pain" } }
```

Then check the **Realtime** dashboard in GA4. You should see these custom events appear.

---

## 🐛 Troubleshooting

### Problem: No console logs appear

**Solution:**
- Make sure you **restarted the dev server** after adding `VITE_GA_ID` to `.env.local`
- Run: `npm run dev` (or restart your current dev server)

---

### Problem: "VITE_GA_ID not found" error

**Solution:**
1. Verify `.env.local` contains:
   ```
   VITE_GA_ID=G-C493RSS5ZE
   ```
2. Make sure the file is named `.env.local` (NOT `.env` or `env.local`)
3. Make sure it's in the **root directory** (same level as `package.json`)
4. **Restart dev server** completely

---

### Problem: Script loads but no events in Realtime

**Possible causes:**
- **Ad blocker** blocking Google Analytics (disable it for localhost)
- **Privacy extensions** (uBlock Origin, Privacy Badger, etc.)
- **Tracking Protection** in Firefox
- **Wrong measurement ID** in GA4 dashboard

**Solution:**
- Try in **Incognito/Private browsing** mode
- Disable browser extensions
- Verify you're checking the correct GA4 property (ID: G-C493RSS5ZE)

---

### Problem: Events appear in console but not in GA4

**This is normal!** GA4 Realtime data can have a **10-30 second delay**.

Wait 30 seconds, then refresh the Realtime dashboard.

---

## 📊 Events Currently Being Tracked

| Event Name          | Trigger                          | Parameters                          |
|---------------------|----------------------------------|-------------------------------------|
| `ga4_initialized`   | App loads                        | `event_category`, `event_label`     |
| `page_view`         | Page loads (automatic)           | `page_path`, `page_title`           |
| `symptom_search`    | User searches for symptom        | `symptom`, `has_profile`            |
| `search_completed`  | Search returns results           | `symptom`                           |
| `search_error`      | Search fails                     | `symptom`, `error`                  |
| `share_clicked`     | User clicks Share button         | `symptom`                           |
| `feedback_submitted`| User submits feedback            | `symptom`, `feedback`               |

---

## 🔧 Debug Mode

Debug mode is **enabled** by default. You'll see detailed logs for every GA4 action.

To disable debug logs in production, edit `src/lib/analytics.ts`:

```typescript
const DEBUG = false; // Change to false
```

---

## ✅ Quick Verification Checklist

- [ ] Dev server restarted after adding `VITE_GA_ID`
- [ ] Console shows blue `[GA4]` initialization logs
- [ ] Network tab shows `gtag/js` script loaded (Status 200)
- [ ] `<head>` contains script tag with your measurement ID
- [ ] Ad blocker disabled on localhost
- [ ] Realtime dashboard shows 1 active user
- [ ] Custom events appear when performing actions

---

## 📞 Still Having Issues?

1. Take a screenshot of your browser console
2. Check the **full console output** (including any red errors)
3. Verify you're looking at the correct GA4 property (G-C493RSS5ZE)
4. Make sure your GA4 property is properly configured in Google Analytics

---

**Your GA4 is now ready!** 🎉

Every user action will be tracked and visible in your Realtime dashboard within 30 seconds.
