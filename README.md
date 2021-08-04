## 📍 Getting Started

### Pages

- Home
- About
- Contact
- Appointment
- Ratings & Reviews
- Locations > Location Category > Location Details
- Products & Services
- Products > Product Category > Product Details
- Services > Service Category > Service Details
- People > Person
- FAQs > FAQ

### Posts

- News > News Post
- Events > Event Post
- Offers > Offer Post
- Jobs > Job Post

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
    - og:image
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
    - Colors
    - Terms
    - Graphics
- Web Aspect Ratios
    - 1:1
    - 1.91:1
    - 2:1
    - 4:3
    - 16:9
    - 3:2
    - 2:3

### Data Sources

- Google Sheets
- Google My Business
- Ghost Blog

# Routes

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
| News Post  | `/news/{post.id}/`  |
| Events  | `/events/`  |
| Event Post  | `/events/{post.id}/`  |
| Offers  | `/offers/`  |
| Offer Post  | `/offers/{post.id}/`  |
| Jobs  | `/jobs/`  |
| Job Post  | `/jobs/{post.id}`  |
