// Back to Top Scripts

// Get the button:
let top_tap = document.getElementById("top-Btn");

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Menu-click
const menu = document.querySelector(".menu-bar");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
  } else {
    menu.classList.add("showMenu");
  }

  if (filter_nav.classList.contains("show-filter-nav")) {
    filter_nav.classList.remove("show-filter-nav");
  }

  if (achieve_nav.classList.contains("show-achieve-nav")) {
    achieve_nav.classList.remove("show-achieve-nav");
  }

  if (search_bar.classList.contains("show-searchbar")) {
    search_bar.classList.remove("show-searchbar");
  }

  if (account_button.classList.contains("show-account-panel")) {
    account_button.classList.remove("show-account-panel");
  }

  if (account_button.classList.contains("show-account-panel")) {
    account_button.classList.remove("show-account-panel");
    account_icon.classList.remove("account-click");
  }

  if (blog_button.classList.contains("show-blog-panel")) {
    blog_button.classList.remove("show-blog-panel");
    blog_text.classList.remove("blog-text-color-change");
  }

  if (products_button.classList.contains("show-products-panel")) {
    products_button.classList.remove("show-products-panel");
    products_text.classList.remove("products-text-color-change");
  }

  if (payment_button.classList.contains("show-payment-panel")) {
    payment_button.classList.remove("show-payment-panel");
    payment_text.classList.remove("payment-text-color-change");
  }
  
  if (support_button.classList.contains("show-support-panel")) {
    support_button.classList.remove("show-support-panel");
    support_text.classList.remove("support-text-color-change");
  }
}

// Searchbar-click
const search_bar = document.querySelector(".search-bar");

function toggleSearch() {
  if (search_bar.classList.contains("show-searchbar")) {
    search_bar.classList.remove("show-searchbar");
  } else {
    search_bar.classList.add("show-searchbar");
  }

  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
  }

  if (account_button.classList.contains("show-account-panel")) {
    account_button.classList.remove("show-account-panel");
    account_icon.classList.remove("account-click");
  }

  if (blog_button.classList.contains("show-blog-panel")) {
    blog_button.classList.remove("show-blog-panel");
    blog_text.classList.remove("blog-text-color-change");
  }

  if (products_button.classList.contains("show-products-panel")) {
    products_button.classList.remove("show-products-panel");
    products_text.classList.remove("products-text-color-change");
  }

  if (payment_button.classList.contains("show-payment-panel")) {
    payment_button.classList.remove("show-payment-panel");
    payment_text.classList.remove("payment-text-color-change");
  }
  
  if (support_button.classList.contains("show-support-panel")) {
    support_button.classList.remove("show-support-panel");
    support_text.classList.remove("support-text-color-change");
  }
}

// Account-click
const account_button = document.querySelector(".your-account");
const account_icon = document.querySelector(".account");

function toggleAccountPanel() {
  if (account_button.classList.contains("show-account-panel")) {
    account_button.classList.remove("show-account-panel");
    account_icon.classList.remove("account-click");
  } else {
    account_button.classList.add("show-account-panel");
    account_icon.classList.add("account-click");
  }

  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
  }

  if (search_bar.classList.contains("show-searchbar")) {
    search_bar.classList.remove("show-searchbar");
  }

  if (blog_button.classList.contains("show-blog-panel")) {
    blog_button.classList.remove("show-blog-panel");
    blog_text.classList.remove("blog-text-color-change");
  }

  if (products_button.classList.contains("show-products-panel")) {
    products_button.classList.remove("show-products-panel");
    products_text.classList.remove("products-text-color-change");
  }

  if (payment_button.classList.contains("show-payment-panel")) {
    payment_button.classList.remove("show-payment-panel");
    payment_text.classList.remove("payment-text-color-change");
  }
  
  if (support_button.classList.contains("show-support-panel")) {
    support_button.classList.remove("show-support-panel");
    support_text.classList.remove("support-text-color-change");
  }
}

// Blog-click
const blog_button = document.querySelector(".blog-panel");
const blog_text = document.querySelector(".blog-title-text");

function toogleBlogPanel() {
  if (blog_button.classList.contains("show-blog-panel")) {
    blog_button.classList.remove("show-blog-panel");
    blog_text.classList.remove("blog-text-color-change");
  } else {
    blog_button.classList.add("show-blog-panel");
    blog_text.classList.add("blog-text-color-change");
  }

  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
  }

  if (search_bar.classList.contains("show-searchbar")) {
    search_bar.classList.remove("show-searchbar");
  }

  if (account_button.classList.contains("show-account-panel")) {
    account_button.classList.remove("show-account-panel");
    account_icon.classList.remove("account-click");
  }

  if (products_button.classList.contains("show-products-panel")) {
    products_button.classList.remove("show-products-panel");
    products_text.classList.remove("products-text-color-change");
  }

  if (payment_button.classList.contains("show-payment-panel")) {
    payment_button.classList.remove("show-payment-panel");
    payment_text.classList.remove("payment-text-color-change");
  }
  
  if (support_button.classList.contains("show-support-panel")) {
    support_button.classList.remove("show-support-panel");
    support_text.classList.remove("support-text-color-change");
  }
}

  // Blog-click About-Us Expand
  const blog_aboutus_text = document.querySelector(".aboutus-expand-menu");
  const blog_aboutus_rotate = document.querySelector(".aboutus-expand-button");

  function toogleBlogAboutUsPanel() {
    if (blog_aboutus_text.classList.contains("show-aboutus-expand-menu")) {
      blog_aboutus_text.classList.remove("show-aboutus-expand-menu");
      blog_aboutus_rotate.classList.remove("rotate-aboutus-expand-button");
    } else {
      blog_aboutus_text.classList.add("show-aboutus-expand-menu");
      blog_aboutus_rotate.classList.add("rotate-aboutus-expand-button");
    }
  }

  // Blog-click News Expand
  const blog_News_text = document.querySelector(".news-expand-menu");
  const blog_News_rotate = document.querySelector(".news-expand-button");

  function toogleBlogNewsPanel() {
    if (blog_News_text.classList.contains("show-news-expand-menu")) {
      blog_News_text.classList.remove("show-news-expand-menu");
      blog_News_rotate.classList.remove("rotate-news-expand-button");
    } else {
      blog_News_text.classList.add("show-news-expand-menu");
      blog_News_rotate.classList.add("rotate-news-expand-button");
    }
  }

// Products-click
const products_button = document.querySelector(".products-panel");
const products_text = document.querySelector(".products-title-text");

function toogleProductsPanel() {
  if (products_button.classList.contains("show-products-panel")) {
    products_button.classList.remove("show-products-panel");
    products_text.classList.remove("products-text-color-change");
  } else {
    products_button.classList.add("show-products-panel");
    products_text.classList.add("products-text-color-change");
  }

  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
  }

  if (search_bar.classList.contains("show-searchbar")) {
    search_bar.classList.remove("show-searchbar");
  }

  if (account_button.classList.contains("show-account-panel")) {
    account_button.classList.remove("show-account-panel");
    account_icon.classList.remove("account-click");
  }

  if (blog_button.classList.contains("show-blog-panel")) {
    blog_button.classList.remove("show-blog-panel");
    blog_text.classList.remove("blog-text-color-change");
  }

  if (payment_button.classList.contains("show-payment-panel")) {
    payment_button.classList.remove("show-payment-panel");
    payment_text.classList.remove("payment-text-color-change");
  }
  
  if (support_button.classList.contains("show-support-panel")) {
    support_button.classList.remove("show-support-panel");
    support_text.classList.remove("support-text-color-change");
  }
}

// Support-click
const support_button = document.querySelector(".support-panel");
const support_text = document.querySelector(".support-title-text");

function toogleSupportPanel() {
  if (support_button.classList.contains("show-support-panel")) {
    support_button.classList.remove("show-support-panel");
    support_text.classList.remove("support-text-color-change");
  } else {
    support_button.classList.add("show-support-panel");
    support_text.classList.add("support-text-color-change");
  }

  if (products_button.classList.contains("show-products-panel")) {
    products_button.classList.remove("show-products-panel");
    products_text.classList.remove("products-text-color-change");
  }

  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
  }

  if (search_bar.classList.contains("show-searchbar")) {
    search_bar.classList.remove("show-searchbar");
  }

  if (account_button.classList.contains("show-account-panel")) {
    account_button.classList.remove("show-account-panel");
    account_icon.classList.remove("account-click");
  }

  if (blog_button.classList.contains("show-blog-panel")) {
    blog_button.classList.remove("show-blog-panel");
    blog_text.classList.remove("blog-text-color-change");
  }

  if (payment_button.classList.contains("show-payment-panel")) {
    payment_button.classList.remove("show-payment-panel");
    payment_text.classList.remove("payment-text-color-change");
  }
}

  // Support-click Legal News
  const legal_text = document.querySelector(".legal-expand-menu");
  const legal_rotate = document.querySelector(".legal-expand-button");

  function tooglelegalNewsPanel() {
    if (legal_text.classList.contains("show-legal-expand-menu")) {
      legal_text.classList.remove("show-legal-expand-menu");
      legal_rotate.classList.remove("rotate-legal-expand-button");
    } else {
      legal_text.classList.add("show-legal-expand-menu");
      legal_rotate.classList.add("rotate-legal-expand-button");
    }
  }

  // Support-click Customer Care
  const cc_text = document.querySelector(".cc-expand-menu");
  const cc_rotate = document.querySelector(".cc-expand-button");

  function toogleCCPanel() {
    if (cc_text.classList.contains("show-cc-expand-menu")) {
      cc_text.classList.remove("show-cc-expand-menu");
      cc_rotate.classList.remove("rotate-cc-expand-button");
    } else {
      cc_text.classList.add("show-cc-expand-menu");
      cc_rotate.classList.add("rotate-cc-expand-button");
    }
  }

// Payment-click
const payment_button = document.querySelector(".payment-panel");
const payment_text = document.querySelector(".payment-title-text");

function tooglePaymentPanel() {
  if (payment_button.classList.contains("show-payment-panel")) {
    payment_button.classList.remove("show-payment-panel");
    payment_text.classList.remove("payment-text-color-change");
  } else {
    payment_button.classList.add("show-payment-panel");
    payment_text.classList.add("payment-text-color-change");
  }

  if (products_button.classList.contains("show-products-panel")) {
    products_button.classList.remove("show-products-panel");
    products_text.classList.remove("products-text-color-change");
  }

  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
  }

  if (search_bar.classList.contains("show-searchbar")) {
    search_bar.classList.remove("show-searchbar");
  }

  if (account_button.classList.contains("show-account-panel")) {
    account_button.classList.remove("show-account-panel");
    account_icon.classList.remove("account-click");
  }

  if (blog_button.classList.contains("show-blog-panel")) {
    blog_button.classList.remove("show-blog-panel");
    blog_text.classList.remove("blog-text-color-change");
  }

  if (support_button.classList.contains("show-support-panel")) {
    support_button.classList.remove("show-support-panel");
    support_text.classList.remove("support-text-color-change");
  }
}

