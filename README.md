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

#### Home

`/src/pages/index.js`

#### About

`/src/pages/about.js`

- business.name
- business.category
- business.description
- business.founders
- business.owners
- business.establishedDate

#### Contact

`/src/pages/contact.js`

#### Appointment

`/src/pages/appointment.js`

#### Ratings & Reviews

`/src/pages/ratings-reviews.js`

- review.author
- review.itemReviewed (LocalBusiness, Product/Service)
- review.itemReviewed.name 
- review.reviewRating
- review.reviewRating.ratingValue (1-5)
- review.datePublished
- review.reviewRating.bestRating
- review.reviewRating.worstRating
- aggregateRating.itemReviewed
- aggregateRating.itemReviewed.name
- aggregateRating.ratingCount
- aggregateRating.reviewCount
- aggregateRating.ratingValue
- aggregateRating.bestRating
- aggregateRating.worstRating

#### Locations

`/src/pages/{location.base}/{location.category}/{location.slug}.js`

- location.name
- location.category
- location.description
- location.address
- location.openingHoursSpecification
- location.openedDate

#### Products

`/src/pages/{product.base}/{product.category}/{product.id}.js`

- product.title
- product.category
- product.description
- product.review
- product.aggregateRating
- product.offers
- product.brand
- product.image
- product.id (gtin | gtin8 | gtin13 | gtin14 | mpn | isbn)
- product.sku
- product.price
- product.availability

#### Services

`/src/pages/{service.base}/{service.category}/{serice.id}.js`

- service.title
- service.category
- service.description
- service.id
- service.price (No Price, Free, Fixed, From)

#### People

`/src/pages/{person.base}/{person.name}.js`

- person.name
- person.position
- person.description

#### FAQs

`/src/pages/faqs.js`

- faq.relatedTo: products, services & locations
- faq.mainEntity
- faq.acceptedAnswer
- faq.name 
- faq.text


### Posts

- News
    - News Post
- Events
    - Event Post
- Offers
    - Offer Post
- Jobs
    - Job Post

#### News Post

`/src/pages/posts/news/{post.slug}.js`

- article.author
- article.author.name
- article.datePublished
- article.headline (up to 110 characters)
- article.image
- article.publisher
- article.publisher.logo 
- article.publisher.name
- article.dateModified 
- article.mainEntityOfPage

#### Event Post

`/src/pages/posts/events/{post.id}.js`

- name
- address
- url
- startDate 
- description
- endDate 
- eventAttendanceMode
- eventStatus
- image

#### Offer Post

`/src/pages/posts/offers/{post.id}.js`

- offers
- offers.availability
- offers.price 
- offers.priceCurrency
- offers.validFrom
- offers.url

#### Job Post

`/src/pages/posts/jobs/{post.id}.js`

- post.title
- post.position
- post.description
- post.datePosted
- post.hiringOrganization
- post.jobLocation
- post.validThrough
- post.employmentType

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
