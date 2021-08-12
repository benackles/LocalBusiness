## 📍 Getting Started

### 🌐 Site

#### 😀 Header

- logo
- navigation
- local actions
- headline

#### 🦶 Footer

- sitemap
- social
- credit

### 📄 Pages

#### 🏠 Home

- hero
- welcome
- benefits
- products & services
- get hours & directions
- read & write reviews
- request appointment
- write message

#### 💼 About

*🏠 > About*

- business.name
- business.category
- business.description
- business.founders
- business.owners
- business.dateEstablished

#### 💬 Contact

*🏠 > Contact*

**Write a message**

1. choose location
    - local (physica location)
    - online
3. select product & service
4. message
5. preferred method of contact
    - phone (mobile)
    - email
6. start conversation

#### 🕒 Appointment

*🏠 > Appointment*

**Request an appointment**

1. choose location
    - local (physical location)
    - online
3. select product & service
4. message
    - preferred date & time (local timezone)

6. Contact
    - name
    - preferred method of contact
        - phone (mobile)
        - email
7. request appointment

#### ⭐ Ratings & Reviews

*🏠 > Ratings & Reviews*

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

[Structured Data Type for Review Snippets](https://developers.google.com/search/docs/data-types/review-snippet)

#### 📍 Locations

*🏠 > Locations > Location Category > Location Details*

- location.name
- location.category
- location.description
- location.address
- location.openingHoursSpecification
- location.dateOpened
- location.order (primary, secondary, tertiary)

[Structured Data Type for Local Businesses](https://developers.google.com/search/docs/data-types/local-business)

#### 📦 Products

*🏠 > Products & Services > Product Category > Product Details*

- product.title
- product.category
- product.description
- product.review
- product.aggregateRating
- product.offers
- product.brand
- product.image
- product.id
- product.gtin
- product.mpn
- product.isbn
- product.sku
- product.price
- product.availability

[Structured Data Type for Products](https://developers.google.com/search/docs/data-types/product)

#### 🛎 Services

*🏠 > Products & Services > Service Category > Service Details*

- service.title
- service.category
- service.description
- service.id
- service.price (No Price, Free, Fixed, From)

#### 👩‍💻 People

*🏠 > People > Person*

- person.name
- person.position
- person.description

#### ❓ FAQs

*🏠 > FAQs > FAQ*

- faq.relatedTo: products, services & locations
- faq.mainEntity
- faq.acceptedAnswer
- faq.name 
- faq.text

[Structured Data Type for FAQ](https://developers.google.com/search/docs/data-types/faqpage)

### 📌 Posts

#### 📰 News Post

*🏠 > Posts > News > News Post*

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

[Structured Data Type for Articles](https://developers.google.com/search/docs/data-types/article)

#### 📅 Event Post

*🏠 > Posts > Events > Event Post*

- name
- address
- url
- startDate 
- description
- endDate 
- eventAttendanceMode
- eventStatus
- image

[Structured Data Type for Events](https://developers.google.com/search/docs/data-types/event)

#### 📣 Offer Post

*🏠 > Posts > Offers > Offer Post*

- offers
- offers.availability
- offers.price 
- offers.priceCurrency
- offers.validFrom
- offers.url

#### 💻 Job Post

*🏠 > Posts > Jobs > Job Post*

- post.title
- post.position
- post.description
- post.datePosted
- post.hiringOrganization
- post.jobLocation
- post.validThrough
- post.employmentType

[Structured Data Type for Job Postings](https://developers.google.com/search/docs/data-types/job-posting)

### Features

#### Metadata

- [Title Tags & Meta Descriptions](https://developers.google.com/search/docs/advanced/appearance/good-titles-snippets)
    - Title Tags (less than 70 characters)
    - Meta Descriptions (up to 156 characters)

#### [Open Graph Tags](https://ogp.me/)

- og:locale
- og:site_name
- og:description
- og:title
- og:type
- og:url
- og:image (1.91:1)
  
#### Structured Data Types (JSON-LD)

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
  
#### Google Lighthouse Scores
- 🟢 Performance
- 🟢 Accessibility
- 🟢 Best Practices
- 🟢 SEO

#### [Product Feed Specification](https://support.google.com/merchants/answer/7052112)
 
- product.id
- product.sku
- product.title
- product.description
- product.image_link
- product.availability
- product.availability_date
- product.price
- product.brand
- product.gtin
- product.mpn
- product.condition
- product.adult
- product.age_group
- product.color
- product.gender
- product.material 
- product.pattern
- product.size
- product.item_group_id
- product.shipping
- product.tax

#### Web Brand Identity
- Logos
    - **Square Logos** (1:1)
    - **Rectangular Logos** (2:1)
    - **Landscape Logos** (4:1)
- Colors
    - **Main Color**: the background color, typically white
    - **Accent Color**: the color mostly used for buttons and other call to actions
    - **Color Palette** (*up to 5*): a color scheme for your brand
- Terms
    - Tagline
    - Slogans
    - Benefits
- Marketing Graphics
    - Square Images (1:1)
    - Landscape Images (1.91:1)
    - Photographic Images (4:3)

#### Web Aspect Ratios

| Name        | Aspect Ratio           | Minimum Dimensions  | Usage  |
| ------------- |:-------------:| -----:| -----:|
| Square      | 1:1 | 2000px by 2000px | Google Merchant Center Square Logos |
| Marketing Image      | 1.91:1     |   1200px by 627px  | og:image & Google Responsive Display Ads |
| Rectangular | 2:1      |    2000px by 1000px | Google Merchant Center Rectangular Logos |
| Photographic | 4:3      |    1200px by 900px | Google My Business Post Photos |
| High Definition | 16:9     |    1440px by 810px | HD Videos |
| Film | 3:2     |    1080px by 720px | Google My Business Cover Photos |
| Portrait | 2:3     |    1000px by 1500px | Pinterest Pins |
| Header | 3:1     |    1500px by 500px | Twitter Headers |
| Landscape | 4:1     |    1200px by 300px | Google Display Ads Landscape Images |

### Data Sources

- Google Sheets
- Airtable
- Google My Business
- Facebook Business Manager
- Ghost Blog

# 🗺️ Routes

| Name  | Path | Route |
| ------------- | ------------- | ------------- |
| Home  | `/src/pages/index.js` | `/`  |
| About  | `/src/pages/about.js` | `/about/`  |
| Contact  | `/src/pages/contact.js` | `/contact/`  |
| Appointment  | `/src/pages/appointment.js` | `/appointment/`  |
| Ratings & Reviews  | `/src/pages/ratings-reviews.js` | `/ratings-reviews/`  |
| Locations  | `/src/pages/{location.base}.js` | `/locations/`  |
| Location Category  | `/src/pages/{location.base}/{location.category.js` | `/locations/{location.category}/`  |
| Location Details  | `/src/pages/{location.base}/{location.category}/{location.slug}.js` | `/locations/{location.category}/{location.id}/`  |
| Products & Services  | `/src/pages/products-services.js` | `/products-services/`  |
| Products  | `/src/pages/{product.base}.js` | `/products/`  |
| Product Category  | `/src/pages/{product.base}/{product.category}.js` | `/products/{product.category}/`  |
| Product Details  | `/src/pages/{product.base}/{product.category}/{product.id}.js` | `/products/{product.category}/{product.id}`  |
| Services  | `/src/pages/{service.base}.js` | `/services/`  |
| Service Category  | `/src/pages/{service.base}/{service.category}.js` | `/services/{service.category}/`  |
| Service Details  | `/src/pages/{service.base}/{service.category}/{service.id}.js` | `/services/{service.category}/{service.id}`  |
| People  | `/src/pages/{person.base}.js` | `/people/`  |
| Person  | `/src/pages/{person.base}/{person.name}.js` | `/people/{person.name}/`  |
| FAQs  | `/src/pages/{faq.base}.js` | `/faqs/`  |
| FAQ  | `/src/pages/{faq.base}/{faq.slug}.js` | `/faqs/{faq.slug}/`  |
| News  | `/src/pages/posts/{news.base}.js` | `/news/`  |
| News Post  | `/src/pages/posts/{news.base}/{post.slug}.js` | `/news/{post.slug}/`  |
| Events  | `/src/pages/posts/{event.base}.js` | `/events/`  |
| Event Post  | `/src/pages/posts/{event.base}/{post.id}.js` | `/events/{post.slug}/`  |
| Offers  | `/src/pages/posts/{offer.base}.js` | `/offers/`  |
| Offer Post  | `/src/pages/posts/{event.base}/{post.id}.js` | `/offers/{post.slug}/`  |
| Jobs  | `/src/pages/posts/{job.base}.js` | `/jobs/`  |
| Job Post  | `/src/pages/posts/{job.base}/{post.id}.js` | `/jobs/{post.slug}`  |
