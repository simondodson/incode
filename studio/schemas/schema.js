// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Import user defined schema types
import config from './config.js';
import social from './social.js';
import author from './author.js';
import landing from './landing.js';
import blog from './blog.js';
import page from './page.js';
import post from './post.js';
import section from './section.js';
import section_content from './section_content.js';
import section_cta from './section_cta.js';
import section_faq from './section_faq.js';
import section_features from './section_features.js';
import section_hero from './section_hero.js';
import section_posts from './section_posts.js';
import section_pricing from './section_pricing.js';
import section_reviews from './section_reviews.js';
import section_contact from './section_contact.js';
import action from './action.js';
import site_menus from './site_menus.js';
import site_menu_item from './site_menu_item.js';
import page_menus from './page_menus.js';
import page_menu_item from './page_menu_item.js';
import header from './header.js';
import footer from './footer.js';

import section_faqof from './section_faqof.js';
import section_featuresof from './section_featuresof.js';
import section_pricingof from './section_pricingof.js';
import section_reviewof from './section_reviewof.js';
import social_of from './social_of.js';
import menu_header from './menu.js';
import footer_links from './footer_links.js'



// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    config,
    social,
    author,
    landing,
    header,
    footer,
    blog,
    page,
    post,
    section,
    section_content,
    section_cta,
    section_faq,
    section_features,
    section_hero,
    section_posts,
    section_pricing,
    section_reviews,
    section_contact,
    action,
    site_menus,
    site_menu_item,
    page_menus,
    page_menu_item,
    section_featuresof,
    section_faqof,
    section_pricingof,
    section_reviewof,
    social_of,
    menu_header,
    footer_links
    ])
})
