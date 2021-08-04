## 📍 Getting Started

### Pages

- Home
- About
- Contact
- Appointment
- Ratings & Reviews
- Locations
    - Location Category
        - Location Details
- Products & Services
- Products
    - Product Category
        - Product Details
- Services
    - Service Category
        - Service Details
- People
    - Person
- FAQs
    - FAQ

### Posts

- News
    - News Post
- Events
    - Event Post
- Offers
    - Offer Post
- Jobs
    - Job Post

### Features

- Metadata
    - [title tag & meta description](https://developers.google.com/search/docs/advanced/appearance/good-titles-snippets)
- [Open Graph Tags](https://ogp.me/)
    - og:locale
    - og:site_name
    - og:description
    - og:title
    - og:type
    - og:url
    - og:image (1.91:1)
- Structured Data Types (JSON-LD)
    - [Local Business](https://developers.google.com/search/docs/data-types/local-business)
    - [Logo](https://developers.google.com/search/docs/data-types/logo)
    - [Breadcrumb](https://developers.google.com/search/docs/data-types/breadcrumb)
    - [Sitelinks Search Box](https://developers.google.com/search/docs/data-types/sitelinks-searchbox)
    - [Product](https://developers.google.com/search/docs/data-types/product)
    - [Review Snippet](https://developers.google.com/search/docs/data-types/review-snippet)
    - [Article](https://developers.google.com/search/docs/data-types/article)
    - [Event](https://developers.google.com/search/docs/data-types/event)
    - [FAQ](https://developers.google.com/search/docs/data-types/faqpage)
    - [Job Posting](https://developers.google.com/search/docs/data-types/job-posting)
- Google Lighthouse Scores
    - 🟢 Performance
    - 🟢 Accessibility
    - 🟢 Best Practices
    - 🟢 SEO
- Web Brand Identity
    - Logos
        - Square Logos (1:1)
        - Rectangular Logos (2:1)
        - Landscape Logos (4:1)
    - Colors
        - Main Color: the background color, typically white
        - Accent Color: the color mostly used for buttons and other call to actions
        - Color Palette (up to 5): a color scheme for your brand
    - Terms
        - Tagline
        - Slogans
        - Benefits
    - Marketing Graphics
        - Square Images (1:1)
        - Landscape Images (1.91:1)
        - Photographic Images (4:3)
- Web Aspect Ratios
    - 1:1
    - 1.91:1
    - 2:1
    - 4:3
    - 16:9
    - 3:2
    - 2:3
    - 3:1
    - 4:1

### Data Sources

- Google Sheets
- Google My Business
- Ghost Blog

# 🗺️ Routes

| Name  | Path |
| ------------- | ------------- |
| Home  | `/`  |
| About  | `/about/`  |
| Contact  | `/contact/`  |
| Appointment  | `/appointment/`  |
| Ratings & Reviews  | `/ratings-reviews/`  |
| Locations  | `/locations/`  |
| Location Category  | `/locations/{location.category}/`  |
| Location Details  | `/locations/{location.category}/{location.id}/`  |
| Products & Services  | `/products-services/`  |
| Products  | `/products/`  |
| Product Category  | `/products/{product.category}/`  |
| Product Details  | `/products/{product.category}/{product.id}`  |
| Services  | `/services/`  |
| Service Category  | `/services/{service.category}/`  |
| Service Details  | `/services/{service.category}/{service.id}`  |
| People  | `/people/`  |
| Person  | `/people/{person.name}/`  |
| FAQs  | `/faqs/`  |
| FAQ  | `/faqs/{faq.slug}/`  |
| News  | `/news/`  |
| News Post  | `/news/{post.slug}/`  |
| Events  | `/events/`  |
| Event Post  | `/events/{post.slug}/`  |
| Offers  | `/offers/`  |
| Offer Post  | `/offers/{post.slug}/`  |
| Jobs  | `/jobs/`  |
| Job Post  | `/jobs/{post.slug}`  |
