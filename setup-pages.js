/**
 * Intelligent Home — Page Setup Script
 * 
 * This script creates all required pages in your Shopify store.
 * 
 * INSTRUCTIONS:
 * 1. Go to Shopify Admin → Settings → Apps and sales channels → Develop apps
 * 2. Create an app with "write_content" scope (Pages)
 * 3. Copy the Admin API access token
 * 4. Run: node setup-pages.js YOUR_ACCESS_TOKEN
 * 
 * OR simply create these pages manually in Shopify Admin → Online Store → Pages:
 * 
 * Page Title        | Template           | Handle
 * ------------------|--------------------|-------------
 * About Us          | page.about         | about
 * FAQ               | page.faq           | faq
 * Contact           | page.contact       | contact
 * Track Order       | page.track-order   | track-order
 * 
 * Then go to Online Store → Navigation and verify the menus link to these pages.
 */

const STORE = 'budvgh-12.myshopify.com';
const API_VERSION = '2024-10';

const pages = [
  {
    title: 'About Us',
    handle: 'about',
    template_suffix: 'about',
    body_html: '<p>Content managed by theme section. Customize in Theme Editor.</p>'
  },
  {
    title: 'FAQ',
    handle: 'faq',
    template_suffix: 'faq',
    body_html: '<p>Content managed by theme section. Customize in Theme Editor.</p>'
  },
  {
    title: 'Contact',
    handle: 'contact',
    template_suffix: 'contact',
    body_html: '<p>Content managed by theme section. Customize in Theme Editor.</p>'
  },
  {
    title: 'Track Order',
    handle: 'track-order',
    template_suffix: 'track-order',
    body_html: '<p>Content managed by theme section. Customize in Theme Editor.</p>'
  }
];

async function createPages(token) {
  for (const page of pages) {
    console.log(`Creating page: ${page.title}...`);
    
    const res = await fetch(
      `https://${STORE}/admin/api/${API_VERSION}/pages.json`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Shopify-Access-Token': token
        },
        body: JSON.stringify({ page })
      }
    );

    const data = await res.json();
    
    if (res.ok) {
      console.log(`  ✓ Created: /pages/${data.page.handle}`);
    } else {
      console.log(`  ✗ Error: ${JSON.stringify(data.errors || data)}`);
    }
  }

  console.log('\nDone! Now go to your store and verify the pages exist.');
  console.log('Then customize each page in the Theme Editor to fill in content.');
}

const token = process.argv[2];
if (!token) {
  console.log('');
  console.log('═══════════════════════════════════════════════════════');
  console.log('  MANUAL SETUP (Recommended — no API token needed)');
  console.log('═══════════════════════════════════════════════════════');
  console.log('');
  console.log('Go to Shopify Admin → Online Store → Pages');
  console.log('Create these pages:');
  console.log('');
  console.log('  1. Title: "About Us"     → Template: page.about');
  console.log('  2. Title: "FAQ"          → Template: page.faq');
  console.log('  3. Title: "Contact"      → Template: page.contact');
  console.log('  4. Title: "Track Order"  → Template: page.track-order');
  console.log('');
  console.log('The template dropdown is at the bottom-right of the page editor.');
  console.log('');
  console.log('═══════════════════════════════════════════════════════');
  console.log('');
  console.log('Or run with API token: node setup-pages.js YOUR_TOKEN');
  process.exit(0);
}

createPages(token);
