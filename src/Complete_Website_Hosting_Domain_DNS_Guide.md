# Complete Beginner's Guide to Websites, Domains, DNS and Hosting

## Introduction

अगर आपने कभी सोचा है कि Google, Amazon या किसी भी वेबसाइट को इंटरनेट पर कैसे चलाया जाता है, Domain क्या होता है, Hosting क्या होती है, DNS कैसे काम करता है, और एक वेबसाइट को इंटरनेट पर लाइव कैसे किया जाता है, तो यह गाइड आपके लिए है।

यह गाइड बिल्कुल Beginner Level से शुरू होकर पूरे Website Flow को समझाती है।

---

# 1. Website क्या होती है?

Website वास्तव में कुछ files का collection होती है।

उदाहरण:

```text
index.html
style.css
app.js
images/
```

ये सभी files आपके computer में होती हैं।

जब कोई user आपकी website खोलता है तो browser इन files को download करके webpage दिखाता है।

---

# 2. Hosting क्या होती है?

Hosting का मतलब है इंटरनेट पर एक Server (Computer) पर अपनी website की files रखना।

Server 24x7 चालू रहता है ताकि कोई भी व्यक्ति दुनिया के किसी भी कोने से आपकी website खोल सके।

## Hosting Flow

```text
Your Computer
      |
      | Upload Files
      v
Hosting Server
      |
      | Internet
      v
Visitors
```

---

# 3. Server क्या होता है?

Server भी एक Computer ही होता है।

लेकिन:

* हमेशा चालू रहता है
* High-speed Internet से connected होता है
* Websites को serve करता है
* हजारों या लाखों users को handle कर सकता है

---

# 4. Domain क्या होता है?

Domain आपकी website का नाम होता है।

उदाहरण:

```text
google.com
amazon.in
github.com
openai.com
```

Domain user-friendly नाम है जिसे लोग याद रख सकते हैं।

---

# 5. IP Address क्या होता है?

असल में हर server का एक IP Address होता है।

उदाहरण:

```text
142.250.193.78
```

लेकिन इसे याद रखना कठिन होता है।

इसलिए Domain बनाया गया।

उदाहरण:

```text
google.com
```

---

# 6. DNS क्या होता है?

DNS का पूरा नाम है:

```text
Domain Name System
```

DNS इंटरनेट की Phonebook की तरह काम करता है।

यह Domain Name को IP Address में बदलता है।

उदाहरण:

```text
google.com
       ↓
142.250.xxx.xxx
```

---

# 7. DNS क्यों जरूरी है?

अगर DNS न हो तो हमें वेबसाइट खोलने के लिए IP Address याद रखने पड़ेंगे।

उदाहरण:

```text
76.76.21.21
```

DNS इस समस्या को हल करता है।

---

# 8. Domain कैसे काम करता है?

जब कोई browser में लिखता है:

```text
deepakrauniyar.in
```

तो:

1. Browser DNS से पूछता है।
2. DNS IP Address देता है।
3. Browser Server से connect करता है।
4. Server Website files भेजता है।
5. Browser Website दिखा देता है।

---

# 9. TLD क्या होता है?

TLD = Top Level Domain

Domain के अंत में आने वाला भाग।

उदाहरण:

```text
.com
.in
.org
.net
.edu
.gov
```

---

# 10. .com क्या होता है?

Originally Commercial Websites के लिए बनाया गया था।

आज सबसे ज्यादा उपयोग होने वाला Domain Extension है।

उदाहरण:

```text
google.com
amazon.com
```

---

# 11. .in क्या होता है?

India Country Code Domain

भारत से संबंधित Websites के लिए।

उदाहरण:

```text
example.in
```

---

# 12. .org क्या होता है?

Organizations और NGOs के लिए।

उदाहरण:

```text
wikipedia.org
```

---

# 13. .edu क्या होता है?

Educational Institutions के लिए।

उदाहरण:

```text
university.edu
```

---

# 14. .gov क्या होता है?

Government Websites के लिए।

उदाहरण:

```text
india.gov.in
```

---

# 15. .net क्या होता है?

पहले Networking Companies के लिए था।

आज कोई भी इस्तेमाल कर सकता है।

---

# 16. Modern TLDs

आजकल नए Domains भी उपलब्ध हैं।

```text
.tech
.dev
.app
.store
.shop
.online
.xyz
```

---

# 17. Domain कौन बेचता है?

Domains सीधे कोई भी कंपनी नहीं बेच सकती।

Global Level पर Domain System को ICANN manage करती है।

Authorized Registrars Domains बेचते हैं।

---

# 18. Popular Domain Registrars

* GoDaddy
* Namecheap
* Hostinger
* Porkbun
* Cloudflare Registrar

---

# 19. Domain खरीदना क्यों पड़ता है?

कारण:

* Domain Unique होता है
* DNS Infrastructure Maintain करना पड़ता है
* Registry Database Maintain करनी पड़ती है

इसलिए Annual Fee लगती है।

---

# 20. Domain की कीमत

Approximate:

| Domain | Price Per Year |
| ------ | -------------- |
| .com   | ₹800 - ₹1500   |
| .in    | ₹400 - ₹1000   |
| .xyz   | ₹100 - ₹1000   |
| .tech  | ₹1000 - ₹4000  |

---

# 21. सबसे सस्ते Domain Providers

1. Porkbun
2. Namecheap
3. Hostinger

---

# 22. Domain और Hosting में अंतर

Domain:

```text
घर का पता
```

Hosting:

```text
घर
```

दोनों अलग-अलग चीजें हैं।

---

# 23. क्या Domain Provider Hosting भी देता है?

हाँ।

उदाहरण:

* Hostinger
* GoDaddy

दोनों Domain और Hosting दोनों देते हैं।

---

# 24. क्या Domain और Hosting अलग-अलग हो सकते हैं?

हाँ।

उदाहरण:

```text
Domain:
Namecheap

Hosting:
Vercel
```

---

# 25. Free Hosting Platforms

Portfolio Projects के लिए:

* Vercel
* Netlify
* GitHub Pages

---

# 26. क्या Domain के बिना Website चल सकती है?

हाँ।

उदाहरण:

```text
myproject.vercel.app
```

या

```text
username.github.io
```

---

# 27. क्या Hosting के बिना Domain चल सकता है?

नहीं।

Domain अकेले Website नहीं दिखा सकता।

---

# 28. DNS Record क्या होता है?

DNS Record बताता है कि Domain किस Server पर जाना चाहिए।

उदाहरण:

```text
Type: A

Host: @

Value:
76.76.21.21
```

---

# 29. CNAME Record क्या होता है?

उदाहरण:

```text
Type: CNAME

Host: www

Value:
cname.vercel-dns.com
```

यह Domain को दूसरे Domain पर Point करता है।

---

# 30. Complete Internet → Domain → DNS → Hosting → Browser Flow

मान लो आपकी Website:

```text
deepakrauniyar.in
```

और Hosting:

```text
Vercel
```

---

## Step 1

User Browser में लिखता है:

```text
https://deepakrauniyar.in
```

---

## Step 2

Browser DNS से पूछता है:

```text
deepakrauniyar.in कहाँ है?
```

---

## Step 3

DNS Record Check होता है।

```text
deepakrauniyar.in
      ↓
76.76.21.21
```

---

## Step 4

DNS Browser को IP Address देता है।

```text
76.76.21.21
```

---

## Step 5

Browser Hosting Server से Connect करता है।

```http
GET /
```

---

## Step 6

Server Website Files भेजता है।

```text
index.html
style.css
app.js
logo.png
```

---

## Step 7

Browser Website Render करता है।

```text
Portfolio
Projects
About
Contact
```

---

# Complete Visual Diagram

```text
┌─────────────────────┐
│ User Browser        │
│ Chrome / Edge       │
└──────────┬──────────┘
           │
           │ Types Domain
           ▼

┌─────────────────────┐
│ DNS Resolver        │
└──────────┬──────────┘
           │
           │ Domain Lookup
           ▼

┌─────────────────────┐
│ DNS Records         │
└──────────┬──────────┘
           │
           │ Returns IP
           ▼

┌─────────────────────┐
│ Hosting Server      │
│ Vercel / Netlify    │
└──────────┬──────────┘
           │
           │ Sends Files
           ▼

┌─────────────────────┐
│ Browser Render      │
└─────────────────────┘
```

---

# Real World Analogy

```text
Domain = House Address

DNS = Address Book

Hosting = House

Website Files = Furniture

Browser = Visitor

Internet = Roads
```

---

# Best Setup for Students and Developers

Recommended Stack:

```text
GitHub
+
Vercel Hosting
+
Custom Domain (.in)
```

Example:

```text
deepakrauniyar.in
```

Benefits:

* Professional
* Cheap
* Fast
* Recruiter Friendly
* Easy Deployment

```
```
