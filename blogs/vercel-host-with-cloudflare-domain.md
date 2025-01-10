---
title: "How to use Vercel as host for my website with a domain from Cloudflare?"
date: "2025-01-10"
category: "Tech"
description: "I have a website hosted by Vercel while my domain registrar was Cloudflare. The question now is how to setup Cloudflare to use them together."
---

I have a website hosted by Vercel while my domain registrar was Cloudflare. The question now is how to setup Cloudflare to use them together.

Follow the next steps to use Vercel as host for your website while having Cloudflare as your domain registrar.

1. Navigate to the DNS records of your domain in Cloudflare.
2. Remove the A records that have `www` as their name.
3. Add an A record with `@` as Name, `76.76.21.21` as IPv4 address and keep the proxy status enabled.
4. Add a CNAME record with `www` as Name, `cname.vercel-dns.com` as Target and keep the proxy status enabled.
5. Navigate to the SSL/TLS settings of the domain.
6. Configure the settings and set the encryption mode to `Full`.

You may have to wait a few minutes and then the changes should be working.

---

Sources:

- [https://vercel.com/docs/integrations/external-platforms/cloudflare](https://vercel.com/docs/integrations/external-platforms/cloudflare)
- [https://developers.cloudflare.com/dns/manage-dns-records/troubleshooting/records-with-same-name/](https://developers.cloudflare.com/dns/manage-dns-records/troubleshooting/records-with-same-name/)
- [https://gist.github.com/nivethan-me/a56f18b3ffbad04bf5f35085972ceb4d](https://gist.github.com/nivethan-me/a56f18b3ffbad04bf5f35085972ceb4d)
